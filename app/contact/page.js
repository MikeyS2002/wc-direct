import React from "react";

import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import LocationMap from "@/components/LocationMap";
import Image from "next/image";

export const metadata = {
    title: "Contact",
    keywords: [
        "contact WC-Direct",
        "contact mobiele toilet verhuur",
        "WC-Direct telefoon",
        "toilet verhuur contact",
        "mobiel toilet informatie",
        "contact sanitairverhuur",
        "WC-Direct bereikbaarheid",
        "toilet huren vragen",
        "contact toiletverhuur Noord-Holland",
        "WC-Direct klantenservice",
    ],
    description:
        "Neem contact op met WC-Direct voor al uw vragen over mobiele toilet verhuur. Bel 06-34124702 of stuur een bericht. Snelle reactie en persoonlijke service gegarandeerd.",
    alternates: {
        canonical: "https://www.wc-direct.nl/contact",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Contact() {
    return (
        <main>
            <section className="relative grid md:grid-cols-2 gap-y-20 gap-x-2">
                <div className="mx-4 md:mr-20 md:ml-20 top-10 md:sticky md:mt-[155px] mt-20 left-0 h-fit mb-10">
                    <h1 className="mb-10 h1">Contact</h1>
                    <ContactForm />
                    <ContactInfo />
                </div>
                <Image
                    src="/images/contact-wc-direct-toilet-verhuur.png"
                    alt=""
                    width={1000}
                    height={1200}
                    className="w-full h-full object-cover object-[90%_50%]"
                />
                {/* <LocationMap /> */}
            </section>
        </main>
    );
}
