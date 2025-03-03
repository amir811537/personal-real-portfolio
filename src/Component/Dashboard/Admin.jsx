import { useState } from "react";
import DashboardHome from "./DashboardHome";
import ProfilePhoto from "./profilephoto";

const Admin = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("Dashboard");

    return (
        <div className="h-screen bg-gray-100 grid md:grid-cols-[250px_1fr] grid-cols-[1fr] transition-all">
            {/* Sidebar */}
            <div className={`bg-gray-800 p-4 transition-transform duration-300 transform md:translate-x-0 ${menuOpen ? "translate-x-0 fixed inset-y-0 left-0 w-64 z-50" : "-translate-x-64 fixed inset-y-0 left-0 w-64 z-50"} md:relative md:w-64`}>
                <div className="flex items-center justify-between h-16 bg-gray-900 px-4 text-white">
                    <span className="text-lg font-semibold">Admin Panel</span>
                    <button onClick={() => setMenuOpen(false)} className="md:hidden text-xl">
                        ✖
                    </button>
                </div>
                <nav className="mt-4 space-y-2">
                    <button 
                        onClick={() => setSelectedSection("Dashboard")} 
                        className={`block w-full text-left text-gray-100 p-3 rounded-lg hover:bg-gray-700 transition ${selectedSection === "Dashboard" ? "bg-gray-700" : ""}`}>
                        Dashboard
                    </button>
                    <button 
                        onClick={() => setSelectedSection("ProfilePhoto")} 
                        className={`block w-full text-left text-gray-100 p-3 rounded-lg hover:bg-gray-700 transition ${selectedSection === "ProfilePhoto" ? "bg-gray-700" : ""}`}>
                        Profile Photo
                    </button>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex flex-col">
                <div className="flex items-center justify-between h-16 bg-white border-b px-4 shadow-sm">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
                        ☰
                    </button>
                    <span className="text-lg font-bold">Welcome Admin</span>
                </div>

                <div className="p-4 overflow-hidden">
                    {/* Render the selected section dynamically */}
                    {selectedSection === "Dashboard" && <DashboardHome />}
                    {selectedSection === "ProfilePhoto" && <ProfilePhoto></ProfilePhoto>}
                </div>
            </div>

            {/* Overlay for mobile */}
            {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setMenuOpen(false)}></div>}
        </div>
    );
};

export default Admin;