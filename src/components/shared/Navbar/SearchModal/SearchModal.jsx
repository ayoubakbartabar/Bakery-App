import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import "./SearchModal.css";

export default function SearchModal({ onClose }) {
  // set Hook
  const [query, setQuery] = useState("");

  // create search input handler
  const searchInputHandler = () => {
    // set if problem
    if (query.trim()) {
      console.log(query);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0, y: "-30%" }}
          animate={{ scale: 1, opacity: 1, y: "0%" }}
          exit={{ scale: 0.8, opacity: 0, y: "-30%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button className="close-btn" onClick={onClose}>
            <IoClose size={24} />
          </button>
          <h2>Enter your keyword</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchInputHandler()}
          />
          <button className="search-btn" onClick={searchInputHandler}>
            Search
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
