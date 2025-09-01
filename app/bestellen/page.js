import Offerte from "@/components/Offerte";
import React from "react";

export const metadata = {
    title: "Mobiel toilet bestellen",
    keywords: [
        "mobiel toilet bestellen",
        "toilet online bestellen",
        "mobiel toilet direct huren",
        "WC bestellen online",
        "toilet verhuur bestellen",
        "mobiele toilet offerte",
        "dixi bestellen online",
        "sanitair online huren",
        "toilet huren Noord-Holland",
        "mobiel toilet prijzen",
    ],
    description:
        "Bestel direct online uw mobiele toilet bij WC-Direct. Snel bestellen, binnen 48 uur geleverd. Transparante prijzen vanaf €125 eerste week. Ook offerte op maat mogelijk.",
    alternates: {
        canonical: "https://www.wc-direct.nl/bestellen",
    },
};

export default function Bestellen() {
    return <Offerte />;
}
