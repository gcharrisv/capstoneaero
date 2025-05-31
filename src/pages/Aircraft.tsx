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

      <section className="aircraft-intro">
        <div className="intro-content">
          <div className="intro-image">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/FlyingAllRender2.png`}
              alt="Outline of A-30 Condor"
            />
          </div>
          <div className="intro-text">
            <p className="intro-label">Light Tactical Aircraft</p>
            <h2 className="intro-title">Built for the Fight, Ready for the Frontier</h2>
            <p>
              The A-30 Condor is a <strong>rugged, high-performance strike platform</strong> purpose-built for Close Air Support and Counter-Insurgency missions in the world's most demanding environments. Designed to thrive in austere and expeditionary settings, it delivers precision lethality where it matters most.
            </p>
            <p>
              With <strong>modular systems, rapid deployment capability, and exceptional situational awareness</strong>, the Condor gives ground forces the support they need—fast. Whether it’s a dirt strip in a conflict zone or a forward-operating base in the mountains, the Condor gets there, hits hard, and gets out.
            </p>
          </div>
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
            href={`${import.meta.env.BASE_URL}assets/capstone_aerospace_brochure.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Brochure
          </a>

          <a
            href={`${import.meta.env.BASE_URL}assets/capstone_aerospace_symposium_poster.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Symposium Poster
          </a>
        </div>
      </section>

      <hr className="section-divider" />

      <div className="hotspots-title">
        <h2 className="hotspots-title">Key Features</h2>
      </div>

      <Hotspots />

      <section className="aircraft-pillars">
        <div className="pillar">
          <h3>Mission-Ready, Cost-Effective</h3>
          <hr />
          <p>
            Built with affordability in mind, the A-30 Condor delivers frontline capabilities at a fraction of the cost of legacy strike aircraft. Leveraging commercial off-the-shelf components and a streamlined digital production pipeline, the Condor minimizes both acquisition and lifecycle costs—without sacrificing performance.
          </p>
        </div>

        <div className="pillar">
          <h3>Multi-Role Flexibility</h3>
          <hr />
          <p>
            Optimized for Close Air Support and Counter-Insurgency missions, the Condor also adapts seamlessly to <strong>training, ISR, and light attack roles</strong>. Its open mission systems architecture allows rapid reconfiguration to meet diverse operational needs across conventional and irregular conflicts.
          </p>
        </div>

        <div className="pillar">
          <h3>Built for the Harshest Conditions</h3>
          <hr />
          <p>
            Engineered for austere and expeditionary operations, the A-30 is rugged enough for unprepared runways and forward arming and refueling points. From jungle to desert, it’s designed to operate where others can't—supporting ground forces in the most demanding environments on Earth.
          </p>
        </div>

        <div className="pillar">
          <h3>Global Force Multiplier</h3>
          <hr />
          <p>
            With scalable capabilities, easy-to-maintain systems, and NATO interoperability, the Condor is positioned as a versatile solution for both allied air forces and emerging defense markets. It offers a strategic mix of power, affordability, and reliability tailored for global mission sets.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Aircraft;