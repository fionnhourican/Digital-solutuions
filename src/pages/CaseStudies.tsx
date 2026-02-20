import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useState } from "react";
import { services } from "@/data/services";

const caseStudies = [
  { id: 1, title: "Case Study 1", category: "growth-lending", excerpt: "How we helped a Credit Union grow their membership by 40%", image: "" },
  { id: 2, title: "Case Study 2", category: "digital-suite", excerpt: "Implementing a modern mobile banking solution", image: "" },
  { id: 3, title: "Case Study 3", category: "core-system", excerpt: "Streamlining operations with our core system", image: "" },
  { id: 4, title: "Case Study 4", category: "cloud-compliance", excerpt: "Ensuring compliance and security", image: "" },
  { id: 5, title: "Case Study 5", category: "growth-lending", excerpt: "Expanding loan book with innovative solutions", image: "" },
  { id: 6, title: "Case Study 6", category: "digital-suite", excerpt: "Digital transformation success story", image: "" },
];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredStudies = selectedCategory === "all" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedStudies = filteredStudies.slice(startIndex, startIndex + itemsPerPage);

  const getCardLayout = (index: number) => {
    const pattern = index % 5;
    if (pattern === 0 || pattern === 1) return "half"; // First two are side by side
    if (pattern === 2) return "full"; // Third is full width
    if (pattern === 3 || pattern === 4) return "half"; // Next two are side by side
    return "full";
  };

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
            <h1 className="text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-2xl text-primary-foreground/90 leading-relaxed">
              Discover how we've helped Credit Unions achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedCategory === "all" 
                  ? "bg-foreground text-background" 
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedCategory(service.id);
                  setCurrentPage(1);
                }}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedCategory === service.id 
                    ? "bg-foreground text-background" 
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              {displayedStudies.map((study, index) => {
                const layout = getCardLayout(index);
                return (
                  <div
                    key={study.id}
                    className={`${
                      layout === "full" ? "col-span-2" : "col-span-1"
                    } bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer group`}
                  >
                    <div className={`bg-muted-foreground/10 rounded-xl mb-6 ${
                      layout === "full" ? "h-96" : "h-64"
                    }`}></div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground">{study.excerpt}</p>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full transition-colors ${
                      currentPage === page
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudies;
