export {};

declare global {
  interface Window {
    xploreAPI: {
      minimizeWindow: () => void;
      maximizeWindow: () => void;
      closeWindow: () => void;

      isWin: () => boolean;

      getUserInfo: () => Promise<SystemUserType>;
      getFilesAndFolders: (path: string) => Promise<FileItemType[]>;
    };
  }
}
