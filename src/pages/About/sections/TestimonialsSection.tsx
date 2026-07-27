import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "./testimonials.data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-rekany-white/70">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rekany-light bg-rekany-light/10 px-4 py-1.5 rounded-full border border-rekany-light/20 mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-rekany-gray">
            Ils nous <span className="text-rekany-light">font confiance</span>
          </h2>
          <p className="text-rekany-gray/50 text-sm mt-2">
            Témoignages de nos partenaires et clients
          </p>
        </div>

        <div className="relative bg-rekany-white rounded-2xl p-8 md:p-12 border border-rekany-cream shadow-sm">

          <Quote className="h-8 w-8 text-rekany-light mb-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-rekany-orange text-lg md:text-xl leading-relaxed">
                "{current.quote}"
              </p>

              <div className="pt-4">
                <h4 className="font-poppins font-bold text-rekany-gray">
                  {current.name}
                </h4>
                <p className="text-sm text-rekany-gray/50">
                  {current.role} • {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-rekany-cream">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-rekany-light/10 text-rekany-gray hover:text-rekany-light transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "w-6 bg-rekany-light"
                    : "w-1.5 bg-rekany-light/20 hover:bg-rekany-light/40"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-rekany-light/10 text-rekany-gray hover:text-rekany-light transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}