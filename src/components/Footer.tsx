import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-logos">
        <div className="footer-logo-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/capstone_logo_White.png`}
            alt="Capstone Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-logo-divider"></div>

        <div className="footer-logo-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/cal_poly_white.png`}
            alt="Cal Poly Logo"
            className="footer-logo"
          />
        </div>
      </div>


      <div className="footer-contact">
        <a href="mailto:capstoneaerospacesystems@gmail.com" className="connect-button">
          CONNECT
        </a>
      </div>

      <nav className="footer-links">
        <Link to="/">HOME</Link>
        <Link to="/aircraft">AIRCRAFT</Link>
        <Link to="/team">TEAM</Link>
        <Link to="/careers">CAREERS</Link>
      </nav>

      <div className="footer-bottom">
        <p className="footer-location">San Luis Obispo, California</p>
        <p className="footer-copyright">Copyright © {new Date().getFullYear()} Capstone Aerospace</p>
      </div>

    </footer>
  );
};

export default Footer;