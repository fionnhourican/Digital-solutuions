import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Transforming Member Services with the Lurgan Credit Union Mobile Banking App",
    excerpt: "The introduction of cuMobile has revolutionised how Credit Union members manage their finances.",
    color: "bg-primary",
  },
  {
    title: "Successful Launch of St Canice's Kilkenny Credit Union's New Deposit Account Product",
    excerpt: "A 2-year fixed term deposit account product showcasing commitment to diverse financial solutions.",
    color: "bg-card-navy",
  },
  {
    title: "Tipperary Credit Union expands loan book with €800,000 in Revolving Credit drawdowns",
    excerpt: "Working together to build a revolving credit solution that grows the loan book efficiently.",
    color: "bg-card-green",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Case Studies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className={`${cs.color} h-48 relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/10" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cs.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
