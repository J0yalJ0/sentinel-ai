import joblib
from pathlib import Path

from sklearn.ensemble import IsolationForest
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score

# =========================
# LOAD TRAINING DATA
# =========================

print("Loading training data...")

X_train = joblib.load("data/processed/X_train.pkl")
X_test = joblib.load("data/processed/X_test.pkl")

y_train = joblib.load("data/processed/y_train.pkl")
y_test = joblib.load("data/processed/y_test.pkl")

print("Training data loaded successfully.")

# =========================
# TRAIN ISOLATION FOREST
# =========================

print("\nTraining Isolation Forest model...")

model = IsolationForest(
    n_estimators=100,
    contamination=0.4,
    random_state=42,
    n_jobs=-1
)

model.fit(X_train)

print("Model training completed.")

# =========================
# PREDICTIONS
# =========================

print("\nGenerating predictions...")

predictions = model.predict(X_test)

# Convert predictions:
# IsolationForest:
# -1 = anomaly
#  1 = normal

predictions = [1 if p == -1 else 0 for p in predictions]

# =========================
# EVALUATION
# =========================

print("\nEvaluating model...\n")

accuracy = accuracy_score(y_test, predictions)

print(f"Accuracy: {accuracy:.4f}")

print("\nClassification Report:\n")

print(classification_report(y_test, predictions))

print("\nConfusion Matrix:\n")

print(confusion_matrix(y_test, predictions))

# =========================
# SAVE MODEL
# =========================

MODEL_PATH = Path(
    "ml/saved_models/isolation_forest.pkl"
)

joblib.dump(model, MODEL_PATH)

print("\nIsolation Forest model saved successfully.")