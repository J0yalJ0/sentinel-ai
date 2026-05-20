import joblib

from xgboost import XGBClassifier

from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix

# =========================
# LOAD DATA
# =========================

print("Loading training data...")

X_train = joblib.load("data/processed/X_train.pkl")
X_test = joblib.load("data/processed/X_test.pkl")

y_train = joblib.load("data/processed/y_train.pkl")
y_test = joblib.load("data/processed/y_test.pkl")

print("Data loaded successfully.")

# =========================
# TRAIN MODEL
# =========================

print("\nTraining XGBoost model...")

model = XGBClassifier(
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    random_state=42,
    eval_metric="logloss"
)

model.fit(X_train, y_train)

print("Model training completed.")

# =========================
# PREDICTIONS
# =========================

print("\nGenerating predictions...")

predictions = model.predict(X_test)

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

joblib.dump(
    model,
    "ml/saved_models/xgboost.pkl"
)

print("\nXGBoost model saved successfully.")