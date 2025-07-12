import { Code2 } from "lucide-react";
import SnippetCard from "../components/UI components/SnippetCard";
import { useSnippetStore } from "../store/snippetsStore";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import CreateSnippet from "../components/UI components/CreateSnippet";
import { useNavigate } from "react-router-dom";
import { mockSnippets } from "../mock/MockData";

function Snippets() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { snippets, deleteSnippet, fetchSnippets } = useSnippetStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSnippets();
  }, [isModelOpen]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen gap-6 px-4 py-6">
      {/* User Snippets Panel */}
      <div className="w-full lg:w-2/3 flex flex-col shadow-lg rounded-lg bg-white">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 pb-4 pt-2 border-b">
          <div className="flex gap-2 items-center">
            <Code2 className="size-6 md:size-8" />
            <h1 className="text-lg md:text-2xl font-bold">My Snippets</h1>
          </div>
          <div className="w-24 md:w-40 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Create Snippet */}
        <div className="flex justify-between items-center gap-4 p-4">
          <img
            className="rounded-full size-10 md:size-14 object-cover cursor-pointer border"
            src={user?.profileImage || "avatar.webp"}
            alt="profile"
            onClick={() => navigate("/profile")}
          />
          <button
            onClick={() => setIsModelOpen(true)}
            className="flex-1 border px-4 py-2 rounded-full text-sm md:text-base font-semibold text-center bg-gray-100 hover:bg-gray-200 transition duration-150"
          >
            Create a snippet
          </button>
        </div>

        {/* User Snippets List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {snippets.length > 0 ? (
            snippets.map((snippet) => (
              <SnippetCard
                key={snippet._id}
                title={snippet.title}
                code={snippet.code}
                language={snippet.language}
                createdAt={snippet.createdAt}
                onDelete={() => deleteSnippet(snippet._id)}
                showDelete={true}
              />
            ))
          ) : (
            <p className="text-center text-sm text-gray-500 mt-4">
              No snippets found. Create one!
            </p>
          )}
        </div>
      </div>

      {/* Recommended Snippets Panel */}
      <div className="w-full lg:w-1/3 flex flex-col shadow-lg rounded-lg bg-white">
        <div className="p-4 border-b text-center text-gray-600 font-semibold">
          Recommended Snippets
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {mockSnippets.map((snippet) => (
            <SnippetCard
              key={snippet._id}
              title={snippet.title}
              code={snippet.code}
              language={snippet.language}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <CreateSnippet setIsModelOpen={setIsModelOpen} />
        </div>
      )}
    </div>
  );
}

export default Snippets;
