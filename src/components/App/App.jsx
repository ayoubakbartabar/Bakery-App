import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import BlogsPage from "../pages/BlogsPage/BlogsPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/blogs" element={<BlogsPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/shoppingBag" element={<ContactPage/>} />
      <Route path="*" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
