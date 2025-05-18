import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const MenuArr = [
    { id: 1, title: "About", href: "/about" },
    { id: 2, title: "Projects", href: "/projects" },
    { id: 3, title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar-section">
      <ul className="navbar-menu">
        {MenuArr.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
