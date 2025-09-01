import React from "react";

import PDP from "@/components/PDP";
import TextImage from "@/components/TextImage";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";

export const metadata = {
    title: "Mobiele toilet huren vanaf €125",
    keywords: [
        "mobiele toilet huren",
        "mobiel toilet verhuur",
        "dixi huren",
        "toilet verhuur prijzen",
        "mobiel toilet €125",
        "toiletcabine verhuur",
        "sanitair verhuur",
        "mobiele toilet schoonmaak",
        "toilet huren wekelijks onderhoud",
        "WC verhuur Noord-Holland",
    ],
    description:
        "Huur een mobiele toilet vanaf €125 de eerste week bij WC-Direct. Inclusief wekelijkse schoonmaak, snelle levering en ophaalservice. Geschikt voor 10-15 personen per week.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/toilet1.png",
                width: 1200,
                height: 630,
                alt: "Mobiele toilet huren - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet",
    },
    robots: {
        index: true,
        follow: true,
    },
    structured_data: {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: "Mobiele Toilet Verhuur",
        description:
            "Mobiele toiletcabine verhuur inclusief wekelijkse schoonmaak en onderhoud",
        brand: {
            "@type": "Brand",
            name: "WC-Direct",
        },
        offers: {
            "@type": "Offer",
            price: "125",
            priceCurrency: "EUR",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "WC-Direct VOF",
            },
        },
    },
};

export default function MobieleToilet() {
    const questions = [
        {
            question: "Hoe groot is een mobiel toilet?",
            answer: "Onze toiletcabines zijn 235 cm hoog, 110 cm breed en 120 cm diep. Compact genoeg om overal te plaatsen, maar ruim genoeg voor comfortabel gebruik.",
        },
        {
            question: "Hoe werkt de schoonmaak van een mobiel toilet?",
            answer: "Wij reinigen het toilet wekelijks: legen van de tank, schoonspuiten en navullen van papier en vloeistoffen. Zo blijft het fris en gebruiksklaar.",
        },
        {
            question: "Waar kan een mobiel toilet geplaatst worden?",
            answer: "Een mobiel toilet kan op vrijwel elke vlakke ondergrond worden geplaatst, zolang onze vrachtwagen of aanhanger er kan komen.",
        },
        {
            question:
                "Hoeveel personen kunnen gebruikmaken van één mobiel toilet?",
            answer: "Een toilet met 250 liter tank is geschikt voor gemiddeld 10–15 personen bij een week gebruik. Voor evenementen adviseren we meerdere toiletten bij grotere aantallen bezoekers.",
        },
        {
            question: "Zijn er extra kosten naast de huurprijs?",
            answer: "Nee, onze prijzen zijn all-in: levering, plaatsing, wekelijkse schoonmaak en ophalen. Alleen voor particuliere huur geldt een borg van €100.",
        },
    ];
    return (
        <main className="">
            <PDP />
            {/* <TextImage
                img="/images/bedrijf.jpg"
                alt="alt"
                mt
                title="Wekelijkse reiniging"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <TextImage
                img="/images/particulier.jpg"
                alt="alt"
                reverse
                title="Snelle levering"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <TextImage
                img="/images/bedrijf.jpg"
                alt="alt"
                mb
                title="Flexibele  huurperiode"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            /> */}
            <FAQ questions={questions} />
            <Services />
        </main>
    );
}
