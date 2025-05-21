import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";

import "./Navbar.css";

export default function Navbar() {
  const leftMenu = [
    { id: 1, title: "ABOUT", href: "/about" },
    { id: 2, title: "PRODUCT", href: "/product" },
    { id: 3, title: "PAGES", href: "/pages" },
  ];

  const rightMenu = [
    { id: 4, title: "GALLERY", href: "/gallery" },
    { id: 5, title: "BLOGS", href: "/blogs" },
    { id: 6, title: "CONTACT", href: "/contact" },
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
            <RiShoppingBasket2Line />
            <span className="badge">0</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
