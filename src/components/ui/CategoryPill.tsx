import { ArrowDown } from "lucide-react";

type Props = {
    name: string;
    image: string;
    onClick?: () => void;
};

export default function CategoryPill({ name, image, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className="flex-1 min-w-[140px] max-w-[160px] mx-auto bg-surface-light border border-border rounded-full py-8 px-4 flex flex-col items-center gap-6 group hover:bg-surface hover:border-primary transition-all duration-500 shadow-sm hover:shadow-md cursor-pointer"
        >
            <div className="w-16 h-16 rounded-full overflow-hidden border border-border shadow-inner">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <span className="text-sm font-serif font-bold text-text-dark group-hover:text-primary transition-colors">
                {name}
            </span>

            <div className="w-8 h-8 rounded-full bg-surface border border-border group-hover:bg-primary group-hover:text-white flex items-center justify-center text-muted transition-all duration-300">
                <ArrowDown className="h-3.5 w-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
        </div>
    );
}