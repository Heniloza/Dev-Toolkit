import LoginComponent from "../components/authComponents/LoginComponent";

export default function Login() {
  return (
    <div className="w-full min-h-full flex flex-col lg:flex-row bg-gray-100">
      {/* Left side - hidden on small, styled properly on large */}
      <div className="hidden  lg:flex w-1/2 min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
        <div className="flex flex-col items-center justify-center text-center px-8 max-w-md space-y-6">
          {/* SVG Illustration */}
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
        <LoginComponent />
      </div>
    </div>
  );
}
