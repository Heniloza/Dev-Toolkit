import { LogOut, LucideHome, Moon, Sun, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useTheme } from "../../ThemeProvider";

function Navbar() {
  const { logout } = useAuthStore();
  const { setTheme } = useTheme();
  const handleLogout = async () => {
    logout();
  };
  return (
    <div className="w-full h-[100px] flex items-center justify-between bg-white shadow-md">
      <div className="flex gap-2 px-4">
        <img src="/logo.webp" alt="Icon" className="size-8" />
        <h3 className="font-bold text-2xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          DevMate
        </h3>
      </div>
      <div className="flex justify-center items-center gap-2 px-4">
        {/* {Toggle Dark/light mode} */}
        <div>
          <Sun
            onClick={() => setTheme("light")}
            className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
          />
          <Moon
            onClick={() => setTheme("dark")}
            className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
          />
          <span className="sr-only">Toggle theme</span>
        </div>

        {/* {Home} */}
        <div className="flex justify-center items-center gap-2 font-bold  h-[40px] rounded-sm transition-all duration-200 w-[120px] hover:bg-black hover:text-white">
          <Link to="/" className="flex gap-2">
            <LucideHome />
            <h2 className="cursor-pointer">Home</h2>
          </Link>
        </div>

        {/* {Profile} */}
        <div className="flex justify-center items-center gap-2 font-bold  h-[40px] rounded-sm transition-all duration-200 w-[120px] hover:bg-black hover:text-white">
          <Link to="/profile" className="flex gap-2">
            <User2 />
            <h2 className="cursor-pointer">Profile</h2>
          </Link>
        </div>

        {/* {Logout} */}
        <div
          className="flex justify-center items-center gap-2 font-bold  h-[40px] rounded-sm transition-all duration-200 w-[120px] hover:bg-black hover:text-white cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
