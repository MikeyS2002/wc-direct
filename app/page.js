import AnimatedHeader from "@/components/AnimatedHeader";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <AnimatedHeader />
            <section className="mx-5 my-10 md:m-10 md:w-[500px] md:ml-auto">
                <h2 className="font-semibold mb-2">
                    Sanitaire voorzieningen voor elk project
                </h2>
                <p>
                    Van bouwplaatsen tot bruiloften - wij leveren schone,
                    betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts{" "}
                    <span className="font-semibold">€150 eerste week</span>,
                    daarna <span className="font-semibold">€50 per week</span>{" "}
                    inclusief wekelijkse schoonmaak.
                </p>
            </section>
            <section className="grid grid-cols-2 gap-5 mx-10">
                <div>
                    <div className="aspect-video w-full">
                        <Image
                            src="/images/bedrijf.jpg"
                            alt="alt"
                            className="object-cover"
                            width={700}
                            height={500}
                        />
                    </div>
                    <div className="mt-2">
                        <h3 className="h2">Voor bedrijven</h3>
                        <p className="opacity-50">
                            Vraag direct een offerte aan
                        </p>
                    </div>
                </div>
                <div>
                    <div className="aspect-video w-full">
                        <Image
                            src="/images/particulier.jpg"
                            alt="alt"
                            className="object-cover"
                            width={700}
                            height={500}
                        />
                    </div>
                    <div className=" mt-2">
                        <h3 className="h2">Voor particulieren</h3>
                        <p className="opacity-50">Betaal direct</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
