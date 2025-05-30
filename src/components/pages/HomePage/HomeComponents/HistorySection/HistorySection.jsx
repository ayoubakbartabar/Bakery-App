import React, { useRef, useState } from "react";
import HistorySectionData from "./HistorySectionData";
import "./HistorySection.css";

export default function HistorySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(HistorySectionData.length / itemsPerPage);

  const startXRef = useRef(null);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startXRef.current;

    if (diff > 50 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else if (diff < -50 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const diff = endX - startXRef.current;

    if (diff > 50 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else if (diff < -50 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getVisibleItems = () => {
    const start = currentPage * itemsPerPage;
    return HistorySectionData.slice(start, start + itemsPerPage);
  };

  return (
    <section className="history-section">
      <h2 className="history-title">Our History</h2>
      <p className="history-subtitle">LIVE WITH PASSION</p>
      <img
        className="some-products-section-top-svg"
        src="src/assets/images/floral_grande.avif"
        alt="floral decoration"
      />

      <div
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="slider-track no-scroll">
          {getVisibleItems().map((item) => (
            <div key={item.id} className="history-card">
              <img
                src={item.image}
                alt={item.title}
                className="history-image"
              />
              <p className="history-date">{item.date}</p>
              <h3 className="history-card-title">{item.title.toUpperCase()}</h3>
              <p className="history-author">
                By <span>{item.author}</span>
              </p>
              <p className="history-paragraph">{item.paragraph}</p>
              <a href="#" className="read-more">
                READ MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
