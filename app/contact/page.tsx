"use client";
import Image from "next/image";
import { useState } from "react";
import { submitContactForm } from "./actions";

export default function ContactPage() {
    const [status, setStatus] = useState<{ success: boolean; message?: string; error?: string } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setStatus(null);
        
        const result = await submitContactForm(formData);
        setStatus(result);
        setIsSubmitting(false);

        if (result.success) {
            const form = document.getElementById('contact-form') as HTMLFormElement;
            form?.reset();
        }
    }

    return (
        <>
            <div className="flex flex-col md:flex-row mt-14 md:mt-18 lg:mt-30 mb-10 md:mb-20 lg:mb-30 gap-8 md:gap-12 lg:gap-25 justify-center items-start px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
                <Image 
                    src={"/food2.png"}                
                    alt="Food"
                    height={500}
                    width={502}
                    className="hidden md:block w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[502px] h-auto mx-auto md:mx-0"
                    loading="lazy"
                />
                
                <div className="flex-1 max-w-2xl w-full">
                    <h1 className="font-lexend font-normal text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8">Contact Ototo in Appleton, WI</h1>
                    
                    {status && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            status.success 
                                ? 'bg-green-100 text-green-800 border border-green-300' 
                                : 'bg-red-100 text-red-800 border border-red-300'
                        }`}>
                            {status.success ? status.message : status.error}
                        </div>
                    )}

                    <form id="contact-form" action={handleSubmit} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-lexend font-medium text-gray-700 mb-2 text-sm md:text-base">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend text-sm md:text-base"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-lexend font-medium text-gray-700 mb-2 text-sm md:text-base">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend text-sm md:text-base"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-lexend font-medium text-gray-700 mb-2 text-sm md:text-base">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend text-sm md:text-base"
                                placeholder="(920) 555-1234"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-lexend font-medium text-gray-700 mb-2 text-sm md:text-base">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend resize-none text-sm md:text-base"
                                placeholder="Tell us how we can help you..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer w-full bg-black text-white font-lexend font-medium py-2.5 md:py-3 px-4 md:px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}