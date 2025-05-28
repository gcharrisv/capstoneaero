import React from 'react';

const Aircraft: React.FC = () => {
  return (
    <main>
      <section className="hero hero-aircraft">
        <video className="aircraft-clean-video" autoPlay muted loop playsInline>
          <source src="/assets/videos/andurilExample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>A-30 CONDOR</h1>
          <p>Light Tactical Aircraft Designed for COIN & CAS Missions</p>
        </div>
      </section>

      <section className="aircraft-details">
        <div className="aircraft-details-layout">
          <div className="turntable-container">
            <img
              className="turntable-image"
              src="/assets/images/TopViewDecaledGray.png"
              alt="A-30 Condor Turntable"
            />
          </div>

          <div className="aircraft-text">
            <p>A-30 Condor</p>
            <h2>Overview</h2>
            <p>
              The A-30 Condor is a light tactical aircraft designed for Counter-Insurgency (COIN) and Close Air Support
              (CAS) missions. It features advanced avionics, a high-performance engine, and a versatile payload
              capacity.
            </p>
            <h3>Specifications</h3>
            <ul>
              <li>Wingspan: 15.2 m</li>
              <li>Length: 12.5 m</li>
              <li>Height: 4.5 m</li>
              <li>Max Takeoff Weight: 3,500 kg</li>
              <li>Engine: Turbocharged Piston Engine</li>
              <li>Max Speed: 300 knots</li>
              <li>Range: 1,200 nautical miles</li>
              <li>Ceiling: 25,000 feet</li>
              <li>Payload Capacity: 1,000 kg</li>
            </ul>
          </div>
          <div className="hero-buttons">
            <a
              href="/assets/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              📄 Download Brochure
            </a>
          </div>
        </div>
      </section>

      <section className="aircraft-features">
        <h2>Key Features</h2>
        <img
          className="feature-image"
          src="/assets/images/GrayDecaled1.png"
          alt="A-30 Condor Features"
        />
        <ul>
          <li>Modular Avionics Suite</li>
          <li>Multi-Role Capability</li>
          <li>Reliable High-Performance Engine</li>
          <li>Versatile Payload Options</li>
          <li>Enhanced Situational Awareness</li>
        </ul>
      </section>

      <section className="mission-video">
        <h2>Mission Video</h2>
        <video className="mission-video" autoPlay muted loop playsInline>
          <source src="/assets/videos/missionExampleVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Watch the A-30 Condor in action during a simulated mission.</p>
      </section>
    </main>
  );
};

export default Aircraft;