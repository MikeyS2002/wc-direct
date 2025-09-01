import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import TextWithButtons from "@/components/TextWithButtons";

export const metadata = {
    title: "Mobiel toilet huren Alkmaar | WC-Direct - Binnen 48 uur geleverd",
    keywords: [
        "mobiel toilet huren Alkmaar",
        "toilet verhuur Alkmaar",
        "dixi huren Alkmaar",
        "sanitair huren Alkmaar centrum",
        "mobiele toiletten Alkmaar",
        "toilet huren Oudorp",
        "WC verhuur Koedijk",
        "mobiel toilet evenement Alkmaar",
        "sanitair verhuur Noord-Holland",
        "toilet huren bouwplaats Alkmaar",
    ],
    description:
        "Mobiel toilet huren in Alkmaar? WC-Direct levert binnen 48 uur schone mobiele toiletten voor bouw en evenementen. Van centrum tot Oudorp en Koedijk - wekelijkse reiniging inbegrepen.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/mobiel-toilet-huren-alkmaar.png",
                width: 1200,
                height: 630,
                alt: "Mobiel toilet huren in Alkmaar - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-alkmaar",
    },
};

export default function Alkmaar() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Alkmaar - Professionele mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Alkmaar",
                    "Purmerend",
                    "Zaandam",
                    "Amsterdam",
                    "Hoorn",
                    "heel Noord-Holland",
                ]}
            />

            <FullImg img="/images/bedrijf.jpg" alt="Alkmaar " />
            <TextWithButtons
                title="Mobiel toilet huren in Alkmaar"
                text="Of je nu een evenement organiseert in het centrum, een bouwproject hebt in Oudorp of een feest in Koedijk: WC-Direct levert snel en betrouwbaar. Binnen 48 uur staat je mobiele toilet op locatie in Alkmaar of omgeving. Altijd schoon door wekelijkse reiniging en transparant in prijs.
                <br /><br />
                👉 Vraag vandaag nog een offerte aan voor een mobiel toilet in Alkmaar."
            />
        </main>
    );
}
