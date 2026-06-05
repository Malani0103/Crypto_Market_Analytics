import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function VolumeChart({ data }) {

    return (

        <div
            style={{
                marginTop: "30px"
            }}
        >

            <h2>
                Volume Chart
            </h2>

            <ResponsiveContainer
                width="100%"
                height={400}
            >

                <BarChart
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

                    <Bar
                        dataKey="volume"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}

export default VolumeChart;