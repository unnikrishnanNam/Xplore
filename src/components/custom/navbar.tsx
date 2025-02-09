import { Minus, Square, X } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-2 bg-muted grid grid-cols-3 items-center justify-between drag">
      {/* //* Misc  */}
      <div></div>
      {/* //* Title  */}
      <p className="font-semibold text-center">Xplore</p>
      {/* //* Traffic Light  */}
      <div className="w-full flex items-center justify-end">
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
      </div>
    </nav>
  );
};

export default Navbar;
