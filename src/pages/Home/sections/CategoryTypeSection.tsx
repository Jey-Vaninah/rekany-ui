import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowDown } from "lucide-react";

import geodes from "@/assets/images/geodes.jpg";
import towers from "@/assets/images/towers.jpg";
import clusters from "@/assets/images/clusters.jpg";
type Category = {

  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Geodes", image: geodes },
  { id: 2, name: "Towers", image: towers },
  { id: 3, name: "Clusters", image: clusters },
];

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex-1 min-w-[140px] max-w-[160px] mx-auto bg-surface-light border border-border rounded-full py-8 px-4 flex flex-col items-center gap-6 group hover:bg-surface hover:border-primary transition-all duration-500 shadow-sm hover:shadow-md cursor-pointer"
    >
      <div className="w-16 h-16 rounded-full overflow-hidden border border-border shadow-inner">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <span className="text-sm font-serif font-bold text-text-dark group-hover:text-primary transition-colors">
        {cat.name}
      </span>

      <div className="w-8 h-8 rounded-full bg-surface border border-border group-hover:bg-primary group-hover:text-white flex items-center justify-center text-muted transition-all duration-300">
        <ArrowDown className="h-3.5 w-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}

export default function CategoryTypeSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="types" className="py-20 md:py-28 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-xl border border-border group"
            >
              <img
                src={clusters}
                alt="video thumbnail"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-surface/90 text-primary flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Play className="h-6 w-6" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-dark">
                Choose The Type!
              </h2>

              <p className="text-muted text-sm leading-relaxed max-w-lg">
                Filtrez notre catalogue en fonction de la structure minérale recherchée.
              </p>
            </motion.div>

            <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.id} cat={cat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}