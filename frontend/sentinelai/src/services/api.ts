export interface PredictionData {
  xgboost_prediction: number;
  xgboost_probability: number;
  anomaly_detected: number;
}

export interface PredictionResponse {
  prediction: PredictionData;
}

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchPrediction = async (): Promise<PredictionResponse> => {

  const response = await fetch(
    `${BASE_URL}/predict`
  );

  if (!response.ok) {

    throw new Error(
      'Failed to fetch prediction'
    );
  }

  return await response.json();
};