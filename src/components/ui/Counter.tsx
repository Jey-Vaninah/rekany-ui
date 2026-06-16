import { useEffect, useState } from "react";

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
}

export default function Counter({
    value,
    duration = 1500,
    suffix = "",
}: CounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= value) {
                start = value;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [value, duration]);

    return (
        <span className="text-2xl font-bold text-white">
            {count}
            {suffix}
        </span>
    );
}