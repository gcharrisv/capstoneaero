import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Left: Logos */}
      <div className="footer-logos">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/capstone_aerospace_logo_full.png`}
          alt="Capstone Logo"
          className="footer-logo"
        />
        <img
          src={`${import.meta.env.BASE_URL}assets/images/cal_poly_green.png`}
          alt="Cal Poly Logo"
          className="footer-logo"
        />
      </div>

      {/* Center: Email Button */}
      <div className="footer-contact">
        <a href="mailto:capstoneaerospace@calpoly.edu" className="connect-button">
          Connect
        </a>
      </div>

      {/* Right: Navigation Links */}
      <nav className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/aircraft">Aircraft</Link>
        <Link to="/team">Team</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </footer>
  );
};

export default Footer;