import { motion } from "framer-motion";
import { Star, Leaf, Shield, Truck } from "lucide-react";

import tomate from "@/assets/images/tomate.jpg";
import karoty from "@/assets/images/karoty.jpg";
import poivron from "@/assets/images/poivron.jpg";

import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-rekany-beige">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-4">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-rekany-cream bg-rekany-white group"
            >
              <img
                src={tomate}
                alt="Produits bio Madagascar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />

              <div className="absolute top-6 left-6 bg-rekany-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-rekany-cream flex items-center gap-2 shadow-sm">

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>

                <span className="text-xs font-bold text-rekany-gray">
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

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-rekany-gray leading-tight">
                REKANY AGRI
                <br />
                <span className="text-rekany-light">Bio & Commerce Équitable</span>
              </h2>

              <p className="text-rekany-gray/80 text-base leading-relaxed">
                REKANY AGRI est spécialisé dans la production et la commercialisation de produits certifiés bio, issus du commerce équitable, pour le bien-être des consommateurs malgaches et internationaux.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-rekany-light mt-0.5 flex-shrink-0" />
                  <p className="text-rekany-gray/70 text-sm">
                    <span className="font-semibold text-rekany-gray">Culture Bio & Durable :</span> Production sous serre pour garantir une disponibilité toute l'année, respectueuse des normes environnementales.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-rekany-light mt-0.5 flex-shrink-0" />
                  <p className="text-rekany-gray/70 text-sm">
                    <span className="font-semibold text-rekany-gray">Certification & Traçabilité :</span> Processus de traçabilité numérique rigoureux garantissant l'authenticité et la qualité de chaque produit.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-rekany-light mt-0.5 flex-shrink-0" />
                  <p className="text-rekany-gray/70 text-sm">
                    <span className="font-semibold text-rekany-gray">Logistique & Commerce Équitable :</span> Circuit court et commerce équitable du paysan jusqu'au consommateur, avec suivi numérique.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/produits">
                  <Button variant="primary" icon>
                    Découvrir nos produits
                  </Button>
                </Link>
              </div>

            </motion.div>

          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">

            {[karoty, poivron].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-rekany-cream bg-rekany-white group"
              >
                <img
                  src={img}
                  alt="Produits naturels Madagascar"
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