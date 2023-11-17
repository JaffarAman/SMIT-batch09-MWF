import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components";

const ProtectedRoute = () => {
  return localStorage.getItem("usertoken") ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoute;
