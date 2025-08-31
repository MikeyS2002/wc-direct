import AnimatedHeader from "@/components/AnimatedHeader";
import Blocks from "@/components/Blocks";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import SideText from "@/components/SideText";
import TextImage from "@/components/TextImage";
import TextWithButtons from "@/components/TextWithButtons";

const questions = [
    {
        question: "Hoe snel kunnen jullie een mobiel toilet leveren?",
        answer: "We leveren meestal binnen 48 uur. Bij bouwprojecten zorgen we dat het toilet er al staat vóórdat je project begint. Zo weet je zeker dat je meteen aan de slag kunt.",
    },
    {
        question:
            "Kunnen jullie ook een mobiel toilet leveren bij een spoedaanvraag?",
        answer: "Ja, vaak wel. Bel ons direct en we kijken hoe we het in onze route kunnen inpassen. In veel gevallen kunnen we dezelfde of de volgende dag leveren, afhankelijk van de locatie.",
    },
    {
        question: "Wat is inbegrepen in de huurprijs van een mobiel toilet?",
        answer: "Onze prijs is all-in: levering, plaatsing, wekelijkse schoonmaak, afvoer van afvalwater en ophalen na afloop. Geen verborgen kosten of verrassingen achteraf.",
    },
    {
        question: "Hoe werkt de wekelijkse schoonmaakservice?",
        answer: "Elke week komt ons serviceteam langs om je toilet grondig te reinigen, de tank te legen en alles bij te vullen. Zo blijft het fris en gebruiksklaar voor alle gebruikers.",
    },
    {
        question: "Moet ik borg betalen voor het huren van een mobiel toilet?",
        answer: "Voor particuliere huur rekenen we een borg van €100. Deze krijg je natuurlijk terug zodra het toilet in goede staat is opgehaald. Voor zakelijke klanten rekenen we geen borg, tenzij anders afgesproken.",
    },
];

export default function Home() {
    return (
        <main className="">
            <AnimatedHeader
                seoH1="Schoon en fris sanitair voor de bouw, evenementen, particulier
                en elk project - Professionele sanitairoplossingen voor alle
                sectoren"
                text="Schoon en fris sanitair voor"
                words={[
                    "de bouw",
                    "jouw evenement",
                    "feesten en bruiloften",
                    "verbouwingen thuis",
                    "elk project",
                ]}
            />
            <SideText
                header="WC-Direct: mobiele toiletten, snel geleverd en goed verzorgd."
                text="Bij WC-Direct regelen we het gewoon. Bel je vandaag, dan staat je toilet er vaak morgen al. Of het nu voor de bouw is, een feestje in de tuin of een groot evenement, wij zorgen dat het op tijd staat, schoon is en wekelijks wordt onderhouden. Zo hoef jij je nergens druk om te maken en kun jij je focussen op je eigen project of evenement.
                <br /> <br />
Wij leveren in heel Noord-Holland, onder andere in Purmerend, Amsterdam, Zaandam, Hoorn en Alkmaar. Altijd met transparante prijzen en geen verborgen kosten."
            />
            <Blocks />
            <Services />
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
            <TextWithButtons
                title="Huur vandaag nog je mobiele toilet"
                text="Voor bouw, bij je thuis of op een event in Noord-Holland. Snel geleverd, perfect verzorgd, altijd schoon."
                call
            />
        </main>
    );
}
