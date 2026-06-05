from sqlalchemy.orm import Session

from app.models.market_data import MarketData
from app.models.strategy_result import StrategyResult

from app.strategy.moving_average import (
    generate_signal
)


def run_strategy(db: Session):

    market_records = (
        db.query(MarketData)
        .all()
    )

    if not market_records:
        return {
            "message": "No market data found"
        }

    prices = [
        record.price
        for record in market_records
    ]

    moving_average = (
        sum(prices) / len(prices)
    )

    results = []

    for record in market_records:

        signal = generate_signal(
            record.price,
            moving_average
        )

        strategy_record = StrategyResult(
            coin_name=record.coin_name,
            signal=signal,
            current_price=record.price,
            moving_average=moving_average
        )

        db.add(strategy_record)

        results.append({
            "coin": record.symbol,
            "signal": signal
        })

    db.commit()

    return results


def get_strategy_results(
    db: Session
):

    return (
        db.query(StrategyResult)
        .all()
    )