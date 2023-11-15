import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Login, OTPCode, Signup } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import { Header } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="OTPCode" element={<OTPCode />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
