import { X } from "lucide-react";
import React from "react";

interface PaletteCardProps {
  setOpenColor: (value: boolean) => void;
  name: string;
  colors: string[];
}

function PaletteCard({ setOpenColor, name, colors }: PaletteCardProps) {
  return (
    <div className=" h-full w-full flex justify-center">
      <div className="flex justify-center border h-[80%] w-[50%] items-center">
        <div className="">
          <div>
            <X onClick={() => setOpenColor(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaletteCard;
