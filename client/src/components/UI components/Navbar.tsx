import { LogOut, LucideHome, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function Navbar() {
  const { logout } = useAuthStore();
  const handleLogout = async () => logout();

  return (
    <div className="w-full h-[70px] flex items-center justify-between bg-white shadow-md transition-all px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.webp" alt="Icon" className="size-8" />
        <h3 className="font-bold text-lg sm:text-2xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          DevMate
        </h3>
      </div>

      {/* Nav Icons */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Home */}
        <div className="relative group">
          <Link
            to="/"
            className="flex items-center justify-center px-2 sm:justify-start gap-2 font-bold h-[40px] w-[40px] sm:w-[120px] rounded-sm transition-all duration-200 hover:bg-black hover:text-white"
          >
            <LucideHome />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition sm:hidden pointer-events-none">
            Home
          </span>
        </div>

        {/* Profile */}
        <div className="relative group">
          <Link
            to="/profile"
            className="flex items-center justify-center px-2 sm:justify-start gap-2 font-bold h-[40px] w-[40px] sm:w-[120px] rounded-sm transition-all duration-200 hover:bg-black hover:text-white"
          >
            <User2 />
            <span className="hidden sm:inline">Profile</span>
          </Link>
          {/* Tooltip for mobile */}
          <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition sm:hidden pointer-events-none">
            Profile
          </span>
        </div>

        {/* Logout */}
        <div className="relative group cursor-pointer">
          <div
            onClick={handleLogout}
            className="flex items-center justify-center px-2 sm:justify-start gap-2 font-bold h-[40px] w-[40px] sm:w-[120px] rounded-sm transition-all duration-200 hover:bg-black hover:text-white"
          >
            <LogOut />
            <span className="hidden sm:inline">Logout</span>
          </div>
          {/* Tooltip for mobile */}
          <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition sm:hidden pointer-events-none">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
