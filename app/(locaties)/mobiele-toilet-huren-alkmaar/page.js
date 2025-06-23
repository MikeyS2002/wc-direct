import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import SideText from "@/components/SideText";
import TextWithButtons from "@/components/TextWithButtons";
import SocialProof from "@/components/SocialProof";
import TextImage from "@/components/TextImage";

export default function Alkmaar() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Alkmaar - Professionele mobiele toilleten"
                text="Schoon en fris sanitair in"
                words={[
                    "Alkmaar",
                    "Purmerend",
                    "Amsterdam",
                    "Hoorn",
                    "heel Noord-Holland",
                ]}
            />
            <SideText
                header="Sanitaire voorzieningen voor elk project"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <FullImg img="/images/bedrijf.jpg" alt="alt" />
            <TextWithButtons
                title="titel"
                text=" Van bouwplaatsen tot bruiloften - wij leveren schone,
                betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts
                €150 eerste week, daarna €50 per week inclusief wekelijkse
                schoonmaak. Van bouwplaatsen tot bruiloften - wij leveren
                schone, betrouwbare mobiele toiletten waar u ze nodig heeft.
                Slechts €150 eerste week, daarna €50 per week inclusief
                wekelijkse schoonmaak. Van bouwplaatsen tot bruiloften - wij
                leveren schone, betrouwbare mobiele toiletten waar u ze nodig
                heeft. Slechts €150 eerste week, daarna €50 per week inclusief
                wekelijkse schoonmaak. Van bouwplaatsen tot bruiloften - wij
                leveren schone, betrouwbare mobiele toiletten waar u ze nodig
                heeft. Slechts €150 eerste week, daarna €50 per week inclusief
                wekelijkse schoonmaak."
            />
            <SocialProof
                title="We staan door heel Purmerend"
                imgs={[
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                    { img: "/images/bedrijf.jpg", alt: "alt" },
                ]}
            />

            <TextImage
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
            />
        </main>
    );
}
