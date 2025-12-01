import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Cloud, Wrench, Mail, Shield, CheckCircle, FileCheck } from "lucide-react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { imageConfigs } from "@/lib/images";

const HomePage = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications and integrations for public sector needs",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure Azure and AWS solutions with full compliance",
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Reliable maintenance and monitoring with SLA guarantees",
    },
    {
      icon: Mail,
      title: "Messaging Systems",
      description: "Email and SMS solutions for citizen communication",
    },
  ];

  const trustIndicators = [
    { icon: CheckCircle, text: "Registered eTenders Supplier" },
    { icon: Shield, text: "GDPR Compliant" },
    { icon: FileCheck, text: "Cloud-Ready Solutions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ResponsiveImage 
            src={imageConfigs.hero.src}
            alt={imageConfigs.hero.alt}
            priority={imageConfigs.hero.priority}
            sizes={imageConfigs.hero.sizes}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Reliable IT Services for Public and Private Sector Organisations
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We are a dedicated team of software engineers delivering secure, efficient and compliant digital solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="secondary">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {trustIndicators.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <item.icon className="w-6 h-6 text-accent" />
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions designed specifically for Irish government and public sector requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift bg-card animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Modern Solutions. Government Standards.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a graduate-led company, we bring fresh expertise in modern technologies combined with 
              a deep commitment to the reliability, security, and compliance that public sector organisations require. 
              We understand government procurement processes and deliver solutions that meet stringent standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Project Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Technical Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">GDPR</div>
                <div className="text-muted-foreground">Fully Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Available for public sector tenders, framework agreements, and partnership opportunities.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
