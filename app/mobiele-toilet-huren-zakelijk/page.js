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
                text="Mobiele toiletten voor bedrijven"
                img="/images/bedrijf.jpg"
                alt="alt"
            />
            <TextWithButtons
                title="Mobiele toiletten voor bedrijven: betrouwbaar van start tot finish en op tijd, zonder gedoe"
                text="In jouw werk telt elke dag. Je wilt mobiele toiletten die op tijd staan, goed onderhouden worden en waar je geen omkijken naar hebt. Eén aanspreekpunt, duidelijke afspraken en geen verrassingen achteraf. Of het nu voor een bouwproject, festival of gemeentelijk evenement is – wij zorgen dat je sanitair op tijd is.
<br /><br />
Bij WC-Direct regelen we het voor je. We leveren vaak binnen 48 uur, verzorgen wekelijks onderhoud en zijn altijd bereikbaar voor vragen of wijzigingen. Zo kun jij je focussen op je project, terwijl wij zorgen voor schoon en betrouwbaar sanitair."
            />
            <Stats
                stats={[
                    "Snel geleverd: vaak binnen 48 uur op locatie.",
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
