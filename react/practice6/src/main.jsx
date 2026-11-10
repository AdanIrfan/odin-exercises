import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import PackingList from "./CHL.jsx";
import PackingList from "./CHL2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PackingList />
  </StrictMode>,
);
