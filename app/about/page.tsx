import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const MAP_URL =
    "https://www.google.com/maps/place/Ot%C5%8Dto/@44.263218,-88.4186325,16z/data=!3m1!4b1!4m6!3m5!1s0x8803b70901001cd5:0xcbafbc715982a865!8m2!3d44.2632142!4d-88.4160576!16s%2Fg%2F11vt8dkhwn";

export const metadata: Metadata = {
    title: "About | Ototo",
    description:
        "Meet Yia Thao, owner of Ototo — a Japanese ramen and donburi restaurant in Appleton, WI built on fresh food, craft, and community.",
};

export default function About() {
    return (
        <>
            {/* Page header — ink band with ghost kanji */}
            <section className="relative overflow-hidden bg-ink pt-16">
                <span
                    className="pointer-events-none select-none absolute -right-4 -bottom-14 font-league font-bold leading-none text-white/[0.05] text-[11rem] md:text-[15rem]"
                    aria-hidden="true"
                >
                    物語
                </span>
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col items-center text-center">
                    <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-3">
                        私たちについて — Our Story
                    </span>
                    <h1 className="font-league font-bold uppercase text-white text-4xl md:text-5xl lg:text-6xl">
                        Behind Ototo
                    </h1>
                    <p className="mt-4 font-lexend font-light text-white/65 text-sm md:text-base max-w-xl">
                        Food made with care, served in a space that feels like family.
                    </p>
                </div>
            </section>

            {/* Owner story */}
            <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-14 md:pt-20 pb-20 md:pb-28">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
                    <div className="relative w-full max-w-125 shrink-0 mx-auto lg:mx-0">
                        <Image
                            src={"/images/store.webp"}
                            alt="The Ototo storefront on Richmond Street in Appleton"
                            width={500}
                            height={400}
                            sizes="(min-width: 1024px) 500px, 100vw"
                            className="relative w-full h-auto object-cover rounded-2xl"
                            priority
                        />
                        {/* caption chip */}
                        <Link
                            href={MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy text-white font-lexend text-xs md:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-navy/25 hover:bg-navy-light transition-colors"
                        >
                            205 N Richmond St · Appleton, WI
                        </Link>
                    </div>

                    <div className="flex flex-col gap-5 w-full max-w-2xl lg:w-1/2 pt-10 lg:pt-0">
                        <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-navy/50">
                            オーナー — The Owner
                        </span>
                        <h2 className="font-league font-bold text-navy text-4xl md:text-5xl mb-2">
                            Meet Yia Thao
                        </h2>

                        <p className="font-lexend font-light text-navy/80 text-sm md:text-base leading-relaxed">
                            Yia Thao is the proud owner of Ototo and stepped into ownership in September 2025 under
                            new management. Her decision to take on the restaurant was driven by a genuine love for cooking and a belief
                            that food has the power to bring people together in meaningful ways. For Yia, meals are more than something to be served.
                            They are moments that create connection and leave a lasting impression.
                        </p>
                        <p className="font-lexend font-light text-navy/80 text-sm md:text-base leading-relaxed">
                            Cooking has always been close to Yia&rsquo;s heart. It is how she expresses care and creates a sense of
                            belonging for others. Growing up surrounded by shared meals and time spent in the kitchen shaped her appreciation
                            for food as a central part of culture and community. That foundation continues to influence how Ototo is run today,
                            from the atmosphere of the space to the way each dish is prepared and presented.
                        </p>
                        <p className="font-lexend font-light text-navy/80 text-sm md:text-base leading-relaxed">
                            Since taking over Ototo, Yia has focused on creating a welcoming environment where guests feel
                            comfortable returning again and again. She is passionate about offering food that feels familiar yet thoughtful,
                            and about building a place where people can gather, slow down, and enjoy time together. As Ototo continues to grow,
                            Yia remains excited about what lies ahead and is grateful for the support of the community that makes it all possible.
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <Link
                                href={"/menu"}
                                className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-lexend font-medium px-7 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5"
                            >
                                See The Menu
                                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                            </Link>
                            <Link
                                href={"/contact"}
                                className="font-lexend text-sm md:text-base text-navy/70 hover:text-navy underline underline-offset-4 decoration-navy/30 hover:decoration-navy transition-colors"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
