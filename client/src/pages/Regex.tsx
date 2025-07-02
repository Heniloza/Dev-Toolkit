import { useRef, useState } from "react";
import toast from "react-hot-toast";
import RegecCard from "../components/UI components/RegexCard";

function Regex() {
  const [testString, setTestString] = useState("");
  const [regex, setRegex] = useState("");
  const [matches, setMatches] = useState<string[] | null>(null);
  const [openRegecCard, setOpenRegexCard] = useState(false);
  const matchRef = useRef<HTMLDivElement>(null);

  const handleTestRegex = () => {
    setMatches(null);

    if (testString.trim() === "" || regex.trim() === "") {
      return toast.error("Both fields are required");
    }

    try {
      const regexObj = new RegExp(regex, "g");
      const result = testString.match(regexObj);

      if (result && result.length > 0) {
        toast.success(`${result.length} match(es) found`);
        setMatches(result);

        setTimeout(() => {
          matchRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        toast.error("No matches found");
      }
    } catch (error) {
      toast.error("Invalid regular expression");
    }
  };

  if (openRegecCard) {
    return <RegecCard setOpenRegexCard={setOpenRegexCard} />;
  }

  return (
    <div className="w-full h-full overflow-hidden py-4 flex justify-center items-center">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] h-[80%] md:h-full border shadow-lg p-6 rounded-md space-y-6 overflow-y-auto">
        {/* Regex Input */}
        <div className="space-y-2">
          <h1 className="font-bold text-lg">REGULAR EXPRESSION</h1>
          <input
            type="text"
            value={regex}
            onChange={(e) => setRegex(e.target.value)}
            placeholder="Insert your regular expression here"
            className="w-full border p-2 text-gray-700 rounded"
          />
        </div>

        {/* Test String Input */}
        <div className="space-y-2">
          <h2 className="font-bold text-lg">TEST STRING</h2>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            rows={12}
            placeholder="Insert your test string here"
            className="w-full border-2 resize-none p-2 text-gray-700 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={handleTestRegex}
            className="w-full sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition"
          >
            Test
          </button>
          <button
            onClick={() => setOpenRegexCard(true)}
            className="w-full sm:w-1/2 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded transition"
          >
            Get Regex
          </button>
        </div>

        {matches && (
          <div ref={matchRef} className="pt-4">
            <h3 className="font-semibold">Matches:</h3>
            <ul className="list-disc list-inside text-green-700">
              {matches.map((match, index) => (
                <li key={index}>{match}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Regex;
