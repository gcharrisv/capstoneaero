export interface TeamMember {
  img: string;
  role: string;
  desc: string;
  linkedin: string;
  resume: string;
}

const base = import.meta.env.BASE_URL;

const teamData: Record<string, TeamMember> = {
  "George Harrison": {
    img: `${base}assets/images/George_img.jpeg`,
    role: "Configuration & Systems Engineer",
    desc: "George is a graduating fifth-year Aerospace Engineering student at Cal Poly, concentrating in Aeronautics with a minor in Computer Science. He led the Computer-Aided Design (CAD) of the A-30 Condor, ensuring all subsystems were accurately integrated within the aircraft's outer mold line (OML). George collaborated closely with the engineering team to maintain aerodynamic performance and design intent throughout the development process. He is excited to begin his professional career as a Weapons Integration Engineer for the F-22 Raptor at Edwards Air Force Base.",
    linkedin: "https://www.linkedin.com/in/georgeharrison",
    resume: `${base}assets/resumes/Harrison_Extended_Resume_2025.pdf`
  },
  "Jack Kisling": {
    img: `${base}assets/images/JackK_img.jpeg`,
    role: "Configuration & Systems Engineer",
    desc: "Jack is responsible for system integration and ensuring design consistency across the A-30 Condor.",
    linkedin: "https://linkedin.com/in/jackkisling",
    resume: `${base}assets/resumes/jack_resume.pdf`
  },
  "Euan Houston": {
    img: `${base}assets/images/Euan_img.jpg`,
    role: "Performance Engineer",
    desc: "Euan is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/euanhousten",
    resume: `${base}assets/resumes/euan_resume.pdf`
  },
  "Luca Flick-Kaiser": {
    img: `${base}assets/images/Luca_img.jpg`,
    role: "Aerodynamics Engineer",
    desc: "Luca is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/lucaflickkaiser",
    resume: `${base}assets/resumes/luca_resume.pdf`
  },
  "Jack Peterson": {
    img: `${base}assets/images/JackP_img.png`,
    role: "Stability & Controls Engineer",
    desc: "Jack is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/jackpeterson",
    resume: `${base}assets/resumes/jackp_resume.pdf`
  },
  "Michael Beath": {
    img: `${base}assets/images/Michael_img.jpg`,
    role: "Mass Properties & Structures Engineer",
    desc: "Michael is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/michaelbeath",
    resume: `${base}assets/resumes/michael_resume.pdf`
  },
  "Nico Morrison": {
    img: `${base}assets/images/Nico_img.jpeg`,
    role: "Subsystems Engineer",
    desc: "Nico is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/nicomorrison",
    resume: `${base}assets/resumes/nico_resume.pdf`
  }
};

export default teamData;