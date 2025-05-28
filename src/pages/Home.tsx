import React from 'react';

const Home: React.FC = () => {
  return (
    <main>
      <section className="hero">
        <video className="background-video" autoPlay muted loop playsInline>
          <source src="/assets/videos/andurilExample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <p>Meet our aircraft</p>
          <h1>A-30 CONDOR</h1>
          <div className="hero-buttons">
            <a
              href="/assets/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              📄 Download Brochure
            </a>
            <a href="/aircraft" className="view-link">
              → View Aircraft Page
            </a>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Capstone Aerospace is a student-led organization at Cal Poly, San Luis Obispo, dedicated to advancing aerospace technology and education. Our mission is to design and build innovative aircraft that push the boundaries of engineering and performance.
        </p>
      </section>
    </main>
  );
};

export default Home;