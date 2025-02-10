import { ipcRenderer, contextBridge } from "electron";
import { FileItemType } from "shared/types";

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld("xploreAPI", {
  minimizeWindow: () => ipcRenderer.send("window:minimize"),
  maximizeWindow: () => ipcRenderer.send("window:maximize"),
  closeWindow: () => ipcRenderer.send("window:close"),

  isWin: () => process.platform === "win32",

  getFilesAndFolders: (path: string): Promise<FileItemType> =>
    ipcRenderer.invoke("fs:getFilesAndFolders", path),
});
