import {
  LayoutDashboard,
  FileCode,
  Palette,
  FileJson,
  ScanSearch,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="p-4">
        <Menu
          className="h-6 w-6 text-gray-800  cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-0 left-0 w-64 h-full bg-gray-800 text-white p-6 shadow-lg flex flex-col gap-6 z-50">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Toolkit</h2>
              <X
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Links */}
            <Link
              to="/dashboard"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/snippets"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              <FileCode />
              <span>Snippets</span>
            </Link>

            <Link
              to="/palette"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              <Palette />
              <span>Color Palette</span>
            </Link>

            <Link
              to="/json-formater"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              <FileJson />
              <span>JSON Formatter</span>
            </Link>

            <Link
              to="/regex"
              className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              <ScanSearch />
              <span>Regex Tester</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileSidebar;
