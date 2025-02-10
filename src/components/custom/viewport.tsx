import { usePath } from "@/hooks/use-path";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import { ScrollBar } from "../ui/scroll-area";

const Viewport = () => {
  const { files, getFilesAndFolders, moveIntoFolder } = usePath();
  useEffect(() => {
    getFilesAndFolders("/");
  });
  return (
    <ScrollArea className="w-full h-full overflow-auto">
      {files.map((file) => (
        <div
          key={file.name}
          className="p-4"
          onClick={() => moveIntoFolder(file.name)}
          style={{ cursor: "pointer" }}
        >
          {file.name}
        </div>
      ))}
      <ScrollBar></ScrollBar>
    </ScrollArea>
  );
};

export default Viewport;
