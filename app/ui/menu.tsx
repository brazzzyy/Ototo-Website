import Image from "next/image"

export default function Menu() {
    return (
        <>
            <div className="mt-14 md:mt-17 grid grid-cols-1 md:grid-cols-2">
                <Image 
                    src={"/menu_app.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/menu_ramen.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                />
                <Image 
                    src={"/menu_rice_bowls.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/menu_specials.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/menu_kids.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/menu_drinks.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-center items-center mb-10 md:mb-20 px-4">
                <Image
                    src={"/menu_legend.png"}
                    alt="Menu Legend"
                    width={500}
                    height={500}
                    className="-mt-4 md:-mt-7 mb-4 md:mb-5 pointer-events-none select-none w-full max-w-75 sm:max-w-100 md:max-w-125 h-auto"
                    loading="lazy"
                />
                <Image 
                    src={"/menu_warning.png"}
                    alt="Menu alergies warning"
                    width={800}
                    height={800}
                    className="pointer-events-none select-none w-full max-w-100 sm:max-w-150 md:max-w-200 h-auto"
                    loading="lazy"
                />
            </div>
        </>
    )
}