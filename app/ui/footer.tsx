"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="p-15 h-80 bg-gray-900 flex items-center gap-4 justify-between pt-[-10]">
                {/* Logo + Description */}
                <div className="flex flex-col -mt-25">
                    <Image 
                        src={"/Ototo_footer.png"}
                        alt="Logo image"
                        width={180}
                        height={180}
                    />
                    <p className="font-league font-extralight text-white ml-3">Refined. Authenthic. Unforgettable.</p>
                </div>
                {/* Information */}
                <div className="-mt-16"> 
                    <span className="font-league font-normal text-white text-3xl">Information</span>
                    <p className="font-league font-light text-gray-300 text-medium">205 N Richmond St, Appleton, WI 54911</p>
                    <p className="font-league font-light text-gray-300 text-medium">{"(920)-815-3039"}</p>
                    <p className="font-league font-light text-gray-300 text-medium">Email: ototowi@outlook.com</p>
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