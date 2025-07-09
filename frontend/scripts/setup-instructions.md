# Plant Disease Detection App Setup Instructions

## Backend Setup (Flask API)

### 1. Create Virtual Environment
\`\`\`bash
python -m venv plant_disease_env
source plant_disease_env/bin/activate  # On Windows: plant_disease_env\Scripts\activate
\`\`\`

### 2. Install Dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 3. Run Flask Server
\`\`\`bash
python flask-backend.py
\`\`\`

The Flask API will be available at: http://localhost:5000

## Frontend Setup (Next.js)

### 1. Install Dependencies
The frontend is already set up in the v0 environment with all necessary packages.

### 2. Add Framer Motion
\`\`\`bash
npm install framer-motion
\`\`\`

### 3. Run Development Server
The Next.js app runs automatically in the v0 environment at: http://localhost:3000

## Model Integration

### When you have the actual model file:

1. Place `plant_disease_model.keras` in the `model/` directory
2. Update the `load_model()` function in `flask-backend.py`:
   ```python
   from tensorflow.keras.models import load_model
   model = load_model('model/plant_disease_model.keras')
   return model
   \`\`\`
3. Update the class names mapping in `predict_disease()` function to match your model's output classes

## API Endpoints

### POST /predict
- **Description**: Upload plant image for disease detection
- **Content-Type**: multipart/form-data
- **Parameters**: 
  - `image`: Image file (JPG, PNG, WebP)
- **Response**:
  \`\`\`json
  {
    "disease": "Tomato - Early Blight",
    "confidence": 0.92,
    "description": "Disease description...",
    "treatment": "Treatment recommendations..."
  }
  \`\`\`

### GET /health
- **Description**: Health check endpoint
- **Response**:
  \`\`\`json
  {
    "status": "healthy",
    "message": "Plant Disease Detection API is running"
  }
  \`\`\`

## Folder Structure
\`\`\`
plant_disease_app/
├── frontend/           # Next.js frontend (v0 environment)
├── scripts/           # Backend files
│   ├── flask-backend.py
│   ├── requirements.txt
│   └── setup-instructions.md
├── model/             # Model files (create this directory)
│   └── plant_disease_model.keras  # Your trained model
└── README.md
\`\`\`

## Testing the Integration

1. Start the Flask backend: `python flask-backend.py`
2. The Next.js frontend is already running in v0
3. Upload an image on the /detect page
4. The frontend will call the Flask API and display results

## Deployment Options

### Backend Deployment:
- **Heroku**: Easy deployment with git
- **AWS EC2**: More control over server configuration
- **Google Cloud Run**: Serverless container deployment
- **DigitalOcean App Platform**: Simple app deployment

### Frontend Deployment:
- **Vercel**: Seamless Next.js deployment
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment

## Notes

- The current implementation uses mock predictions for demonstration
- Replace the mock model with your actual trained Keras model
- Ensure CORS is properly configured for production
- Add proper error handling and logging for production use
- Consider adding rate limiting and authentication for production API
