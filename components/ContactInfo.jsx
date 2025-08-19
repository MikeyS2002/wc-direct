import React from "react";

const ContactInfo = ({ mt = true }) => {
    const contactItems = [
        {
            label: "Mobiel",
            content: "0634124702",
            href: "tel:0634124702",
            ariaLabel: "Bel ons direct",
            type: "number",
        },
        {
            label: "E-mail",
            content: "info@wc-direct.nl",
            href: "mailto:info@wc-direct.nl",
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
