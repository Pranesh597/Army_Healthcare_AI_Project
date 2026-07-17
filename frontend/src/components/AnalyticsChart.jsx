import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", threats: 20 },
  { month: "Feb", threats: 32 },
  { month: "Mar", threats: 18 },
  { month: "Apr", threats: 41 },
  { month: "May", threats: 29 },
  { month: "Jun", threats: 35 },
];

function AnalyticsChart() {
  return (
    <div className="chart-card">
      <h2>Cyber Threat Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="threats"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;