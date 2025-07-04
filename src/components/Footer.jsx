import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-logo">
          <div className="footer-logo">
            <img
              className="logo"
              src="https://ik.imagekit.io/bertbigbite/logos/logo_dark.png?updatedAt=1749209733881"
              alt="Learn JS logo"
            />
            <span>Learn JS</span>
          </div>
          <p className="footer-tagline">Learning to code, confidently.</p>
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

      <div className="footer-bottom">
        <div className="bb-logo">Big Bite</div>
      </div>
    </footer>
  );
}
export default Footer;
