import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useState } from "react";
import { Rocket, TrendingUp, Shield } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "Build your product.",
    description:
      "Bring your ideas to life with a development team that can take your product from concept to launch, fast and efficiently.",
    color: "bg-card-teal",
  },
  {
    icon: TrendingUp,
    title: "Scale your product.",
    description:
      "Grow your platform without limits, with scalable architecture, feature expansion, and performance optimization that adapts to your business.",
    color: "bg-card-purple",
  },
  {
    icon: Shield,
    title: "Future-proof your product.",
    description:
      "We help you build reliable, high-performance systems that remain maintainable, secure, and ready for tomorrow's challenges.",
    color: "bg-card-green",
  },
];

const YourGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-card-navy min-h-[60vh] flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-white/10" />
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full border-2 border-white/10" />
          <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full border-2 border-white/10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-6xl font-bold mb-6">Your Goals</h1>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed">
              We help Credit Unions achieve their strategic objectives through
              technology and partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                We're supporting the achievement of your goals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TBD LTD, we understand that every business has unique
                objectives and challenges. Our solutions are designed to support
                you at every stage of your product journey. Whether you're
                launching a new idea, scaling your platform, or improving
                performance, we provide the expertise, technology, and
                partnership you need to succeed. We are committed to helping you
                deliver reliable, high-quality software that drives real growth.
              </p>
            </div>
            <div className="bg-muted rounded-2xl aspect-[4/3]"></div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {goals.map((goal, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedGoal(i)}
                  className={`${goal.color} rounded-2xl p-8 text-center hover:shadow-xl transition-all ${
                    selectedGoal === i ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <goal.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground">{goal.title}</h3>
                </button>
              ))}
            </div>
            <div className="bg-background rounded-2xl p-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {goals[selectedGoal].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default YourGoals;
