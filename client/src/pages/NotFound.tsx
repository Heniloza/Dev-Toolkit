import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-2 text-gray-700">Page not found</p>
      <Link
        to={"/"}
        className="flex justify-center items-center font-bold focus:scale-95 gap-2 hover:bg-black hover:text-white transition-all duration-300 rounded-sm w-[150px] h-[40px]"
      >
        <ArrowLeft />
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
