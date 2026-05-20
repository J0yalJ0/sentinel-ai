from fastapi import APIRouter

router = APIRouter()

@router.get("/predict")
def predict():

    return {
        "prediction": {
            "xgboost_prediction": 0,
            "xgboost_probability": 0.87,
            "anomaly_detected": 0
        }
    }