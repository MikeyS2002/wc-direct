import React from "react";

import Header from "@/components/Header";
import TextWithButtons from "@/components/TextWithButtons";
import Stats from "@/components/Stats";
import SideText from "@/components/SideText";
import FullImg from "@/components/FullImg";
import Services from "@/components/Services";

export default function Particulier() {
    return (
        <main>
            <Header
                text="Mobiele toiletten voor particulieren"
                img="/images/particulier.jpg"
                alt="alt"
            />
            <TextWithButtons
                title="Mobiele toiletten voor particulieren – snel geregeld, altijd schoon"
                text="Of je nu gaat verbouwen, een tuinfeest geeft of een groot familie-evenement organiseert – het is fijn als het sanitair goed geregeld is. Je wilt dat het op tijd geleverd wordt, schoon blijft en zonder gedoe weer wordt opgehaald.
<br /><br />
Bij WC-Direct zorgen we dat je daar geen omkijken naar hebt. We leveren vaak binnen 48 uur, zetten het toilet op de juiste plek en verzorgen wekelijks onderhoud. Zo weet je zeker dat alles fris en gebruiksklaar blijft, zolang jij het nodig hebt."
            />
            <Stats
                stats={[
                    "Snel geleverd: vaak binnen 48 uur op locatie.",
                    "Altijd schoon: wekelijkse reiniging inbegrepen.",
                    "Eerlijke prijs: €125 eerste week, daarna €40 per week (excl. BTW).",
                    "Geen gedoe: levering, plaatsing en ophalen in één keer geregeld.",
                    "Flexibel huren: zolang als je verbouwing, feest of project duurt.",
                ]}
            />
            {/* <SideText
                header="Sanitaire voorzieningen voor elk project"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <FullImg img="/images/bedrijf.jpg" alt="alt" /> */}
            <Services />
        </main>
    );
}
