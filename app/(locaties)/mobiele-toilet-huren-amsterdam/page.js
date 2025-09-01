import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import TextWithButtons from "@/components/TextWithButtons";

export const metadata = {
    title: "Mobiel toilet huren Amsterdam",
    keywords: [
        "mobiel toilet huren Amsterdam",
        "toilet verhuur Amsterdam",
        "dixi huren Amsterdam",
        "sanitair huren Amsterdam centrum",
        "mobiele toiletten Amsterdam-Noord",
        "toilet huren NDSM",
        "WC verhuur grachtengordel",
        "mobiel toilet festival Amsterdam",
        "sanitair verhuur Amsterdam",
        "toilet huren bouwplaats Amsterdam",
    ],
    description:
        "Mobiel toilet huren in Amsterdam? WC-Direct levert binnen 48 uur schone mobiele toiletten, ook in het centrum. Van Amsterdam-Noord tot de grachtengordel - altijd op tijd en gebruiksklaar.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/diemen-huren-mobiel-toilet.png",
                width: 1200,
                height: 630,
                alt: "Mobiel toilet huren in Amsterdam - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-amsterdam",
    },
};

export default function Amsterdam() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Amsterdam - mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Amsterdam",
                    "Purmerend",
                    "Zaandam",
                    "Alkmaar",
                    "Hoorn",
                    "heel Noord-Holland",
                ]}
            />

            <FullImg
                img="/images/diemen-huren-mobiel-toilet.png"
                alt="Amsterdam mobiel toilet huren"
            />
            <TextWithButtons
                title="Mobiel toilet huren in Amsterdam"
                text="In een drukke stad als Amsterdam is timing alles. WC-Direct levert mobiele toiletten binnen 48 uur, ook in het centrum en de omliggende wijken. Of het nu gaat om een bouwproject in Amsterdam-Noord, een festival bij de NDSM-werf of een verbouwing in de grachtengordel – wij zorgen dat je sanitaire voorzieningen altijd op tijd, schoon en gebruiksklaar zijn.
                <br /><br />
                👉 Bestel nu jouw mobiele toilet in Amsterdam."
            />
        </main>
    );
}
