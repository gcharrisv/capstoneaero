export interface TeamMember {
  img: string;
  role: string;
  desc: string;
  linkedin: string;
  resume: string;
}

const teamData: Record<string, TeamMember> = {
  "George Harrison": {
    img: "/assets/images/George_img.jpeg",
    role: "Configuration & Systems Engineer",
    desc: "George is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://www.linkedin.com/in/georgeharrison",
    resume: "/assets/resumes/Harrison_Extended_Resume_2025.pdf"
  },
  "Jack Kisling": {
    img: "/assets/images/JackK_img.jpeg",
    role: "Configuration & Systems Engineer",
    desc: "Jack is responsible for system integration and ensuring design consistency across the A-30 Condor.",
    linkedin: "https://linkedin.com/in/jackkisling",
    resume: "/assets/resumes/jack_resume.pdf"
  },
  "Euan Houston": {
    img: "/assets/images/Euan_img.jpg",
    role: "Performance Engineer",
    desc: "Euan is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/euanhousten",
    resume: "/assets/resumes/euan_resume.pdf"
  },
  "Luca Flick-Kaiser": {
    img: "/assets/images/Luca_img.jpg",
    role: "Aerodynamics Engineer",
    desc: "Luca is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/lucaflickkaiser",
    resume: "/assets/resumes/luca_resume.pdf"
  },
  "Jack Peterson": {
    img: "/assets/images/JackP_img.png",
    role: "Stability & Controls Engineer",
    desc: "Jack is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/jackpeterson",
    resume: "/assets/resumes/jackp_resume.pdf"
  },
  "Michael Beath": {
    img: "/assets/images/Michael_img.jpg",
    role: "Mass Properties & Structures Engineer",
    desc: "Michael is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/michaelbeath",
    resume: "/assets/resumes/michael_resume.pdf"
  },
  "Nico Morrison": {
    img: "/assets/images/Nico_img.jpeg",
    role: "Subsystems Engineer",
    desc: "Nico is a 5th year Aerospace Engineering student at Cal Poly with a passion for aircraft design and software.",
    linkedin: "https://linkedin.com/in/nicomorrison",
    resume: "/assets/resumes/nico_resume.pdf"
  }
};

export default teamData;