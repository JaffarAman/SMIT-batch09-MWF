import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
