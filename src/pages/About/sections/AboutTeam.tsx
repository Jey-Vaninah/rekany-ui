import { motion } from "framer-motion";
import { User, Percent } from "lucide-react";

const associates = [
  {
    name: "RAHOELIARIVAHY Tantely",
    role: "Directeur Général",
    capital: "50%",
    description: "Expert-comptable, formateur en entreprenariat rural."
  },
  {
    name: "RAJOBSON Johary",
    role: "Directeur des Partenariats",
    capital: "50%",
    description: "Diplômé en Master II ESG Paris, dirigeant du secteur public."
  }
];

export default function AboutTeam() {
  return (
    <section className="py-20 bg-rekany-white/70 border-y border-rekany-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rekany-orange bg-rekany-orange/10 px-4 py-1.5 rounded-full border border-rekany-orange/20">
            Notre Équipe
          </span>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-rekany-gray mt-4">
            Les Promoteurs
          </h2>
          <p className="text-rekany-gray/70 text-sm mt-2">
            Une équipe passionnée au service de l'agriculture bio malgache.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {associates.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-rekany-white rounded-2xl p-6 border border-rekany-cream shadow-sm hover:shadow-lg hover:border-rekany-orange/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-rekany-orange/10 flex items-center justify-center text-rekany-orange flex-shrink-0">
                  <User className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-rekany-gray">{person.name}</h3>
                  <p className="text-sm text-rekany-orange font-semibold">{person.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Percent className="h-3 w-3 text-rekany-gray/40" />
                    <span className="text-xs text-rekany-gray/60">{person.capital} du capital</span>
                  </div>
                  <p className="text-xs text-rekany-gray/50 mt-2">{person.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-4xl mx-auto bg-rekany-white rounded-2xl p-6 border border-rekany-cream"
        >
          <h4 className="text-sm font-bold text-rekany-gray text-center mb-4">Répartition du Capital</h4>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-4 bg-rekany-orange/20 rounded-full overflow-hidden">
              <div className="h-full bg-rekany-orange rounded-full" style={{ width: "50%" }} />
            </div>
            <span className="text-xs font-bold text-rekany-orange">50% / 50%</span>
          </div>
          <div className="flex justify-between text-xs text-rekany-gray/50 mt-2">
            <span>RAHOELIARIVAHY Tantely</span>
            <span>RAJOBSON Johary</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}