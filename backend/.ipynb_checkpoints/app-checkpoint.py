from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import os
import json
import google.generativeai as genai

# === Flask App Setup ===
app = Flask(__name__)
CORS(app)

# === Load Model and Class Labels ===
MODEL_PATH = os.path.join("model", "plant_disease_cnn_custom.h5")
model = load_model(MODEL_PATH)

with open(os.path.join("data", "class_names.json"), "r") as f:
    class_names = json.load(f)

# === Gemini API Setup ===
genai.configure(api_key="AIzaSyBupvmvDpajay4jPAkAqbgbjFqsR7ZsZJE")  # Replace with your Gemini API key
llm = genai.GenerativeModel("gemini-1.5-flash")

# === Gemini Prompt Functions ===
def get_description_prompt(label):
    return f"Give a short scientific description of the plant disease '{label}' in 3–4 lines. Use clean Markdown formatting."

def get_prevention_prompt(label):
    return f"Suggest 3–5 bullet-point preventive measures for the plant disease '{label}'. Use clear Markdown formatting."

def get_treatment_prompt(label):
    return f"Suggest 3–5 bullet-point treatment methods for the plant disease '{label}'. Use clear Markdown formatting."

# === Gemini Query Handler ===
def query_gemini(prompt):
    try:
        response = llm.generate_content(prompt)
        if not response.text.strip():
            return "⚠️ No valid response from Gemini."
        return response.text.strip()
    except Exception as e:
        print("Gemini LLM error:", e)
        return "⚠️ LLM failed to respond."

# === Health Check Endpoint ===
@app.route("/", methods=["GET"])
def health():
    return "✅ Pavaman PlantCare backend is running."

# === Prediction Endpoint ===
@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    try:
        file = request.files['file']
        image = Image.open(file).convert("RGB").resize((224, 224))
        image_array = np.expand_dims(np.array(image) / 255.0, axis=0)

        predictions = model.predict(image_array)[0]
        predicted_idx = int(np.argmax(predictions))
        confidence = float(np.max(predictions))
        label = class_names[str(predicted_idx)]

        print(f"[MODEL] Predicted: {label} ({confidence:.2f})")

        description = query_gemini(get_description_prompt(label))

        return jsonify({
            "disease": label,
            "confidence": round(confidence * 100, 2),
            "description": description,
            "treatment": ""  # to be fetched on button click
        })

    except Exception as e:
        print("Prediction Error:", e)
        return jsonify({"error": str(e)}), 500

# === On-Demand Prevention Endpoint ===
@app.route("/get-prevention", methods=["POST"])
def get_prevention():
    try:
        data = request.get_json()
        label = data.get("label")
        if not label:
            return jsonify({"error": "Missing disease label"}), 400

        prevention = query_gemini(get_prevention_prompt(label))
        return jsonify({"prevention": prevention})

    except Exception as e:
        print("LLM prevention error:", e)
        return jsonify({"prevention": "⚠️ Error fetching prevention info."})

# === On-Demand Treatment Endpoint ===
@app.route("/get-treatment", methods=["POST"])
def get_treatment():
    try:
        data = request.get_json()
        label = data.get("label")
        if not label:
            return jsonify({"error": "Missing disease label"}), 400

        treatment = query_gemini(get_treatment_prompt(label))
        return jsonify({"treatment": treatment})

    except Exception as e:
        print("LLM treatment error:", e)
        return jsonify({"treatment": "⚠️ Error fetching treatment."})

# === Run Flask Server ===
if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
