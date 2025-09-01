import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import TextWithButtons from "@/components/TextWithButtons";

export const metadata = {
    title: "Mobiel toilet huren Purmerend",
    keywords: [
        "mobiel toilet huren Purmerend",
        "toilet verhuur Purmerend",
        "dixi huren Purmerend",
        "sanitair huren Purmerend",
        "mobiele toiletten Noord-Holland",
        "toilet huren Beemster",
        "WC verhuur Zaandam",
        "mobiel toilet Amsterdam",
        "sanitair verhuur Hoorn",
        "toilet huren Alkmaar",
    ],
    description:
        "Mobiel toilet huren in Purmerend? WC-Direct levert binnen 48 uur schone mobiele toiletten voor bouw, evenementen en particulieren. Inclusief wekelijkse reiniging vanaf €150.",
    openGraph: {
        images: [
            {
                url: "https://www.wc-direct.nl/images/purmerend-mobiele-toilet-huren.png",
                width: 1200,
                height: 630,
                alt: "Mobiel toilet huren in Purmerend - WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-purmerend",
    },
};

export default function Purmerend() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Purmerend - mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Purmerend",
                    "Zaandam",
                    "Amsterdam",
                    "Hoorn",
                    "Alkmaar",
                    "heel Noord-Holland",
                ]}
            />

            <FullImg
                img="/images/purmerend-mobiele-toilet-huren.png"
                alt="Purmerend mobiele toilet verhuur"
            />
            <TextWithButtons
                title="Mobiel toilet huren in Purmerend"
                text="Op zoek naar een mobiel toilet in Purmerend of de Beemster? WC-Direct levert vaak binnen 48 uur en zorgt dat jouw toilet er al staat voordat het project of feest begint. Van bouwplaatsen in de Baanstee tot tuinfeesten in Weidevenne – wij regelen schoon sanitair, inclusief wekelijkse schoonmaak en transparante prijzen.<br /> <br />👉 Huur direct jouw mobiele toilet in Purmerend bij WC-Direct."
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
