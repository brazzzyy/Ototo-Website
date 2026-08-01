import Link from "next/link"
import MenuNav from "./menu-nav"
import {
    foodSections,
    drinks,
    beer,
    sake,
    ramenExtras,
    type MenuItem,
    type MenuTag,
} from "@/lib/menu-data";

const ORDER_URL = "https://www.toasttab.com/local/order/ototo-appleton/r-df31c22c-6ca0-45b0-b27c-6139a1f6739d?diningOption=takeout&rwg_token=ACgRB3cr_tZA84yh6Ue3AOoa4cot2rh-w67oxT743d87l-Di8dEeOAzta6Cn8zR6F7sxhIGWHEnz2538z0ZTm64KJY-5yOoH_Q%3D%3D";

const tagStyles: Record<MenuTag, { label: string; classes: string }> = {
    GF: { label: "GF", classes: "bg-sky-soft text-navy" },
    Vegan: { label: "Vegan", classes: "bg-navy/5 text-navy border border-navy/15" },
    Spicy: { label: "Spicy", classes: "bg-navy text-white" },
};

function Tags({ tags }: { tags?: MenuTag[] }) {
    if (!tags || tags.length === 0) return null;
    return (
        <span className="inline-flex gap-1.5 ml-2 align-middle">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className={`font-lexend font-medium text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full ${tagStyles[tag].classes}`}
                >
                    {tagStyles[tag].label}
                </span>
            ))}
        </span>
    );
}

function ItemRow({ item, dark = false }: { item: MenuItem; dark?: boolean }) {
    return (
        <div>
            <div className="flex items-baseline gap-2">
                <h3 className={`font-league font-semibold text-lg md:text-xl ${dark ? "text-white" : "text-navy"}`}>
                    {item.name}
                    <Tags tags={item.tags} />
                </h3>
                <span className={`flex-1 border-b border-dotted -translate-y-1 ${dark ? "border-cream/25" : "border-navy/25"}`} aria-hidden="true"></span>
                <span className={`font-league font-semibold text-lg md:text-xl ${dark ? "text-cream" : "text-navy"}`}>
                    {item.price}
                </span>
            </div>
            {item.description && (
                <p className={`mt-1 font-lexend font-light text-sm leading-relaxed max-w-prose ${dark ? "text-cream/70" : "text-navy/70"}`}>
                    {item.description}
                </p>
            )}
            {item.note && (
                <p className={`mt-1 font-lexend font-light text-xs ${dark ? "text-cream/50" : "text-navy/50"}`}>
                    {item.note}
                </p>
            )}
        </div>
    );
}

// schema.org structured data so dishes can appear in search results
function menuJsonLd() {
    const allSections = [
        ...foodSections.map((s) => ({ label: s.label, items: s.items })),
        { label: "Drinks", items: drinks },
        { label: "Beer", items: beer },
        { label: "Sake", items: sake },
    ];
    return {
        "@context": "https://schema.org",
        "@type": "Menu",
        name: "Ototo Menu",
        hasMenuSection: allSections.map((section) => ({
            "@type": "MenuSection",
            name: section.label,
            hasMenuItem: section.items.map((item) => ({
                "@type": "MenuItem",
                name: item.name,
                ...(item.description ? { description: item.description } : {}),
                offers: {
                    "@type": "Offer",
                    price: item.price.split("/")[0].trim(),
                    priceCurrency: "USD",
                },
            })),
        })),
    };
}

export default function Menu() {
    const navSections = [
        ...foodSections.map(({ id, label }) => ({ id, label })),
        { id: "drinks", label: "Drinks & Sake" },
        { id: "extras", label: "Extras" },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd()) }}
            />

            {/* Page header — ink band with ghost kanji */}
            <section className="relative overflow-hidden bg-ink pt-16">
                <span
                    className="anim-fade pointer-events-none select-none absolute -right-4 -bottom-14 font-league font-bold leading-none text-white/5 text-[11rem] md:text-[15rem]"
                    style={{ animationDelay: "0.25s" }}
                    aria-hidden="true"
                >
                    献立
                </span>
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 pb-14 md:pb-18 flex flex-col items-center text-center">
                    <span className="anim-rise font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-3">
                        献立 — Kondate
                    </span>
                    <h1 className="anim-rise font-league font-bold uppercase text-white text-4xl md:text-5xl lg:text-6xl" style={{ animationDelay: "0.08s" }}>
                        The Menu
                    </h1>
                    <p className="anim-rise mt-4 font-lexend font-light text-white/65 text-sm md:text-base max-w-xl" style={{ animationDelay: "0.16s" }}>
                        Ramen, rice bowls, and Japanese comfort food — made fresh daily.
                    </p>
                </div>
            </section>

            {/* Sticky category nav — floating pill straddling the header band */}
            <MenuNav sections={navSections} />

            {/* Food sections */}
            <div className="mx-auto max-w-5xl px-6 sm:px-8 pt-12 md:pt-16 pb-4 flex flex-col gap-14 md:gap-20">
                {foodSections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-32 md:scroll-mt-36">
                        <div className="flex items-baseline justify-between mb-2">
                            <h2 className="font-league font-bold text-navy text-3xl md:text-4xl">
                                {section.label}
                            </h2>
                            <span className="font-league font-bold text-sky text-3xl md:text-5xl select-none" aria-hidden="true">
                                {section.kanji}
                            </span>
                        </div>
                        <div className="border-t-2 border-navy/80 mb-7 md:mb-9"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-7 md:gap-y-9">
                            {section.items.map((item) => (
                                <ItemRow key={item.name} item={item} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Drinks / Beer / Sake — bar list on navy */}
            <section id="drinks" className="scroll-mt-32 md:scroll-mt-36 mt-16 md:mt-24 bg-ink">
                <div className="mx-auto max-w-5xl px-6 sm:px-8 py-14 md:py-20">
                    <div className="flex items-baseline justify-between mb-2">
                        <h2 className="font-league font-bold text-white text-3xl md:text-4xl">
                            Drinks & Sake
                        </h2>
                        <span className="font-league font-bold text-cream/20 text-3xl md:text-5xl select-none" aria-hidden="true">
                            飲み物
                        </span>
                    </div>
                    <div className="border-t-2 border-cream/40 mb-8 md:mb-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                        <div className="flex flex-col gap-6">
                            <h3 className="font-lexend text-xs tracking-[0.25em] uppercase text-cream/60">Soft Drinks & Tea</h3>
                            {drinks.map((item) => (
                                <ItemRow key={item.name} item={item} dark />
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-lexend text-xs tracking-[0.25em] uppercase text-cream/60">Beer</h3>
                            {beer.map((item) => (
                                <ItemRow key={item.name} item={item} dark />
                            ))}
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-lexend text-xs tracking-[0.25em] uppercase text-cream/60">Sake · Cans</h3>
                            {sake.map((item) => (
                                <ItemRow key={item.name} item={item} dark />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Ramen extras */}
            <section id="extras" className="scroll-mt-32 md:scroll-mt-36 mx-auto max-w-5xl px-6 sm:px-8 mt-14 md:mt-20">
                <div className="flex items-baseline justify-between mb-2">
                    <h2 className="font-league font-bold text-navy text-3xl md:text-4xl">
                        Extras for Ramen
                    </h2>
                    <span className="font-league font-bold text-sky text-3xl md:text-5xl select-none" aria-hidden="true">
                        追加
                    </span>
                </div>
                <div className="border-t-2 border-navy/80 mb-7 md:mb-9"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-3.5">
                    {ramenExtras.map((item) => (
                        <div key={item.name} className="flex items-baseline gap-2">
                            <span className="font-lexend font-light text-navy text-sm md:text-base">{item.name}</span>
                            <span className="flex-1 border-b border-dotted border-navy/25 -translate-y-1" aria-hidden="true"></span>
                            <span className="font-league font-semibold text-navy text-base md:text-lg">{item.price}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Legend + allergy notice */}
            <section className="mx-auto max-w-5xl px-6 sm:px-8 mt-12 md:mt-16 flex flex-col items-center text-center">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-lexend font-light text-xs md:text-sm text-navy/70">
                    <span><span className={`font-medium text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full mr-1.5 ${tagStyles.GF.classes}`}>GF</span>Gluten free</span>
                    <span><span className={`font-medium text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full mr-1.5 ${tagStyles.Vegan.classes}`}>Vegan</span>Vegan available</span>
                    <span><span className={`font-medium text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full mr-1.5 ${tagStyles.Spicy.classes}`}>Spicy</span>Comes spicy</span>
                </div>
                <p className="mt-6 font-lexend font-light text-xs text-navy/50 max-w-2xl leading-relaxed">
                    Please inform your server of any food allergies or dietary restrictions before placing your order.
                    Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of
                    foodborne illness, especially if you have certain medical conditions.
                </p>
            </section>

            {/* Order CTA */}
            <section className="flex flex-col items-center text-center px-6 mt-12 md:mt-16 pb-20 md:pb-28">
                <p className="font-lexend font-light text-navy/80 text-sm md:text-base mb-5">
                    Ready when you are — order takeout online or visit us on Richmond Street.
                </p>
                <Link
                    href={ORDER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-lexend font-medium px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base transition-all duration-200 hover:-translate-y-0.5"
                >
                    Order Online
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
            </section>
        </>
    )
}
