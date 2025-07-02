import { Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

function JsonFormater() {
  const [copied, setCopied] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [formatedJson, setFormatedJson] = useState("");
  const [error, setError] = useState("");

  const handleCopy = () => {
    if (formatedJson === "") {
      return toast.error("Field is empty or havve an error");
    }
    navigator.clipboard.writeText(formatedJson);
    setCopied(formatedJson);
    toast.success(`Json Copied `);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleFormat = () => {
    try {
      if (input === "") {
        setError("Field is empt");
        return;
      }
      const json = JSON.parse(input);
      const formatedJson = JSON.stringify(json, null, 2);
      setFormatedJson(formatedJson);
      setError("");
    } catch (error) {
      setError("Invalid JSON format");
      setFormatedJson("");
    }
  };

  const handleMinify = () => {
    try {
      const json = JSON.parse(input);
      const formatedJson = JSON.stringify(json);
      setFormatedJson(formatedJson);
      setError("");
    } catch (error) {
      setFormatedJson("");
      setError("Invalid JSON format");
    }
  };

  const handleReset = () => {
    setFormatedJson("");
    setInput("");
    setError("");
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto p-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        minLength={10}
        placeholder="Paste your JSON here...."
        className="w-full border p-2 font-mono resize-none"
      />

      <div className="flex gap-2">
        <button
          onClick={handleFormat}
          className="w-full border py-2 rounded-lg hover:scale-95 hover:border-2 bg-indigo-600 text-white font-bold"
        >
          Format
        </button>
        <button
          onClick={handleMinify}
          className="w-full border py-2 rounded-lg hover:scale-95 hover:border-2 bg-indigo-600 text-white font-bold"
        >
          Minify
        </button>
        <button
          onClick={handleCopy}
          className="w-full border py-2 rounded-lg hover:scale-95 hover:border-2 bg-indigo-600 text-white font-bold"
        >
          {copied === null ? (
            <div className="flex gap-1 md:gap-2 justify-center items-center px-1">
              <Copy className="size-6" />{" "}
              <p className="text-white text-sm md:text-lg">Copy</p>
            </div>
          ) : (
            "✅"
          )}
        </button>
        <button
          onClick={handleReset}
          className="w-full border py-2 rounded-lg hover:scale-95 hover:border-2 bg-indigo-600 text-white font-bold"
        >
          Reset
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      {formatedJson && (
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm whitespace-pre-wrap">
          {formatedJson}
        </pre>
      )}
    </div>
  );
}

export default JsonFormater;
