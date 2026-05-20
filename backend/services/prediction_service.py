import pandas as pd

from ml.inference.predict import predict_threat

DATA_PATH = (
    "data/processed/cleaned_ddos_dataset.csv"
)

df = pd.read_csv(DATA_PATH)

X = df.drop("Label", axis=1)

def generate_sample_prediction():

    sample = X.iloc[0].tolist()

    result = predict_threat(sample)

    return result