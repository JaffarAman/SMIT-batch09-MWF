import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";

const container = ReactDOM.createRoot(document.getElementById("root"));

container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
