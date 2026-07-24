import Link from "next/link";
import Image from "next/image";
import Reviews from "@/components/reviews";
import { marqueeMenuItems } from "@/lib/menu-data";

export default function Home() {
  return (
    <>
      {/* Home Banner */}
      <section className="relative overflow-hidden bg-sky pt-16">
        <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-6 sm:px-10 md:px-12 pt-12 pb-6 md:pt-12 md:pb-6 lg:py-10">
          {/* Left: headline + CTA */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-30 shrink-0">
            <h1 className="anim-rise font-league font-medium uppercase leading-[0.95] text-navy text-4xl sm:text-5xl md:text-6xl xl:text-7xl max-w-xl">
              Bold bowls
              <br />
              Honest craft
              <br />
              Pure comfort
            </h1>
            <p className="anim-rise mt-5 md:mt-6 font-lexend font-light text-sm md:text-base text-navy" style={{ animationDelay: "0.1s" }}>
              <span className="mr-2 text-accent">✔</span>
              Broth simmered daily. Noodles served fresh.
            </p>
            <Link
              href={"/menu"}
              className="anim-rise group mt-6 md:mt-8 inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-lexend font-medium px-7 py-3 md:px-9 md:py-3.5 rounded-full text-sm md:text-base shadow-lg shadow-navy/25 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5 transition-all duration-200"
              style={{ animationDelay: "0.2s" }}
            >
              Discover Menu
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <span className="anim-rise mt-4 font-lexend font-extralight text-xs md:text-sm text-navy/70" style={{ animationDelay: "0.3s" }}>
              Dine in or take out · 205 N Richmond St, Appleton
            </span>
          </div>

          {/* Right: bowl collage with 美味しい (oishii — delicious) */}
          <div className="relative w-full max-w-110 sm:max-w-135 lg:w-[55%] lg:max-w-none aspect-square lg:aspect-3/2 select-none">
            <Image
              src={"/images/ramen-bowl.webp"}
              alt="Tonkotsu ramen with chashu pork and soft egg"
              width={720}
              height={740}
              sizes="(min-width: 1024px) 26vw, 45vw"
              className="anim-bowl absolute left-[4%] -top-[2%] lg:-top-[24%] w-[46%] lg:w-[44%] h-auto z-10 drop-shadow-[0_20px_28px_rgba(20,50,79,0.3)]"
              style={{ animationDelay: "0.15s" }}
              priority
            />
            <Image
              src={"/images/ototo-don.webp"}
              alt="Ototo don rice bowl with shrimp tempura, karaage, and chashu"
              width={720}
              height={610}
              sizes="(min-width: 1024px) 27vw, 47vw"
              className="anim-bowl absolute right-0 top-[22%] lg:top-[8%] w-[48%] lg:w-[46%] h-auto z-10 drop-shadow-[0_20px_28px_rgba(20,50,79,0.3)]"
              style={{ animationDelay: "0.3s" }}
              priority
            />
            <Image
              src={"/images/ramen-bowl-2.webp"}
              alt="Shoyu ramen with chashu pork, narutomaki, and seasoned egg"
              width={700}
              height={750}
              sizes="(min-width: 1024px) 27vw, 47vw"
              className="anim-bowl absolute left-[24%] -bottom-[12%] lg:-bottom-[26%] w-[48%] lg:w-[46%] h-auto z-10 drop-shadow-[0_20px_28px_rgba(20,50,79,0.3)]"
              style={{ animationDelay: "0.45s" }}
              priority
            />
            {/* Kanji cascade — same bowl entrance, staggered with bowl timings */}
            <span className="anim-bowl absolute left-[43%] sm:left-[45%] lg:left-[47%] top-[0%] lg:-top-[8%] z-20" style={{ animationDelay: "0.15s" }} aria-hidden="true">
              <span className="block font-bold leading-none text-white text-7xl sm:text-8xl lg:text-8xl -rotate-6 drop-shadow-[0_6px_14px_rgba(20,50,79,0.35)]">美</span>
            </span>
            <span className="anim-bowl absolute left-[37%] sm:left-[39%] lg:left-[42%] top-[22%] lg:top-[18%] z-20" style={{ animationDelay: "0.22s" }} aria-hidden="true">
              <span className="block font-bold leading-none text-white text-7xl sm:text-8xl lg:text-8xl -rotate-2 drop-shadow-[0_6px_14px_rgba(20,50,79,0.35)]">味</span>
            </span>
            <span className="anim-bowl absolute left-[47%] sm:left-[49%] lg:left-[51%] top-[46%] lg:top-[42%] z-20" style={{ animationDelay: "0.40s" }} aria-hidden="true">
              <span className="block font-bold leading-none text-white text-7xl sm:text-8xl lg:text-8xl rotate-3 drop-shadow-[0_6px_14px_rgba(20,50,79,0.35)]">し</span>
            </span>
            <span className="anim-bowl absolute left-[59%] sm:left-[61%] lg:left-[63%] top-[66%] lg:top-[60%] z-20" style={{ animationDelay: "0.50s" }} aria-hidden="true">
              <span className="block font-bold leading-none text-white text-7xl sm:text-8xl lg:text-8xl rotate-9 drop-shadow-[0_6px_14px_rgba(20,50,79,0.35)]">い</span>
            </span>
          </div>
        </div>
      </section>

      {/* Scrolling ribbon */}
      <div className="bg-navy overflow-hidden py-3 md:py-3.5 select-none" aria-hidden="true">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {marqueeMenuItems.map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center font-league font-semibold uppercase tracking-[0.2em] text-cream/90 text-sm md:text-base">
                  <span className="mx-6 md:mx-8">{item.en}</span>
                  <span className="text-accent text-xs" aria-hidden="true">●</span>
                  <span className="mx-6 md:mx-8 font-normal tracking-normal normal-case">{item.jp}</span>
                  <span className="text-accent text-xs" aria-hidden="true">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Brief About Us */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center px-6 sm:px-8 lg:px-12 gap-14 lg:gap-20">
          {/* Overlapping photo collage */}
          <div className="relative w-full max-w-135 lg:max-w-none lg:w-[45%] shrink-0 pb-[8%]">
            <div className="w-[72%] aspect-9/10 rounded-2xl overflow-hidden">
              <Image
                src={"/images/inside-1.webp"}
                alt="Counter seating in front of Ototo's open kitchen"
                width={648}
                height={720}
                sizes="(min-width: 1024px) 30vw, 75vw"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] aspect-4/3 rounded-2xl overflow-hidden ring-10 ring-paper">
              <Image
                src={"/images/inside-3.webp"}
                alt="Tables set for service in the Ototo dining room"
                width={640}
                height={480}
                sizes="(min-width: 1024px) 25vw, 60vw"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Story + checklist */}
          <div className="flex flex-col w-full lg:flex-1">
            <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-3">
              私たちについて — About Us
            </span>
            <h2 className="font-league font-bold text-navy text-4xl md:text-5xl mb-5">
              Little Brother.
              <br />
              Big Flavor.
            </h2>
            <p className="w-full font-lexend font-light text-navy/80 text-sm sm:text-base leading-relaxed">
              <span className="font-medium text-navy">Ototo</span> means &ldquo;little brother&rdquo; in
              Japanese — and that&rsquo;s exactly the spirit of our small, family-run shop in the heart of
              Appleton. Pull up a seat by the open kitchen and watch every bowl come together: broth,
              noodles, toppings, aroma, and oil — the five elements of ramen, done with care.
            </p>

            <ul className="mt-7 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {[
                "Broth simmered fresh every day",
                "An open kitchen in full view",
                "Vegan and gluten-free options",
                "Locally owned and family run",
                "Ramen, donburi & comfort classics",
                "Sake, beer & specialty drinks",
                "A cozy, welcoming dining room",
                "Easy online ordering for takeout",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-accent" aria-hidden="true">
                    <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5 text-white">
                      <path d="M2 6.2 4.8 9 10 3.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-lexend font-light text-navy/85 text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href={"/about"}
              className="group mt-9 md:mt-10 inline-flex items-center gap-2 w-fit bg-navy hover:bg-navy-light text-white font-lexend font-medium px-7 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              Learn More
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-sky-soft py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-accent mb-3 text-center">
            こだわり — What Sets Us Apart
          </span>
          <h2 className="font-league font-bold text-navy text-3xl md:text-4xl lg:text-5xl text-center">
            Why Choose Us?
          </h2>

          {/* Desktop: reasons flanking an oval photo */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center mt-16 w-full">
            {/* Left reasons */}
            <div className="flex flex-col gap-28 z-10">
              <div className="flex items-center justify-end gap-0">
                <div className="text-right max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Fresh</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Ingredients sourced daily, so every dish starts at its best.
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-6 ring-sky-soft -mr-8 ml-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">鮮</div>
              </div>
              <div className="flex items-center justify-end gap-0">
                <div className="text-right max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Quality</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Traditional techniques and careful attention to detail in every bowl.
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-6 ring-sky-soft -mr-8 ml-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">質</div>
              </div>
            </div>

            {/* Center oval photo */}
            <div className="relative z-0 w-80 xl:w-88 aspect-3/4 rounded-full overflow-hidden shrink-0">
              <Image
                src={"/images/food2.webp"}
                alt="Ototo rice bowls served on a wooden table"
                width={768}
                height={1024}
                sizes="352px"
                className="h-full w-full object-cover scale-[1.22] object-[28%_38%]"
                loading="lazy"
              />
            </div>

            {/* Right reasons */}
            <div className="flex flex-col gap-28 z-10">
              <div className="flex items-center gap-0">
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-6 ring-sky-soft -ml-8 mr-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">速</div>
                <div className="max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Fast</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Quick service without sacrificing quality.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-0">
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-6 ring-sky-soft -ml-8 mr-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">心</div>
                <div className="max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Hospitality</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    A warm, welcoming space where every guest is treated like family.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile / tablet: photo above, reasons in a grid */}
          <div className="lg:hidden mt-10 flex flex-col items-center gap-10 w-full">
            <div className="w-56 sm:w-64 aspect-3/4 rounded-full overflow-hidden shrink-0">
              <Image
                src={"/images/food2.webp"}
                alt="Ototo rice bowls served on a wooden table"
                width={768}
                height={1024}
                sizes="256px"
                className="h-full w-full object-cover scale-[1.22] object-[28%_38%]"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full max-w-2xl">
              {[
                { kanji: "鮮", title: "Fresh", desc: "Ingredients sourced daily, so every dish starts at its best." },
                { kanji: "質", title: "Quality", desc: "Traditional techniques and careful attention to detail in every bowl." },
                { kanji: "速", title: "Fast", desc: "Quick service without sacrificing quality." },
                { kanji: "心", title: "Hospitality", desc: "A warm, welcoming space where every guest is treated like family." },
              ].map((reason) => (
                <div key={reason.title} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-paper mb-3 font-league font-bold text-navy text-xl select-none" aria-hidden="true">
                    {reason.kanji}
                  </div>
                  <h3 className="font-league font-semibold text-navy text-xl mb-1.5">{reason.title}</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 md:py-28">
        <Reviews />
      </section>
    </>
  );
}
