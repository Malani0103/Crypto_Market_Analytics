from fastapi import FastAPI

from app.api.market import (router as market_router)
from app.api.analytics import (router as analytics_router)
from app.api.strategy import (router as strategy_router)
from app.jobs.scheduler import (start_scheduler)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Crypto Market Analytics API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(market_router)
app.include_router(analytics_router)
app.include_router(strategy_router)


@app.on_event("startup")
def startup_event():

    start_scheduler()


@app.get("/")
def home():

    return {
        "message":
        "Crypto Market API Running"
    }