import { motion } from "framer-motion";
import { Star } from "lucide-react";

import diamant from "@/assets/images/diamant.jpg";
import blueCrystal from "@/assets/images/blue.jpg";
import violet from "@/assets/images/violet2.jpg";

import Button from "../../../components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-4">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-border bg-surface group"
            >
              <img
                src={diamant}
                alt="Pierre précieuse Madagascar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

              <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-full border border-border flex items-center gap-2 shadow-sm">

                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>

                <span className="text-xs font-bold text-text-dark">
                  5.0
                </span>

              </div>
            </motion.div>

          </div>

          <div className="lg:col-span-5 space-y-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="space-y-6"
            >

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-dark leading-tight">
                Expertise en pierres précieuses de Madagascar
              </h2>

              <p className="text-muted text-base leading-relaxed">
                Nous sélectionnons et exportons des pierres précieuses et semi-précieuses
                directement depuis Madagascar vers les marchés internationaux.
              </p>

              <p className="text-muted text-base leading-relaxed">
                Chaque pierre est triée selon des standards stricts de qualité,
                garantissant une traçabilité complète et une valeur commerciale optimale.
              </p>

              <div className="pt-4">
                <Button variant="primary">
                  Découvrir notre expertise
                </Button>
              </div>

            </motion.div>

          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">

            {[blueCrystal, violet].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface group"
              >
                <img
                  src={img}
                  alt="Pierre naturelle Madagascar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition" />
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}