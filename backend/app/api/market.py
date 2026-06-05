from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.services.market_service import (
    get_all_market_data,
    save_market_data,
    get_market_by_symbol
)

router = APIRouter(
    prefix="/markets",
    tags=["Markets"]
)


@router.get("/")
def get_markets(
    db: Session = Depends(get_db)
):
    return get_all_market_data(db)


@router.post("/fetch")
def fetch_market_data(
    db: Session = Depends(get_db)
):
    return save_market_data(db)


@router.get("/{symbol}")
def get_symbol_data(
    symbol: str,
    db: Session = Depends(get_db)
):
    return get_market_by_symbol(
        db,
        symbol
    )