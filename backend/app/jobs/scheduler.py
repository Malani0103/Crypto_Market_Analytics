from apscheduler.schedulers.background import (
    BackgroundScheduler
)

from app.database.db import SessionLocal

from app.services.market_service import (
    save_market_data
)


def scheduled_market_fetch():

    db = SessionLocal()

    try:

        save_market_data(db)

        print(
            "Market data fetched successfully"
        )

    except Exception as error:

        print(
            f"Scheduler Error: {error}"
        )

    finally:

        db.close()


def start_scheduler():

    scheduler = (
        BackgroundScheduler()
    )

    scheduler.add_job(
        scheduled_market_fetch,
        trigger="interval",
        minutes=5
    )

    scheduler.start()

    print(
        "Scheduler started successfully"
    )