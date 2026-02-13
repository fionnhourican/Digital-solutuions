import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ProductsMegaMenu from "./ProductsMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

const navItems = [
  { label: "Products", hasDropdown: true },
  { label: "Company", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="/" className="font-heading text-xl font-bold tracking-tight text-foreground">
          TBD LTD
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <a href={item.href} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ) : (
                <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              )}
              {item.label === "Products" && activeDropdown === "Products" && <ProductsMegaMenu />}
              {item.label === "Company" && activeDropdown === "Company" && <CompanyMegaMenu />}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button className="rounded-full px-6 gap-2 bg-foreground text-background hover:bg-foreground/90" asChild>
            <a href="/contact-us">
              Contact Us
              <span className="text-xs">⟩⟩</span>
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="text-left text-sm font-medium text-foreground/80 hover:text-foreground py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button className="rounded-full mt-2 bg-foreground text-background hover:bg-foreground/90">
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
