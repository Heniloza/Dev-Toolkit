import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black  transition-colors duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* Below: Sidebar + Main content side by side */}
      <div className="flex flex-1 ">
        {/* Sidebar on the left */}
        <Sidebar />
        <MobileSidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <main className="p-4 mt-4 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
