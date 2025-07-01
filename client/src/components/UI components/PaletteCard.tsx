import { Copy, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface PaletteCardProps {
  setOpenColor: (value: boolean) => void;
  name: string;
  colors: string[];
}

function PaletteCard({ setOpenColor, name, colors }: PaletteCardProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    toast.success(`Copied ${color}`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] md:w-[600px] max-h-[80vh] rounded-xl shadow-2xl p-6 relative overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => setOpenColor(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="size-5" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">{name}</h2>

        {/* Color List */}
        <div className="flex flex-col gap-4">
          {colors.map((color, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 border p-2 rounded-md shadow-sm"
            >
              <div
                className="w-16 h-10 rounded-md border"
                style={{ backgroundColor: color }}
              ></div>
              <span className="font-mono text-sm">{color}</span>
              <button
                onClick={() => handleCopy(color)}
                className="hover:scale-105 transition"
                title="Copy Hex"
              >
                {copiedColor === color ? "✅" : <Copy size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteCard;
