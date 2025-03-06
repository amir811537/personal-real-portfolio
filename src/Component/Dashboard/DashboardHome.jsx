import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

const fakeData = {
    totalUsers: 2500,
    totalVisitors: 8500,
    last7Days: [
        { date: "Day 1", visits: 120 },
        { date: "Day 2", visits: 200 },
        { date: "Day 3", visits: 180 },
        { date: "Day 4", visits: 220 },
        { date: "Day 5", visits: 250 },
        { date: "Day 6", visits: 300 },
        { date: "Day 7", visits: 270 }
    ],
    lastMonth: [
        { week: "Week 1", visits: 1500 },
        { week: "Week 2", visits: 1700 },
        { week: "Week 3", visits: 1600 },
        { week: "Week 4", visits: 1800 }
    ],
    lastYear: [
        { month: "Jan", visits: 5000 },
        { month: "Feb", visits: 7000 },
        { month: "Mar", visits: 6500 },
        { month: "Apr", visits: 8000 },
        { month: "May", visits: 9000 },
        { month: "Jun", visits: 7500 }
    ],
    totalProjects: [
        { name: "Web Apps", value: 45 },
        { name: "Mobile Apps", value: 30 },
        { name: "E-commerce", value: 25 }
    ]
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DashboardCharts = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Users */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Total Users</h2>
                <h3 className="text-2xl font-semibold">{fakeData.totalUsers}</h3>
            </div>

            {/* Total Visitors */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Total Visitors</h2>
                <h3 className="text-2xl font-semibold">{fakeData.totalVisitors}</h3>
            </div>

            {/* Last 7 Days Visitors (Area Chart) */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Last 7 Days Visitors</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={fakeData.last7Days}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="visits" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            {/* Last Month Visitors (Line Chart) */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Last Month Visitors</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={fakeData.lastMonth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Last Year Visitors (Bar Chart) */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Last Year Visitors</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fakeData.lastYear}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="visits" fill="#ff7300" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Total Projects Added (Pie Chart) */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">Total Projects Added</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={fakeData.totalProjects} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                            {fakeData.totalProjects.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardCharts;
