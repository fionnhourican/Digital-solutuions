import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useState } from "react";

const goals = [
  {
    title: "Grow Your Credit Union",
    description: "Expand your membership base and loan book with innovative solutions designed to attract and retain members.",
    color: "bg-card-teal",
  },
  {
    title: "Manage Efficiently",
    description: "Streamline operations with our comprehensive core system and automation tools that save time and reduce costs.",
    color: "bg-card-purple",
  },
  {
    title: "Protect Your Members",
    description: "Ensure security and compliance with robust fraud detection, data protection, and regulatory reporting tools.",
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
              We help Credit Unions achieve their strategic objectives through technology and partnership.
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
                At TBD LTD, we understand that every Credit Union has unique objectives and challenges. 
                Our comprehensive suite of solutions is designed to support you at every stage of your journey. 
                Whether you're looking to expand your membership, streamline operations, or enhance security, 
                we provide the tools, expertise, and partnership you need to succeed. With over 40 years of 
                experience in the industry, we're committed to helping you achieve sustainable growth and 
                operational excellence.
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
                  className={`${goal.color} rounded-2xl p-8 text-primary-foreground hover:shadow-xl transition-all text-left ${
                    selectedGoal === i ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <h3 className="text-2xl font-bold">{goal.title}</h3>
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
