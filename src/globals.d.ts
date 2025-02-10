export {};

declare global {
  interface Window {
    xploreAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      closeWindow: () => void;

      isWin: () => boolean;

      getFilesAndFolders: (path: string) => Promise<FileItemType[]>;
    };
  }
}
