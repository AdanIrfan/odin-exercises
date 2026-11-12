import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gallery from "./App.jsx";
import Form from "./form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gallery />
    <Form />
  </StrictMode>,
);
