"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ORDER_URL =
    "https://www.toasttab.com/local/order/ototo-appleton/r-df31c22c-6ca0-45b0-b27c-6139a1f6739d?diningOption=takeout&rwg_token=ACgRB3cr_tZA84yh6Ue3AOoa4cot2rh-w67oxT743d87l-Di8dEeOAzta6Cn8zR6F7sxhIGWHEnz2538z0ZTm64KJY-5yOoH_Q%3D%3D";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61555476440699";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
] as const;

export default function NavBar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Close the mobile drawer whenever the route changes
    // (state adjustment during render — avoids a setState-in-effect cascade)
    const [prevPathname, setPrevPathname] = useState(pathname);
    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setIsMenuOpen(false);
    }

    // Transparent over the sky band at the top; frosted once scrolled
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll while the drawer is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    const isSolid = isScrolled || isMenuOpen;

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                className={`transition-all duration-300 ${
                    isSolid
                        ? "bg-paper/85 backdrop-blur-md border-b border-navy/10 shadow-sm shadow-navy/5"
                        : "bg-transparent border-b border-transparent"
                }`}
                aria-label="Main"
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="shrink-0" onClick={() => setIsMenuOpen(false)}>
                        <Image
                            className="h-9 sm:h-10 lg:h-11 w-auto cursor-pointer select-none"
                            src="/brand/Ototo_nav.png"
                            alt="Ototo"
                            width={160}
                            height={72}
                            priority
                        />
                    </Link>

                    {/* Desktop: centered links */}
                    <ul className="hidden lg:flex flex-1 items-center justify-center gap-1">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`font-lexend text-sm tracking-wide rounded-full px-4 py-2 transition-colors ${
                                        isActive(href)
                                            ? `${isSolid ? "bg-sky-soft" : "bg-white/45"} text-navy font-medium`
                                            : `hover:text-navy ${isSolid ? "text-navy/70 hover:bg-navy/5" : "text-navy/90 hover:bg-white/30"}`
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop: social + CTA */}
                    <div className="hidden lg:flex items-center gap-2 shrink-0">
                        <Link
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors"
                            aria-label="Ototo on Facebook"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </Link>
                        <Link
                            href={ORDER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 bg-navy hover:bg-navy-light text-white font-lexend text-sm font-medium px-5 py-2.5 rounded-full shadow-md shadow-navy/15 transition-all hover:-translate-y-0.5"
                        >
                            Order Online
                            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                        </Link>
                    </div>

                    {/* Mobile / tablet: compact CTA + menu button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <Link
                            href={ORDER_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-navy text-white font-lexend text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-2 rounded-full"
                        >
                            Order
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy hover:bg-navy/5 transition-colors"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <span className="relative block h-4 w-5" aria-hidden="true">
                                <span
                                    className={`absolute left-0 top-1/2 h-0.5 w-5 origin-center rounded-full bg-navy transition-all duration-300 ease-out ${
                                        isMenuOpen
                                            ? "-translate-y-1/2 rotate-45"
                                            : "-translate-y-[7px]"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-navy transition-all duration-300 ease-out ${
                                        isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-1/2 h-0.5 w-5 origin-center rounded-full bg-navy transition-all duration-300 ease-out ${
                                        isMenuOpen
                                            ? "-translate-y-1/2 -rotate-45"
                                            : "translate-y-[5px]"
                                    }`}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer — scrim/blur toggles instantly (no opacity fade) */}
            <div
                className={`lg:hidden fixed inset-0 top-16 z-40 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none hidden"}`}
                aria-hidden={!isMenuOpen}
            >
                {/* Scrim */}
                <button
                    type="button"
                    className="absolute inset-0 bg-navy/20 backdrop-blur-[2px]"
                    aria-label="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                ></button>
                {/* Panel */}
                <div className="relative bg-paper border-b border-navy/10 shadow-xl">
                    <ul className="mx-auto max-w-lg px-6 py-5 flex flex-col gap-1">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block w-full font-league text-xl py-3 px-2 rounded-lg transition-colors ${
                                        isActive(href)
                                            ? "text-navy font-semibold"
                                            : "text-navy/80 hover:bg-sky-soft/80"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-3 mt-2 border-t border-navy/10">
                            <Link
                                href={FACEBOOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="block font-lexend text-sm text-navy/70 py-2 px-2 hover:text-navy"
                            >
                                Facebook
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
