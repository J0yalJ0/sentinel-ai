import pandas as pd
import numpy as np
from pathlib import Path

# =========================
# FILE PATHS
# =========================

RAW_DATA_PATH = Path(
    "data/raw/Friday-WorkingHours-Afternoon-DDos.pcap_ISCX.csv"
)

PROCESSED_DATA_PATH = Path(
    "data/processed/cleaned_ddos_dataset.csv"
)

# =========================
# LOAD DATASET
# =========================

print("Loading dataset...")

df = pd.read_csv(RAW_DATA_PATH)

print(f"Dataset Shape: {df.shape}")

# =========================
# CLEAN COLUMN NAMES
# =========================

df.columns = df.columns.str.strip()

# =========================
# REPLACE INFINITE VALUES
# =========================

print("Replacing infinite values...")

df.replace([np.inf, -np.inf], np.nan, inplace=True)

# =========================
# REMOVE NULL VALUES
# =========================

print("Removing null values...")

df.dropna(inplace=True)

print(f"Dataset Shape After Cleaning: {df.shape}")

# =========================
# LABEL DISTRIBUTION
# =========================

print("\nLabel Distribution:")

print(df["Label"].value_counts())

# =========================
# ENCODE LABELS
# =========================

print("\nEncoding labels...")

df["Label"] = df["Label"].apply(
    lambda x: 0 if x == "BENIGN" else 1
)

print(df["Label"].value_counts())

# =========================
# SAVE CLEANED DATASET
# =========================

print("\nSaving cleaned dataset...")

PROCESSED_DATA_PATH.parent.mkdir(
    parents=True,
    exist_ok=True
)

df.to_csv(PROCESSED_DATA_PATH, index=False)

print("\nDataset preprocessing completed successfully.")