import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import ContactPage from "../pages/Contact/Contact";
import ProductsPage from "../pages/Products/Products";
import NotFound from "../pages/NotFound/NotFound";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/products" element={<ProductsPage />} />

      {/* Dynamic routing */}
      <Route path="/singleproduct/:productid" element={<SingleProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouting;
