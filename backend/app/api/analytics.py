from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.db import get_db
from app.services.analytics_service import get_analytics

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("/")
def analytics(
    db: Session = Depends(get_db)
):
    return get_analytics(db)