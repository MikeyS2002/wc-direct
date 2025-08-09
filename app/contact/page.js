import React from "react";

import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import LocationMap from "@/components/LocationMap";

export default function Contact() {
    return (
        <main>
            <section className="relative grid md:grid-cols-2 gap-y-20 gap-x-2">
                <div className="mx-4 md:mr-20 md:ml-20 top-10 md:sticky md:mt-[155px] mt-20 left-0 h-fit mb-10">
                    <h1 className="mb-10 h1">Contact</h1>
                    <ContactForm />
                    <ContactInfo />
                </div>
                <LocationMap />
            </section>
        </main>
    );
}
