import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blocks = () => {
    const services = [
        {
            href: "/mobiele-toilet",
            imageSrc: "/images/mobiel-toilet-huren-purmerend-verbouwing.png",
            imageAlt:
                "Mobiele toilet verhuur voor bedrijven - professionele sanitaire voorzieningen op bouwplaatsen",
            title: "Mobiele Toilet Verhuur voor Bedrijven",
            description:
                "Professionele sanitaire oplossingen voor bouwplaatsen, kantoren en bedrijfsevenementen",
            cta: "Bestel direct",
        },
        {
            href: "/mobiele-toilet",
            imageSrc: "/images/particulier-mobiel-toilet-huren.png",
            imageAlt:
                "Mobiele toilet verhuur voor particulieren - schone toiletten voor tuinfeesten en evenementen",
            title: "Mobiele Toilet Verhuur voor Particulieren",
            description:
                "Hygiënische toiletoplossingen voor bruiloften, feesten en privé-evenementen",
            cta: "Bestel direct",
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
                        <div className="aspect-[16/11] w-full overflow-hidden bg-contrast">
                            <Image
                                src={service.imageSrc}
                                alt={service.imageAlt}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                width={700}
                                height={500}
                                priority={index === 0}
                            />
                        </div>
                        <div className="md:flex justify-between mt-2">
                            <div className="flex-1">
                                <h3 className="h2">
                                    {service.title
                                        .split(" ")
                                        .slice(-2)
                                        .join(" ")}
                                </h3>
                            </div>
                            <div className="md:block hidden">
                                <button className="cursor-pointer button bg-primary h-fit">
                                    {service.cta}
                                </button>
                            </div>
                        </div>
                    </Link>
                </article>
            ))}
        </section>
    );
};

export default Blocks;
