"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Services = () => {
    return (
        <>
            <section className="hidden grid-cols-3 gap-5 mb-10 mt-20 md:mt-40 md:grid md:px-10">
                <div className="p-10 bg-contrast">
                    <div className="flex gap-[6px] items-center justify-center mb-10">
                        <h3 className="h2">Bezorging</h3>
                    </div>
                    <p className="text-center">
                        Wij leveren uw bestelling op de gewenste locatie en
                        tijd.
                    </p>
                </div>
                <div className="p-10 bg-contrast">
                    <div className="flex gap-[6px] items-center justify-center mb-10">
                        <h3 className="h2">Opzetten</h3>
                    </div>
                    <p className="text-center">
                        Ons team zorgt voor een professionele en snelle opbouw
                        van uw gehuurde items.
                    </p>
                </div>
                <div className="p-10 bg-contrast">
                    <div className="flex gap-[6px] items-center justify-center mb-10">
                        <h3 className="h2">Afbouwen</h3>
                    </div>
                    <p className="text-center">
                        Na afloop demonteren en verwijderen wij alles netjes en
                        efficiënt.
                    </p>
                </div>
            </section>

            <section className="block mb-10 mt-20 md:hidden">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Bezorging</h3>
                            </div>
                            <p className="text-center">
                                Wij leveren uw bestelling op de gewenste locatie
                                en tijd.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Opzetten</h3>
                            </div>
                            <p className="text-center">
                                Ons team zorgt voor een professionele en snelle
                                opbouw van uw gehuurde items.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Afbouwen</h3>
                            </div>
                            <p className="text-center">
                                Na afloop demonteren en verwijderen wij alles
                                netjes en efficiënt.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Services;
