import { motion } from "framer-motion";

import emerald from "@/assets/images/emerald.jpg";
import celestite from "@/assets/images/celestite.jpg";
import amethyst from "@/assets/images/amethyst.jpg";

import ProductCard from "../../../components/ui/ProductCard";
import Button from "../../../components/ui/Button";

const products = [
  { id: 1, name: "Emerald Geode", price: "$240.00", image: emerald },
  { id: 2, name: "Celestite Cluster", price: "$240.00", image: celestite },
  { id: 3, name: "Raw Amethyst", price: "$240.00", image: amethyst },
];

export default function ProductsCollection() {
  return (
    <section
      id="collections"
      className="py-20 bg-surface-light/40 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-dark leading-tight">
                Exceptional Mineral
                <br />
                Collection
              </h2>

              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Sélection exclusive de pierres naturelles issues de Madagascar.
                Chaque cristal est unique, certifié et destiné à l’export international.
              </p>

              {/* CTA RESTORED */}
              <div className="mt-5 space-y-3">
                <Button variant="primary" icon>
                  Voir le catalogue
                </Button>

                <Button variant="secondary">
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <ProductCard
                    image={p.image}
                    name={p.name}
                    price={p.price}
                  />
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}