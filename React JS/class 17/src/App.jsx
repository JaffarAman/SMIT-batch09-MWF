import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { app, db } from "./firebase";
import "./App.css";
import Header from "./Components/Header";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TransitionsModal from "./Components/AppModal";
import ProductCard from "./Components/ProductCard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Product from "./pages/Product";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product/:productid" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
