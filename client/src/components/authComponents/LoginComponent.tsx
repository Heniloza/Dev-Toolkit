import { Lock, User2 } from "lucide-react";
import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
      <div className="flex flex-col gap-6 w-full max-w-md justify-center items-center shadow-2xl rounded-lg p-6 bg-white">
        <h1 className="font-bold text-2xl text-center">Welcome to DevMate</h1>

        <form className="flex flex-col gap-6 w-full">
          {/* Email */}
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <div className="flex gap-3 items-center border rounded-sm px-2 py-1 hover:border-2">
              <User2 className="size-4 text-gray-500" />
              <input
                className="w-full text-sm outline-none py-1"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <div className="flex gap-3 items-center border rounded-sm px-2 py-1 hover:border-2">
              <Lock className="size-4 text-gray-500" />
              <input
                className="w-full text-sm outline-none py-1"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex gap-2 ">
          <p>Don't have an account?</p>
          <Link
            to={"/signup"}
            className="hover:border-b hover:text-pink-400 font-bold"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
