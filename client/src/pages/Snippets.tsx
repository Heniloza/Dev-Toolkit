import { Code2 } from "lucide-react";

function Snippets() {
  return (
    <div className="flex h-full w-full gap-4">
      {/* {Left Side} */}
      <div className="flex flex-1 justify-center shadow-2xl">
        {/* {Heading} */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2 items-center">
            <Code2 className="size-10" />
            <h1 className="text-2xl font-bold">My Snippets</h1>
          </div>
          <div className="w-36 ml-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* {User Snippets} */}
      </div>

      {/* {Right side} */}
      <div className="flex flex-1 w-full shadow-2xl"></div>
    </div>
  );
}

export default Snippets;
