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
                        <h3 className="h2">Snelle levering</h3>
                    </div>
                    <p className="text-center">
                        Bij WC-Direct plannen we slim. We leveren je mobiele
                        toilet altijd zodat het er staat wanneer jij het nodig
                        hebt – binnen 48 uur. Voor bouwprojecten zorgen we dat
                        het toilet al geplaatst is vóórdat je project start,
                        zodat je direct aan de slag kunt.
                    </p>
                </div>
                <div className="p-10 bg-contrast">
                    <div className="flex gap-[6px] items-center justify-center mb-10">
                        <h3 className="h2">Wekelijkse reiniging</h3>
                    </div>
                    <p className="text-center">
                        Hygiëne staat bij ons voorop. We reinigen jouw toilet
                        wekelijks grondig, legen de tank en vullen waar nodig
                        bij. Zo blijft het fris en gebruiksklaar, week na week.
                    </p>
                </div>
                <div className="p-10 bg-contrast">
                    <div className="flex gap-[6px] items-center justify-center mb-10">
                        <h3 className="h2">Transparantie</h3>
                    </div>
                    <p className="text-center">
                        We houden het graag simpel: transparante prijzen, geen
                        verborgen kosten en je toilet op tijd. Vanaf €125 eerste
                        week, daarna €40 per week (excl. btw). Alles inclusief
                        levering, plaatsing en onderhoud.
                    </p>
                </div>
            </section>

            <section className="block mb-10 mt-20 md:hidden">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Snelle levering</h3>
                            </div>
                            <p className="text-center">
                                Bij WC-Direct plannen we slim. We leveren je
                                mobiele toilet altijd zodat het er staat wanneer
                                jij het nodig hebt – binnen 48 uur. Voor
                                bouwprojecten zorgen we dat het toilet al
                                geplaatst is vóórdat je project start, zodat je
                                direct aan de slag kunt.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Wekelijkse reiniging</h3>
                            </div>
                            <p className="text-center">
                                Hygiëne staat bij ons voorop. We reinigen jouw
                                toilet wekelijks grondig, legen de tank en
                                vullen waar nodig bij. Zo blijft het fris en
                                gebruiksklaar, week na week.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="p-10 mx-4 bg-contrast">
                            <div className="flex gap-[6px] items-center justify-center mb-4">
                                <h3 className="h2">Transparantie</h3>
                            </div>
                            <p className="text-center">
                                We houden het graag simpel: transparante
                                prijzen, geen verborgen kosten en je toilet op
                                tijd. Vanaf €125 eerste week, daarna €40 per
                                week (excl. btw). Alles inclusief levering,
                                plaatsing en onderhoud.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Services;
