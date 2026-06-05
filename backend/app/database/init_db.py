from app.database.db import Base
from app.database.db import engine

from app.models.market_data import MarketData
from app.models.strategy_result import StrategyResult


def create_tables():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    create_tables()
    print("Database tables created successfully")