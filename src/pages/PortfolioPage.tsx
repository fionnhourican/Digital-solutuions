import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { imageConfigs } from "@/lib/images";

const PortfolioPage = () => {
  const projects = [
    {
      title: "Bulk Email & SMS Messaging Demo System",
      category: "Messaging Platform",
      image: imageConfigs.projects.messaging.src,
      problem: "Government departments need reliable ways to communicate with citizens at scale while maintaining GDPR compliance and tracking delivery metrics.",
      solution: "Developed a demonstration messaging platform with template management, scheduling, analytics dashboard, and full audit logging capabilities.",
      technologies: ["React", "Node.js", "PostgreSQL", "Azure", "SendGrid API"],
      outcome: "Showcases ability to handle high-volume communications with enterprise-grade reliability and compliance features.",
    },
    {
      title: "Internal Admin Dashboard Prototype",
      category: "Web Application",
      image: imageConfigs.projects.admin.src,
      problem: "Public sector organisations require secure internal tools for managing operations, users, and workflows with role-based access controls.",
      solution: "Created a comprehensive admin dashboard prototype featuring user management, data visualization, audit trails, and granular permission systems.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Express", "PostgreSQL"],
      outcome: "Demonstrates capability to build secure, accessible internal tools meeting government accessibility standards (WCAG 2.1).",
    },
    {
      title: "Cloud Migration Sample Project",
      category: "Infrastructure",
      image: imageConfigs.projects.cloud.src,
      problem: "Many government systems need migration from on-premises infrastructure to cloud platforms while maintaining security and compliance.",
      solution: "Executed a demonstration cloud migration project showing the complete process from assessment through deployment with infrastructure-as-code.",
      technologies: ["Azure", "Docker", "Terraform", "CI/CD", "Monitoring"],
      outcome: "Illustrates expertise in cloud architecture, security configuration, and automated deployment pipelines.",
    },
    {
      title: "Secure Document Upload Portal Demo",
      category: "Web Application",
      image: imageConfigs.projects.documents.src,
      problem: "Government services need secure portals for citizens to submit documents with encryption, virus scanning, and audit capabilities.",
      solution: "Built a demonstration secure upload system with drag-and-drop interface, automatic virus scanning, encryption at rest, and comprehensive logging.",
      technologies: ["React", "AWS S3", "Lambda", "API Gateway", "CloudWatch"],
      outcome: "Demonstrates understanding of security requirements for handling sensitive citizen data in compliance with data protection regulations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Demonstration projects showcasing our technical capabilities and approach to public sector IT challenges
            </p>
          </div>
        </div>
      </section>

      {/* Note about Demo Projects */}
      <section className="py-8 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground">
              <strong>Note:</strong> The following projects are demonstration systems created to showcase our technical capabilities. 
              While they are fully functional prototypes, they represent the types of solutions we can deliver for government clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <ResponsiveImage 
                      src={project.image} 
                      alt={project.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-1">Problem</h3>
                        <p className="text-muted-foreground text-sm">{project.problem}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-1">Solution</h3>
                        <p className="text-muted-foreground text-sm">{project.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-1">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm text-primary mb-1">Outcome</h3>
                        <p className="text-muted-foreground text-sm">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Summary */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Demonstrated Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Modern web application development",
                "Cloud infrastructure (Azure & AWS)",
                "Security and compliance implementation",
                "API development and integration",
                "Database design and management",
                "CI/CD and automated deployment",
                "Responsive, accessible interfaces",
                "Comprehensive documentation",
              ].map((capability, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're available to discuss how we can bring similar solutions to your organisation's challenges
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2">
            Available for Public Sector Tenders & Framework Agreements
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
