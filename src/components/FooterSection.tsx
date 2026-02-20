const footerLinks = {
  Services: [
    { name: "Product Development", href: "/services/product-development" },
    { name: "System Scaling & Optimisation", href: "/services/system-scaling" },
    { name: "Technical Strategy & Architecture", href: "/services/technical-strategy" },
    { name: "AI-Enhanced Engineering", href: "/services/ai-engineering" }
  ],
  Company: [
    { name: "Our Company", href: "/our-company" },
    { name: "Contact Us", href: "/contact-us" }
  ],
  Resources: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Knowledge Base", href: "#knowledge-base" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Terms of Use", href: "#terms" }
  ],
};

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-4">TBD LTD</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Dedicated to build and deliver innovative technology solutions.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} TBD LTD. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Technology Built to Deliver.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
