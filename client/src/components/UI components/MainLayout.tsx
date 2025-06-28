import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black  transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* Below: Sidebar + Main content side by side */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
