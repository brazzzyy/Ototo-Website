import Link from "next/link"

export default function NotFound() {
    return (
        <>
            {/* Ink band, matching the other interior pages. The fixed navbar is
                transparent-with-white-type until you scroll, so a page that
                topped out on paper left the logo and links invisible. */}
            <section className="relative overflow-hidden bg-ink pt-16">
                <span
                    className="anim-fade pointer-events-none select-none absolute -right-4 -bottom-14 font-league font-bold leading-none text-white/5 text-[11rem] md:text-[15rem]"
                    style={{ animationDelay: "0.25s" }}
                    aria-hidden="true"
                >
                    迷子
                </span>
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col items-center text-center">
                    <span className="anim-rise font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-3">
                        おっと — Oops
                    </span>
                    <h1 className="anim-rise font-league font-bold text-white text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.08s" }}>
                        404
                    </h1>
                    <p className="anim-rise mt-4 font-lexend font-light text-white/65 text-sm md:text-base max-w-xl" style={{ animationDelay: "0.16s" }}>
                        This bowl is empty.
                    </p>
                </div>
            </section>

            <section className="mx-auto flex max-w-lg flex-col items-center px-6 pt-14 pb-20 text-center md:pt-20 md:pb-28">
                <h2 className="anim-rise font-league font-bold text-navy text-2xl md:text-3xl mb-3" style={{ animationDelay: "0.24s" }}>
                    We couldn&rsquo;t find that page
                </h2>
                <p className="anim-rise font-lexend font-light text-navy/70 text-sm md:text-base leading-relaxed" style={{ animationDelay: "0.32s" }}>
                    The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
                    Head back home, or take a look at what we&rsquo;re serving.
                </p>
                <div className="anim-rise mt-8 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy-light px-7 py-3 font-lexend text-sm md:text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Back Home
                        <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                    <Link
                        href="/menu"
                        className="font-lexend text-sm md:text-base text-navy/70 hover:text-navy underline underline-offset-4 decoration-navy/30 hover:decoration-navy transition-colors"
                    >
                        See the menu
                    </Link>
                </div>
            </section>
        </>
    )
}
