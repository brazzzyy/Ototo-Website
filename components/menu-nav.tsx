"use client";

type NavSection = { id: string; label: string };

export default function MenuNav({ sections }: { sections: NavSection[] }) {
    function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        history.replaceState(null, "", `#${id}`);
    }

    return (
        <nav
            className="sticky top-16 z-40 -mt-5.5 w-full min-w-0"
            aria-label="Menu categories"
        >
            {/* Full-width scroll on mobile; centered pill on md+ */}
            <div className="overflow-x-auto overscroll-x-contain px-4 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex md:justify-center lg:overflow-x-visible">
                <div className="inline-flex w-max max-w-none flex-nowrap items-center gap-0.5 md:gap-1 rounded-full bg-white/95 backdrop-blur-sm border border-navy/10 px-2 py-1.5 shadow-[0_6px_18px_-10px_rgba(20,50,79,0.22)]">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(event) => handleClick(event, section.id)}
                            className="shrink-0 font-lexend text-xs md:text-sm whitespace-nowrap text-navy/70 hover:bg-navy hover:text-white transition-colors px-3 py-1.5 md:px-3.5 rounded-full"
                        >
                            {section.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
