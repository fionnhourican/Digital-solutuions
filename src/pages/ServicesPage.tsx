import { Card } from "@/components/ui/card";
import { Code, Cloud, Wrench, Mail, CheckCircle } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development & Integration",
      description: "Custom application development tailored to public sector requirements",
      features: [
        "Web applications with modern, accessible interfaces",
        "Internal tools and workflow automation systems",
        "API development and third-party system integration",
        "Legacy system modernisation and migration",
        "Compliance with accessibility standards (WCAG 2.1)",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Support",
      description: "Secure, scalable cloud solutions on trusted platforms",
      features: [
        "Azure and AWS infrastructure setup and configuration",
        "Cloud migration planning and execution",
        "Infrastructure monitoring and optimisation",
        "Disaster recovery and backup solutions",
        "Cost management and resource optimisation",
      ],
    },
    {
      icon: Wrench,
      title: "System Maintenance & Technical Support",
      description: "Reliable ongoing support ensuring continuous operation",
      features: [
        "24/7 system monitoring and alerting",
        "Regular security patches and updates",
        "Performance tuning and optimisation",
        "Service Level Agreement (SLA) guarantees",
        "Incident response and resolution",
      ],
    },
    {
      icon: Mail,
      title: "Messaging Systems (Email / SMS)",
      description: "Robust communication platforms for citizen engagement",
      features: [
        "Bulk email solutions with tracking and analytics",
        "SMS notification systems for urgent communications",
        "Integration with existing CRM and database systems",
        "Template management and personalisation",
        "Compliance with data protection regulations",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions designed for Irish government and public sector organisations
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Icon and Title */}
                  <div className="lg:col-span-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-8">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Digital Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Government-Ready</h3>
                <p className="text-muted-foreground">
                  Deep understanding of public sector requirements including procurement processes, 
                  compliance standards, and accessibility requirements.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Modern Expertise</h3>
                <p className="text-muted-foreground">
                  Current knowledge of contemporary technologies and development practices, 
                  bringing efficient solutions to government challenges.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Security First</h3>
                <p className="text-muted-foreground">
                  Commitment to secure development practices, data protection compliance, 
                  and robust security protocols in all our solutions.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Reliable Support</h3>
                <p className="text-muted-foreground">
                  Dedicated technical support with clear SLAs, ensuring your systems 
                  remain operational and responsive to your needs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Understanding your requirements, constraints, and compliance needs",
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Creating detailed technical plans aligned with government standards",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "Building and rigorously testing solutions to ensure reliability",
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "Smooth rollout with comprehensive documentation and ongoing support",
                },
              ].map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-xl">
                      {phase.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
