import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const VencoraSection = () => {
  return (
    <section className="py-20 hero-gradient hero-circle-pattern relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-primary-foreground/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest mb-3">
            As part of Vencora, TBD LTD is
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto">
            Your local provider with the backing and resource of a global company.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-navy/80 rounded-2xl p-10 text-primary-foreground"
          >
            <h3 className="text-5xl font-bold mb-2">40+</h3>
            <p className="text-lg font-semibold mb-4">years in the industry.</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              TBD LTD has been serving the Credit Union industry for over 40 years. 
              Our staff have a combined 225+ years' experience in fintech and Credit Unions.
            </p>
            <Button variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="/our-company">
                Our Company →
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/80 leading-relaxed mb-6">
              TBD LTD is a proud part of <span className="font-bold">Vencora</span>, a fast-growing family of financial services software companies, that enables its businesses to become stronger together.
            </p>
            <div className="bg-card-navy/60 rounded-2xl aspect-video flex items-center justify-center text-primary-foreground/50">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center mb-3">
                  ▶
                </div>
                <p className="text-sm">Watch Video</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VencoraSection;
