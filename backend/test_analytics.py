from app.database.db import SessionLocal

from app.services.analytics_service import (
    get_analytics
)

db = SessionLocal()

result = get_analytics(db)

print(result)