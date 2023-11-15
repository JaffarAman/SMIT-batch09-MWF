import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  return !localStorage.getItem("usertoken") ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

export default AuthRoute;
