import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { sendOtp, verifyOtp } from "../lib/api";
import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";
import OtpInput from "../components/UI/OtpInput";

function VerifyOtp() {
  const { user } = useAuthStore();
  const [isOtpSended, setIsOtpSended] = useState(false);
  const onOtpSubmit = () => {};
  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
      {/* Left side - hidden on small, styled properly on large */}
      <div className="hidden lg:flex w-1/2 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
        {/* Left Content */}
        <h1 className="text-3xl font-semibold">Welcome to DevMate</h1>
      </div>

      {/* Right side */}
      <div className="w-full sm:h-screen sm:w-screen lg:w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold">Verify OTP</h1>
        <div>
          {!isOtpSended ? (
            <div className="flex justify-center items-center flex-col">
              <div className="mt-4 flex gap-2">
                <p>Send an OTP on</p>
                <h4 className="font-medium">
                  heniloza73@gmail.com{user?.email}
                </h4>
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
                <Link to="/login" className="flex gap-2 mt-4">
                  <ArrowBigLeft />
                  <p>Back to Login</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="mt-4 flex gap-2">
                <p>we Send an OTP on</p>
                <h4 className="font-medium">
                  heniloza73@ggfnail.com{user?.email}.
                </h4>
              </div>
              <div>
                <p>Enter it below to continue</p>
              </div>

              {/* {Inputs} */}
              <div className="flex gap-2 mt-4">
                <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
              </div>
              {/* <button
                className="w-full mt-8 bg-gradient-to-br from-indigo-500 to-purple-700 text-white py-2 rounded-md hover:from-pink-500 hover:to-red-500 transition-colors duration-200 focus:scale-95"
                onClick={() => verifyOtp(user?._id, otp)}
              >
                Verify
              </button> */}
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
