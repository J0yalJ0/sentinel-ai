import joblib
import numpy as np

# =========================
# LOAD MODELS
# =========================

xgb_model = joblib.load(
    "ml/saved_models/xgboost.pkl"
)

isolation_model = joblib.load(
    "ml/saved_models/isolation_forest.pkl"
)

scaler = joblib.load(
    "ml/saved_models/scaler.pkl"
)

print("Models loaded successfully.")

# =========================
# PREDICTION FUNCTION
# =========================

def predict_threat(data):

    data = np.array(data).reshape(1, -1)

    scaled_data = scaler.transform(data)

    # XGBoost Prediction
    xgb_prediction = xgb_model.predict(
        scaled_data
    )[0]

    xgb_probability = xgb_model.predict_proba(
        scaled_data
    )[0][1]

    # Isolation Forest Prediction
    iso_prediction = isolation_model.predict(
        scaled_data
    )[0]

    iso_prediction = (
        1 if iso_prediction == -1 else 0
    )

    result = {
        "xgboost_prediction": int(xgb_prediction),
        "xgboost_probability": float(
            xgb_probability
        ),
        "anomaly_detected": int(
            iso_prediction
        )
    }

    return result