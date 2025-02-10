import { usePath } from "@/hooks/use-path";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import { ScrollBar } from "../ui/scroll-area";
import ViewportItem from "./viewport-item";

const Viewport = () => {
  const { files, getFilesAndFolders } = usePath();
  useEffect(() => {
    getFilesAndFolders("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollArea className="w-full h-min overflow-auto flex flex-wrap  gap-8 m-8">
      {files.map((file) => (
        // <div
        //   key={file.name}
        //   className="p-4"
        //   onClick={() => moveIntoFolder(file.name)}
        //   style={{ cursor: "pointer" }}
        // >
        //   {file.name}
        // </div>
        <ViewportItem item={file} key={file.name} />
      ))}
      <ScrollBar></ScrollBar>
    </ScrollArea>
  );
};

export default Viewport;
