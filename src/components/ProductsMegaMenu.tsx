import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ProductsMegaMenu = () => {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const activeProductData = products.find(p => p.id === activeProduct);
  
  return (
    <div className="absolute left-0 top-full bg-background border border-border shadow-lg rounded-lg mt-0 w-[800px] z-50 -ml-6">
      <div className="grid grid-cols-2 gap-0">
          {/* Left side - Core Products (darker background) */}
          <div className="bg-muted/70 p-6 rounded-l-lg">
            <div className="space-y-4">
              {products.map((product, i) => (
                <Link
                  key={i}
                  to={`/products/${product.id}`}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  className={`block p-4 rounded-lg hover:bg-background/80 transition-colors ${
                    activeProduct === product.id ? "bg-background/80" : ""
                  }`}
                >
                  <h4 className="font-semibold text-foreground">{product.title}</h4>
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
              {activeProductData?.subcategories.slice(0, 4).map((sub, i) => (
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

export default ProductsMegaMenu;
