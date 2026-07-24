import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center bg-sky">
            <div className="flex flex-col items-center max-w-lg">
                <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-navy/60 mb-2" aria-hidden="true">
                    おっと — Oops
                </span>
                <h1 className="font-league text-7xl font-bold md:text-8xl lg:text-9xl text-navy">
                    404
                </h1>

                <span className="font-lexend mb-6 text-xl md:text-2xl font-medium text-navy">
                    This bowl is empty
                </span>
                <p className="font-lexend font-light text-sm md:text-base px-2 text-navy/80">
                    The page you are trying to access doesn&rsquo;t exist or has been moved.
                </p>
                <p className="font-lexend font-light mb-8 text-sm md:text-base text-navy/80">
                    Try going back to our homepage
                </p>
                <Link
                    href="/"
                    className="font-lexend inline-flex items-center justify-center rounded-full bg-navy hover:bg-navy-light px-8 py-3 text-base font-medium text-white transition-all hover:-translate-y-0.5"
                >
                    Go Back
                </Link>
            </div>
        </div>
    )
}
