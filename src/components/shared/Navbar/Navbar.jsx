import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import "./Navbar.css";
import SearchModal from "./SearchModal/SearchModal";

export default function Navbar() {
  // set Hook for Search bar
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartHover, setCartHover] = useState(false);

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

  // this array for test
  const cartItems = [
    {
      id: 1,
      title: "Oreo Cupcakes",
      price: 36,
      quantity: 5,
      image: "https://via.placeholder.com/50",
    },
  ];

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-left">
          {leftMenu.map((item) => (
            <li className="menu-li" key={item.id}>
              <Link className="menu-link" to={item.href}>
                {item.title}
              </Link>
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
            <li className="menu-li" key={item.id}>
              <Link className="menu-link" to={item.href}>
                {item.title}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="icon-btn search"
            >
              <CiSearch className="searchIcon" />
            </button>
          </li>

          <li
            className="cart-wrapper"
            onMouseEnter={() => setCartHover(true)}
            onMouseLeave={() => setCartHover(false)}
          >
            <button className="icon-btn cart">
              <RiShoppingBasket2Line className="shoppingIcon" />
              <span className="badge">{cartItems.length}</span>
            </button>

            {cartHover && (
              <div className="cart-dropdown">
                {cartItems.length === 0 ? (
                  <p className="cart-empty">Your cart is currently empty.</p>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-info">
                          <div>{item.title}</div>
                          <div>
                            {item.quantity} × ${item.price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="cart-subtotal">
                      <span>Subtotal:</span>
                      <strong>${cartTotal.toFixed(2)}</strong>
                    </div>
                    <button className="view-bag-btn">VIEW BAG</button>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>

      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
}
