import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Shield } from "lucide-react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { imageConfigs } from "@/lib/images";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Delivering consistent, dependable solutions that public sector organisations can trust",
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear communication and honest reporting throughout every project",
    },
    {
      icon: Users,
      title: "Accountability",
      description: "Taking ownership of outcomes and maintaining the highest professional standards",
    },
  ];

  const certifications = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "AWS Cloud Practitioner",
    "GDPR Compliance Certification",
    "ISO 27001 Knowledge",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Digital Solutions</h1>
            <p className="text-xl text-muted-foreground">
              A new generation of IT professionals committed to excellence in public sector service delivery
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Digital Solutions was founded by a team of talented software engineering graduates 
                  who recognised the opportunity to bring modern technical expertise to Ireland's public sector.
                </p>
                <p>
                  While we are a young company, our team brings strong technical skills developed through 
                  rigorous academic training and practical experience with contemporary technologies including 
                  cloud platforms, modern web frameworks, and secure development practices.
                </p>
                <p>
                  We understand that government organisations require partners who can demonstrate reliability, 
                  compliance knowledge, and commitment to long-term service excellence. These principles guide 
                  every project we undertake.
                </p>
              </div>
            </div>
            <div className="relative">
              <ResponsiveImage 
                src={imageConfigs.teamWorking.src}
                alt={imageConfigs.teamWorking.alt}
                sizes={imageConfigs.teamWorking.sizes}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To deliver modern, efficient and accessible digital services that help Irish public bodies 
              serve citizens better. We are committed to bringing contemporary technical expertise while 
              maintaining the rigorous standards of reliability, security, and compliance that government 
              organisations require.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide our work with public sector clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Software engineering graduates with expertise in modern development practices, 
              cloud technologies, and secure system design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Sarah O'Brien", role: "Lead Developer", initials: "SO" },
              { name: "Michael Walsh", role: "Cloud Architect", initials: "MW" },
              { name: "Emma Byrne", role: "Systems Engineer", initials: "EB" },
              { name: "David Murphy", role: "Security Specialist", initials: "DM" },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Certifications</h2>
              <p className="text-muted-foreground">
                Our team maintains current certifications in key technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're ready to bring our technical expertise and commitment to excellence to your next project
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2">
            Available for Public Sector Tenders
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
