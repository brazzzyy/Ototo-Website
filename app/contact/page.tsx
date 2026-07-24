import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Ototo in Appleton, WI — visit us at 205 N Richmond St, call (920) 815-3039, or send a message about dining, catering, or feedback.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
