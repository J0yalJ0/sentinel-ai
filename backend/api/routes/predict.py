from fastapi import APIRouter

from backend.services.prediction_service import (
    generate_sample_prediction
)

router = APIRouter()

@router.get("/predict")
def predict():

    prediction = generate_sample_prediction()

    return {
        "prediction": prediction
    }