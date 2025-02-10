import { usePath } from "@/hooks/use-path";
import { FileItemType } from "shared/types";

const ViewportItem = ({ item }: { item: FileItemType }) => {
  const { moveIntoFolder } = usePath();
  return (
    <div
      className="max-w-28"
      style={{ cursor: "pointer" }}
      onDoubleClick={() => moveIntoFolder(item.name)}
    >
      {/* <h2>{item.name}</h2>
      <p>{item.isDirectory ? "Folder" : "File"}</p>
      <p>{item.size}</p>
      <p>{item.lastModified?.toDateString()}</p> */}
      {/* {item.isDirectory ? <Folder size={32} /> : <File size={32} />} */}
      <p className="p-4 rounded-md text-6xl">
        {item.isDirectory ? "🗂️" : "📄"}
      </p>
      <p className="text-center text-wrap">{item.name}</p>
    </div>
  );
};

export default ViewportItem;
