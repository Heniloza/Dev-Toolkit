import { useState } from "react";
import { colorPalettes } from "../mock/MockData";
import PaletteCard from "../components/UI components/PaletteCard";

function ColorPalette() {
  const [openColor, setOpenColor] = useState(false);
  const [selectedPalette, setSelectedPalette] = useState<{
    name: string;
    colors: string[];
  } | null>(null);

  return openColor && selectedPalette ? (
    <PaletteCard
      setOpenColor={setOpenColor}
      name={selectedPalette.name}
      colors={selectedPalette.colors}
    />
  ) : (
    <div className="h-full w-full px-4 py-6 overflow-hidden">
      <div className="h-full overflow-y-auto pr-2">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {colorPalettes.map((palette) => (
            <div
              key={palette.id}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between mb-2 items-center">
                <h2 className="text-lg font-semibold">{palette.name}</h2>
                <button
                  onClick={() => {
                    setOpenColor(true);
                    setSelectedPalette(palette);
                  }}
                  className="font-bold hover:scale-95 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md hover:opacity-90 transition"
                >
                  Get Color
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {palette.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-10 h-10 rounded-md border shadow-sm"
                    title={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;
