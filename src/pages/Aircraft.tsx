import React, { useEffect } from 'react';
import Hotspots from '../components/Hotspots';
import '../styles/mission.css';
import '../styles/aircraft.css';


const Aircraft: React.FC = () => {
  useEffect(() => {
    document.title = "Capstone Aerospace | Aircraft";
  }, []);
  return (
    <main>

      <section className="hero hero-aircraft">
        <div className="hero-aircraft-background">
          <img
            className="background-image"
            src={`${import.meta.env.BASE_URL}assets/images/hangar_flags.png`}
            alt="Hangar Background"
          />
        </div>

        <div className="hero-aircraft-text">
          <h1>A-30 CONDOR</h1>
          <p>Light Tactical Aircraft Designed for COIN & CAS Missions</p>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="aircraft-spec-section">
        <div className="spec-content">
          <div className="spec-text">
            <h3>A-30 Condor</h3>
            <h2>Overview</h2>

            <div className="spec-table">
              <div><strong>Max Takeoff Weight</strong><span>14,200 lb</span></div>
              <div><strong>Power</strong><span>1700 hp</span></div>
              <div><strong>Max Speed</strong><span>325 KTAS</span></div>
              <div><strong>Range</strong><span>1,800 nm</span></div>
              <div><strong>Ceiling</strong><span>25,000 ft</span></div>
              <div><strong>Payload Capacity</strong><span>3,500 lb</span></div>
            </div>

            {/* Only show in desktop */}
            <div className="spec-image desktop-only">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/front_view.png`}
                alt="Front View"
              />
            </div>
          </div>

          {/* Only show in desktop */}
          <div className="spec-image desktop-only">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/top_side_view.png`}
              alt="Top & Side View"
            />
          </div>

          {/* Only show in mobile */}
          <div className="spec-image mobile-only">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/stacked_views.png`}
              alt="Stacked Views"
            />
          </div>
        </div>

        <div className="buttons">
          <a
            href={`${import.meta.env.BASE_URL}assets/brochure.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Brochure
          </a>

          <a
            href={`${import.meta.env.BASE_URL}assets/poster.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Symposium Poster
          </a>
        </div>
      </section>


      <hr className="section-divider" />

      <Hotspots />

      <section className="aircraft-features">
        <hr className="section-divider" />
        <div className="features-content">
          <div className="features-text">
            <h2>Key Features</h2>
            <ul>
              <li>Modular Avionics Suite</li>
              <li>Multi-Role Capability</li>
              <li>Reliable High-Performance Engine</li>
              <li>Versatile Payload Options</li>
              <li>Enhanced Situational Awareness</li>
            </ul>
          </div>

          <div className="features-image">
            <img
              className="feature-image"
              src={`${import.meta.env.BASE_URL}assets/images/GrayDecaled1.png`}
              alt="A-30 Condor Features"
            />
          </div>
        </div>

        <hr className="section-divider" />

        <section className="mission-profiles">
          <h2>Mission Profiles</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Strike Mission</h3>
              <p>
                Designed for rapid response and precision air-to-ground engagement using guided munitions and onboard sensors.
              </p>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/strikemissionprofile.png`}
                alt="Strike Mission"
                className="mission-image"
              />
            </div>

            <div className="mission-card">
              <h3>Surveillance Mission</h3>
              <p>
                Optimized for long-endurance ISR missions with EO/IR and SIGINT payloads, enabling persistent battlefield awareness.
              </p>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/loitermission.png`}
                alt="Surveillance Mission"
                className="mission-image"
              />
            </div>
          </div>
        </section>

      </section>
    </main>
  );
};

export default Aircraft;