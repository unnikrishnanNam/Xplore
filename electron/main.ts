import { app, BrowserWindow, ipcMain } from "electron";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import os from "node:os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    frame: false,
    transparent: true,
    width: 1024,
    height: 768,
    minWidth: 500,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  });

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);

ipcMain.on("window:minimize", () => {
  win?.minimize();
});

ipcMain.on("window:maximize", () => {
  if (win?.isMaximized()) {
    win?.unmaximize();
  } else {
    win?.maximize();
  }
});

ipcMain.on("window:close", () => {
  win?.close();
});

ipcMain.handle("fs:getFilesAndFolders", async (_, dirPath: string) => {
  try {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
    return entries.map((entry) => ({
      name: entry.name,
      isDirectory: entry.isDirectory(),
      size: entry.isDirectory()
        ? null
        : fs.statSync(path.join(dirPath, entry.name)).size,
      lastModified: fs.statSync(path.join(dirPath, entry.name)).mtime,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
});

ipcMain.handle("fs:getSystemUser", () => {
  const data = os.userInfo();
  return data;
});
