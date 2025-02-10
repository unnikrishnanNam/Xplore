import { filesAtom, pathAtom } from "@/components/atoms/path-atom";
import { isHidden, joinPath } from "@/lib/utils";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FileItemType } from "shared/types";

export const usePath = () => {
  const [path, setPath] = useAtom<string[]>(pathAtom);
  const [files, setFiles] = useAtom<FileItemType[]>(filesAtom);

  const getFilesAndFolders = async (path: string) => {
    const files = await window.xploreAPI.getFilesAndFolders(path);
    files.sort((a: FileItemType) => (a.isDirectory ? -1 : 1));
    files.filter((file) => !isHidden(file.name));
    setFiles(files);
  };

  useEffect(() => {
    getFilesAndFolders(joinPath(path));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const moveIntoFolder = (folderName: string) => {
    setPath([...path, folderName]);
    getFilesAndFolders(joinPath([...path, folderName]));
    console.log(path);
  };

  return {
    path,
    setPath,

    files,
    setFiles,

    getFilesAndFolders,
    moveIntoFolder,
  };
};
