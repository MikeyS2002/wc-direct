import React from "react";

import Header from "@/components/Header";
import TextWithButtons from "@/components/TextWithButtons";
import Stats from "@/components/Stats";
import SideText from "@/components/SideText";
import FullImg from "@/components/FullImg";
import Services from "@/components/Services";

export default function Zakelijk() {
    return (
        <main>
            <Header
                text="Mobiele toileten voor de bouw"
                img="/images/bedrijf.jpg"
                alt="alt"
            />
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
            <Stats
                stats={[
                    "100 toilleten",
                    "15 verschillende bouw bedrijven",
                    "Door heel noord holland",
                ]}
            />
            <Services />
        </main>
    );
}
