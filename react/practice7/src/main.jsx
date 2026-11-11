import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RecipeList from "./App1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeList />
  </StrictMode>,
);
