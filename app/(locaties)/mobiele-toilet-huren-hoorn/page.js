import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import TextWithButtons from "@/components/TextWithButtons";

export const metadata = {
    title: "Mobiel toilet huren Hoorn",
    keywords: [
        "mobiel toilet huren Hoorn",
        "toilet verhuur Hoorn",
        "dixi huren Hoorn",
        "sanitair huren West-Friesland",
        "mobiele toiletten Hoorn",
        "toilet huren Zwaag",
        "WC verhuur Blokker",
        "mobiel toilet haven Hoorn",
        "sanitair verhuur Noord-Holland",
        "toilet huren bouwplaats Hoorn",
    ],
    description:
        "Mobiel toilet huren in Hoorn en West-Friesland? WC-Direct levert binnen 48 uur schone mobiele toiletten voor bouw en evenementen. Van Zwaag tot Blokker, altijd inclusief wekelijkse schoonmaak.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/mobiel-toilet-huren-hoorn.png",
                width: 1200,
                height: 630,
                alt: "Mobiel toilet huren in Hoorn - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-hoorn",
    },
};

export default function Hoorn() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Hoorn - mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Hoorn",
                    "Purmerend",
                    "Zaandam",
                    "Alkmaar",
                    "Amsterdam",
                    "heel Noord-Holland",
                ]}
            />
            <FullImg
                img="/images/mobiel-toilet-huren-hoorn.png"
                alt="Mobiel toilet huren in Hoorn"
            />
            <TextWithButtons
                title="Mobiel toilet huren in Hoorn"
                text="Voor bouwplaatsen in Zwaag, evenementen aan de haven of een verbouwing in Blokker: WC-Direct levert schone mobiele toiletten in heel Hoorn en West-Friesland. Binnen 48 uur geplaatst en altijd inclusief wekelijkse schoonmaak. Zo weet je zeker dat je sanitaire voorzieningen geregeld zijn, zonder verrassingen achteraf.
                <br /><br />
                👉 Huur nu eenvoudig een mobiel toilet in Hoorn bij WC-Direct."
            />
            {/* <SocialProof
                title="We staan door heel Purmerend"
                imgs={[
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                ]}
            /> */}

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
                mb
                title="Snelle levering"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            /> */}
        </main>
    );
}
