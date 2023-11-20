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



// const ProtectedRoute = () => {
//   return localStorage.getItem("usertoken") && userType == "vendor" ? (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to={"/login"} />
//   );
// };

export default ProtectedRoute;
