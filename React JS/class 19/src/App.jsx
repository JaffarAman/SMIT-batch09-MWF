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
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* // Auth Routes  */}
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* private routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/product/:productid" element={<Product />} />
        </Route>

        {/* //Publice routes */}
        <Route path="/about" element={<h1>ABOUT PAGE</h1>} />

        {/* 
        <ParentRoute element={<ChildrenExample />}>
          <ChildRoute  path="child1" />
          <ChildRoute   path="child2" />
          <ChildRoute   path="child3" />
        </ParentRoute> */}

        <Route path="*" />
      </Routes>
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
