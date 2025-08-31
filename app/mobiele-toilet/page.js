import React from "react";

import PDP from "@/components/PDP";
import TextImage from "@/components/TextImage";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";

export default function MobieleToilet() {
    const questions = [
        {
            question: "Hoe groot is een mobiel toilet?",
            answer: "Onze toiletcabines zijn 235 cm hoog, 110 cm breed en 120 cm diep. Compact genoeg om overal te plaatsen, maar ruim genoeg voor comfortabel gebruik.",
        },
        {
            question: "Hoe werkt de schoonmaak van een mobiel toilet?",
            answer: "Wij reinigen het toilet wekelijks: legen van de tank, schoonspuiten en navullen van papier en vloeistoffen. Zo blijft het fris en gebruiksklaar.",
        },
        {
            question: "Waar kan een mobiel toilet geplaatst worden?",
            answer: "Een mobiel toilet kan op vrijwel elke vlakke ondergrond worden geplaatst, zolang onze vrachtwagen of aanhanger er kan komen.",
        },
        {
            question:
                "Hoeveel personen kunnen gebruikmaken van één mobiel toilet?",
            answer: "Een toilet met 250 liter tank is geschikt voor gemiddeld 10–15 personen bij een week gebruik. Voor evenementen adviseren we meerdere toiletten bij grotere aantallen bezoekers.",
        },
        {
            question: "Zijn er extra kosten naast de huurprijs?",
            answer: "Nee, onze prijzen zijn all-in: levering, plaatsing, wekelijkse schoonmaak en ophalen. Alleen voor particuliere huur geldt een borg van €100.",
        },
    ];
    return (
        <main className="">
            <PDP />
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
                title="Snelle levering"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <TextImage
                img="/images/bedrijf.jpg"
                alt="alt"
                mb
                title="Flexibele  huurperiode"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            /> */}
            <FAQ questions={questions} />
            <Services />
        </main>
    );
}
