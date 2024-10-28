import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.PROD ? "/Escape_Game_Birthday/" : "/"}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
