import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blocks = () => {
    const services = [
        {
            href: "/mobiele-toilet-bedrijven",
            imageSrc: "/images/bedrijf.jpg",
            imageAlt:
                "Mobiele toilet verhuur voor bedrijven - professionele sanitaire voorzieningen op bouwplaatsen",
            title: "Mobiele Toilet Verhuur voor Bedrijven",
            description:
                "Professionele sanitaire oplossingen voor bouwplaatsen, kantoren en bedrijfsevenementen",
            cta: "Vraag direct een offerte aan",
            pricing: {
                first: "€150 eerste week",
                subsequent: "€50 vervolgweken",
            },
        },
        {
            href: "/mobiele-toilet-huren-particulier",
            imageSrc: "/images/particulier.jpg",
            imageAlt:
                "Mobiele toilet verhuur voor particulieren - schone toiletten voor tuinfeesten en evenementen",
            title: "Mobiele Toilet Verhuur voor Particulieren",
            description:
                "Hygiënische toiletoplossingen voor bruiloften, feesten en privé-evenementen",
            cta: "Bestel direct online",
            pricing: {
                first: "€150 eerste week",
                subsequent: "€50 vervolgweken",
            },
        },
    ];

    return (
        <section
            className="md:grid grid-cols-2 gap-5 mx-5 mb-20 md:mb-40 md:mx-10"
            aria-labelledby="services-heading"
        >
            <h2 id="services-heading" className="sr-only">
                Onze Mobiele Toilet Verhuur Services
            </h2>

            {services.map((service, index) => (
                <article
                    key={index}
                    className={index === 0 ? "md:mb-0 mb-5" : ""}
                >
                    <Link
                        href={service.href}
                        className="block rounded-lg"
                        aria-label={`${service.title} - ${service.description}`}
                    >
                        <div className="aspect-video w-full overflow-hidden bg-contrast">
                            <Image
                                src={service.imageSrc}
                                alt={service.imageAlt}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                width={700}
                                height={500}
                                priority={index === 0}
                            />
                        </div>
                        <div className="flex justify-between mt-2">
                            <div className="flex-1">
                                <h3 className="h2">
                                    {service.title
                                        .split(" ")
                                        .slice(-2)
                                        .join(" ")}
                                </h3>
                                <p className="opacity-50 text-sm md:text-base">
                                    {service.cta}
                                </p>
                            </div>
                            <div
                                className="text-right flex-shrink-0"
                                aria-label={`Prijzen: ${service.pricing.first}, ${service.pricing.subsequent}`}
                            >
                                <p className="whitespace-nowrap">
                                    <span>{service.pricing.first}</span>
                                    <br />
                                    <span>{service.pricing.subsequent}</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </article>
            ))}
        </section>
    );
};

export default Blocks;
