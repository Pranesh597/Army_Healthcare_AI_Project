import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function DashboardChart({ data }) {

    const COLORS = [
        "#143d74",
        "#2E7D32",
        "#F9A825",
        "#D32F2F",
    ];

    return (

        <div className="chart-card">

            <h2>Hospital Statistics</h2>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={120}
                        label
                    >

                        {data.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={
                                    COLORS[
                                        index % COLORS.length
                                    ]
                                }
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default DashboardChart;