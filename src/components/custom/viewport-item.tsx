import { useFileManager } from "@/hooks/use-file-manager";
import { FileItemType } from "shared/types";

const ViewportItem = ({ item }: { item: FileItemType }) => {
  const { moveIntoFolder } = useFileManager();
  return (
    <div
      className="select-none w-full max-w-28 flex flex-col items-center justify-start"
      style={{ cursor: "pointer" }}
      onDoubleClick={() => moveIntoFolder(item.name)}
    >
      <p className="p-4 rounded-md text-5xl">
        {item.isDirectory ? "🗂️" : "📄"}
      </p>
      <p className="text-center text-wrap px-2 truncate">{item.name}</p>
    </div>
  );
};

export default ViewportItem;
