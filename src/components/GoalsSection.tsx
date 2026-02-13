import { motion } from "framer-motion";
import { TrendingUp, Settings, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const goals = [
  {
    icon: TrendingUp,
    title: "Grow",
    subtitle: "Grow your CU.",
    description: "Make sure your Credit Union reaches its full potential with an IT provider who can be your long-term partner.",
  },
  {
    icon: Settings,
    title: "Manage",
    subtitle: "Manage your CU.",
    description: "Be more efficient with our scalable, end-to-end financial software, self-service solutions and IT managed service.",
  },
  {
    icon: ShieldCheck,
    title: "Protect",
    subtitle: "Protect your CU.",
    description: "We provide dedicated compliance support and operational resilience to ensure your Credit Union and members stay safe.",
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
            Dedicated to helping you reach your strategic goals.
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
