from app.database.db import SessionLocal

from app.services.market_service import (
    save_market_data
)

db = SessionLocal()

result = save_market_data(db)

print(result)