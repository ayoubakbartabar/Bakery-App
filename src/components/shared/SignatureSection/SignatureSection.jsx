import React from "react";
import "./SignatureSection.css";

export default function SignatureSection() {
  return (
    <div className="signature-section-bg">
      <section className="signature-section">
        <img
          className="signature-section-img"
          src="/images/signature_grande.webp"
          alt="Butter cream frosting image"
        />

        <div className="signature-section-left-side">
          <h2 className="signature-section-left-side-title">
            “It seems that every country that can get its hands on butter has
            its opinion of what butter cream frosting should be. Some are made
            with eggs and butter.”
          </h2>
          <p className="signature-section-left-side-paragraph">
            Sunshine - CEO Bakery
          </p>
          <img
            className="signature-section-left-side-image"
            src="/images/signature-2_grande.png"
            alt="CEO Signature"
          />
        </div>
      </section>
    </div>
  );
}
