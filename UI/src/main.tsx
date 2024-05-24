import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { InfoProvider } from "./Contexts/InfoProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InfoProvider>
      <App />
    </InfoProvider>
  </React.StrictMode>
);
