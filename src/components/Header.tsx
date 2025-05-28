import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/index.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="site-header" ref={navRef}>
      <Link to="/" className="company-logo-header">
        Capstone Aerospace
      </Link>

      <button
        id="menu-button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav
        id="nav-links"
        className={`nav-links ${menuOpen ? '' : 'hidden'}`}
        aria-label="Main Navigation"
      >
        <Link to="/aircraft">Aircraft</Link>
        <Link to="/team">Team</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </header>
  );
};

export default Header;
