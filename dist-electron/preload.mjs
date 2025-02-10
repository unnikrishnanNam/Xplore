"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("xploreAPI", {
  minimizeWindow: () => electron.ipcRenderer.send("window:minimize"),
  maximizeWindow: () => electron.ipcRenderer.send("window:maximize"),
  closeWindow: () => electron.ipcRenderer.send("window:close"),
  isWin: () => process.platform === "win32",
  getFilesAndFolders: (path) => electron.ipcRenderer.invoke("fs:getFilesAndFolders", path),
  getUserInfo: () => electron.ipcRenderer.invoke("fs:getSystemUser")
});
