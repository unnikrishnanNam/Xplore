import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SidebarProvider } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/custom/app-sidebar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider className="h-full w-full flex">
      <AppSidebar />
      <App />
    </SidebarProvider>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
