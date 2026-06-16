export type Testimonial = {
    name: string;
    role: string;
    company: string;
    quote: string;
};

export const testimonials: Testimonial[] = [
    {
        name: "Jean Rakoto",
        role: "Buyer Manager",
        company: "Gemstone Import Co",
        quote:
            "Très bonne qualité de pierres, livraison rapide et service professionnel.",
    },
    {
        name: "Sarah Johnson",
        role: "Jewelry Designer",
        company: "Luxury Stones Ltd",
        quote:
            "Cristaux authentiques et magnifiques, excellente qualité.",
    },
    {
        name: "Michael Brown",
        role: "Wholesale Buyer",
        company: "Global Minerals",
        quote:
            "Partenaire fiable pour l’export, très bonne communication.",
    },
];