import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dell XPS 13", price: 90, total: 60, rating: 85 },
  { name: "Dell XPS 13", price: 55, total: 40, rating: 50 },
  { name: "Dell XPS 13", price: 88, total: 70, rating: 80 },
  { name: "Dell XPS 13", price: 70, total: 50, rating: 65 },
  { name: "Dell XPS 13", price: 35, total: 30, rating: 40 },
  { name: "Dell XPS 13", price: 84, total: 65, rating: 75 },
  { name: "Dell XPS 13", price: 72, total: 55, rating: 60 },
  { name: "Dell XPS 13", price: 105, total: 80, rating: 95 },
  { name: "Dell XPS 13", price: 101, total: 75, rating: 90 },
  { name: "Dell XPS 13", price: 108, total: 85, rating: 100 },
  { name: "Dell XPS 13", price: 115, total: 90, rating: 110 },
  { name: "Dell XPS 13", price: 98, total: 70, rating: 85 },
];

const Statistics = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-[#9538E2] text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Statistics</h1>
        <p className="max-w-3xl mx-auto px-4 opacity-90 text-lg">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-black mb-8">Statistics</h2>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-125">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#f5f5f5" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
              <Area
                type="monotone"
                dataKey="price"
                fill="#F3E8FF"
                stroke="none"
              />
              <Bar
                dataKey="price"
                barSize={35}
                fill="#9538E2"
                radius={[5, 5, 0, 0]}
              />

              <Bar dataKey="rating" barSize={0} fill="#FF0000" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
