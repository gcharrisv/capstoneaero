import React, { useEffect } from 'react';
import '../styles/home.css';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Capstone Aerospace";
  }, []);

  return (
    <main>
      <section className="aircraft-hero-section">
        <div className="aircraft-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/FlyingDesertRender7.png`}
            alt="A-30 Condor in Flight"
            className="aircraft-hero-background"
          />

          <div className="aircraft-hero-overlay">
            <p className="hero-subtitle">Meet Our Aircraft</p>
            <h1 className="hero-title">The A-30 CONDOR</h1>
            <a
              href={`${import.meta.env.BASE_URL}assets/brochure.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              📄 Download Brochure
            </a>
            <a href="#/aircraft" className="view-link learn-more-link">
              → Learn More About Our Aircraft
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
