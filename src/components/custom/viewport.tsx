import { useFileManager } from "@/hooks/use-file-manager";
import { useEffect } from "react";
import ViewportItem from "./viewport-item";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ScrollBar } from "../ui/scroll-area";

const Viewport = () => {
  const { files, initializeApp } = useFileManager();
  useEffect(() => {
    initializeApp();
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
