import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const leftMenu = [
    { id: 1, title: "HOME PAGE", href: "/" },
    { id: 2, title: "ABOUT", href: "/about" },
    { id: 3, title: "PRODUCT", href: "/product" },
    { id: 4, title: "PAGES", href: "/pages" },
  ];

  const rightMenu = [
    { id: 5, title: "GALLERY", href: "/gallery" },
    { id: 6, title: "BLOGS", href: "/blogs" },
    { id: 7, title: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        {leftMenu.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar-logo">
        <Link to="/">
          <img src="src/assets/images/navbar-logo.avif" alt="Logo" />
        </Link>
      </div>

      <ul className="navbar-right">
        {rightMenu.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button className="icon-btn search"></button>
        </li>
        <li>
          <button className="icon-btn cart">
            <span className="badge">0</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
