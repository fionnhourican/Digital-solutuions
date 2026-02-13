const companyLinks = [
  { label: "Our Company", href: "/our-company" },
  { label: "Your Goals", href: "/your-goals" },
  { label: "Partners", href: "#" },
];

const CompanyMegaMenu = () => {
  return (
    <div className="absolute left-0 top-full bg-background border border-border shadow-lg rounded-lg mt-0 w-[250px] z-50 pt-2 -ml-6">
      <div className="p-6 bg-muted/70 rounded-lg">
        <ul className="space-y-3">
          {companyLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="block text-sm text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyMegaMenu;
