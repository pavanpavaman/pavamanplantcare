from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from PIL import Image
import io
import base64

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock disease data (replace with actual model predictions)
DISEASE_DATA = {
    "Tomato - Early Blight": {
        "description": "Early blight is a common fungal disease that affects tomato plants. It appears as dark spots with concentric rings on older leaves, eventually causing yellowing and leaf drop.",
        "treatment": "Remove affected leaves immediately. Apply fungicide spray every 7-14 days. Improve air circulation around plants. Water at soil level to avoid wetting leaves. Consider resistant varieties for future planting."
    },
    "Potato - Late Blight": {
        "description": "Late blight is a devastating disease that can quickly destroy potato crops. It appears as water-soaked lesions on leaves that turn brown and black, often with white fuzzy growth on leaf undersides.",
        "treatment": "Apply preventive fungicide before symptoms appear. Remove and destroy infected plants. Ensure good drainage and air circulation. Harvest tubers in dry weather and cure properly before storage."
    },
    "Apple - Apple Scab": {
        "description": "Apple scab is a fungal disease that causes dark, scabby lesions on leaves and fruit. Leaves may yellow and drop prematurely, and fruit can become cracked and deformed.",
        "treatment": "Rake and destroy fallen leaves in autumn. Apply dormant oil spray before bud break. Use fungicide sprays during wet periods in spring. Choose scab-resistant apple varieties."
    },
    "Corn - Northern Corn Leaf Blight": {
        "description": "Northern corn leaf blight appears as long, elliptical lesions on corn leaves. The lesions are grayish-green to tan in color and can significantly reduce yield if severe.",
        "treatment": "Plant resistant corn hybrids. Rotate crops to reduce inoculum. Apply foliar fungicides if conditions favor disease development. Remove crop residue after harvest."
    },
    "Grape - Black Rot": {
        "description": "Black rot causes circular brown spots on grape leaves and can destroy entire grape clusters. Infected berries shrivel into hard, black mummies.",
        "treatment": "Remove mummified berries and prune infected canes. Apply fungicide sprays from bud break through fruit set. Ensure good air circulation through proper pruning and training."
    },
    "Healthy Plant": {
        "description": "The plant appears to be healthy with no visible signs of disease. The leaves show good color and structure typical of a well-maintained plant.",
        "treatment": "Continue current care practices. Monitor regularly for any changes. Maintain proper watering, fertilization, and pest management. Ensure good air circulation and appropriate lighting."
    }
}

def preprocess_image(image):
    """
    Preprocess image for model prediction
    - Resize to (224, 224)
    - Normalize pixel values
    """
    # Resize image to 224x224 (standard input size for many CNN models)
    image = image.resize((224, 224))
    
    # Convert to RGB if not already
    if image.mode != 'RGB':
        image = image.convert('RGB')
    
    # Convert to numpy array and normalize
    img_array = np.array(image)
    img_array = img_array.astype('float32') / 255.0
    
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array

def load_model():
    """
    Load the pre-trained Keras model
    Replace this with actual model loading when model file is available
    """
    # TODO: Uncomment and modify when actual model is available
    # from tensorflow.keras.models import load_model
    # model = load_model('model/plant_disease_model.keras')
    # return model
    
    # Mock model for demonstration
    return None

def predict_disease(image_array, model=None):
    """
    Predict disease from preprocessed image
    Returns disease name and confidence score
    """
    if model is None:
        # Mock prediction for demonstration
        diseases = list(DISEASE_DATA.keys())
        predicted_disease = np.random.choice(diseases)
        confidence = np.random.uniform(0.75, 0.98)
        return predicted_disease, confidence
    
    # TODO: Uncomment when actual model is available
    # predictions = model.predict(image_array)
    # predicted_class_index = np.argmax(predictions[0])
    # confidence = float(predictions[0][predicted_class_index])
    # 
    # # Map class index to disease name (you'll need to define this mapping)
    # class_names = list(DISEASE_DATA.keys())
    # predicted_disease = class_names[predicted_class_index]
    # 
    # return predicted_disease, confidence

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Check if image file is present
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'No image file selected'}), 400
        
        # Read and process the image
        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes))
        
        # Preprocess image
        processed_image = preprocess_image(image)
        
        # Load model (mock for now)
        model = load_model()
        
        # Make prediction
        predicted_disease, confidence = predict_disease(processed_image, model)
        
        # Get disease information
        disease_info = DISEASE_DATA.get(predicted_disease, {
            "description": "Disease information not available.",
            "treatment": "Consult with a plant pathologist for proper diagnosis and treatment."
        })
        
        # Prepare response
        response = {
            'disease': predicted_disease,
            'confidence': float(confidence),
            'description': disease_info['description'],
            'treatment': disease_info['treatment']
        }
        
        return jsonify(response)
    
    except Exception as e:
        print(f"Error processing request: {str(e)}")
        return jsonify({'error': 'Failed to process image'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Plant Disease Detection API is running'})

if __name__ == '__main__':
    print("Starting Plant Disease Detection API...")
    print("API will be available at: http://localhost:5000")
    print("Endpoints:")
    print("  POST /predict - Upload image for disease detection")
    print("  GET /health - Health check")
    app.run(debug=True, host='0.0.0.0', port=5000)
