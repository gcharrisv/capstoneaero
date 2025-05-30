import React, { useState, useEffect } from "react";
import teamData from "../data/teamData.ts";
import TeamCard from "../components/TeamCard";
import TeamModal from "../components/TeamModal";
import "../styles/team.css";

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleOpenModal = (name: string) => {
    setSelectedMember(name);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    document.title = "Capstone Aerospace | Team";
  }, []);

  const member = selectedMember ? teamData[selectedMember] : null;

  return (
    <main>
      <section className="hero hero-team">
        <div className="hero-team-img">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/The_Team_Photo.jpeg`}
            alt="Team Photo"
          />
        </div>
        <div className="hero-team-text">
          <h1>MEET THE TEAM</h1>
        </div>
      </section>

      <section className="team-video">
        <h2>Behind the Project</h2>
        <img
          src={`${import.meta.env.BASE_URL}assets/images/FlyingGreyRender6.png`}
          alt="Behind the Project"
        />
      </section>

      <hr className="section-divider" />

      <section className="team-grid">
        {Object.entries(teamData).map(([name, data]) => (
          <TeamCard
            key={name}
            name={name}
            img={data.img}
            role={data.role}
            onClick={() => handleOpenModal(name)}
          />
        ))}
      </section>

      {selectedMember && member && (
        <TeamModal
          name={selectedMember}
          role={member.role}
          img={member.img}
          desc={member.desc}
          linkedin={member.linkedin}
          resume={member.resume}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default Team;
