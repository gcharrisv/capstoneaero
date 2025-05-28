import React, { useEffect } from "react";
import "../styles/home.css";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Capstone Aerospace";
  }, []);

  return (
    <main>
      <section className="aircraft-hero-section">
        <div className="aircraft-hero-wrapper">
          <img
            src={`${
              import.meta.env.BASE_URL
            }assets/images/FlyingDesertRender7.png`}
            alt="A-30 Condor in Flight"
            className="aircraft-hero-foreground"
          />

          <div className="hero-overlay">
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

      <section className="team-hero-section">
        <div className="team-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/The_Team_Photo.jpeg`}
            alt="Capstone Aerospace Team"
            className="team-hero-foreground"
          />

          <div className="hero-overlay">
            <h1 className="hero-title">Meet Our Team</h1>
            <a href="#/team" className="view-link learn-more-link">
              → Learn More About Our Team
            </a>
          </div>
        </div>
      </section>

      <section className="career-hero-section">
        <div className="career-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/FrontViewDecaledGray_Zoom.png`}
            alt="Careers at Capstone Aerospace"
            className="career-hero-foreground"
          />

          <div className="hero-overlay">
            <p className="hero-subtitle">Join Our Team</p>
            <h1 className="hero-title">Careers at Capstone Aerospace</h1>
            <a href="#/careers" className="view-link learn-more-link">
              → Learn More About Careers
            </a>
          </div>
        </div>
      </section>

      <section className="calpoly-hero-section">
        <div className="calpoly-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/CalPolyRender.png`}
            alt="Cal Poly Capstone Project"
            className="calpoly-hero-foreground"
          />

          <div className="calpoly-hero-overlay">
            <p className="hero-subtitle">Capstone Project</p>
            <h1 className="hero-title">Cal Poly Aerospace Engineering</h1>
            <a href="#/calpoly" className="view-link learn-more-link">
              → Learn More About Our Capstone Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
