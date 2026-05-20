import pandas as pd
from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

# =========================
# FILE PATHS
# =========================

DATA_PATH = Path(
    "data/processed/cleaned_ddos_dataset.csv"
)

SCALER_PATH = Path(
    "ml/saved_models/scaler.pkl"
)

# =========================
# LOAD DATASET
# =========================

print("Loading cleaned dataset...")

df = pd.read_csv(DATA_PATH)

print(f"Dataset Shape: {df.shape}")

# =========================
# SPLIT FEATURES + LABELS
# =========================

X = df.drop("Label", axis=1)

y = df["Label"]

print(f"Feature Shape: {X.shape}")
print(f"Label Shape: {y.shape}")

# =========================
# TRAIN TEST SPLIT
# =========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print("\nTrain/Test Split Completed")

print(f"X_train: {X_train.shape}")
print(f"X_test: {X_test.shape}")

# =========================
# FEATURE SCALING
# =========================

print("\nScaling features...")

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)

X_test_scaled = scaler.transform(X_test)

# =========================
# SAVE SCALER
# =========================

SCALER_PATH.parent.mkdir(
    parents=True,
    exist_ok=True
)

joblib.dump(scaler, SCALER_PATH)

print("\nScaler saved successfully.")

# =========================
# SAVE SPLIT DATA
# =========================

joblib.dump(X_train_scaled, "data/processed/X_train.pkl")
joblib.dump(X_test_scaled, "data/processed/X_test.pkl")

joblib.dump(y_train, "data/processed/y_train.pkl")
joblib.dump(y_test, "data/processed/y_test.pkl")

print("\nProcessed training data saved successfully.")