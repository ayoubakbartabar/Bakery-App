import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaCcVisa, FaCcMastercard, FaPaypal } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='footer-section'>
      <div className='footer-container'>
        <div className='footer-brand'>
          <div className='logo-circle'>
            <img src="public\logo-light.avif" alt="" />
          </div>
          <p className='footer-description'>
            Tart bear claw cake tiramisu chocolate bar gummies dragée lemon drops brownie.
          </p>
          <div className='footer-socials'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div className='footer-newsletter'>
          <h3>Get news & offer</h3>
          <div className='newsletter-form'>
            <input type='email' placeholder='Your Mail Address' />
            <button>Subscribe</button>
          </div>
          <p className='no-spam'>* Don’t worry, we never spam</p>
        </div>

        <div className='footer-contact'>
          <h3>Contact with me</h3>
          <p>PO Box 16122 Collins Street West, Victoria 8007 Australia</p>
          <p>(+84 ) 7534 9773, (+84 ) 874 548</p>
        </div>

        <div className='footer-hours'>
          <h3>Time to Open</h3>
          <p>Monday - Friday:<br />08:00 am – 08:30 pm</p>
          <p>Saturday - Sunday:<br />10:00 am – 16:30 pm</p>
          <div className='payment-icons'>
            <FaCcMastercard />
            <FaPaypal />
            <FaCcVisa />
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© Copyright by <span>Bready Store</span>. Design by <a href='#'>Alena Studio</a>.</p>
        <button className='scroll-top' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑</button>
      </div>
    </footer>
  );
} 
