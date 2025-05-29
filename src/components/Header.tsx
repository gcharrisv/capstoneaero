import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHideOnScroll(currentY > lastScrollY.current && currentY > 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      ref={navRef}
      className={hideOnScroll ? 'hide-header' : ''}
    >
      <Link to="/" className="company-logo-link">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/capstone_logo_White.png`}
          alt="Capstone Aerospace Logo"
          className="company-logo-image"
        />
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
        className={`nav-links ${isMobileView && !menuOpen ? 'hidden' : ''}`}
        aria-label="Main Navigation"
      >
        <Link to="/aircraft">AIRCRAFT</Link>
        <Link to="/team">TEAM</Link>
        <Link to="/careers">CAREERS</Link>
      </nav>
    </header>
  );
};

export default Header;

