import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import "./DeliverySection.css";

export default function DeliverySection() {
  return (
    <section className="delivery-section">
      <div className="overlay">
        <div className="contact-info">
          <div className="office">
            <h3>OFFICE AT AMERICA</h3>
            <p>189/32 BASEMENT COMPANY, PARIS, FRANCE</p>
            <p>
              <IoMailUnreadOutline size={16} /> hello@bready.com
            </p>
            <p>
              <CiPhone size={16} /> +1 650-253-0000
            </p>
          </div>
          <div className="office">
            <h3>OFFICE AT PARIS</h3>
            <p>189/32 BASEMENT COMPANY, PARIS, FRANCE</p>
            <p>
              <IoMailUnreadOutline size={16} /> hello@bready.com
            </p>
            <p>
              <CiPhone size={16} /> +1 650-253-0000
            </p>
          </div>
          <div className="office">
            <h3>OFFICE AT CANADA</h3>
            <p>189/32 BASEMENT COMPANY, PARIS, FRANCE</p>
            <p>
              <IoMailUnreadOutline size={16} /> hello@bready.com
            </p>
            <p>
              <CiPhone size={16} /> +1 650-253-0000
            </p>
          </div>
        </div>
        <div className="delivery-form">
          <h2>DELIVERY NOW</h2>
          <p>
            Delivery free wafer fruitcake. Pastry toffee wafer gingerbread
            liquorice. Apple pie gingerbread caramels toffee tart bonbon.
          </p>
          <form>
            <div className="form-group">
              <input type="text" name="name" required placeholder=" " />
              <label>NAME*</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" required placeholder=" " />
              <label>EMAIL*</label>
            </div>
            <div className="form-group">
              <input type="tel" name="phone" required placeholder=" " />
              <label>PHONE NUMBER*</label>
            </div>
            <div className="form-group">
              <textarea name="message" required placeholder=" "></textarea>
              <label>MESSAGE*</label>
            </div>
            <button type="submit">ORDER NOW</button>
          </form>
        </div>
      </div>
    </section>
  );
}
