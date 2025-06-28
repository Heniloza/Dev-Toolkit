import { Lock, Mail, User2 } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { isSiggingin, signup, isLoggedin, user } = useAuthStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(formData);
  };

  useEffect(() => {
    if (isLoggedin) navigate("/verify");
  }, [user, isLoggedin]);
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
      {/* Left side - hidden on small, styled properly on large */}
      <div className="hidden  lg:flex w-1/2 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
        <div className="flex flex-col items-center justify-center text-center px-8 max-w-md space-y-6">
          <img
            src="/welcome_ui.svg"
            alt="Welcome Illustration"
            className="w-72 h-auto"
          />

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-snug">
            Welcome to <span className="text-pink-300">DevMate</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-white/80">
            All your development tools in one place. Let's build something
            amazing.
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100">
          <div className="flex flex-col gap-6 w-full max-w-md justify-center items-center shadow-2xl rounded-lg p-6 bg-white">
            <h1 className="font-bold text-2xl text-center">
              Welcome to DevMate
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full"
            >
              {/* {Usersname} */}
              <div className="flex flex-col gap-2 w-full ">
                <label htmlFor="email" className="text-sm">
                  Username
                </label>
                <div className="flex gap-3 items-center border rounded-sm px-2 py-1 hover:border-2">
                  <Mail className="size-4 text-gray-500" />
                  <input
                    className="w-full text-sm outline-none py-1"
                    type="text"
                    name="username"
                    placeholder="Enter your email"
                    value={formData.username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* {Emai} */}
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

              {/* {Password} */}
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

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="cursor-pointer w-full sm:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
                  disabled={isSiggingin}
                >
                  {isSiggingin ? "Loading..." : "Signup"}
                </button>
              </div>
            </form>
            <div className="flex gap-2 ">
              <p>Already have an account?</p>
              <Link
                to={"/login"}
                className="hover:border-b hover:text-pink-400 font-bold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
