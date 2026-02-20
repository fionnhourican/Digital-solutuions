import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.png";
import { useRef, useEffect, useState } from "react";
import { services } from "@/data/services";

const cards = services.map(s => ({
  ...s,
  image: s.id === "product-development" ? heroIllustration : undefined,
}));

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      
      // Check if section is in view
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsInView(inView);
      
      const sectionTop = -rect.top;
      const scrollableHeight = section.offsetHeight - window.innerHeight;
      
      if (scrollableHeight <= 0) return;
      
      const progress = Math.max(0, Math.min(1, sectionTop / scrollableHeight));
      const index = Math.min(cards.length - 1, Math.floor(progress * cards.length));
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentColor = cards[activeIndex].hslColor;

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${100 + cards.length * 80}vh` }}
    >
      {/* Background that transitions color - scoped to section */}
      <div
        className="absolute inset-0 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: `hsl(${currentColor})` }}
      />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border-2 border-white/10" />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full border-2 border-white/10" />
        <div className="absolute -top-16 right-1/4 w-80 h-80 rounded-full border-2 border-white/10" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full border-2 border-white/10" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full border-2 border-white/10" />
        <div className="absolute top-2/3 right-1/3 w-96 h-96 rounded-full border-2 border-white/10" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full border-2 border-white/10" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden z-10">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Sticky Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
               Agile software partners for ambitious startups
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Our team of software engineers partners with startups to deliver clean, high-performance systems built for rapid iteration and long-term growth.
              </p>
              <Button className="rounded-full px-8 py-6 text-base gap-2 bg-white text-foreground hover:bg-white/90">
                <a href="/contact-us">
                  Contact Us 
                <span> ⟩⟩</span>
                </a>
              </Button>

              {/* Progress dots */}
              <div className="flex gap-2 mt-10">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === activeIndex ? "w-8 bg-white" : "w-3 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right: Scrolling Cards */}
            <div className="relative h-[400px] flex items-center">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={false}
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    y: i === activeIndex ? 0 : i > activeIndex ? 60 : -60,
                    scale: i === activeIndex ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center"
                  style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                >
                  <Link
                    to={`/services/${card.id}`}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white w-full group hover:bg-white/15 transition-colors border border-white/10 relative overflow-hidden"
                  >
                    {card.image && (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute top-4 right-4 w-40 h-40 object-contain opacity-60 pointer-events-none"
                      />
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{card.title}</h3>
                        <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors text-lg">
                          →
                        </span>
                      </div>
                      <p className="text-base text-white/80 leading-relaxed max-w-md">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
