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
      <div className="flex flex-col justify-center items-center -mt-35 mb-100">
        <h1 className="font-league font-normal text-5xl">Why Choose Us?</h1>
        <div className="mt-10 flex justify-center gap-55 font-league font-light text-xl">
          <div className="flex flex-col items-center w-55">
            <Image 
              src={"/bowl-rice.png"}
              alt="Bowl of rice"
              width={100}
              height={100}
              className="mb-5"
            />
            <span className="text-3xl">Fresh</span>
            <p className="font-extralight text-base">We offer the best and blah blah blah blah blah</p>
          </div>
          <div className="flex flex-col items-center w-55">
            <Image 
              src={"/bowl-noodles.png"}
              alt="Bowl of rice"
              width={100}
              height={100}
              className="mb-5"
            />
            <span className="text-3xl">Quality</span>
            <p className="font-extralight text-base">blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
          </div>
          <div className="flex flex-col items-center w-55">
            <Image 
              src={"/tachometer.png"}
              alt="Bowl of rice"
              width={100}
              height={100}
              className="mb-5"
            />
            <span className="text-3xl">Fast</span>
            <p className="font-extralight text-base">blah blah blah blah blah blah blah blah blah</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
