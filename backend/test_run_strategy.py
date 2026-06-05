from app.database.db import SessionLocal

from app.services.strategy_service import (
    run_strategy
)

db = SessionLocal()

result = run_strategy(db)

print(result[:5])