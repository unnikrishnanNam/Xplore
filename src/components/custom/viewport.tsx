import { usePath } from "@/hooks/use-path";
import { useEffect } from "react";
import ViewportItem from "./viewport-item";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";

const Viewport = () => {
  const { files, getFilesAndFolders } = usePath();
  useEffect(() => {
    getFilesAndFolders("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollArea className="max-w-full w-full h-min pb-32 max-h-screen overflow-auto flex flex-wrap gap-4 p-8">
      {files.map((file) => (
        <ViewportItem item={file} key={file.name} />
      ))}
      <ScrollBar></ScrollBar>
    </ScrollArea>
  );
};

export default Viewport;
