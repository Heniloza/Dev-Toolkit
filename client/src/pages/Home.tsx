function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-6 ">
      {/* Card 1 */}
      <div className="flex flex-col md:flex-row w-full md:w-[90%] h-auto gap-6 shadow-2xl p-6 bg-white rounded-lg">
        <div className="flex flex-1">
          <div className="flex flex-1 gap-6 flex-col ">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                DevMate
              </span>
            </h1>
            <p className="text-gray-600 mt-4">
              Your all-in-one toolkit for developers. From color palettes to
              JSON formatting and regex testing — everything you need in one
              place.
            </p>
          </div>
        </div>
        <div className="flex flex-1">
          <img
            className="w-[200px] sm:w-[250px] mx-auto"
            src="/home_ui.svg"
            alt=""
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col md:flex-row w-full md:w-[90%] h-auto gap-6 shadow-2xl p-6 bg-white rounded-lg">
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
              Speed up
            </span>{" "}
            your workflow
          </h1>
          <p className="text-gray-600">
            Use smart developer tools like Snippet Manager, Regex Tester, and
            Markdown Editor to eliminate repetitive tasks and build faster.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/feature_ui.svg" alt="Feature" className="w-64" />
        </div>
      </div>
    </div>
  );
}

export default Home;
