import AboutDescription from "./sections/AboutDescription";
import AboutHero from "./sections/AboutHero";
import AboutMarket from "./sections/AboutMarket";
import AboutTeam from "./sections/AboutTeam";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutDescription />
      <AboutTeam />
      <AboutMarket />
      <TestimonialsSection />
    </>
  );
}