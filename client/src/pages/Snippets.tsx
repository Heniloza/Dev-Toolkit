import { Code2 } from "lucide-react";
import SnippetCard from "../components/UI components/SnippetCard";
import { useSnippetStore } from "../store/snippetsStore";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import CreateSnippet from "../components/UI components/CreateSnippet";

function Snippets() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { snippets, deleteSnippet } = useSnippetStore();
  const { user } = useAuthStore();

  return (
    <div className="flex h-full w-full gap-4 ">
      {/* {Left Side} */}
      <div className="flex flex-1 flex-col items-center gap-4  shadow-2xl overflow-auto">
        {/* {Heading} */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-2 items-center">
            <Code2 className="size-4 md:size-10" />
            <h1 className="text-sm md:text-2xl font-bold">My Snippets</h1>
          </div>
          <div className="w-20 md:w-36 ml-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* {Create Snippet} */}
        <div className="flex justify-between w-full px-4 items-center gap-2">
          <div className="rounded-full flex-1/5">
            <img
              className="rounded-full size-8 md:size-16 object-cover"
              src={user?.profileImage || "avatar.webp"}
              alt=""
            />
          </div>
          <div
            onClick={() => setIsModelOpen(true)}
            className="w-full border-1 px-2 py-1 hover:bg-gray-200 hover:scale-95 transition-all duration-100 cursor-pointer  md:p-4 rounded-full"
          >
            <h2 className="font-bold text-sm md:text-md">Create a snippet</h2>
          </div>
        </div>

        {/* {User Snippets} */}
        <div>
          {snippets.length > 0 ? (
            snippets?.map((snippet) => (
              <SnippetCard
                key={snippet._id}
                title={snippet.title}
                code={snippet.code}
                language={snippet.language}
                onDelete={() => deleteSnippet(snippet._id)}
              />
            ))
          ) : (
            <p> No snippets found. Create one!</p>
          )}
        </div>
      </div>

      {/* {Right side} */}
      <div className="flex flex-1 w-full shadow-2xl"></div>
      {isModelOpen && (
        <div className="w-full ">
          {isModelOpen && <CreateSnippet setIsModelOpen={setIsModelOpen} />}
        </div>
      )}
    </div>
  );
}

export default Snippets;
