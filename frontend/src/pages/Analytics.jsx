import { useEffect, useState } from "react";

import AnalyticsCard from "../components/AnalyticsCard";

import { getAnalytics }
from "../services/marketService";


function Analytics() {

    const [analytics, setAnalytics] =
        useState(null);

    useEffect(() => {

        const fetchAnalytics =
            async () => {

            try {

                const data =
                    await getAnalytics();

                setAnalytics(data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchAnalytics();

    }, []);

    if (!analytics) {

        return (
            <h2>
                Loading Analytics...
            </h2>
        );
    }

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>
                Analytics Dashboard
            </h1>

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

        </div>
    );
}

export default Analytics;