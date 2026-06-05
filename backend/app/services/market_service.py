from sqlalchemy.orm import Session

from app.models.market_data import MarketData
from app.services.coingecko_service import fetch_market_data


def save_market_data(db: Session):

    market_data = fetch_market_data()

    for coin in market_data:

        data = MarketData(
            coin_name=coin["name"],
            symbol=coin["symbol"].upper(),
            price=coin["current_price"],
            volume=coin["total_volume"]
        )

        db.add(data)

    db.commit()

    return {
        "message": "Market data saved successfully"
    }


def get_all_market_data(db: Session):

    return db.query(MarketData).all()


def get_market_by_symbol(
    db: Session,
    symbol: str
):

    return (
        db.query(MarketData)
        .filter(
            MarketData.symbol == symbol.upper()
        )
        .all()
    )