import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProductInteractionProvider } from "./components/shared/ProductInteractionContext/ProductInteractionContext.jsx";
import App from "./components/App/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <BrowserRouter>
      <ProductInteractionProvider>
        <App />
      </ProductInteractionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
