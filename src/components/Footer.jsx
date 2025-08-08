import React from "react";
import "./Footer.scss"; // Import styles for the Footer component

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-logo">
          <div className="footer-logo">
            <img
              className="logo"
              src="https://ik.imagekit.io/bertbigbite/logos/logo.png?updatedAt=1749121280588"
              alt="Learn JS logo"
            />
            <span>Learn JS</span>
          </div>
          <p className="footer-tagline">Learning to code, confidently.</p>
          <div className="bb-logo">        <img src="https://ik.imagekit.io/bertbigbite/bigbite-logo-white.png?updatedAt=1745494405551" alt="" />
</div>
        </div>

        <div className="footer-section-contact">
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:enquiries@bigbite.net">enquiries@bigbite.net</a>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <a
              href="https://bigbite.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Big Bite
            </a>
          </div>
        </div>
      </div>


    </footer>
  );
}
export default Footer;
