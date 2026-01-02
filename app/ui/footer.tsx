"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="p-15 h-65 bg-gray-900 flex items-center gap-4 justify-between pt-[-10]">
                {/* Logo + Description */}
                <div className="flex flex-col -mt-25">
                    <Image 
                        src={"/Ototo_footer.png"}
                        alt="Logo image"
                        width={180}
                        height={180}
                    />
                    <p className="font-league font-extralight text-white ml-3">Refined. Authenthic. Unforgettable.</p>
                    <Link href={"https://www.facebook.com/profile.php?id=61555476440699"} target="_blank" rel="noopener noreferrer" className="w-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="currentColor" className=" text-white cursor-pointer m-3 mt-2" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 
                            7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 
                            1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 
                            2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </Link>
                </div>
                {/* Information */}
                <div className="-mt-16"> 
                    <span className="font-league font-normal text-white text-3xl">Information</span>
                    <p className="font-league font-light text-gray-300 text-medium">205 N Richmond St, Appleton, WI 54911</p>
                    <p className="font-league font-light text-gray-300 text-medium">{"(920)-815-3039"}</p>
                    <p className="font-league font-light text-gray-300 text-medium">Email: ototoWI@outlook.com</p>
                </div>
                {/* Schedule */}
                <div className="-mt-18 mr-60">
                    <span className="font-league font-normal text-white text-3xl">Schedule</span>
                    <p className="font-league font-light text-gray-300 text-medium">Monday & Thursday CLOSED</p>
                    <p className="font-league font-light text-gray-300 text-medium">Tuesday & Wednesday 11am-pm</p>
                    <p className="font-league font-light text-gray-300 text-medium">Friday-Sunday 11am-9pm</p>
                </div>
            </div> 
            {/* Website Privacy Terms */}
            <div className="font-lexend font-light flex justify-between pl-17 pr-15 pb-4 bg-gray-900 text-gray-300">
                <p>&#169; 2025 Ototo. All Rights Reserved</p>
                <span>Privacy Policy | Terms of Service</span>
            </div>
        </>
    );
}