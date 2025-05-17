import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
