import React from 'react';

interface TeamCardProps {
  name: string;
  img: string;
  role: string;
  onClick: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, img, role, onClick }) => {
  return (
    <article className="team-card" onClick={onClick}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <h4>{role}</h4>
    </article>
  );
};

export default TeamCard;