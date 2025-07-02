import { Copy, X } from "lucide-react";
import { commonRegexPatterns } from "../../mock/MockData";
import { useState } from "react";
import toast from "react-hot-toast";

function RegecCard({
  setOpenRegexCard,
}: {
  setOpenRegexCard: (value: boolean) => void;
}) {
  const [copiedPattern, setCopiedPattern] = useState("");

  const handleCopy = (pattern: string) => {
    navigator.clipboard.writeText(pattern);
    setCopiedPattern(pattern);
    toast.success("Regex pattern copied!");
    setTimeout(() => setCopiedPattern(""), 2000);
  };

  return (
    <div className="h-full w-full flex justify-center p-2 sm:p-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-full shadow-2xl relative rounded-2xl p-4 sm:p-6 overflow-y-auto bg-white">
        <button
          onClick={() => setOpenRegexCard(false)}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 text-gray-500 hover:text-black"
        >
          <X size={24} className="sm:size-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
          Common Regex Patterns
        </h2>

        <div className="space-y-4 pb-4">
          {commonRegexPatterns.map((regex, index) => (
            <div
              key={index}
              className="border p-3 sm:p-4 rounded-md shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
            >
              <div className="w-full sm:w-auto">
                <h3 className="font-semibold text-base sm:text-lg mb-1">
                  {regex.name}
                </h3>
                <p className="font-mono text-sm text-gray-700 break-all">
                  {regex.pattern}
                </p>
              </div>
              <button
                onClick={() => handleCopy(regex.pattern)}
                title="Copy Regex"
                className="p-1 rounded hover:bg-blue-100 transition self-end sm:self-center"
              >
                {copiedPattern === regex.pattern ? "✅" : <Copy size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegecCard;
