import requests


COINGECKO_URL = (
    "https://api.coingecko.com/api/v3/coins/markets"
)


def fetch_market_data():

    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 10,
        "page": 1,
        "sparkline": False
    }

    response = requests.get(
        COINGECKO_URL,
        params=params,
        timeout=30
    )

    response.raise_for_status()

    return response.json()