import { ArrowBigDown, ArrowUp, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SnippetProps {
  title: string;
  code: string;
  language: string;
  onDelete: () => void;
}

function SnippetCard({ title, code, language, onDelete }: SnippetProps) {
  const [copy, setCopy] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    toast.success("Code copied");
    setTimeout(() => setCopy(false), 2000);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="font-bold text-lg">{title}</h1>
          <p>{language}</p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleCopy}
            className="hover:bg-blue-500 hover:text-white transition-all duration-200"
            title="Copy code"
          >
            {copy ? "✅ Copied!" : <Copy size={18} />}
          </button>

          <button
            onClick={onDelete}
            title="Delete Snippet"
            className="hover:bg-red-500 hover:text-white transition-all duration-200"
          >
            <Trash2 size={18} />
          </button>
          <button onClick={toggleShowCode}>
            {showCode ? <ArrowBigDown /> : <ArrowUp />}
          </button>
        </div>
      </div>
      <pre
        className={`bg-gray-200 rounded-md p-3 text-sm overflow-x-auto ${
          showCode ? "" : "hidden"
        }`}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default SnippetCard;
