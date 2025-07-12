import { TypeAnimation } from "react-type-animation";
import { useAuthStore } from "../store/authStore";
import { colorPalettes, mockSnippets } from "../mock/MockData";
import SnippetCard from "../components/UI components/SnippetCard";
import { Link } from "react-router-dom";
import { View } from "lucide-react";

function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="w-full min-h-screen flex flex-col gap-8 items-center px-4 pb-10">
      {/* Welcome */}
      <div className="mt-6 text-center">
        <h1 className="font-bold text-2xl">Welcome, {user?.username}</h1>
      </div>

      {/* Animated Message */}
      <TypeAnimation
        sequence={[
          "Ready to boost your dev workflow? ",
          2000,
          "Quickly save your code snippets ",
          2000,
          "Test complex Regex patterns easily ",
          2000,
          "Format your messy JSON in one click ",
          2000,
          "Explore beautiful color palettes ",
          2000,
          "Built for developers, by developers ",
          2000,
          "Your productivity hub is here ",
          2000,
          "Write less. Build more. ",
          2000,
          "One place for all your dev tools ",
          2000,
          "Let’s build something awesome today! ",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          width: "full",
          fontSize: "2em",
          display: "inline-block",
          background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
        repeat={Infinity}
      />

      {/* Snippets Section */}
      <div className="flex flex-col gap-4 mt-10 items-center w-full">
        <h2 className="text-xl font-semibold">Recently Added Snippets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {mockSnippets
            .slice(-5)
            .reverse()
            .map((snippet) => (
              <SnippetCard
                key={snippet._id}
                title={snippet.title}
                code={snippet.code}
                language={snippet.language}
              />
            ))}
        </div>
        <Link to="/snippets">
          <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:opacity-90 shadow-md transition duration-200 text-sm sm:text-base max-w-full flex-wrap">
            <View size={18} />
            View All
          </button>
        </Link>
      </div>

      {/* Color Palettes Section */}
      <div className="mt-12 w-full px-2">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Popular Color Palettes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {colorPalettes
            .slice(-5)
            .reverse()
            .map((palette) => (
              <div
                key={palette.id}
                className="flex flex-col gap-3 border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-md font-bold text-gray-700 text-center">
                  {palette.name}
                </h3>
                <div className="flex justify-center gap-2 flex-wrap">
                  {palette.colors.map((color, index) => (
                    <div
                      key={`${palette.id}-${index}`}
                      className="w-8 h-8 rounded-md border shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="w-full flex justify-center mt-4">
          <Link to="/palette">
            <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 hover:opacity-90 shadow-md transition duration-200 text-sm sm:text-base max-w-full flex-wrap">
              <View size={18} />
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} DevKit by Henil. All rights reserved. |
        Built with MERN Stack
      </footer>
    </div>
  );
}

export default Dashboard;
