import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { StateProvider } from "./context/index.jsx";
import { reducer, initialState } from "./context/reducer.js";
// router st
import { BrowserRouter } from "react-router-dom";
// router en
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </StrictMode>
);
