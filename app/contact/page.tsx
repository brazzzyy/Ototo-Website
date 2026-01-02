"use client";
import NavBar from "../ui/navbar";
import Footer from "../ui/footer";
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
            <NavBar />

            <div className="flex flex-col md:flex-row mt-30 mb-30 gap-25 justify-center items-start px-8 max-w-7xl mx-auto">
                <Image 
                    src={"/food2.png"}                
                    alt="Food"
                    height={450}
                    width={450}
                    className="hidden md:block"
                />
                
                <div className="flex-1 max-w-2xl">
                    <h1 className="font-lexend font-normal text-4xl mb-8">Contact Ototo in Appleton, WI</h1>
                    
                    {status && (
                        <div className={`mb-6 p-4 rounded-lg ${
                            status.success 
                                ? 'bg-green-100 text-green-800 border border-green-300' 
                                : 'bg-red-100 text-red-800 border border-red-300'
                        }`}>
                            {status.success ? status.message : status.error}
                        </div>
                    )}

                    <form id="contact-form" action={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-lexend font-medium text-gray-700 mb-2">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-lexend font-medium text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-lexend font-medium text-gray-700 mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend"
                                placeholder="(920) 555-1234"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-lexend font-medium text-gray-700 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-lexend resize-none"
                                placeholder="Tell us how we can help you..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer w-full bg-black text-white font-lexend font-medium py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}