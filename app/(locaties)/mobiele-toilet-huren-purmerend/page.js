import React from "react";

import AnimatedHeader from "@/components/AnimatedHeader";
import FullImg from "@/components/FullImg";
import SideText from "@/components/SideText";
import TextWithButtons from "@/components/TextWithButtons";
import SocialProof from "@/components/SocialProof";
import TextImage from "@/components/TextImage";

export default function Purmerend() {
    return (
        <main>
            <AnimatedHeader
                seoH1="Schoon sanitair in Purmerend - Professionele mobiele toilleten"
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
            {/* <SideText
                header="Sanitaire voorzieningen voor elk project"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            /> */}
            <FullImg img="/images/bedrijf.jpg" alt="alt" />
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
