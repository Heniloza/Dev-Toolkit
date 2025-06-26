import { Lock, User2 } from "lucide-react";
import { use, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

function LoginComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingin, isLoggedin, user } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData);
  };

  useEffect(() => {
    if (isLoggedin) navigate("/verify");
  }, [user, isLoggedin]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
      <div className="flex flex-col gap-6 w-full max-w-md justify-center items-center shadow-2xl rounded-lg p-6 bg-white">
        <h1 className="font-bold text-2xl text-center">Welcome to DevMate</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
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
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
              disabled={isLoggingin}
            >
              {isLoggingin ? "Loading..." : "Login"}
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
