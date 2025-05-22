import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import PagesPage from "../pages/PagesPage/PagesPage.jsx";
import GalleryPage from "../pages/GalleryPage/GalleryPage.jsx";
import BlogsPage from "../pages/BlogsPage/BlogsPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pages" element={<PagesPage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/blogs" element={<BlogsPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
  );
}

export default App;
