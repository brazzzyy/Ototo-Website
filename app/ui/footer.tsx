"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="p-6 md:p-10 lg:p-15 bg-gray-900 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 lg:gap-12 justify-between">
                {/* Logo + Description */}
                <div className="flex flex-col w-full md:w-auto">
                    <Image 
                        src={"/Ototo_footer.png"}
                        alt="Logo image"
                        width={180}
                        height={180}
                        className="md:w-40 lg:w-[180px] object-contain"
                    />
                    <p className="font-league font-extralight text-white ml-2 md:ml-3 text-xs md:text-sm lg:text-base mt-2">Refined. Authenthic. Unforgettable.</p>
                    <Link href={"https://www.facebook.com/profile.php?id=61555476440699"} target="_blank" rel="noopener noreferrer" className="w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="currentColor" className="text-white cursor-pointer ml-2 md:ml-3 mt-2" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 
                            7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 
                            1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 
                            2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </Link>
                </div>
                {/* Information */}
                <div className="w-full md:w-auto"> 
                    <span className="font-league font-normal text-white text-xl md:text-2xl lg:text-3xl block mb-2 md:mb-3">Information</span>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium mb-1 md:mb-2">205 N Richmond St, Appleton, WI 54911</p>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium mb-1 md:mb-2">{"(920)-815-3039"}</p>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium">Email: ototoWI@outlook.com</p>
                </div>
                {/* Schedule */}
                <div className="w-full md:w-auto lg:mr-60">
                    <span className="font-league font-normal text-white text-xl md:text-2xl lg:text-3xl block mb-2 md:mb-3">Schedule</span>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium mb-1 md:mb-2">Monday CLOSED</p>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium mb-1 md:mb-2">Tuesday, Wednesday, and Thursday 11am-9pm</p>
                    <p className="font-league font-light text-gray-300 text-sm md:text-base lg:text-medium">Friday-Sunday 11am-9pm</p>
                </div>
            </div> 
            {/* Website Privacy Terms */}
            <div className="font-lexend font-light flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0 px-4 sm:px-8 md:px-12 lg:px-17 pb-4 bg-gray-900 text-gray-300 text-xs sm:text-sm">
                <p>&#169; 2025 Ototo. All Rights Reserved</p>
                <span className="text-center sm:text-right">Privacy Policy | Terms of Service</span>
            </div>
        </>
    );
}