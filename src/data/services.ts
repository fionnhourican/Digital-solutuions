import { Code, Cloud, Shield, Users, Database, Smartphone } from "lucide-react";

export const services = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Comprehensive digital transformation strategies to modernize government operations and improve citizen services.",
    icon: Code,
    features: [
      "Legacy system modernization",
      "Process automation",
      "Digital service design",
      "Change management support"
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced citizen experience",
      "Reduced operational costs",
      "Future-ready infrastructure"
    ]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Management",
    description: "Secure cloud migration services designed specifically for government requirements and compliance standards.",
    icon: Cloud,
    features: [
      "Government cloud assessment",
      "Secure migration planning",
      "Multi-cloud management",
      "Cost optimization"
    ],
    benefits: [
      "Scalable infrastructure",
      "Enhanced security",
      "Reduced IT costs",
      "Improved disaster recovery"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    description: "Advanced cybersecurity services to protect sensitive government data and critical infrastructure.",
    icon: Shield,
    features: [
      "Security assessments",
      "Threat monitoring",
      "Incident response",
      "Compliance management"
    ],
    benefits: [
      "Enhanced data protection",
      "Regulatory compliance",
      "Reduced security risks",
      "24/7 monitoring"
    ]
  },
  {
    id: "citizen-services",
    title: "Citizen Service Platforms",
    description: "User-friendly digital platforms that make government services more accessible to citizens.",
    icon: Users,
    features: [
      "Online service portals",
      "Mobile applications",
      "Self-service capabilities",
      "Multi-channel support"
    ],
    benefits: [
      "Improved citizen satisfaction",
      "Reduced service delivery costs",
      "24/7 service availability",
      "Better accessibility"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Intelligence",
    description: "Transform government data into actionable insights for better decision-making and policy development.",
    icon: Database,
    features: [
      "Data visualization dashboards",
      "Predictive analytics",
      "Performance monitoring",
      "Custom reporting"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved service delivery",
      "Better resource allocation",
      "Enhanced transparency"
    ]
  },
  {
    id: "mobile-solutions",
    title: "Mobile Solutions",
    description: "Native and progressive web applications designed for government staff and citizen engagement.",
    icon: Smartphone,
    features: [
      "Native mobile apps",
      "Progressive web apps",
      "Offline capabilities",
      "Cross-platform development"
    ],
    benefits: [
      "Increased accessibility",
      "Improved user engagement",
      "Real-time information access",
      "Enhanced productivity"
    ]
  }
];

export const serviceCategories = [
  {
    name: "Strategy & Consulting",
    services: ["digital-transformation", "data-analytics"]
  },
  {
    name: "Infrastructure & Security",
    services: ["cloud-migration", "cybersecurity"]
  },
  {
    name: "Application Development",
    services: ["citizen-services", "mobile-solutions"]
  }
];
