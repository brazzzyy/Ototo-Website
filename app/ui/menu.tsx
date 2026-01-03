import Image from "next/image"

export default function Menu() {
    return (
        <>
            <div className="mt-14 md:mt-17 grid grid-cols-1 md:grid-cols-2">
                <Image 
                    src={"/pg 1.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                    loading="eager"
                />
                <Image 
                    src={"/pge 2.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    priority
                    loading="eager"
                />
                <Image 
                    src={"/pge 3.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/pges 4.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/pg 5.jpg"}
                    alt="menu picture"
                    height={900}
                    width={1200}
                    className="w-full h-auto pointer-events-none select-none"
                    loading="lazy"
                />
                <Image 
                    src={"/pge 6.jpg"}
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
                    className="-mt-4 md:-mt-7 mb-4 md:mb-5 pointer-events-none select-none w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
                    loading="lazy"
                />
                <Image 
                    src={"/menu_warning.png"}
                    alt="Menu alergies warning"
                    width={800}
                    height={800}
                    className="pointer-events-none select-none w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] h-auto"
                    loading="lazy"
                />
            </div>
        </>
    )
}