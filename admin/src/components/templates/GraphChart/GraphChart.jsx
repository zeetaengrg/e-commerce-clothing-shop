import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./GraphChart.scss";

const data = [
  { name: "Janaury", Total: 1455.55 },
  { name: "February", Total: 1150.95 },
  { name: "March", Total: 1250.95 },
  { name: "April", Total: 1350.95 },
  { name: "May", Total: 850.95 },
  { name: "June", Total: 1050.95 },
  { name: "July", Total: 750.95 },
  { name: "August", Total: 1250.95 },
  { name: "September", Total: 1550.95 },
  { name: "October", Total: 1950.95 },
  { name: "November", Total: 2050.95 },
  { name: "December", Total: 2150.95 },
];

const GraphChart = () => {
  return (
    <div className="graph">
      <h1>Last Year (Revenue)</h1>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;
