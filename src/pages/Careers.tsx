import React, { useState, useEffect } from 'react';
import '../styles/careers.css';

const Careers: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    document.title = "Capstone Aerospace | Careers";
  }, []);

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Application for ${selectedJob}`, formData);
    setModalOpen(false);
    alert(`Thank you ${formData.name}, we'll review your application for the ${selectedJob} role and contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <section id="careers">
        <h1 className="careers-heading">JOIN OUR TEAM</h1>

        {[
          {
            title: 'Aerospace Engineer',
            location: 'San Luis Obispo, CA',
            description: 'Design and analyze aircraft systems for next-gen tactical missions. Collaborate on CAD, structural performance, and systems integration.',
            salary: '$75,000 - $95,000'
          },
          {
            title: 'Software Engineer',
            location: 'Remote',
            description: 'Develop real-time embedded systems and mission planning tools. Work with full-stack technologies to support autonomous platforms.',
            salary: '$85,000 - $110,000'
          },
          {
            title: 'Chief Executive Officer',
            location: 'Remote',
            description: 'Lead the strategic growth and operations of Capstone Aerospace. Must have deep industry knowledge and a startup mindset.',
            salary: '$150,000+'
          },
          {
            title: 'Manufacturing Engineer',
            location: 'Remote / On-site',
            description: 'Develop lean manufacturing workflows, support rapid prototyping and production scaling for new aerospace systems.',
            salary: '$70,000 - $90,000'
          },
          {
            title: 'Human Resources Representative',
            location: 'Remote',
            description: 'Manage recruitment, onboarding, and employee relations. Support a high-performance team culture.',
            salary: '$60,000 - $80,000'
          }
        ].map(({ title, location, description, salary }) => (
          <div className="job-listing" key={title}>
            <h2>Job Title: {title}</h2>
            <p>Location: {location}</p>
            <p>{description}</p>
            <p className="salary">Salary: {salary}</p>
            <button className="apply-button" onClick={() => handleApply(title)}>Apply Now</button>
          </div>
        ))}

        {modalOpen && (
          <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}>
            <div className="modal-content">
              <div className="modal-close" onClick={() => setModalOpen(false)}>&times;</div>
              <h3>Apply for {selectedJob}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Tell us why you're a great fit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button type="submit">Submit Application</button>
              </form>
            </div>
          </div>
        )}

        <img
          src={`${import.meta.env.BASE_URL}assets/images/Howdy.png`}
          alt="Careers"
          className="howdy-image"
        />
      </section>
    </main>
  );
};

export default Careers;
