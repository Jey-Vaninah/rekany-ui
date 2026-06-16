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
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";

    const styles: Record<ButtonVariant, string> = {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary:
            "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur",
    };

    return (
        <button className={`${base} ${styles[variant]}`} {...props}>
            {children}
            {icon && <ArrowRight className="h-4 w-4" />}
        </button>
    );
}