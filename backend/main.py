from fastapi import FastAPI

from backend.api.routes import predict
from backend.api.routes import health

app = FastAPI(
    title="SentinelAI",
    description="AI Cybersecurity Threat Detection Platform",
    version="1.0.0"
)

# =========================
# ROUTES
# =========================

app.include_router(
    health.router
)

app.include_router(
    predict.router
)

# =========================
# ROOT ENDPOINT
# =========================

@app.get("/")

def root():

    return {
        "message": "SentinelAI Backend Running"
    }