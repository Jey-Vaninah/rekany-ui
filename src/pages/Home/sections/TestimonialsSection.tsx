import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "../../../data/testimonials.data";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonial = testimonials[currentIndex];

    const previous = () => {
        setCurrentIndex(
            (value) => (value - 1 + testimonials.length) % testimonials.length
        );
    };

    const next = () => {
        setCurrentIndex((value) => (value + 1) % testimonials.length);
    };

    return (
        <section className="py-20 md:py-28 bg-surface-light text-text-dark ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary border border-border">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Témoignages
                    </span>

                    <h2 className="mt-4 text-3xl md:text-5xl font-serif font-bold text-text-dark">
                        Ce que disent nos clients
                    </h2>
                </div>

                <div className="relative mx-auto mt-12 max-w-3xl">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-3xl border border-border bg-surface p-8 md:p-12 shadow-sm"
                        >
                            <Quote className="h-10 w-10 text-primary" />

                            <blockquote className="mt-6 text-lg md:text-2xl leading-relaxed text-text-dark">
                                « {testimonial.quote} »
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4">

                                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white text-lg font-bold">
                                    {testimonial.name
                                        .split(" ")
                                        .map((w) => w[0])
                                        .join("")}
                                </div>

                                <div>
                                    <div className="font-bold text-text-dark">
                                        {testimonial.name}
                                    </div>

                                    <div className="text-sm text-muted">
                                        {testimonial.role} — {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-8 flex items-center justify-center gap-3">

                        <button
                            onClick={previous}
                            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface hover:bg-bg transition"
                        >
                            <ChevronLeft className="h-5 w-5 text-text-dark" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`transition-all rounded-full ${currentIndex === index
                                        ? "w-8 h-2 bg-primary"
                                        : "w-2 h-2 bg-muted/40"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface hover:bg-bg transition"
                        >
                            <ChevronRight className="h-5 w-5 text-text-dark" />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}