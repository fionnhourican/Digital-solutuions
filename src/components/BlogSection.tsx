import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    category: "CU Engage",
    date: "July 1, 2025",
    title: "Instant Payments; Instant Protection",
    excerpt: "Learn how the EU's Instant Payments Regulation impacts Credit Unions.",
  },
  {
    category: "CU Engage",
    date: "July 1, 2025",
    title: "Crafting Credit Union and Member Experiences with AI",
    excerpt: "Discover how AI is transforming Credit Unions, enhancing service and engagement.",
  },
  {
    category: "CU Engage",
    date: "July 1, 2025",
    title: "Your app, reimagined: designed for members, built for the future",
    excerpt: "Explore the reimagined cuMobile app, designed for smarter member experiences.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest news & blogs.</h2>
          <a href="#" className="text-primary font-semibold hover:underline hidden md:block">
            All Blogs →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/20 h-44 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4">
                  Read Blog <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
