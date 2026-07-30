"use client";

import { useState } from "react";
import { submitContactForm } from "./actions";

const MAP_URL =
    "https://www.google.com/maps/place/Ot%C5%8Dto/@44.263218,-88.4186325,16z/data=!3m1!4b1!4m6!3m5!1s0x8803b70901001cd5:0xcbafbc715982a865!8m2!3d44.2632142!4d-88.4160576!16s%2Fg%2F11vt8dkhwn";

const labelClass = "contact-label";
const inputClass = "contact-input";
const textareaClass = "contact-input contact-input--textarea";

function InfoRow({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4">
            <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-navy"
                aria-hidden="true"
            >
                {icon}
            </div>
            <div>
                <span className="font-league font-semibold text-navy text-lg block mb-0.5">{title}</span>
                <div className="font-lexend font-light text-navy/70 text-sm leading-relaxed">{children}</div>
            </div>
        </div>
    );
}

export default function ContactPageClient() {
    const [status, setStatus] = useState<{ success: boolean; message?: string; error?: string } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);

        const result = await submitContactForm(formData);
        setStatus(result);
        setIsSubmitting(false);

        if (result.success) {
            const form = document.getElementById("contact-form") as HTMLFormElement;
            form?.reset();
        }
    }

    return (
        <>
            <section className="relative overflow-hidden bg-ink pt-16">
                <span
                    className="pointer-events-none select-none absolute -right-4 -bottom-14 font-league font-bold leading-none text-white/5 text-[11rem] md:text-[15rem]"
                    aria-hidden="true"
                >
                    連絡
                </span>
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col items-center text-center">
                    <span className="font-lexend text-xs md:text-sm tracking-[0.25em] uppercase text-white/50 mb-3">
                        お問い合わせ — Get In Touch
                    </span>
                    <h1 className="font-league font-bold uppercase text-white text-4xl md:text-5xl lg:text-6xl">
                        Contact Ototo
                    </h1>
                    <p className="mt-4 font-lexend font-light text-white/65 text-sm md:text-base max-w-xl">
                        Questions, catering, feedback — we&rsquo;d love to hear from you.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 sm:px-8 pt-14 md:pt-20 pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-0 items-start lg:items-center">
                    <div className="lg:col-span-2 flex justify-center lg:pr-14">
                        <div className="flex w-full max-w-sm flex-col gap-7">
                            <InfoRow
                                title="Visit"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                }
                            >
                                205 N Richmond St, Appleton, WI 54911
                                <a
                                    href={MAP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-1 text-navy underline underline-offset-4 decoration-navy/30 hover:decoration-navy transition-colors font-normal"
                                >
                                    Get directions →
                                </a>
                            </InfoRow>

                            <InfoRow
                                title="Call"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                                    </svg>
                                }
                            >
                                <a href="tel:+19208153039" className="hover:text-navy transition-colors">
                                    (920) 815-3039
                                </a>
                            </InfoRow>

                            <InfoRow
                                title="Email"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                }
                            >
                                <a href="mailto:ototoWI@outlook.com" className="hover:text-navy transition-colors">
                                    ototoWI@outlook.com
                                </a>
                            </InfoRow>

                            <InfoRow
                                title="Hours"
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                }
                            >
                                Tuesday – Sunday · 11am – 8pm
                                <span className="block text-navy/45">Closed Mondays</span>
                            </InfoRow>
                        </div>
                    </div>

                    <div className="lg:col-span-3 lg:border-l lg:border-navy/10 lg:pl-14">
                        <h2 className="font-league font-bold text-navy text-2xl md:text-3xl mb-1">
                            Send us a message
                        </h2>
                        <p className="font-lexend font-light text-navy/60 text-sm mb-6 md:mb-8">
                            We usually reply within a day.
                        </p>

                        {status && (
                            <div
                                className={`mb-6 p-4 rounded-lg font-lexend text-sm ${
                                    status.success
                                        ? "bg-sky-soft text-navy border border-sky"
                                        : "bg-red-50 text-red-800 border border-red-200"
                                }`}
                            >
                                {status.success ? status.message : status.error}
                            </div>
                        )}

                        <form id="contact-form" action={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className={labelClass}>
                                        Name <span className="text-[#d92d20]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={inputClass}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className={labelClass}>
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className={inputClass}
                                        placeholder="(555) 000-000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className={labelClass}>
                                    Email <span className="text-[#d92d20]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className={inputClass}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClass}>
                                    Message <span className="text-[#d92d20]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className={textareaClass}
                                    placeholder="Leave us a message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group cursor-pointer self-start w-fit inline-flex items-center gap-2 bg-navy hover:bg-navy-light transition-all text-white font-lexend font-medium py-3 md:py-3.5 px-8 md:px-9 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base hover:-translate-y-0.5"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && (
                                    <span
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
