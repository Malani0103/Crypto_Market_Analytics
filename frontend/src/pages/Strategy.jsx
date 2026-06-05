import { useEffect, useState } from "react";

import StrategyCard from "../components/StrategyCard";

import {
    runStrategy
} from "../services/marketService";


function Strategy() {

    const [results, setResults] =
        useState([]);

    useEffect(() => {

        const fetchStrategy =
            async () => {

            try {

                const data =
                    await runStrategy();

                setResults(data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchStrategy();

    }, []);

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>
                Trading Strategy
            </h1>

            {
                results.map(
                    (
                        item,
                        index
                    ) => (

                        <StrategyCard
                            key={index}
                            strategy={{
                                coin_name:
                                    item.coin,
                                signal:
                                    item.signal,
                                current_price:
                                    "-",
                                moving_average:
                                    "-"
                            }}
                        />
                    )
                )
            }

        </div>
    );
}

export default Strategy;