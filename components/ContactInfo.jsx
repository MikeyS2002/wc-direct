import React from "react";

const ContactInfo = ({ mt = true }) => {
    const contactItems = [
        {
            label: "Afhaalpunt",
            content: "Oude Sluis 10A, 1441 CG Purmerend",
            href: "https://maps.app.goo.gl/sxdXH32gFJZhdZkY8",
            ariaLabel:
                "Bekijk ons afhaalpunt op Google Maps - opent in nieuw tabblad",
            type: "location",
        },
        {
            label: "E-mail",
            content: "info@dryveverhuur.nl",
            href: "mailto:info@dryveverhuur.nl",
            ariaLabel: "Stuur ons een e-mail",
            type: "email",
        },
    ];

    return (
        <section
            className={mt ? "mt-20" : ""}
            aria-labelledby="contact-info-heading"
        >
            <h2 id="contact-info-heading" className="sr-only">
                Contactgegevens
            </h2>

            <address className="not-italic">
                {contactItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between gap-2 py-4 border-t border-black/30"
                    >
                        <h3 className="body font-medium">{item.label}</h3>
                        <a
                            href={item.href}
                            target={
                                item.type === "location" ? "_blank" : undefined
                            }
                            rel={
                                item.type === "location"
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="link body hover:underline rounded"
                            aria-label={item.ariaLabel}
                        >
                            {item.content}
                        </a>
                    </div>
                ))}
            </address>
        </section>
    );
};

export default ContactInfo;
