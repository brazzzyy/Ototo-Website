import Link from "next/link";
import Image from "next/image";
import Reviews from "./ui/reviews";

export default function Home() {
  return (
    <>
      {/* Home Banner */}
      <div className="relative mb-41 mt-14 md:mt-0 flex flex-col justify-center items-center px-4 pb-20 min-h-[247px] md:min-h-[500px] lg:min-h-[700px]">
        <p className="font-league font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl z-10 text-white text-center">美味しい</p>
        <span className="font-league font-extralight text-sm sm:text-base md:text-lg lg:text-xl z-10 text-white text-center px-4">Refined. Authentic. Unforgettable.</span>
        <Link className="bg-white font-lexend font-normal z-10 px-4 py-2 md:px-6 md:py-3 mt-4 md:mt-6 cursor-pointer text-sm md:text-base" href={"/menu"}>Discover Menu</Link>
        <div className="w-full z-1">
          <Image
            src={"/home_banner.webp"}
            alt="Home picture"
            width={1920}
            height={200}
            className="absolute inset-0 w-full h-full object-cover -z-10"
            priority
          />
        </div>
      </div>

      {/* Brief About Us */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mb-20 md:mb-40 gap-8 md:gap-12">
        <div className="flex flex-col w-full md:w-auto md:max-w-lg lg:max-w-xl">
          <span className="font-league font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-5">About Ototo</span>
          <p className="w-full md:w-auto mb-6 md:mb-10 font-lexend font-light text-sm sm:text-base md:text-md">
              At <span className="font-medium">Ototo, </span> 
              we are passionate about bringing the art of Japanese food to your
              table. With a commitment to quality, authenticity, and exceptional
              dining experiences, our restaurant is a haven for people who enjoy
              food that is made fresh and with delicateness
          </p>
          <Link href={"/about"} className="px-4 md:px-6 py-2 md:py-3 w-fit md:w-45 h-10 md:h-12 bg-black text-white font-lexend font-medium rounded-full flex items-center gap-2 md:gap-3 text-sm md:text-base">
            Learn More
            <Image 
              src={"/arrow.png"}
              alt="Arrow"
              width={24}
              height={24}
              className="md:w-[30px] md:h-[30px]"
            />
          </Link>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Image 
            src={"/food2.png"}
            alt="Food"
            width={500}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="flex flex-col justify-center items-center mt-37 md:mt-50 mb-20 md:mb-40 px-4">
        <h1 className="font-league font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Why Choose Us?</h1>
        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-55 font-league font-light text-base md:text-lg lg:text-xl">
          <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
            <Image 
              src={"/noodles.png"}
              alt="Noodles"
              width={100}
              height={100}
              className="mb-3 md:mb-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              loading="lazy"
            />
            <span className="text-xl md:text-2xl lg:text-3xl mb-2">Fresh</span>
            <p className="font-extralight text-sm md:text-base text-center">Fresh ingredients sourced daily for every dish.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
            <Image 
              src={"/rice.png"}
              alt="Bowl of rice"
              width={100}
              height={100}
              className="mb-3 md:mb-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              loading="lazy"
            />
            <span className="text-xl md:text-2xl lg:text-3xl mb-2">Quality</span>
            <p className="font-extralight text-sm md:text-base text-center">Authentic Japanese cuisine with traditional techniques and careful attention to detail.</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
            <Image
              src={"/speed.png"}
              alt="Speed image"
              width={100}
              height={100}
              className="mb-3 md:mb-5 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              loading="lazy"
            />
            <span className="text-xl md:text-2xl lg:text-3xl mb-2">Fast</span>
            <p className="font-extralight text-sm md:text-base text-center">Quick service without sacrificing quality.</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="flex flex-col items-center justify-center mb-20 md:mb-40 mt-37 md:mt-75 px-4">
        <h1 className="font-lexend text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-8 md:mb-12 lg:mb-16 text-center">What Our Customers Say</h1>
        <Reviews />
      </div>
    </>
  );
}
