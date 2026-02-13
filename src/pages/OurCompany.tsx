import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pillars = [
  {
    title: "Innovation",
    description:
      "We continuously evolve our solutions to meet the changing needs of the fast paced software industry.",
    color: "bg-card-teal/10",
  },
  {
    title: "Customer Focus",
    description:
      "We work alongside you as a trusted partner, your needs are our main priority.",
    color: "bg-card-purple/10",
  },
  {
    title: "Excellence",
    description:
      "We deliver the highest quality software and services to our clients.",
    color: "bg-card-green/10",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in everything we do.",
    color: "bg-card-navy/10",
  },
];

const team = [
  { name: "Fíonn Hourican", role: "CEO" },
  { name: "Olan Healy", role: "CTO" },
  { name: "Dylan Murtagh", role: "Head of Product" },
  { name: "Kevin Collins", role: "Head of Customer Success" },
];

const OurCompany = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary min-h-[60vh] flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-white/10" />
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full border-2 border-white/10" />
          <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full border-2 border-white/10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-6xl font-bold mb-6">Our Company</h1>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed">
              We are dedicated to build and deliver innovative technology
              solutions for your buisness.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Technology Built to Deliver
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At TBD LTD, we partner with businesses across Ireland and the EU
              to design and develop modern, reliable software systems. From
              cloud infrastructure to secure web applications, we build
              solutions that perform, scale, and create measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Pillars</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`${pillar.color} rounded-2xl p-12 hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Who You'll Be Working With
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-muted mb-4"></div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default OurCompany;
