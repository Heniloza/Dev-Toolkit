import LoginComponent from "../components/authComponents/LoginComponent";

export default function Login() {
  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-gray-100 overflow-hidden">
      {/* Left side - hidden on small, styled properly on large */}
      <div className="hidden lg:flex w-1/2 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
        {/* Left Content */}
        <h1 className="text-3xl font-semibold">Welcome to DevMate</h1>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <LoginComponent />
      </div>
    </div>
  );
}
