import { Minus, Square, X } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { ExploreBar } from "./explore-bar";

const Navbar = () => {
  return (
    <nav className="w-full h-14 py-2 px-4 gap-8 flex items-center justify-between drag">
      {/* //* Misc Options */}
      <div className="flex gap-2 items-center justify-start">
        <SidebarTrigger className="no-drag border p-4 cursor-pointer" />
        <ModeToggle />
      </div>
      {/* //* Explorebar  */}
      <ExploreBar />
      {/* //* Traffic Light  */}
      <div className="w-fit no-drag h-full flex items-center justify-end gap-3">
        <button
          onClick={window.xploreAPI.minimizeWindow}
          className="p-1 rounded-sm transition-all hover:bg-card"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={window.xploreAPI.maximizeWindow}
          className="p-1 rounded-sm transition-all hover:bg-card"
        >
          <Square size={14}></Square>
        </button>
        <button
          onClick={window.xploreAPI.closeWindow}
          className="p-1 rounded-sm transition-all hover:bg-red-500 hover:text-white"
        >
          <X size={16}></X>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
