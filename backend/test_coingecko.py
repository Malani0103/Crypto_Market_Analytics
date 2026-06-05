from app.services.coingecko_service import fetch_market_data

data = fetch_market_data()

print(data[0])