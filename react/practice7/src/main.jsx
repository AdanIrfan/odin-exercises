import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Poem from "./Seperator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Poem />
  </StrictMode>,
);
