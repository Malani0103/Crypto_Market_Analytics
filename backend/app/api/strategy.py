from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db

from app.services.strategy_service import (
    run_strategy,
    get_strategy_results
)

router = APIRouter(
    prefix="/strategy",
    tags=["Strategy"]
)


@router.post("/run")
def execute_strategy(
    db: Session = Depends(get_db)
):
    return run_strategy(db)


@router.get("/results")
def strategy_results(
    db: Session = Depends(get_db)
):
    return get_strategy_results(db)