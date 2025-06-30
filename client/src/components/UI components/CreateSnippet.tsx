import { X } from "lucide-react";
import React, { useState, type ChangeEvent, type ReactNode } from "react";
import toast from "react-hot-toast";
import { useSnippetStore } from "../../store/snippetsStore";

function CreateSnippet({
  setIsModelOpen,
}: {
  setIsModelOpen: (value: boolean) => void;
}) {
  const [snippetData, setsnippetData] = useState({
    title: "",
    code: "",
    language: "",
  });
  const { addSnippet } = useSnippetStore();

  const handleSubmit = async () => {
    if (
      snippetData.title === "" ||
      snippetData.code === "" ||
      snippetData.language === ""
    ) {
      toast.error("All field are required");
      return;
    }
    addSnippet(snippetData);
    setsnippetData({ title: "", code: "", language: "" });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40">
      {/* Modal Container */}
      <div className="bg-white w-[90%] md:w-[600px] rounded-xl shadow-2xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsModelOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <X className="size-5" />
        </button>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
          <h2 className="text-2xl font-bold text-center">Create Snippet</h2>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setsnippetData({ ...snippetData, title: e.target.value })
              }
            />
          </div>

          {/* Code */}
          <div className="flex flex-col gap-1">
            <label htmlFor="code" className="font-medium">
              Code
            </label>
            <textarea
              name="code"
              rows={5}
              className="border px-3 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setsnippetData({ ...snippetData, code: e.target.value })
              }
            />
          </div>

          {/* Language */}
          <div className="flex flex-col gap-1">
            <label htmlFor="language" className="font-medium">
              Language
            </label>
            <input
              type="text"
              name="language"
              className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setsnippetData({ ...snippetData, language: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            disabled={
              snippetData.title === "" ||
              snippetData.code === "" ||
              snippetData.language === ""
            }
          >
            Create Snippet
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateSnippet;
