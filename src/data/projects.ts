export const projects = [
  {
    id: "dublin-city-portal",
    title: "Dublin City Council Digital Services Portal",
    client: "Dublin City Council",
    category: "Citizen Services",
    duration: "18 months",
    status: "Completed",
    description: "Comprehensive digital transformation of citizen services, creating a unified online portal for all council services including planning applications, waste management, and community services.",
    image: "/images/projects/dublin-city-portal.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    outcomes: [
      "85% reduction in processing time for planning applications",
      "60% increase in online service adoption",
      "€2.3M annual cost savings",
      "Improved citizen satisfaction scores by 40%"
    ],
    challenges: [
      "Integration with 15+ legacy systems",
      "GDPR compliance requirements",
      "High availability requirements (99.9% uptime)"
    ],
    testimonial: {
      quote: "The new digital portal has transformed how we deliver services to Dublin citizens. The team's expertise in public sector requirements was invaluable.",
      author: "Mary O'Sullivan",
      role: "Head of Digital Services, Dublin City Council"
    }
  },
  {
    id: "hse-data-platform",
    title: "HSE Healthcare Data Analytics Platform",
    client: "Health Service Executive",
    category: "Data Analytics",
    duration: "24 months",
    status: "Completed",
    description: "Development of a comprehensive data analytics platform to support healthcare decision-making, resource allocation, and performance monitoring across the Irish health system.",
    image: "/images/projects/hse-data-platform.jpg",
    technologies: ["Python", "Apache Spark", "Tableau", "Azure", "SQL Server"],
    outcomes: [
      "Real-time monitoring of 200+ healthcare facilities",
      "30% improvement in resource allocation efficiency",
      "Enhanced pandemic response capabilities",
      "Reduced reporting time from weeks to hours"
    ],
    challenges: [
      "Sensitive healthcare data protection",
      "Integration across multiple hospital systems",
      "Real-time data processing requirements"
    ],
    testimonial: {
      quote: "This platform has revolutionized our ability to make data-driven decisions in healthcare delivery across Ireland.",
      author: "Dr. James Murphy",
      role: "Chief Information Officer, HSE"
    }
  },
  {
    id: "revenue-modernization",
    title: "Revenue Commissioners System Modernization",
    client: "Revenue Commissioners",
    category: "Digital Transformation",
    duration: "36 months",
    status: "In Progress",
    description: "Large-scale modernization of tax collection and processing systems, including migration from legacy mainframe systems to modern cloud-based architecture.",
    image: "/images/projects/revenue-modernization.jpg",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Oracle", "Angular"],
    outcomes: [
      "50% faster tax return processing",
      "Improved system reliability and uptime",
      "Enhanced fraud detection capabilities",
      "Better taxpayer self-service options"
    ],
    challenges: [
      "Zero-downtime migration requirements",
      "Complex business rule migration",
      "High-security and compliance standards"
    ],
    testimonial: {
      quote: "The modernization project is delivering significant improvements in our operational efficiency and taxpayer services.",
      author: "Patricia Ryan",
      role: "IT Director, Revenue Commissioners"
    }
  },
  {
    id: "garda-mobile-app",
    title: "An Garda Síochána Mobile Operations App",
    client: "An Garda Síochána",
    category: "Mobile Solutions",
    duration: "12 months",
    status: "Completed",
    description: "Development of a secure mobile application for Garda officers to access critical information, file reports, and communicate in the field.",
    image: "/images/projects/garda-mobile-app.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Azure", "Biometric Auth"],
    outcomes: [
      "40% reduction in paperwork processing time",
      "Improved officer safety through real-time communication",
      "Enhanced crime reporting accuracy",
      "Better resource deployment efficiency"
    ],
    challenges: [
      "High-security requirements for sensitive data",
      "Offline functionality requirements",
      "Integration with existing PULSE system"
    ],
    testimonial: {
      quote: "The mobile app has significantly improved our operational efficiency and officer safety in the field.",
      author: "Superintendent John Kelly",
      role: "ICT Department, An Garda Síochána"
    }
  },
  {
    id: "deasp-benefits-system",
    title: "DEASP Benefits Management System",
    client: "Department of Employment Affairs and Social Protection",
    category: "Citizen Services",
    duration: "30 months",
    status: "In Progress",
    description: "Modernization of the social welfare benefits system to improve processing efficiency and provide better services to citizens.",
    image: "/images/projects/deasp-benefits-system.jpg",
    technologies: ["C#", ".NET Core", "SQL Server", "Azure", "Power BI"],
    outcomes: [
      "Reduced benefit processing time by 60%",
      "Improved fraud detection capabilities",
      "Better citizen self-service options",
      "Enhanced reporting and analytics"
    ],
    challenges: [
      "Complex eligibility rule implementation",
      "Integration with multiple government systems",
      "High transaction volume handling"
    ],
    testimonial: {
      quote: "This system transformation is helping us deliver better, faster services to those who need social protection support.",
      author: "Catherine Walsh",
      role: "CIO, Department of Employment Affairs and Social Protection"
    }
  },
  {
    id: "education-cloud-migration",
    title: "Department of Education Cloud Migration",
    client: "Department of Education",
    category: "Cloud Migration",
    duration: "15 months",
    status: "Completed",
    description: "Migration of critical education systems to secure government cloud infrastructure, improving scalability and reducing operational costs.",
    image: "/images/projects/education-cloud-migration.jpg",
    technologies: ["AWS GovCloud", "Docker", "Terraform", "Jenkins", "Python"],
    outcomes: [
      "40% reduction in infrastructure costs",
      "Improved system scalability and performance",
      "Enhanced disaster recovery capabilities",
      "Better security posture"
    ],
    challenges: [
      "Minimal downtime requirements during school terms",
      "Data sovereignty and compliance requirements",
      "Complex application dependencies"
    ],
    testimonial: {
      quote: "The cloud migration has provided us with a more reliable, scalable, and cost-effective IT infrastructure.",
      author: "Michael O'Brien",
      role: "IT Manager, Department of Education"
    }
  }
];

export const projectStats = {
  totalProjects: 25,
  completedProjects: 18,
  activeProjects: 7,
  clientSatisfactionRate: 98,
  averageProjectDuration: "18 months",
  totalCostSavings: "€15.2M"
};

export const clientLogos = [
  { name: "Dublin City Council", logo: "/images/clients/dublin-city-council.png" },
  { name: "HSE", logo: "/images/clients/hse.png" },
  { name: "Revenue Commissioners", logo: "/images/clients/revenue.png" },
  { name: "An Garda Síochána", logo: "/images/clients/garda.png" },
  { name: "DEASP", logo: "/images/clients/deasp.png" },
  { name: "Department of Education", logo: "/images/clients/education.png" }
];
