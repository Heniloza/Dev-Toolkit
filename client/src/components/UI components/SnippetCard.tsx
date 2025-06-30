import { ChevronUp, ChevronDown, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SnippetProps {
  title: string;
  code: string;
  language: string;
  createdAt: string;
  onDelete: () => void;
}

function SnippetCard({
  title,
  code,
  language,
  onDelete,
  createdAt,
}: SnippetProps) {
  const [copy, setCopy] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    toast.success("Code copied");
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 mb-4 border hover:shadow-xl transition duration-200">
      {/* Header */}
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <p className="text-sm text-gray-600">{language}</p>
          <p>
            {new Date(createdAt).toLocaleDateString()} at{" "}
            {new Date(createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            title="Copy code"
            className="p-1 rounded hover:bg-blue-500 hover:text-white transition"
          >
            {copy ? "✅" : <Copy size={18} />}
          </button>

          <button
            onClick={onDelete}
            title="Delete snippet"
            className="p-1 rounded hover:bg-red-500 hover:text-white transition"
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={() => setShowCode((prev) => !prev)}
            title="Toggle code visibility"
            className="p-1 rounded hover:bg-gray-300 transition"
          >
            {showCode ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Code Section */}
      {showCode && (
        <pre className="mt-4 bg-gray-100 rounded-md p-3 text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

export default SnippetCard;
