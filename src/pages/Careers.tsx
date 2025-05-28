import React from 'react';

const Careers: React.FC = () => {

  const handleApply = (jobTitle: string) => {
    alert(`Thanks for your interest in the ${jobTitle} position! We'll get back to you soon.`);
  };

  return (
    <main>
      <section id="careers">
        <h1 className="careers-heading">JOIN OUR TEAM</h1>

        <div className="job-listing">
          <h2>Job Title: Aerospace Engineer</h2>
          <p>Location: San Luis Obispo, CA</p>
          <p>
            Description: We are looking for a passionate aerospace engineer to join our team. The ideal candidate will have experience in aircraft design and systems engineering.
          </p>
          <button className="apply-button" onClick={() => handleApply('Aerospace Engineer')}>
            Apply Now
          </button>
        </div>

        <div className="job-listing">
          <h2>Job Title: Software Engineer</h2>
          <p>Location: Remote</p>
          <p>
            Description: Join our software development team to work on cutting-edge aerospace applications. Experience with C++ and Python is a plus.
          </p>
          <button className="apply-button" onClick={() => handleApply('Software Engineer')}>
            Apply Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Careers;