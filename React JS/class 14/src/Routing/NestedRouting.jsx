import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Home from "../pages/AdminPages/Home";
import AdminAbout from "../pages/AdminPages/AdminAbout";
import AboutPage from "../pages/About/About";

const NestedRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* //admin routes */}
      {/* <Route path="/admin/home" element={<Home />} />
      <Route path="/admin/about" element={<AdminAbout />} />
     */}

      <Route path="admin">
        <Route path="about" element={<AdminAbout />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default NestedRouting;
