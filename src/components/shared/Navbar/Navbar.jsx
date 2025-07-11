import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useProductInteraction } from "../ProductInteractionContext/ProductInteractionContext";
import { IoCloseCircleSharp } from "react-icons/io5";

import "./Navbar.css";
import SearchModal from "./SearchModal/SearchModal";

export default function Navbar() {
  // State hooks
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Context
  const { buyProducts, removeProduct } = useProductInteraction();

  const cartItems = Object.values(buyProducts);
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.totalPrice),
    0
  );

  const leftMenu = [
    { id: 1, title: "ABOUT", href: "/about" },
    { id: 2, title: "PRODUCT", href: "/product" },
    { id: 3, title: "BLOGS", href: "/blogs" },
  ];

  const rightMenu = [
    { id: 4, title: "CONTACT", href: "/contact" },
    { id: 5, title: "GALLERY", href: "/gallery" },
  ];

  // Toggle cart open/close on click
  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="nav-bar-section-bg">
      <nav className="navbar">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hamburger-icon" />
        </button>

        <div className="navbar-logo">
          <Link to="/">
            <img src="/images/navbar-logo.avif" alt="Logo" />
          </Link>
        </div>

        <ul className="navbar-left desktop-only">
          {leftMenu.map((item) => (
            <li key={item.id}>
              <Link className="menu-link" to={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="navbar-right desktop-only">
          {rightMenu.map((item) => (
            <li key={item.id}>
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

          <li className="cart-wrapper">
            <button className="icon-btn cart" onClick={toggleCart}>
              <RiShoppingBasket2Line className="shoppingIcon" />
              <span className="badge">{totalCount}</span>
            </button>

            {isCartOpen && (
              <div className="cart-dropdown">
                {cartItems.length === 0 ? (
                  <div className="empty-version">
                    <p className="cart-empty">Your cart is currently empty.</p>
                    <a href="/product" className="continue-shopping">
                      Continue shopping
                    </a>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-info">
                          <div>{item.title}</div>
                          <div>
                            {item.count} × $
                            {parseFloat(item.price.replace("$", "")).toFixed(2)}
                          </div>
                        </div>
                        <IoCloseCircleSharp
                          className="cart-item-remove-btn"
                          onClick={() => removeProduct(item.id)}
                        />
                      </div>
                    ))}
                    <div className="cart-subtotal">
                      <span>Subtotal:</span>
                      <strong>${cartTotal.toFixed(2)}</strong>
                    </div>
                    <Link className="view-bag-btn" to="/shoppingBag">
                      VIEW BAG
                    </Link>
                  </>
                )}
              </div>
            )}
          </li>
        </ul>
      </nav>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            className="close-mobile-menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <IoClose size={24} />
          </button>
          <ul className="mobile-menu-list">
            {[...leftMenu, ...rightMenu].map((item) => (
              <li key={item.id}>
                <Link to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <li className="mobile-cart-wrapper">
            <button
              className="icon-btn cart mobile-cart-btn"
              onClick={toggleCart}
            >
              <RiShoppingBasket2Line className="shoppingIcon" />
              <span className="badge">{totalCount}</span>
            </button>

            {isCartOpen && (
              <div className="mobile-cart-dropdown">
                {cartItems.length === 0 ? (
                  <div className="empty-version">
                    <p className="cart-empty">Your cart is currently empty.</p>
                    <Link to="/product" className="continue-shopping">
                      Continue shopping
                    </Link>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <div className="cart-item-info">
                          <p>{item.title}</p>
                          <p>
                            {item.count} × $
                            {parseFloat(item.price.replace("$", "")).toFixed(2)}
                          </p>
                        </div>
                        <IoCloseCircleSharp
                          className="cart-item-remove-btn"
                          onClick={() => removeProduct(item.id)}
                        />
                      </div>
                    ))}
                    <div className="cart-subtotal">
                      <span>Subtotal:</span>
                      <strong>${cartTotal.toFixed(2)}</strong>
                    </div>
                    <Link className="view-bag-btn" to="/shoppingBag">
                      VIEW BAG
                    </Link>
                  </>
                )}
              </div>
            )}
          </li>
        </div>
      )}

      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
}
