import { ShoppingBag } from "lucide-react";

type Props = {
    image: string;
    name: string;
    price: string;
};

export default function ProductCard({ image, name, price }: Props) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface shadow-sm border border-border transition-all duration-500 hover:shadow-md hover:-translate-y-1">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />

                <button
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface/90 hover:bg-primary hover:text-white text-text-dark flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110"
                >
                    <ShoppingBag className="h-4 w-4" />
                </button>
            </div>

            <div className="mt-4 flex justify-between items-center px-1">
                <div>
                    <h3 className="text-sm font-semibold text-text-dark group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                </div>

                <span className="text-sm font-bold text-primary">
                    {price}
                </span>
            </div>
        </div>
    );
}