import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RegisterProvider } from "./context/RegisterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RegisterProvider>
      <App />
    </RegisterProvider>
  </React.StrictMode>
);
