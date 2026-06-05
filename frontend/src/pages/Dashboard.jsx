import { useEffect, useState } from "react";

import AnalyticsCard from "../components/AnalyticsCard";
import MarketTable from "../components/MarketTable";
import PriceChart from "../charts/PriceChart";
import {getAnalytics,getMarketData} from "../services/marketService";
import VolumeChart from "../charts/VolumeChart";


function Dashboard() {

    const [analytics, setAnalytics] =
        useState(null);

    const [marketData, setMarketData] =
        useState([]);

    useEffect(() => {

        const loadData = async () => {

            try {

                const analyticsData =
                    await getAnalytics();

                const marketDataResponse =
                    await getMarketData();

                setAnalytics(
                    analyticsData
                );

                setMarketData(
                    marketDataResponse
                );

            } catch (error) {

                console.error(error);
            }
        };

        loadData();

    }, []);

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>
                Crypto Dashboard
            </h1>

            {
                analytics && (

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap"
                        }}
                    >

                        <AnalyticsCard
                            title="Total Records"
                            value={
                                analytics.total_records
                            }
                        />

                        <AnalyticsCard
                            title="Unique Coins"
                            value={
                                analytics.unique_coins
                            }
                        />

                        <AnalyticsCard
                            title="Highest Price Coin"
                            value={
                                analytics.highest_price_coin
                            }
                        />

                        <AnalyticsCard
                            title="Average Price"
                            value={
                                analytics.average_price
                            }
                        />

                    </div>
                )
            }

            <h2>
                Market Data
            </h2>

            <MarketTable
                marketData={marketData}
            />
            <PriceChart
            data={marketData}
            />
            <VolumeChart
            data={marketData}
            />

        </div>
    );
}

export default Dashboard;