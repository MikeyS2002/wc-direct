"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PDP = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const refs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        refs.current.forEach((ref, i) => {
            if (ref) {
                if (openIndex === i) {
                    ref.style.height = ref.scrollHeight + "px";
                } else {
                    ref.style.height = "0px";
                }
            }
        });
    }, [openIndex]);

    const features = [
        "Professionele wekelijkse schoonmaak",
        "Gratis bezorging en ophaalservice",
        "Geschikt voor alle evenementen",
        "24/7 beschikbaar voor spoedleveringen",
    ];

    const faqItems = [
        {
            title: "Omschrijving",
            content:
                "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
        },
        {
            title: "Grootte",
            content: (
                <div className="space-y-1">
                    <div className="flex justify-between">
                        <p>Breedte</p>
                        <p>xcm</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Lengte</p>
                        <p>xcm</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Hoogte</p>
                        <p>xcm</p>
                    </div>
                    <div className="flex justify-between">
                        <span>Gewicht</span>
                        <span>85 kg</span>
                    </div>
                </div>
            ),
        },
        {
            title: "Schoonmaak",
            content:
                "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
        },
        {
            title: "Bezorgen en opzetten",
            content:
                "Van bouwplaatsen tot bruiloften - wij leveren schone, betrouwbare mobiele toiletten waar u ze nodig heeft. Slechts €150 eerste week, daarna €50 per week inclusief wekelijkse schoonmaak.",
        },
    ];

    return (
        <section className="lg:flex">
            <div className="w-full flex overflow-x-scroll flex-nowrap lg:grid lg:grid-cols-2 gap-1 h-fit mt-1 ml-1">
                <div className="lg:min-w-full min-w-[80vw] lg:w-full aspect-square bg-contrast flex-shrink-0">
                    <Image
                        src="/images/toilet1.png"
                        alt="alt"
                        width={300}
                        height={500}
                        className="w-full h-full object-contain xl:px-30 xl:p-20 p-10"
                        priority
                        itemProp="image"
                    />
                </div>
                <div className="lg:min-w-full min-w-[80vw] lg:w-full aspect-square bg-contrast flex-shrink-0">
                    <Image
                        src="/images/toilet2.png"
                        alt="alt"
                        width={300}
                        height={500}
                        className="w-full h-full object-contain xl:px-30 xl:p-20 p-10"
                    />
                </div>
                <div className="lg:min-w-full min-w-[80vw] lg:w-full aspect-square bg-contrast flex-shrink-0">
                    <Image
                        src="/images/toilet3.png"
                        alt="alt"
                        width={300}
                        height={500}
                        className="w-full h-full object-contain xl:px-30 xl:p-20 p-10"
                    />
                </div>
            </div>
            <div className="lg:min-w-[560px] lg:mt-[150px] mt-5 text-center lg:max-w-[560px] pl-5 pr-10">
                <a
                    className="flex items-center cursor-pointer w-fit mx-auto underline underline-offset-4 gap-2 justify-center mb-10"
                    itemScope
                    itemType="https://schema.org/AggregateRating"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bekijk onze Google reviews - opent in nieuw tabblad"
                    href="https://www.google.com/search?sa=X&sca_esv=e636a3bf86a437ec&tbm=lcl&sxsrf=AE3TifP23YWI1qUM_zje1TbWZMrtnE1zjw:1750749465812&q=Dryve+Verhuur+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0MTcxNzW2MDYyMDCzsDS0MN3AyPiKUdSlqLIsVSEstSijtLRIISi1LDO1vHgRK3ZxAI2ESJJLAAAA&rldimm=13147475383200689185&hl=nl-NL&ved=2ahUKEwj9oICAwomOAxUh1gIHHbr-COcQ9fQKegQISBAF&biw=1492&bih=924&dpr=2#lkt=LocalPoiReviews"
                >
                    <div
                        className="flex gap-px"
                        role="img"
                        aria-label="5 van 5 sterren beoordeling"
                    >
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1.10658 5.89373C0.89938 5.70825 1.01193 5.37293 1.29219 5.34076L5.26336 4.88481C5.37758 4.8717 5.47679 4.80227 5.52497 4.70117L7.19995 1.18608C7.31816 0.938005 7.68249 0.937958 7.8007 1.18603L9.47568 4.70109C9.52386 4.8022 9.62243 4.87182 9.73665 4.88493L13.708 5.34076C13.9883 5.37293 14.1005 5.70835 13.8933 5.89383L10.9577 8.52223C10.8732 8.59783 10.8356 8.71035 10.858 8.81956L11.6372 12.6163C11.6922 12.8843 11.3976 13.0919 11.1513 12.9584L7.66184 11.0672C7.56147 11.0128 7.43953 11.0131 7.33916 11.0675L3.84934 12.958C3.60307 13.0914 3.30793 12.8843 3.36293 12.6163L4.14217 8.81979C4.16459 8.71059 4.12709 8.5978 4.04264 8.52221L1.10658 5.89373Z"
                                    className="fill-primary stroke-primary"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ))}
                    </div>
                    <p>Reviews</p>
                </a>

                <header>
                    <h1 className="h4" itemProp="name">
                        Mobiele Toilet Huren
                    </h1>
                </header>
                <div
                    className="text-center my-10"
                    itemScope
                    itemType="https://schema.org/Offer"
                    itemProp="offers"
                >
                    <meta itemProp="priceCurrency" content="EUR" />
                    <meta
                        itemProp="availability"
                        content="https://schema.org/InStock"
                    />
                    <meta
                        itemProp="itemCondition"
                        content="https://schema.org/NewCondition"
                    />

                    <p className="opacity-50">
                        <span itemProp="price" content="150">
                            €125
                        </span>{" "}
                        eerste week
                    </p>
                    <p>€40 vervolgweken</p>
                    <p className="opacity-50">(excl. BTW)</p>
                </div>
                <Link href="/bestellen">
                    <button
                        className="button bg-primary w-full cursor-pointer"
                        type="button"
                        aria-label="Bestel nu mobiele toilet"
                    >
                        Bestel Mobiele Toilet
                    </button>
                </Link>

                <div className="my-20">
                    <h2 className="sr-only">
                        Voordelen van onze mobiele toilet verhuur
                    </h2>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex gap-2 items-center justify-center"
                            >
                                <svg
                                    width="13"
                                    height="15"
                                    viewBox="0 0 17 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 7.49437L6.00036 13.9887L16 1"
                                        stroke="black"
                                        strokeOpacity="0.75"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQ sectie met structured data */}
                <section itemScope itemType="https://schema.org/FAQPage">
                    <h2 className="sr-only">
                        Veelgestelde vragen over mobiele toilet huren
                    </h2>
                    {faqItems.map((item, i) => (
                        <article
                            className="py-5 border-b w-full border-black/30"
                            key={i}
                            itemScope
                            itemProp="mainEntity"
                            itemType="https://schema.org/Question"
                        >
                            <h3
                                className="large text-left cursor-pointer select-none"
                                onClick={() => toggleFAQ(i)}
                                itemProp="name"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        toggleFAQ(i);
                                    }
                                }}
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-content-${i}`}
                            >
                                {item.title}
                            </h3>
                            <div
                                id={`faq-content-${i}`}
                                ref={(el) => (refs.current[i] = el)}
                                className="transition-all text-left ease-out duration-300 overflow-hidden"
                                style={{ height: "0px" }}
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                                aria-hidden={openIndex !== i}
                            >
                                <div
                                    className="pt-2 opacity-75"
                                    itemProp="text"
                                >
                                    {typeof item.content === "string" ? (
                                        <p>{item.content}</p>
                                    ) : (
                                        item.content
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </section>
    );
};

export default PDP;
