import { motion } from "framer-motion";
import { Truck, Gem, ShieldCheck, Award } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Truck,
      title: "Export International",
      desc: "Livraison sécurisée vers plus de 25 pays avec suivi complet et logistique professionnelle.",
    },
    {
      icon: Gem,
      title: "Sélection Premium",
      desc: "Chaque pierre est sélectionnée directement à Madagascar selon des critères de qualité stricts.",
    },
    {
      icon: ShieldCheck,
      title: "Certification Garantie",
      desc: "Toutes nos pierres sont accompagnées de certificats d’authenticité et de provenance.",
    },
    {
      icon: Award,
      title: "Qualité Export AAA+",
      desc: "Nous travaillons uniquement avec des pierres de qualité supérieure destinées au marché international.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 border-y border-border bg-surface"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="p-8 flex flex-col items-start text-left group cursor-pointer"
              >

                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-serif font-bold text-text-dark mb-2 group-hover:text-primary transition">
                  {item.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}