import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DashboardHome = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [visitData, setVisitData] = useState([]);

    // Function to update current time in BST (Bangladesh Standard Time)
    const updateTime = () => {
        const now = new Date();
        const bstTime = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Dhaka',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(now);

        setCurrentTime(bstTime);
    };

    useEffect(() => {
        updateTime(); // Initial update
        const interval = setInterval(updateTime, 1000); // Update every second
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    // Fetching visitor data (Mock API for now)
    useEffect(() => {
        const fetchVisitData = async () => {
            try {
                // Simulated API call (replace with actual API call)
                const mockData = [
                    { date: "Today", visits: 120 },
                    { date: "Last 7 Days", visits: 850 },
                    { date: "Last 1 Month", visits: 3500 }
                ];
                setVisitData(mockData);
            } catch (error) {
                console.error("Error fetching visit data:", error);
            }
        };

        fetchVisitData();
    }, []);

    return (
        <div className="p-6">
            {/* Current Date and Time (BST) */}
            <div className="mb-6 text-lg font-semibold">
                Current Time (BST): {currentTime}
            </div>

            {/* User Visit Statistics Chart */}
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold mb-4">User Visit Statistics</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={visitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardHome;
