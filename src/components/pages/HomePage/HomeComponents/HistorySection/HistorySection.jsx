import React, { useRef, useState, useCallback } from "react";
import HistorySectionData from "./HistorySectionData";
import "./HistorySection.css";

export default function HistorySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(HistorySectionData.length / itemsPerPage);

  // Store the starting X coordinate of touch or mouse event
  const startXRef = useRef(null);

  /**
   * Handle the start of swipe (touch or mouse down)
   * @param {number} clientX - X coordinate of the pointer event
   */
  const handleStart = useCallback((clientX) => {
    startXRef.current = clientX;
  }, []);

  /**
   * Handle the end of swipe (touch or mouse up)
   * Calculate difference and update current page accordingly
   * @param {number} clientX - X coordinate of the pointer event
   */
  const handleEnd = useCallback(
    (clientX) => {
      if (startXRef.current === null) return;

      const diff = clientX - startXRef.current;

      if (diff > 50 && currentPage > 0) {
        setCurrentPage((prev) => prev - 1);
      } else if (diff < -50 && currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 1);
      }

      // Reset startX after processing
      startXRef.current = null;
    },
    [currentPage, totalPages]
  );

  // Touch event handlers
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => handleEnd(e.changedTouches[0].clientX);

  // Mouse event handlers
  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseUp = (e) => handleEnd(e.clientX);

  // Get currently visible items based on currentPage
  const getVisibleItems = () => {
    const start = currentPage * itemsPerPage;
    return HistorySectionData.slice(start, start + itemsPerPage);
  };

  return (
    <div className="history-section-bg">
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
              <article
                key={item.id}
                className="history-card"
                aria-label={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="history-image"
                />
                <p className="history-date">{item.date}</p>
                <h3 className="history-card-title">
                  {item.title.toUpperCase()}
                </h3>
                <p className="history-author">
                  By <span>{item.author}</span>
                </p>
                <p className="history-paragraph">{item.paragraph}</p>
                <a
                  href="#"
                  className="read-more"
                  aria-label={`Read more about ${item.title}`}
                >
                  READ MORE
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
