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
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ChildrenExample from "./pages/ChildrenExample";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/product/:productid" element={<Product />} />
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/example" element={<ChildrenExample />}>
          <Route path="message" element={<ExampleMsg />} />
          <Route path="about" element={<AboutMsg />} />
        </Route>
      </Routes>

      {/* <ChildrenExample >
        <h1>
          JAFFAR
        </h1>
        </ChildrenExample>

      <ChildrenExample>
        <h1>NEW CHILD</h1>
        <h1>NEW CHILD 11</h1>
      </ChildrenExample> */}
    </>
  );
}

const ExampleMsg = () => {
  return <h1>HELLO ExampleMsg</h1>;
};
const AboutMsg = () => {
  return <h1>About ExampleMsg</h1>;
};

export default App;
