import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import SideText from "@/components/SideText";
import TextWithButtons from "@/components/TextWithButtons";
import SocialProof from "@/components/SocialProof";
import TextImage from "@/components/TextImage";

export default function Hoorn() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Hoorn - Professionele mobiele toilleten"
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
            {/* <SideText
                header="Sanitaire voorzieningen voor elk project"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            /> */}
            <FullImg img="/images/bedrijf.jpg" alt="alt" />
            <TextWithButtons
                title="Mobiel toilet huren in Hoorn"
                text="Voor bouwplaatsen in Zwaag, evenementen aan de haven of een verbouwing in Blokker: WC-Direct levert schone mobiele toiletten in heel Hoorn en West-Friesland. Vaak binnen 48 uur geplaatst en altijd inclusief wekelijkse schoonmaak. Zo weet je zeker dat je sanitaire voorzieningen geregeld zijn, zonder verrassingen achteraf.
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
