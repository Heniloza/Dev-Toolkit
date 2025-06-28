import {
  FileCode,
  FileJson,
  LayoutDashboard,
  Palette,
  ScanSearch,
} from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[250px] bg-white-500 bg-gray-800 text-white shadow-2xl rounded-sm flex flex-col gap-4 py-4">
      <div className="ml-6">
        <h2 className="text-2xl font-bold">Your Toolkit</h2>
      </div>
      {/* {Dashboard} */}
      <div className="mt-8  hover:bg-gray-700 hover:rounded-md hover:text-white w-full h-[30px] flex items-center px-4 py-5">
        <Link to={"/dashboard"} className="flex gap-2">
          <LayoutDashboard />
          <p>Dashboard</p>
        </Link>
      </div>

      {/* Snippets */}
      <div className="  hover:bg-gray-700 hover:rounded-md hover:text-white w-full h-[30px] flex items-center px-4 py-5">
        <Link to={"/snippets"} className="flex gap-2">
          <FileCode />
          <p>Snippets</p>
        </Link>
      </div>

      {/* Color Palette */}
      <div className="  hover:bg-gray-700 hover:rounded-md hover:text-white w-full h-[30px] flex items-center px-4 py-5">
        <Link to={"/palette"} className="flex gap-2">
          <Palette />
          <p>Color palette</p>
        </Link>
      </div>

      {/* JSON Formater */}
      <div className="  hover:bg-gray-700 hover:rounded-md hover:text-white w-full h-[30px] flex items-center px-4 py-5">
        <Link to={"/json-formater"} className="flex gap-2">
          <FileJson />
          <p>Json Formater</p>
        </Link>
      </div>

      {/* regex tester */}
      <div className="hover:bg-gray-700 hover:rounded-md hover:text-white w-full h-[30px] flex items-center px-4 py-5">
        <Link to={"/regex"} className="flex gap-2">
          <ScanSearch />
          <p>regex Tester</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
