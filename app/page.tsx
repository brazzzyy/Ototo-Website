import { Main } from "next/document";
import Link from "next/link";
import Image from "next/image";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <div className="relative mt-50 flex flex-col justify-center items-center gap-2">
        <p className="font-league font-medium text-8xl z-10 text-white">美味しい</p>
        <span className="font-league font-extralight text-xl z-10 text-white">Refined. Authentic. Unforgettable.</span>
        <Link className="bg-white font-lexend font-normal z-10 p-3 mb-150 cursor-pointer" href={"/menu"}>Discover Menu</Link>
        <div className="w-full z-1">
          <Image
            src={"/social15.jpg"}
            alt="Home picture"
            width={1920}
            height={200}
            className="absolute inset-0 w-full h-200 object-cover -top-60 -z-10"
            priority
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="font-league font-medium">Yia Thao</h2>
        <Image 
          src={"/Ototo.png"}
          alt="pic"
          height={100}
          width={100}
        />
      </div>
    </>
  );
}
