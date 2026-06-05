<<<<<<< HEAD
# Crypto Market Analytics Dashboard

## Project Overview

Crypto Market Analytics Dashboard is a full-stack application that fetches cryptocurrency market data from the CoinGecko API, stores it in a SQLite database, performs analytics and trading strategy evaluation, and displays the results through a React dashboard.

---

## Features

### Backend

* FastAPI REST API
* CoinGecko API Integration
* SQLite Database
* SQLAlchemy ORM
* Analytics Module
* Strategy Module
* Scheduler (Auto Fetch Every 5 Minutes)
* Swagger API Documentation

### Frontend

* React + Vite
* Axios API Integration
* React Router
* Dashboard Page
* Analytics Page
* Strategy Page
* Market Data Table
* Price Chart
* Volume Chart

---

## Technology Stack

### Backend

* Python
* FastAPI
* SQLAlchemy
* SQLite
* APScheduler
* Requests

### Frontend

* React
* Vite
* Axios
* React Router DOM
* Recharts

---

## Project Structure

Project/

├── backend/

│   ├── app/

│   │   ├── api/

│   │   ├── database/

│   │   ├── jobs/

│   │   ├── models/

│   │   ├── services/

│   │   └── strategy/

│   ├── main.py

│   └── requirements.txt

│

├── frontend/

│   ├── src/

│   │   ├── api/

│   │   ├── charts/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── routes/

│   │   └── services/

│   └── package.json

│

└── README.md

---

## Backend Setup

```bash
cd backend

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger URL:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## API Endpoints

### Market APIs

```text
GET  /markets/

POST /markets/fetch

GET  /markets/{symbol}
```

### Analytics APIs

```text
GET /analytics/
```

### Strategy APIs

```text
POST /strategy/run

GET  /strategy/results
```

---

## Scheduler

The scheduler automatically fetches cryptocurrency market data every 5 minutes and stores it in the database.

---

## Future Enhancements

* Authentication
* User Watchlist
* Advanced Trading Indicators
* Portfolio Tracking
* Real-Time WebSocket Updates

=======
# Crypto_Market_Analytics
>>>>>>> 209bd9e93a8dc7f15b0411e2b00d0e69dbe67339
