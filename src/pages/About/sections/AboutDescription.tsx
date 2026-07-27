import { motion } from "framer-motion";
import { Sprout, ShieldCheck, Truck, Leaf } from "lucide-react";

import compote from "@/assets/images/compote.jpg";
import jus from "@/assets/images/jus.jpg";

const features = [
  {
    icon: Leaf,
    title: "Protection de l'Environnement",
    desc: "Énergies renouvelables, matériels et fournitures respectant les normes environnementales."
  },
  {
    icon: Sprout,
    title: "Culture sous Serre",
    desc: "Production toute l'année avec des pratiques durables et respectueuses de l'environnement."
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité Numérique",
    desc: "Suivi rigoureux des produits de la récolte jusqu'au consommateur final."
  },
  {
    icon: Truck,
    title: "Logistique en Ligne",
    desc: "Gestion numérique pour assurer le suivi de la livraison en temps réel."
  }
];

export default function AboutDescription() {
  return (
    <section className="py-28 md:py-36 bg-rekany-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rekany-dark bg-rekany-dark/10 px-4 py-1.5 rounded-full border border-rekany-dark/20">
              Notre Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-rekany-light leading-tight">
              Le capital santé des personnes est primordial
            </h2>
            <p className="text-rekany-gray/70 text-base leading-relaxed">
              REKANY AGRI vise à pallier les maladies dont la principale cause est la mauvaise nutrition
              et la qualité des produits. Notre engagement : fournir des produits sains, traçables et
              respectueux de l'environnement.
            </p>
            <p className="text-rekany-gray/60 text-base leading-relaxed">
              "BIO POUR TOUS" — L'Homme au centre de nos préoccupations et la technologie au service
              de nos produits et du bien-être.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <img
                src={compote}
                alt="compotes bio"
                className="rounded-xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-md"
              />
              <img
                src={jus}
                alt="Carottes bio"
                className="rounded-xl h-48 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-rekany-dark/5 border border-rekany-dark/10 hover:bg-rekany-dark/10 hover:border-rekany-dark/30 transition-all duration-300"
                >
                  <div className="w-20 h-20 rounded-full bg-rekany-dark/10 flex items-center justify-center text-rekany-dark mb-5">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-bold text-rekany-gray">{item.title}</h4>
                  <p className="text-base text-rekany-gray/50 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}