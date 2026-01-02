import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="flex flex-row items-center justify-center fixed h-18 top-0 w-full bg-white z-50">
            <ul className="flex flex-row items-center gap-10 mr-6 text-xl font-normal">
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
                    className="group relative z-10 font-league cursor-pointer select-none mr-10" href={"https://www.toasttab.com/local/order/ototo-appleton/r-df31c22c-6ca0-45b0-b27c-6139a1f6739d?diningOption=takeout&rwg_token=ACgRB3cr_tZA84yh6Ue3AOoa4cot2rh-w67oxT743d87l-Di8dEeOAzta6Cn8zR6F7sxhIGWHEnz2538z0ZTm64KJY-5yOoH_Q%3D%3D"} target="_blank" rel="noopener noreferrer"
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
                    className="group relative z-10 font-league cursor-pointer select-none ml-10" href={"/contact"}
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
        </nav>
    );
}