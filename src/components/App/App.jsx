import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import PagesPage from "../pages/PagesPage/PagesPage.jsx";
import GalleryPage from "../pages/GalleryPage/GalleryPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pages" element={<PagesPage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
    </Routes>
  );
}

export default App;
