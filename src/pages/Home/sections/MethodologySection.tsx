import { motion } from "framer-motion";
import {
    Search,
    ClipboardList,
    FileText,
    CalendarCheck,
    HardHat,
    KeyRound,
} from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Analyse du projet",
        desc: "Compréhension de vos besoins, contraintes et ambitions.",
    },
    {
        icon: ClipboardList,
        title: "Étude technique",
        desc: "Faisabilité, ingénierie et préconisations détaillées.",
    },
    {
        icon: FileText,
        title: "Devis détaillé",
        desc: "Chiffrage transparent, planning et engagements contractuels.",
    },
    {
        icon: CalendarCheck,
        title: "Planification",
        desc: "Coordination des corps d'état et sécurisation du chantier.",
    },
    {
        icon: HardHat,
        title: "Exécution",
        desc: "Pilotage qualité, suivi quotidien et respect des délais.",
    },
    {
        icon: KeyRound,
        title: "Livraison finale",
        desc: "Réception, garanties et accompagnement post-livraison.",
    },
];

export default function MethodologySection() {
    return (
        <section className="py-20 bg-bg text-text-dark">
            <div className="mx-auto max-w-7xl px-4">

                {/* HEADER DIRECT (sans composant) */}
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Méthodologie
                    </span>

                    <h2 className="mt-4 text-3xl md:text-5xl font-serif font-bold">
                        Comment nous travaillons
                    </h2>

                    <p className="mt-4 text-muted text-sm md:text-base">
                        Un processus structuré en six étapes pour garantir un résultat professionnel, sécurisé et transparent.
                    </p>
                </div>

                {/* GRID */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, i) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.07,
                                }}
                                className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <div className="text-xs text-muted">
                                            Étape {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div className="font-bold">
                                            {step.title}
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-muted">
                                    {step.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}