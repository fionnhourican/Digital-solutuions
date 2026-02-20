import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceCategory = () => {
  const { category } = useParams<{ category: string }>();
  const service = services.find(s => s.id === category);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className={`${service.color} min-h-screen flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-white/10" />
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full border-2 border-white/10" />
          <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full border-2 border-white/10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.subcategories.map((sub: any, i: number) => (
              <div
                key={i}
                className="bg-muted rounded-2xl p-10 hover:shadow-lg transition-all min-h-[300px] flex flex-col group hover-card"
                style={{
                  ['--hover-bg' as any]: `hsl(${service.hslColor})`,
                }}
              >
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-3">{sub.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 mb-6 flex-grow">{sub.description}</p>
                <Button variant="outline" className="rounded-full w-fit group-hover:bg-primary-foreground group-hover:text-foreground group-hover:border-primary-foreground">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ServiceCategory;
