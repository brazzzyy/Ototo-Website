import Link from "next/link";
import Image from "next/image";
import Reviews from "./ui/reviews";

export default function Home() {
  return (
    <>
      {/* Home Banner */}
      <div className="relative mt-50 flex flex-col justify-center items-center gap-2 -mb-30">
        <p className="font-league font-medium text-8xl z-10 text-white">美味しい</p>
        <span className="font-league font-extralight text-xl z-10 text-white">Refined. Authentic. Unforgettable.</span>
        <Link className="bg-white font-lexend font-normal z-10 p-3 mb-150 cursor-pointer" href={"/menu"}>Discover Menu</Link>
        <div className="w-full z-1">
          <Image
            src={"/home_banner.webp"}
            alt="Home picture"
            width={1920}
            height={200}
            className="absolute inset-0 w-full h-200 object-cover -top-60 -z-10"
            priority
          />
        </div>
      </div>

      {/* Brief About Us */}
      <div className="flex justify-between items-center pr-20 pl-30 mb-40">
        <div className="flex flex-col">
          <span className="font-league font-semibold text-7xl mb-5">About Ototo</span>
          <p className="w-110 mb-10 font-lexend font-light text-md">
              At <span className="font-medium">Ototo, </span> 
              we are passionate about bringing the art of Japanese food to your
              table. With a commitment to quality, authenticity, and exceptional
              dining experiences, our restaurant is a haven for people who enjoy
              food that is made fresh and with delicateness
          </p>
          <Link href={"/about"} className="px-6 py-3 w-45 h-12 bg-black text-white font-lexend font-medium rounded-full flex items-center gap-3">
            Learn More
            <Image 
              src={"/arrow.png"}
              alt="Arrow"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <Image 
          src={"/food2.png"}
          alt="Food"
          width={500}
          height={400}
          loading="lazy"
        />
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col justify-center items-center mt-10 mb-80">
        <h1 className="font-league font-normal text-5xl">Why Choose Us?</h1>
        <div className="mt-10 flex justify-center gap-55 font-league font-light text-xl">
          <div className="flex flex-col items-center w-75">
            <Image 
              src={"/noodles.png"}
              alt="Noodles"
              width={100}
              height={100}
              className="mb-5"
              loading="lazy"
            />
            <span className="text-3xl">Fresh</span>
            <p className="font-extralight text-base">Fresh ingredients sourced daily for every dish.</p>
          </div>
          <div className="flex flex-col items-center w-70">
            <Image 
              src={"/rice.png"}
              alt="Bowl of rice"
              width={100}
              height={100}
              className="mb-5"
              loading="lazy"
            />
            <span className="text-3xl">Quality</span>
            <p className="font-extralight text-base">Authentic Japanese cuisine with traditional techniques and careful attention to detail.</p>
          </div>
          <div className="flex flex-col items-center w-70">
            <Image
              src={"/speed.png"}
              alt="Speed image"
              width={100}
              height={100}
              className="mb-5"
              loading="lazy"
            />
            <span className="text-3xl">Fast</span>
            <p className="font-extralight text-base">Quick service without sacrificing quality.</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="flex flex-col items-center justify-center mb-50 mt-20">
        <h1 className="font-lexend text-5xl font-normal mb-16">What Our Customers Say</h1>
        <Reviews />
      </div>
    </>
  );
}
