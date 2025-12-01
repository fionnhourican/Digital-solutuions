export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  initials?: string;
  bio: string;
  email: string;
  experience: string[];
  skills: string[];
  education: string[];
  certifications?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "fionn-hourican",
    name: "Fíonn Hourican",
    role: "Software Engineer",
    image: "/images/Fionn Hourican.JPG",
    bio: "Experienced software engineer specializing in full-stack development and modern web technologies.",
    email: "fionn.hourican@mail.dcu.ie",
    experience: [
      "3+ years in full-stack web development",
      "React, TypeScript, and Node.js expertise",
      "Experience with cloud platforms and DevOps"
    ],
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "Git"],
    education: [
      "Computer Science Degree - Dublin City University",
      "Various online certifications in modern web development"
    ]
  },
  {
    id: "dylan-murtagh",
    name: "Dylan Murtagh",
    role: "Software Engineer",
    initials: "DM",
    bio: "Full-stack developer with expertise in modern web technologies and system architecture.",
    email: "dylan.murtagh@publicsectoritsolutions.ie",
    experience: [
      "4+ years in software development",
      "Specializes in backend systems and APIs",
      "Experience with microservices architecture"
    ],
    skills: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes"],
    education: [
      "Software Engineering Degree",
      "AWS Certified Solutions Architect"
    ]
  },
  {
    id: "olan-healy",
    name: "Olan Healy",
    role: "Software Engineer",
    initials: "OH",
    bio: "Frontend specialist with a passion for user experience and modern web technologies.",
    email: "olan.healy@publicsectoritsolutions.ie",
    experience: [
      "3+ years in frontend development",
      "UI/UX design experience",
      "Mobile-first responsive design"
    ],
    skills: ["React", "Vue.js", "CSS", "JavaScript", "Figma", "Tailwind CSS"],
    education: [
      "Computer Science Degree",
      "UX Design Certification"
    ]
  },
  {
    id: "kevin-collins",
    name: "Kevin Collins",
    role: "Software Engineer",
    initials: "KC",
    bio: "Backend engineer focused on scalable systems and data architecture.",
    email: "kevin.collins@publicsectoritsolutions.ie",
    experience: [
      "5+ years in backend development",
      "Database design and optimization",
      "Cloud infrastructure management"
    ],
    skills: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Terraform"],
    education: [
      "Computer Engineering Degree",
      "Google Cloud Professional Architect"
    ]
  }
];
