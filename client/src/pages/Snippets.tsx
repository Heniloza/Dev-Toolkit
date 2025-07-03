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
  }, [isModelOpen, setIsModelOpen, snippets]);

  return (
    <div className="flex flex-col lg:flex-row h-[100vh] w-full gap-4 px-4 py-6 overflow-hidden">
      {/* User Snippets Panel */}
      <div className="w-full lg:w-2/3 flex flex-col shadow-2xl rounded-md overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 pb-2">
          <div className="flex gap-2 items-center">
            <Code2 className="size-5 md:size-10" />
            <h1 className="text-base md:text-2xl font-bold">My Snippets</h1>
          </div>
          <div className="w-20 md:w-36 ml-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        </div>

        {/* Create Snippet */}
        <div className="flex justify-between w-full px-4 items-center gap-2 mb-2">
          <div className="rounded-full">
            <img
              className="rounded-full size-8 md:size-16 object-cover cursor-pointer"
              src={user?.profileImage || "avatar.webp"}
              alt="profile"
              onClick={() => navigate("/profile")}
            />
          </div>
          <div
            onClick={() => setIsModelOpen(true)}
            className="w-full border px-2 py-1 hover:bg-gray-200 hover:scale-95 transition-all duration-100 cursor-pointer md:p-4 rounded-full text-center"
          >
            <h2 className="font-bold text-sm md:text-md">Create a snippet</h2>
          </div>
        </div>

        {/* User Snippets List */}
        <div className="w-full px-4 overflow-y-auto h-full">
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
            <p className="text-center mt-4 text-sm text-gray-500">
              No snippets found. Create one!
            </p>
          )}
        </div>
      </div>

      {/* Recommended Snippets Panel */}
      <div className="w-full lg:w-1/3 shadow-2xl rounded-md hidden lg:flex flex-col overflow-hidden">
        <div className="p-4 text-center text-gray-500 font-medium">
          Recommended Snippets
        </div>

        <div className="p-4 overflow-y-auto h-full">
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
        <div className="fixed inset-0 z-50 backdrop-blur-2xl bg-opacity-50 flex items-center justify-center">
          <CreateSnippet setIsModelOpen={setIsModelOpen} />
        </div>
      )}
    </div>
  );
}

export default Snippets;
