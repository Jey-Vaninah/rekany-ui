import { motion } from "framer-motion";
import { Search, Star, Globe } from "lucide-react";

import bg from "@/assets/images/bg4.png";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";

const stats = [
  { label: "Pays exportés", value: 25 },
  { label: "Années d'expérience", value: 15 },
  { label: "Pierres disponibles", value: 50 },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* BASE DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 FIX NAVBAR ZONE (IMPORTANT) */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-black/5 z-10" />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="min-h-[700px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-16 md:px-16 md:py-24">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* LEFT CONTENT */}
            <div className="space-y-8 text-white lg:col-span-7">

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300"
              >
                <Globe className="h-3 w-3" />
                Madagascar • Export de Pierres Précieuses
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
              >
                Exportation de
                <br />
                <span className="text-emerald-300">
                  Pierres Précieuses
                </span>
                <br />
                de Madagascar
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-xl text-white/80 text-base sm:text-lg"
              >
                Mada Stones Export est spécialisé dans l’export international
                de pierres précieuses et semi-précieuses de Madagascar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button variant="primary" icon>
                  Découvrir le catalogue
                </Button>

                <Button variant="secondary">
                  Demander un devis
                </Button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20">
                  <Search className="h-4 w-4" />
                </button>
              </motion.div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-10 border-t border-white/10 pt-6 text-left">

                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.25 }}
                  >
                    <div className="text-3xl font-bold text-white">
                      <Counter value={item.value} suffix="+" />
                    </div>
                    <p className="text-xs text-white/60 mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                ))}

              </div>

              {/* RATING */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-3 pt-2"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-white/70">
                  <span className="font-bold text-white">5.0</span> • Confiance internationale B2B
                </p>
              </motion.div>

            </div>

            {/* RIGHT CARD */}
            <div className="hidden lg:flex lg:col-span-5 justify-end">

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80"
                  className="h-64 w-full rounded-xl object-cover"
                  alt="Gemstone Madagascar"
                />

                <div className="mt-4">
                  <h3 className="text-white font-semibold">
                    Pierres naturelles certifiées
                  </h3>
                  <p className="text-sm text-white/70">
                    Export direct depuis Madagascar
                  </p>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-emerald-300 font-bold">
                    Qualité AAA+
                  </span>
                  <span className="text-white/60">
                    Certification export
                  </span>
                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}