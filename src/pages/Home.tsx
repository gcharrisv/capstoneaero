import React, { useEffect } from "react";
import "../styles/home.css";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Capstone Aerospace";
  }, []);

  return (
    <main>

      <h1 className="visually-hidden">Capstone Aerospace</h1>

      <section className="aircraft-hero-section">
        <div className="aircraft-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL
              }assets/images/FlyingDesertRender7.png`}
            alt="A-30 Condor in Flight"
            className="aircraft-hero-foreground"
          />

          <div className="hero-overlay">
            <p className="hero-subtitle">Meet Our Aircraft</p>
            <h2 className="hero-title">The A-30 CONDOR</h2>
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
            <h2 className="hero-title">Meet Our Team</h2>
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
            <h2 className="hero-title">Careers at Capstone Aerospace</h2>
            <a href="#/careers" className="view-link learn-more-link">
              → Learn More About Careers
            </a>
          </div>
        </div>
      </section>

      <section className="calpoly-hero-section">

        <div className="calpoly-hero-container">
          <div className="calpoly-content">
            <div className="calpoly-image-block">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/Learn_By_Doing.png`}
                alt="Cal Poly Aerospace Engineering Logo"
                className="calpoly-logo"
              />
            </div>

            <div className="calpoly-text-block">
              <h2>Cal Poly Aerospace Engineering</h2>
              <p>
                Capstone Aerospace would like to extend a heartfelt thank you to the Cal Poly Aerospace Engineering Program for
                an incredible educational experience. Your commitment to hands-on learning and real-world applications has empowered
                our engineers to tackle meaningful problems and innovate with confidence.
              </p>
              <a
                href="https://aero.calpoly.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-link learn-more-link"
              >
                → Learn More About Cal Poly San Luis Obispo's Aerospace Engineering Program
              </a>
            </div>
          </div>

          <div className="calpoly-video-container">
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/xQX11kAX240"
              title="Cal Poly Aerospace"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
