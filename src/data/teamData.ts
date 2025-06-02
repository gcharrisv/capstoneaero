export interface TeamMember {
  img: string;
  role: string;
  desc: string;
  linkedin: string;
  resume: string;
}

const base = import.meta.env.BASE_URL;

const teamData: Record<string, TeamMember> = {
  "George Harrison V": {
    img: `${base}assets/images/George_img.jpg`,
    role: "Configuration & Systems Engineer",
    desc: "George is a graduating fifth-year Aerospace Engineering student at Cal Poly, concentrating in Aeronautics with a minor in Computer Science. He led the Computer-Aided Design (CAD) of the A-30 Condor, ensuring all subsystems were accurately integrated within the aircraft's outer mold line (OML). George collaborated closely with the engineering team to maintain aerodynamic performance and design intent throughout the development process. He is excited to begin his professional career as a Weapons Integration Engineer for the F-22 Raptor at Edwards Air Force Base.",
    linkedin: "https://www.linkedin.com/in/georgeharrison",
    resume: `${base}assets/resumes/harrison_resume.pdf`
  },
  "Jack Kisling": {
    img: `${base}assets/images/JackK_img.jpeg`,
    role: "Configuration & Systems Engineer",
    desc: "Jack Kisling is a fourth year aerospace engineering major concentrating in aeronautics. For the A-30 condor he developed the weight and balance models, analyzed the program and unit costs, and helped demonstrate competitive superiority of the design. Jack is excited to move on from aerospace engineering and pursue other ventures. He plans to gain experience as a pilot and transition to fly for the airlines.",
    linkedin: "https://www.linkedin.com/in/jack-kisling-7973a7229?trk=public_profile_samename-profile",
    resume: `${base}assets/resumes/jackk_resume.pdf`
  },
  "Euan Houston": {
    img: `${base}assets/images/Euan_img.jpg`,
    role: "Performance Engineer",
    desc: "Euan graduated from Cal Poly with a degree in Aerospace engineering. He was the performance lead on the A-30 Condor where he ensured the aircraft capabilities through realistic simulation and analysis.",
    linkedin: "https://www.linkedin.com/in/euanhouston/",
    resume: `${base}assets/resumes/euan_resume.pdf`
  },
  "Luca Flick-Kaiser": {
    img: `${base}assets/images/Luca_img.jpg`,
    role: "Aerodynamics Engineer",
    desc: "Luca is a fourth-year Aerospace Engineering student at Cal Poly, concentrating in Aeronautics. He led the initial aerodynamic analysis and design of the A-30 Condor, ensuring the aircraft met performance targets for aerodynamic efficiency while addressing structural constraints. Passionate about advancing his expertise, Luca plans to continue his education at Cal Poly and is on track to earn his master’s degree in Aerospace Engineering by 2026.",
    linkedin: "https://www.linkedin.com/in/luca-flick-kaiser-05aa50304/",
    resume: `${base}assets/resumes/luca_resume.pdf`
  },
  "Jack Peterson": {
    img: `${base}assets/images/JackP_img.jpg`,
    role: "Stability & Controls Engineer",
    desc: "Jack is a senior aerospace engineering student and licensed private pilot with a passion for both aeronautics and astronautics. In his third and final year, he’s focused on test engineering, research and development, and the design of next-generation air and space vehicles. Jack actively follows emerging aerospace technologies and is inspired by the mission-driven work of companies shaping the future of flight and space exploration.",
    linkedin: "https://www.linkedin.com/in/jackpeterson47",
    resume: `${base}assets/resumes/jackp_resume.pdf`
  },
  "Michael Beath": {
    img: `${base}assets/images/Michael_img.jpg`,
    role: "Mass Properties & Structures Engineer",
    desc: "Michael has a history of aircraft maintenance supporting wildland firefighting and has recently transitioned to engineering. A 4th year Aerospace Engineering  student from California Polytechnic University SLO, Michael has performed weight estimation, drag analysis, & weapons analysis for the A-30 Condor. He looks forward to working in the future on new and existing aircraft systems.",
    linkedin: "https://www.linkedin.com/in/beath/",
    resume: `${base}assets/resumes/beath_resume.pdf`
  },
  "Nico Morrison": {
    img: `${base}assets/images/Nico_img.jpg`,
    role: "Subsystems Engineer",
    desc: "Nico is a senior-year aerospace engineering student at Cal Poly, with experience in flight testing, controls, performance, and systems engineering. He led the analysis for the design's subsystem, cost analysis, and scheduling for the project. Excited to learn more about aeronautical engineering, he plans to pursue his master's degree in Aerospace at Cal Poly, analyzing sustainable propulsion configurations in aviation.",
    linkedin: "https://www.linkedin.com/in/nico-morrison/",
    resume: `${base}assets/resumes/morrison_resume.pdf`
  }
};

export default teamData;