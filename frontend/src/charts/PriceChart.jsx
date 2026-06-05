import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function PriceChart({ data }) {

    return (

        <div
            style={{
                marginTop: "30px"
            }}
        >

            <h2>
                Price Chart
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="symbol"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="price"
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default PriceChart;