"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-200 w-full bg-black">
            <Image 
                src={"/Ototo.png"}
                alt="Logo image"
                width={150}
                height={150}
            />
        </div>
    );
}