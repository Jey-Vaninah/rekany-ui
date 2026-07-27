import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    icon?: boolean;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    icon = false,
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

    const styles: Record<ButtonVariant, string> = {
        primary: "bg-rekany-orange text-white hover:bg-rekany-dark",
        secondary:
            "bg-transparent text-white border-2 border-white/30 hover:border-rekany-ldark hover:text-rekany-dark",
    };

    return (
        <button className={`${base} ${styles[variant]}`} {...props}>
            {children}
            {icon && <ArrowRight className="h-4 w-4" />}
        </button>
    );
}