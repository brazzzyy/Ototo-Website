"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealVariant = "rise" | "fade" | "left" | "right" | "zoom";

type RevealProps = {
    children?: ReactNode;
    /** Element to render. Defaults to a div. */
    as?: ElementType;
    variant?: RevealVariant;
    /** Stagger, in seconds. */
    delay?: number;
    className?: string;
    style?: CSSProperties;
    id?: string;
} & { [dataAttribute: `data-${string}`]: string | boolean | undefined };

/**
 * Fades/slides its children in the first time they scroll into view. The hidden
 * state lives in CSS (`.reveal`), so it is already applied in the server HTML —
 * hydration only ever flips it on. Falls back to visible with JS disabled
 * (see the <noscript> block in the root layout) or reduced motion.
 */
export default function Reveal({
    children,
    as: Tag = "div",
    variant = "rise",
    delay = 0,
    className = "",
    style,
    ...rest
}: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries.some((entry) => entry.isIntersecting)) return;
                setRevealed(true);
                observer.disconnect();
            },
            // Trigger a little after the element's leading edge clears the fold
            { threshold: 0, rootMargin: "0px 0px -80px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            data-revealed={revealed ? "" : undefined}
            className={`reveal reveal-${variant}${className ? ` ${className}` : ""}`}
            style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
            {...rest}
        >
            {children}
        </Tag>
    );
}
