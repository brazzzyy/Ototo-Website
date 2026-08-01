import Link from "next/link";
import Image from "next/image";
import Reviews from "@/components/reviews";
import Reveal from "@/components/reveal";
// Static imports give Next the intrinsic size and let it bake a base64 blur
// placeholder straight into the HTML — no extra request, no empty box.
import homeBanner from "@/public/images/home-banner.webp";
import inside1 from "@/public/images/inside-1.webp";
import inside3 from "@/public/images/inside-3.webp";
import food2 from "@/public/images/food2.webp";

// Both the desktop and mobile oval render the same photo; keeping one `sizes`
// string means they resolve to the same optimized URL instead of two.
const OVAL_SIZES = "(min-width: 1024px) 352px, 256px";

export default function Home() {
  return (
    <>
      {/* Home Banner — full-photo hero.
          bg-ink is the base layer: the headline is white, so without it the
          paper-coloured body showed through as a white flash on every reload
          until the photo decoded. The blur placeholder then covers that base
          instantly, so the photo fades up rather than popping in. */}
      <section className="relative flex min-h-96 md:min-h-125 lg:min-h-175 flex-col items-center justify-center overflow-hidden bg-ink px-4 pt-16 pb-10">
        <Image
          src={homeBanner}
          alt="Spread of Ototo appetizers on a wooden table"
          fill
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          priority
        />
        {/* Soft scrims: top blends the transparent navbar, center keeps text legible */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/45 to-transparent" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>

        <h1 className="anim-rise relative font-league font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
          美味しい
        </h1>
        <span className="anim-rise relative mt-2 font-league font-extralight text-sm sm:text-base md:text-lg lg:text-xl text-white text-center px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]" style={{ animationDelay: "0.1s" }}>
          Refined. Authentic. Unforgettable.
        </span>
        <Link
          href={"/menu"}
          className="anim-rise relative mt-4 md:mt-6 bg-white rounded-2xl hover:bg-cream text-navy font-lexend font-normal px-4 py-2 md:px-6 md:py-3 text-sm md:text-base shadow-lg shadow-black/20 transition-colors"
          style={{ animationDelay: "0.2s" }}
        >
          Discover Menu
        </Link>
      </section>

      {/* Brief About Us */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center px-6 sm:px-8 lg:px-12 gap-14 lg:gap-20">
          {/* Overlapping photo collage — plays with the hero, not on scroll */}
          <div className="relative w-full max-w-135 lg:max-w-none lg:w-[45%] shrink-0 pb-[8%]">
            <div className="anim-bowl w-[72%] aspect-9/10 rounded-2xl overflow-hidden" style={{ animationDelay: "0.15s" }}>
              <Image
                src={inside1}
                alt="Counter seating in front of Ototo's open kitchen"
                sizes="(min-width: 1024px) 30vw, 75vw"
                className="h-full w-full object-cover"
                placeholder="blur"
                // This collage animates in on load with the hero, so it can't
                // wait for a scroll — but it must not outrank the LCP banner.
                loading="eager"
                fetchPriority="low"
              />
            </div>
            <div className="anim-bowl absolute bottom-0 right-0 w-[55%] aspect-4/3 rounded-2xl overflow-hidden ring-10 ring-paper" style={{ animationDelay: "0.3s" }}>
              <Image
                src={inside3}
                alt="Tables set for service in the Ototo dining room"
                sizes="(min-width: 1024px) 25vw, 60vw"
                className="h-full w-full object-cover"
                placeholder="blur"
                loading="eager"
                fetchPriority="low"
              />
            </div>
          </div>

          {/* Story + checklist */}
          <div className="flex flex-col w-full lg:flex-1">
            <span className="anim-rise font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-navy/50 mb-3" style={{ animationDelay: "0.2s" }}>
              私たちについて — About Us
            </span>
            <h2 className="anim-rise font-league font-bold text-navy text-4xl md:text-5xl mb-5" style={{ animationDelay: "0.28s" }}>
              Little Brother
              <br />
              Big Flavor
            </h2>
            <p className="anim-rise w-full font-lexend font-light text-navy/80 text-sm sm:text-base leading-relaxed" style={{ animationDelay: "0.36s" }}>
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
              ].map((point, i) => (
                <li
                  key={point}
                  className="anim-rise flex items-center gap-3"
                  style={{ animationDelay: `${0.44 + i * 0.05}s` }}
                >
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
              className="anim-rise group mt-9 md:mt-10 inline-flex items-center gap-2 w-fit bg-navy hover:bg-navy-light text-white font-lexend font-medium px-7 py-3 rounded-full text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{ animationDelay: "0.86s" }}
            >
              Learn More
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex flex-col items-center">
          <Reveal as="span" variant="fade" className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-navy/50 mb-3 text-center">
            こだわり — What Sets Us Apart
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-league font-bold text-navy text-3xl md:text-4xl lg:text-5xl text-center">
            Why Choose Us?
          </Reveal>

          {/* Desktop: reasons flanking an oval photo */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center mt-16 w-full">
            {/* Left reasons */}
            <div className="flex flex-col gap-28 z-10">
              <Reveal variant="left" delay={0.2} className="flex items-center justify-end gap-0">
                <div className="text-right max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Fresh</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Ingredients sourced daily, so every dish starts at its best.
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-4 ring-muted -mr-8 ml-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">鮮</div>
              </Reveal>
              <Reveal variant="left" delay={0.32} className="flex items-center justify-end gap-0">
                <div className="text-right max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Quality</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Traditional techniques and careful attention to detail in every bowl.
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-4 ring-muted -mr-8 ml-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">質</div>
              </Reveal>
            </div>

            {/* Center oval photo */}
            <Reveal variant="zoom" delay={0.12} className="relative z-0 w-80 xl:w-88 aspect-3/4 rounded-full overflow-hidden shrink-0">
              <Image
                src={food2}
                alt="Ototo rice bowls served on a wooden table"
                sizes={OVAL_SIZES}
                className="h-full w-full object-cover scale-[1.22] object-[28%_38%]"
                placeholder="blur"
              />
            </Reveal>

            {/* Right reasons */}
            <div className="flex flex-col gap-28 z-10">
              <Reveal variant="right" delay={0.2} className="flex items-center gap-0">
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-4 ring-muted -ml-8 mr-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">速</div>
                <div className="max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Fast</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    Quick service without sacrificing quality.
                  </p>
                </div>
              </Reveal>
              <Reveal variant="right" delay={0.32} className="flex items-center gap-0">
                <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-paper ring-4 ring-muted -ml-8 mr-5 z-10 font-league font-bold text-navy text-2xl select-none" aria-hidden="true">心</div>
                <div className="max-w-72">
                  <h3 className="font-league font-semibold text-navy text-2xl mb-1.5">Hospitality</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">
                    A warm, welcoming space where every guest is treated like family.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile / tablet: photo above, reasons in a grid */}
          <div className="lg:hidden mt-10 flex flex-col items-center gap-10 w-full">
            <Reveal variant="zoom" className="w-56 sm:w-64 aspect-3/4 rounded-full overflow-hidden shrink-0">
              <Image
                src={food2}
                alt="Ototo rice bowls served on a wooden table"
                sizes={OVAL_SIZES}
                className="h-full w-full object-cover scale-[1.22] object-[28%_38%]"
                placeholder="blur"
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 w-full max-w-2xl">
              {[
                { kanji: "鮮", title: "Fresh", desc: "Ingredients sourced daily, so every dish starts at its best." },
                { kanji: "質", title: "Quality", desc: "Traditional techniques and careful attention to detail in every bowl." },
                { kanji: "速", title: "Fast", desc: "Quick service without sacrificing quality." },
                { kanji: "心", title: "Hospitality", desc: "A warm, welcoming space where every guest is treated like family." },
              ].map((reason, i) => (
                <Reveal key={reason.title} delay={i * 0.1} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-paper mb-3 font-league font-bold text-navy text-xl select-none" aria-hidden="true">
                    {reason.kanji}
                  </div>
                  <h3 className="font-league font-semibold text-navy text-xl mb-1.5">{reason.title}</h3>
                  <p className="font-lexend font-light text-navy/75 text-sm leading-relaxed">{reason.desc}</p>
                </Reveal>
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
