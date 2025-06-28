import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { sendOtp, verifyOtp } from "../lib/api";
import { ArrowBigLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "../components/UI components/OtpInput";
import toast from "react-hot-toast";

function VerifyOtp() {
  const { user, setIsLoggedin } = useAuthStore();
  const [isOtpSended, setIsOtpSended] = useState(false);
  const [otp, setOtp] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleVerifyOtp = async () => {
    const res = await verifyOtp(user?._id, otp);
    if (res?.success) {
      useAuthStore.getState().setUser(res.user);
      useAuthStore.getState().setIsAuthenticated(true);
      toast.success("Logged in successfully.");
      navigate("/");
    }
  };

  const onOtpSubmit = (otpString: string) => {
    const digits = otpString.split("").map((digit) => Number(digit));
    setOtp(digits);
    console.log(digits);
  };

  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
      <div className="hidden  lg:flex w-1/2 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
        <div className="flex flex-col items-center justify-center text-center px-8 max-w-md space-y-6">
          <img
            src="/welcome_ui.svg"
            alt="Welcome Illustration"
            className="w-72 h-auto"
          />

          <h1 className="text-4xl font-bold leading-snug">
            Welcome to <span className="text-pink-300">DevMate</span>
          </h1>

          <p className="text-lg text-white/80">
            All your development tools in one place. Let's build something
            amazing.
          </p>
        </div>
      </div>

      <div className="w-full sm:h-screen sm:w-screen lg:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Verify OTP</h1>
        <div>
          {!isOtpSended ? (
            <div className="flex justify-center items-center flex-col">
              <div className="mt-4 flex gap-2">
                <p>Send an OTP on</p>
                <h4 className="font-medium">{user?.email}</h4>
              </div>
              <button
                className="w-full mt-8 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
                onClick={() => {
                  sendOtp(user?._id);
                  setIsOtpSended(true);
                }}
              >
                Send OTP
              </button>
              <div>
                <Link
                  onClick={() => setIsLoggedin(false)}
                  to="/login"
                  className="flex gap-2 mt-4"
                >
                  <ArrowBigLeft />
                  <p>Back to Login</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="mt-4 flex gap-2">
                <p>we Send an OTP on</p>
                <h4 className="font-medium">{user?.email}.</h4>
              </div>
              <div>
                <p>Enter it below to continue</p>
              </div>

              <div className="flex gap-2 mt-4">
                <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
              </div>
              <button
                className="w-full mt-8 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
                onClick={handleVerifyOtp}
              >
                Verify
              </button>
              <div>
                <div>
                  <Link to="/login" className="flex gap-2 mt-4">
                    <ArrowBigLeft />
                    <p>Back to Login</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
