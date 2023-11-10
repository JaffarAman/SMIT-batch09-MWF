import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardCmp, Header } from "./components";
import { Box, Grid } from "@mui/material";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
