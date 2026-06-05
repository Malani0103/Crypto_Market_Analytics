from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime

from datetime import datetime

from app.database.db import Base


class StrategyResult(Base):
    __tablename__ = "strategy_results"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    coin_name = Column(
        String,
        nullable=False
    )

    signal = Column(
        String,
        nullable=False
    )

    current_price = Column(
        Float,
        nullable=False
    )

    moving_average = Column(
        Float,
        nullable=False
    )

    timestamp = Column(
        DateTime,
        default=datetime.utcnow
    )