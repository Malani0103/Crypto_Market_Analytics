from sqlalchemy.orm import Session

from app.models.market_data import MarketData


def get_analytics(db: Session):

    records = db.query(MarketData).all()

    if not records:
        return {
            "message": "No data found"
        }

    total_records = len(records)

    unique_coins = len(
        set(
            record.symbol
            for record in records
        )
    )

    highest_price_record = max(
        records,
        key=lambda record: record.price
    )

    average_price = round(
        sum(
            record.price
            for record in records
        ) / total_records,
        2
    )

    return {
        "total_records": total_records,
        "unique_coins": unique_coins,
        "highest_price_coin":
            highest_price_record.symbol,
        "highest_price":
            highest_price_record.price,
        "average_price":
            average_price
    }