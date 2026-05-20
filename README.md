# SentinelAI 🛡️
## AI-Powered Cybersecurity Threat Detection Platform

SentinelAI is a full-stack AI-powered cybersecurity threat detection platform designed to detect malicious network traffic using Machine Learning and visualize threats through a futuristic SOC-style dashboard.

The system combines:
- AI-based intrusion detection
- Real-time anomaly detection
- FastAPI backend inference APIs
- Animated React cybersecurity dashboard
- Live threat analytics and monitoring

============================================================
🚀 FEATURES
============================================================

- Real-time threat prediction
- AI-powered intrusion detection system
- XGBoost attack classification
- Isolation Forest anomaly detection
- FastAPI inference backend
- Animated SOC dashboard
- Threat probability scoring
- Cybersecurity analytics
- Real-time dashboard polling
- Enterprise-style architecture

============================================================
🧠 MACHINE LEARNING MODELS
============================================================

1. XGBoost Classifier
Used for:
- malicious traffic classification
- attack probability prediction

2. Isolation Forest
Used for:
- anomaly detection
- suspicious traffic behavior analysis

============================================================
📊 DATASET
============================================================

This project uses the CIC-IDS2017 dataset.

The dataset contains:
- DDoS attacks
- Brute force attacks
- Port scans
- Infiltration attacks
- Benign network traffic

Dataset Source:
https://www.unb.ca/cic/datasets/ids-2017.html

============================================================
🏗️ SYSTEM ARCHITECTURE
============================================================

React Frontend Dashboard
            ↓
FastAPI Backend API
            ↓
ML Inference Engine
            ↓
XGBoost + Isolation Forest
            ↓
CIC-IDS2017 Dataset

============================================================
🖥️ FRONTEND TECH STACK
============================================================

- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Recharts
- Lucide React Icons

============================================================
⚙️ BACKEND TECH STACK
============================================================

- FastAPI
- Uvicorn
- REST APIs
- Python

============================================================
🤖 MACHINE LEARNING STACK
============================================================

- XGBoost
- Isolation Forest
- Scikit-learn
- Pandas
- NumPy
- Joblib



============================================================
🔄 MACHINE LEARNING WORKFLOW
============================================================

1. Data Preprocessing
- removed null values
- handled infinite values
- encoded labels
- standardized features

2. Model Training
- trained XGBoost classifier
- trained Isolation Forest model

3. Model Evaluation
- accuracy measurement
- classification reports
- confusion matrix analysis

4. Inference Pipeline
- models loaded dynamically
- predictions served via FastAPI
- frontend consumes live API responses

============================================================
🌐 API ENDPOINT
============================================================

Predict Endpoint:

GET /predict

Example Response:

{
  "prediction": {
    "xgboost_prediction": 0,
    "xgboost_probability": 0.0001,
    "anomaly_detected": 0
  }
}

============================================================
🎨 FRONTEND DASHBOARD
============================================================

The React dashboard provides:
- live threat monitoring
- cyber analytics
- anomaly alerts
- attack probability visualization
- futuristic SOC UI
- animated cybersecurity experience

============================================================
📸 DASHBOARD PREVIEW
============================================================

Add screenshots inside:
docs/screenshots/

Example:
dashboard.png
analytics.png
threat-feed.png

============================================================
⚡ BACKEND SETUP
============================================================

1. Clone Repository

git clone https://github.com/J0yalJ0/sentinel-ai.git

cd sentinel-ai

------------------------------------------------------------

2. Create Virtual Environment

python -m venv venv

------------------------------------------------------------

3. Activate Environment

Windows:

.\venv\Scripts\activate

Linux/Mac:

source venv/bin/activate

------------------------------------------------------------

4. Install Dependencies

pip install -r requirements.txt

------------------------------------------------------------

5. Run Backend

uvicorn backend.main:app --reload

Backend URL:
http://127.0.0.1:8000

Swagger Docs:
http://127.0.0.1:8000/docs

============================================================
💻 FRONTEND SETUP
============================================================

1. Go To Frontend Folder

cd frontend

------------------------------------------------------------

2. Install Dependencies

npm install

------------------------------------------------------------

3. Run Frontend

npm run dev

Frontend URL:
http://localhost:5173

============================================================
📦 REQUIREMENTS.TXT
============================================================

fastapi
uvicorn
pandas
numpy
scikit-learn
xgboost
joblib
python-multipart

============================================================
🚀 FUTURE IMPROVEMENTS
============================================================

- Kafka streaming integration
- WebSocket real-time updates
- Docker deployment
- Cloud deployment
- Threat intelligence APIs
- SIEM integration
- MITRE ATT&CK mapping
- Deep learning threat detection
- Live packet capture
- Multi-agent AI security system

============================================================
📌 GITHUB TOPICS
============================================================

ai
machine-learning
cybersecurity
fastapi
react
xgboost
anomaly-detection
soc-dashboard
typescript
tailwindcss

============================================================
📄 LICENSE
============================================================

MIT License

Copyright (c) 2026 Joyal Jomon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

============================================================
👨‍💻 AUTHOR
============================================================

Joyal Jomon

MSc Data Science Student
AI & Machine Learning Enthusiast

GitHub:
https://github.com/J0yalJ0

============================================================
⭐ PROJECT HIGHLIGHTS
============================================================

This project demonstrates skills in:

- Artificial Intelligence
- Machine Learning
- Cybersecurity
- FastAPI Backend Development
- React Frontend Development
- Full-Stack Engineering
- Real-Time Systems
- Enterprise Application Architecture

============================================================
🛡️ SENTINELAI
============================================================

Intelligent Threat Detection for Modern Cyber Defense
