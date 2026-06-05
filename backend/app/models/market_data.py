from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime

from datetime import datetime
from app.database.db import Base


class MarketData(Base):
    __tablename__ = "market_data"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    coin_name = Column(
        String,
        nullable=False
    )

    symbol = Column(
        String,
        nullable=False
    )

    price = Column(
        Float,
        nullable=False
    )

    volume = Column(
        Float,
        nullable=False
    )

    timestamp = Column(
        DateTime,
        default=datetime.utcnow
    )

