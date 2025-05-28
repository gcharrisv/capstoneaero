import React from 'react';
import type { TeamMember } from '../data/teamData';

interface TeamModalProps extends TeamMember {
  name: string;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ name, role, img, desc, linkedin, resume, onClose }) => {
  return (
    <div className="team-modal show" onClick={(e) => e.currentTarget === e.target && onClose()}>
      <div className="team-modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <div className="team-modal-body">
          <img src={img} alt={name} />
          <div className="modal-text">
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{desc}</p>
            <div className="modal-links">
              <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
