import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FunctionContextProvider } from "./store/functionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <FunctionContextProvider>
          <App />
        </FunctionContextProvider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
