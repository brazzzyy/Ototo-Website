import Image from "next/image"
import Footer from "./footer"

export default function Menu() {
    return (
        <>
            <div className="mt-17 grid grid-cols-2">
                <Image 
                    src={"/pg 1.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/pge 2.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/pge 3.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/pges 4.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/pg 5.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/pge 6.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
            </div>
            <div className="flex flex-col justify-center items-center mb-20">
                <Image
                    src={"/menu_legend.png"}
                    alt="Menu Legend"
                    width={500}
                    height={500}
                    className="-mt-7 mb-5 pointer-events-none select-none"
                />
                <Image 
                    src={"/menu_warning.png"}
                    alt="Menu alergies warning"
                    width={800}
                    height={800}
                    className="pointer-events-none select-none"
                />
            </div>
            <Footer />
        </>
    )
}