import React from "react";

import Header from "@/components/Header";
import TextWithButtons from "@/components/TextWithButtons";
import Stats from "@/components/Stats";
import SideText from "@/components/SideText";
import FullImg from "@/components/FullImg";
import Services from "@/components/Services";

export const metadata = {
    title: "Mobiele toiletten huren voor bedrijven",
    keywords: [
        "mobiel toilet bedrijven",
        "toiletverhuur bouwplaats",
        "toilet huren zakelijk",
        "dixi huren bouw",
        "zakelijke toiletverhuur",
        "sanitair verhuur evenementen",
    ],
    description:
        "Betrouwbare toiletverhuur voor bouw, festivals en gemeentelijke projecten. Binnen 48 uur geleverd, wekelijks gereinigd en één aanspreekpunt.",
    openGraph: {
        images: [
            {
                url: "https://www.jouwdomein.nl/images/mobiel-toilet-huren-purmerend-verbouwing.png",
                width: 1200,
                height: 630,
                alt: "Contact WC-Direct",
            },
        ],
    },
    alternates: {
        canonical: "https://www.wc-direct.nl/mobiele-toilet-huren-zakelijk",
    },
};

export default function Zakelijk() {
    return (
        <main>
            <Header
                text="Mobiele toiletten voor bedrijven"
                img="/images/mobiel-toilet-huren-purmerend-verbouwing.png"
                alt="alt"
            />
            <TextWithButtons
                title="Mobiele toiletten voor bedrijven: betrouwbaar van start tot finish en op tijd, zonder gedoe"
                text="In jouw werk telt elke dag. Je wilt mobiele toiletten die op tijd staan, goed onderhouden worden en waar je geen omkijken naar hebt. Eén aanspreekpunt, duidelijke afspraken en geen verrassingen achteraf. Of het nu voor een bouwproject, festival of gemeentelijk evenement is wij zorgen dat jouw sanitaire voorzieningen op tijd staan, schoon blijven en goed onderhouden worden.
                <br /><br />
                Bij WC-Direct regelen we het voor je. We leveren binnen 48 uur, verzorgen wekelijks onderhoud en zijn altijd bereikbaar voor vragen of wijzigingen. Zo kun jij je focussen op je project, terwijl wij zorgen voor schoon en betrouwbaar sanitair."
            />
            <Stats
                stats={[
                    "Snel geleverd: binnen 48 uur op locatie.",
                    "Altijd schoon: wekelijkse reiniging inbegrepen.",
                    "Één aanspreekpunt: duidelijke afspraken.",
                    "Transparante prijzen: geen verborgen kosten.",
                    "Flexibel huren: zolang als jouw project duurt.",
                ]}
            />
            <Services />
        </main>
    );
}
