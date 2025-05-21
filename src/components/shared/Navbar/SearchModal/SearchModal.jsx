import React, { useState } from "react";
import "./SearchModal.css";
import { IoClose } from "react-icons/io5";

export default function SearchModal({onClose}) {
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
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <h2>Enter your keyword</h2>
        <input
          type="text"
          placeholder="..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={searchInputHandler}>
          search
        </button>
      </div>
    </div>
  );
}
