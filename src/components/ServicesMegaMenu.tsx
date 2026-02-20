import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesMegaMenu = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const activeServiceData = services.find(s => s.id === activeService);
  
  return (
    <div className="absolute left-0 top-full bg-background border border-border shadow-lg rounded-lg mt-0 w-[800px] z-50 -ml-6">
      <div className="grid grid-cols-2 gap-0">
          {/* Left side - Core Services (darker background) */}
          <div className="bg-muted/70 p-6 rounded-l-lg">
            <div className="space-y-4">
              {services.map((service, i) => (
                <Link
                  key={i}
                  to={`/services/${service.id}`}
                  onMouseEnter={() => setActiveService(service.id)}
                  className={`block p-4 rounded-lg hover:bg-background/80 transition-colors ${
                    activeService === service.id ? "bg-background/80" : ""
                  }`}
                >
                  <h4 className="font-semibold text-foreground">{service.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Subcategories */}
          <div className="p-6 rounded-r-lg">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-6">
              A Breakdown
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {activeServiceData?.subcategories.slice(0, 4).map((sub, i) => (
                <div key={i}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {sub.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default ServicesMegaMenu;
