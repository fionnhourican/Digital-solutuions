import { motion } from "framer-motion";

const partnerNames = [
  "Core CU", "HSSCU", "Tipperary CU", "North Midlands CU", "St Paul's CU",
  "Letterkenny CU", "St Dominic CU", "Ballina CU", "Dundalk CU", "Capital CU",
  "St Canice's CU", "MF CU", "Claddagh CU", "MCU", "South CU",
  "Cara CU", "Newry CU", "Tallaght CU", "Wexford CU", "Penilee CU",
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Across Ireland & the European Union
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto">
            We are incredibly proud to work in partnership with ambitious businesses.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We pride ourselves on being your strategic partner; not just your IT provider.
          </p>
        </motion.div>

        {/* Marquee logos */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee items-center gap-12">
            {[...partnerNames, ...partnerNames].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-muted rounded-xl px-6 py-4 text-sm font-medium text-muted-foreground whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/case-studies" className="text-primary font-semibold hover:underline">
            View Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
