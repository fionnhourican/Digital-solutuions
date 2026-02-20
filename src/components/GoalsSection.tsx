import { motion } from "framer-motion";
import { Rocket, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const goals = [
  {
    icon: Rocket,
    title: "Build",
    subtitle: "Build your product.",
    description: "Bring your ideas to life with a development team that can take your product from concept to launch, fast and efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Scale your product.",
    description: "Grow your platform without limits, with scalable architecture, feature expansion, and performance optimization that adapts to your business.",
  },
  {
    icon: Shield,
    title: "Future-proof",
    subtitle: "Future-proof your product.",
    description: "We help you build reliable, high-performance systems that remain maintainable, secure, and ready for tomorrow's challenges.",
  },
];

const GoalsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            A reliable software partner who is
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dedicated to helping you reach your business goals.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-muted rounded-2xl p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <goal.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{goal.subtitle}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="rounded-full px-8 py-6 bg-foreground text-background hover:bg-foreground/90">
            <a href="/your-goals">
              Your Goals →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
