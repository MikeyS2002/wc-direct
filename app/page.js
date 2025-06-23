import AnimatedHeader from "@/components/AnimatedHeader";
import Blocks from "@/components/Blocks";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import SideText from "@/components/SideText";
import TextImage from "@/components/TextImage";

const questions = [
    {
        question: "Hoeveel kost een mobiel toilet?",
        answer: "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
    },
    {
        question: "Hoeveel kost een mobiel toilet?",
        answer: "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak. Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
    },
    {
        question: "Hoeveel kost een mobiel toilet?",
        answer: "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
    },
    {
        question: "Hoeveel kost een mobiel toilet?",
        answer: "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak. Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
    },
    {
        question: "Hoeveel kost een mobiel toilet?",
        answer: "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
    },
];

export default function Home() {
    return (
        <main className="">
            <AnimatedHeader
                seoH1=" Schoon en fris sanitair voor de bouw, evenementen, particulier
                en elk project - Professionele sanitairoplossingen voor alle
                sectoren"
                text="Schoon en fris sanitair voor"
                words={["de bouw", "evenementen", "particulier", "elk project"]}
            />
            <SideText
                header="Sanitaire voorzieningen voor elk project"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <Blocks />
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
                title="Snelle levering"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <TextImage
                img="/images/bedrijf.jpg"
                alt="alt"
                mb
                title="Flexibele  huurperiode"
                text="Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak."
            />
            <FAQ questions={questions} />
        </main>
    );
}
