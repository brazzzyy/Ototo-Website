import type { Metadata } from "next";
import Menu from "@/components/menu";

export const metadata: Metadata = {
    title: "Menu",
    description:
        "Explore the Ototo menu — authentic ramen, rice bowls, appetizers, desserts, Japanese beer and sake in Appleton, WI. Tokyo Shoyu, Classic Tonkotsu, OTOTO Don, and more.",
};

export default function MenuPage() {
    return (
        <Menu/>
    )
}
