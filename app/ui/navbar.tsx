"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex flex-row items-center justify-between lg:justify-center fixed h-14 md:h-18 top-0 w-full bg-white z-50 px-4 md:px-0">
            {/* Mobile Logo */}
            <Link href={"/"} className="md:hidden">
                <Image
                    className="z-10 cursor-pointer select-none"
                    src={"/Ototo.png"}
                    alt="Picture of logo"
                    width={120}
                    height={54}
                />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex flex-row items-center gap-6 xl:gap-10 text-lg xl:text-xl font-normal">
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none" href={"/"}
                >
                    Home
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none" href={"/menu"}
                >
                    Menu
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none xl:mr-10" href={"https://www.toasttab.com/local/order/ototo-appleton/r-df31c22c-6ca0-45b0-b27c-6139a1f6739d?diningOption=takeout&rwg_token=ACgRB3cr_tZA84yh6Ue3AOoa4cot2rh-w67oxT743d87l-Di8dEeOAzta6Cn8zR6F7sxhIGWHEnz2538z0ZTm64KJY-5yOoH_Q%3D%3D"} target="_blank" rel="noopener noreferrer"
                >
                    Order Online
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href={"/"}>
                    <Image
                        className="z-10 cursor-pointer select-none"
                        src={"/Ototo.png"}
                        alt="Picture of logo"
                        width={200}
                        height={90}
                    />
                </Link>
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none xl:ml-10" href={"/contact"}
                >
                    Contact
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none" href={"https://www.facebook.com/profile.php?id=61555476440699"} target="_blank" rel="noopener noreferrer"
                >
                    Facebook
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                    className="group relative z-10 font-league cursor-pointer select-none" href={"/about"}
                >
                    About
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </ul>

            {/* Tablet Navigation (simplified) */}
            <ul className="ml-65 hidden md:flex lg:hidden flex-row items-center gap-4 text-base font-normal">
                <Link className="font-league cursor-pointer select-none" href={"/"}>Home</Link>
                <Link className="font-league cursor-pointer select-none" href={"/menu"}>Menu</Link>
                <Link href={"/"}>
                    <Image
                        className="z-10 cursor-pointer select-none"
                        src={"/Ototo.png"}
                        alt="Picture of logo"
                        width={150}
                        height={68}
                    />
                </Link>
                <Link className="font-league cursor-pointer select-none" href={"/contact"}>Contact</Link>
                <Link className="font-league cursor-pointer select-none" href={"/about"}>About</Link>
            </ul>

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden z-50 flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
            >
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-14 left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible max-h-screen' : 'opacity-0 invisible max-h-0 overflow-hidden'}`}>
                <ul className={`flex flex-col items-center gap-4 py-6 text-lg font-normal transition-all duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"/"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"/menu"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Menu
                    </Link>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"https://www.toasttab.com/local/order/ototo-appleton/r-df31c22c-6ca0-45b0-b27c-6139a1f6739d?diningOption=takeout&rwg_token=ACgRB3cr_tZA84yh6Ue3AOoa4cot2rh-w67oxT743d87l-Di8dEeOAzta6Cn8zR6F7sxhIGWHEnz2538z0ZTm64KJY-5yOoH_Q%3D%3D"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Order Online
                    </Link>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"/contact"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"https://www.facebook.com/profile.php?id=61555476440699"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Facebook
                    </Link>
                    <Link 
                        className="font-league cursor-pointer select-none" 
                        href={"/about"}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                </ul>
            </div>
        </nav>
    );
}