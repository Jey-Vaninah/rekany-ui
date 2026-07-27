import { motion } from "framer-motion";
import { ShoppingBag, Store, Globe, ShoppingCart, Tag, Heart, Leaf } from "lucide-react";

import salade from "@/assets/images/salade.jpg";
import karoty from "@/assets/images/karoty.jpg";

const markets = [
  {
    icon: Store,
    title: "Grandes Surfaces",
    desc: "Rayon Bio dans les supermarchés"
  },
  {
    icon: ShoppingBag,
    title: "Marchés Dédiés",
    desc: "Marchés spécialisés produits malgaches"
  },
  {
    icon: Globe,
    title: "Export",
    desc: "Clients étrangers et marchés internationaux"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Vente en ligne avec livraison à domicile"
  }
];

export default function AboutMarket() {
  return (
    <section className="py-28 md:py-36 bg-rekany-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rekany-orange bg-rekany-orange/10 px-4 py-1.5 rounded-full border border-rekany-orange/20">
            Marché Visé
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-rekany-gray mt-4">
            Nos Canaux de <span className="text-rekany-orange">Distribution</span>
          </h2>
          <p className="text-rekany-gray/60 text-sm mt-3">
            REKANY AGRI s'adresse à une clientèle diversifiée, du local à l'international.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-7 rounded-2xl bg-rekany-white border border-rekany-orange/10 hover:bg-rekany-orange hover:border-rekany-orange transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-rekany-orange/10 group-hover:bg-white/20 flex items-center justify-center text-rekany-orange group-hover:text-white mx-auto mb-4 transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-base font-bold text-rekany-gray group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-rekany-gray/50 group-hover:text-white/70 mt-1 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1 space-y-3">
            <div className="flex items-center gap-3 text-sm text-rekany-gray/60 bg-rekany-green/5 px-5 py-3.5 rounded-xl border border-rekany-green/10 hover:border-rekany-green/30 transition-all duration-300">
              <Tag className="h-4 w-4 text-rekany-green" />
              <span className="font-medium text-rekany-gray/70">Prix local et prix export</span>
              <span className="text-xs text-rekany-gray/40">— Adapté</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-rekany-gray/60 bg-rekany-green/5 px-5 py-3.5 rounded-xl border border-rekany-green/10 hover:border-rekany-green/30 transition-all duration-300">
              <Heart className="h-4 w-4 text-rekany-green" />
              <span className="font-medium text-rekany-gray/70">Prix suivant le pouvoir d'achat</span>
              <span className="text-xs text-rekany-gray/40">— Accessible</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-rekany-gray/60 bg-rekany-green/5 px-5 py-3.5 rounded-xl border border-rekany-green/10 hover:border-rekany-green/30 transition-all duration-300">
              <Leaf className="h-4 w-4 text-rekany-green" />
              <span className="font-semibold text-rekany-green">Commerce Équitable</span>
              <span className="text-xs text-rekany-gray/40">— Prix juste pour tous</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-52">
              <img
                src={salade}
                alt="salade de fruit"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                salade de fruit
              </span>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-52">
              <img
                src={karoty}
                alt="Carottes bio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                🥕 Carottes Bio
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-rekany-cream text-center"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-rekany-orange">
            "BIO POUR TOUS"
          </h3>
          <p className="text-rekany-gray/50 text-base mt-2">
            Homme au centre de nos préoccupations et la technologie au service de nos produits
          </p>
          <div className="mt-3 flex justify-center gap-6 text-sm text-rekany-gray/40">
            <span>🌱 Bio</span>
            <span>•</span>
            <span>🤝 Commerce Équitable</span>
            <span>•</span>
            <span>🌍 Développement Durable</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}