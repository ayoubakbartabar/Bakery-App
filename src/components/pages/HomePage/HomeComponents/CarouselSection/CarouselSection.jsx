import React, { useState, useRef } from "react";
import "./CarouselSection.css";
import CarouselSectionData from "./CarouselSectionData";

export default function CarouselSection() {
  //set Hook
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef(null);

  const testimonial = CarouselSectionData[currentIndex];

  // Handle swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (deltaX > 50) {
      handleSwipe("left");
    } else if (deltaX < -50) {
      handleSwipe("right");
    }
    touchStartX.current = null;
  };

  // Swipe/Transition logic
  const handleSwipe = (direction) => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      if (direction === "right") {
        setCurrentIndex((prev) => (prev + 1) % CarouselSectionData.length);
      } else if (direction === "left") {
        setCurrentIndex((prev) =>
          prev === 0 ? CarouselSectionData.length - 1 : prev - 1
        );
      }
      setAnimating(false);
    }, 400); // transition duration
  };

  // Handle dot click
  const handleDotClick = (index) => {
    if (index === currentIndex) return;

    setAnimating(true); // start animation
    setTimeout(() => {
      setCurrentIndex(index); // change item after zoom-z
      setAnimating(false); // remove animation
    }, 400);
  };

  return (
    <section className="carousel-section">
      <div
        className={`carousel-container ${animating ? "zoom-z" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="carousel-avatar"
        />

        <div className="carousel-stars">
          {"★".repeat(testimonial.rate)}
          {"☆".repeat(testimonial.allstars - testimonial.rate)}
        </div>

        <p className="carousel-text">{testimonial.text}</p>

        <hr className="carousel-line" />

        <p className="carousel-author">
          <strong>{testimonial.name}</strong>
          {testimonial.role}
        </p>

        <div className="carousel-dots">
          {CarouselSectionData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
