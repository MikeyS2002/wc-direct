import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import TextWithButtons from "@/components/TextWithButtons";

export const metadata = {
    title: "Mobiel toilet huren Zaandam",
    keywords: [
        "mobiel toilet huren Zaandam",
        "toilet verhuur Zaandam",
        "dixi huren Zaandam",
        "sanitair huren Zaanstreek",
        "mobiele toiletten Zaandam",
        "toilet huren Kogerveld",
        "WC verhuur Zaandam",
        "mobiel toilet Amsterdam Noord",
        "sanitair verhuur Noord-Holland",
        "toilet huren bouwplaats Zaandam",
    ],
    description:
        "Mobiel toilet huren in Zaandam en de Zaanstreek? WC-Direct levert binnen 48 uur schone mobiele toiletten voor bouw en evenementen. Wekelijks onderhoud en transparante prijzen vanaf €150.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/zaandam-toilet-huren.png",
                width: 1200,
                height: 630,
                alt: "Mobiel toilet huren in Zaandam - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-zaandam",
    },
};

export default function Zaandam() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Zaandam - mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Zaandam",
                    "Amsterdam",
                    "Hoorn",
                    "Alkmaar",
                    "Purmerend",
                    "heel Noord-Holland",
                ]}
            />
            <FullImg
                img="/images/zaandam-toilet-huren.png"
                alt="Zaandam mobiel toilet huren"
            />
            <TextWithButtons
                title="Mobiel toilet huren in Zaandam"
                text="Van bouwprojecten langs de Zaan tot buurtfeesten in Kogerveld – WC-Direct levert snel en betrouwbaar mobiele toiletten in Zaandam en de hele Zaanstreek. Binnen 48 uur op locatie, schoon en wekelijks onderhouden. Ideaal voor zowel bouw, evenementen als particuliere verhuur.
                <br /><br />
                👉 Bestel direct jouw mobiele toilet in Zaandam."
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
        </main>
    );
}
