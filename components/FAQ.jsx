"use client";
import React, { useState, useRef, useEffect } from "react";

const FAQ = ({ questions, title = "Veelgestelde vragen" }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const refs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleFAQ(index);
        }
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

    return (
        <section
            className="px-5 md:px-10 my-20 md:my-40 lg:w-[calc(100%-520px)]"
            itemScope
            itemType="https://schema.org/FAQPage"
            aria-labelledby="faq-heading"
        >
            <h2 id="faq-heading" className="h2 pb-5">
                {title}
            </h2>

            {questions.map((faq, i) => (
                <article
                    key={i}
                    className="py-5 border-t first-of-type:border-t-[3px] w-full border-black/30 first-of-type:border-black"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                >
                    <h3
                        className="large cursor-pointer select-none transition-colors rounded"
                        onClick={() => toggleFAQ(i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        tabIndex={0}
                        role="button"
                        aria-expanded={openIndex === i}
                        aria-controls={`faq-answer-${i}`}
                        itemProp="name"
                        id={`faq-question-${i}`}
                    >
                        <span className="flex justify-between items-center">
                            {faq.question}
                        </span>
                    </h3>

                    <div
                        id={`faq-answer-${i}`}
                        ref={(el) => (refs.current[i] = el)}
                        className="transition-all ease-out duration-300 overflow-hidden"
                        style={{ height: "0px" }}
                        aria-labelledby={`faq-question-${i}`}
                        role="region"
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                    >
                        <div className="pt-2" itemProp="text">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default FAQ;
