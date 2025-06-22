"use client";
import React, { useState, useRef, useEffect } from "react";

const FAQ = ({ questions }) => {
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

    return (
        <section className="px-5 md:px-10 my-20 md:my-40 lg:w-[calc(100%-520px)]">
            <h3 className="h2 pb-5">Veelgestelde vragen</h3>
            {questions.map((faq, i) => (
                <div
                    className={`py-5 border-t first-of-type:border-t-[3px] w-full border-black/30 first-of-type:border-black`}
                    key={i}
                >
                    <h5
                        className="large cursor-pointer select-none"
                        onClick={() => toggleFAQ(i)}
                    >
                        {faq.question}
                    </h5>
                    <div
                        ref={(el) => (refs.current[i] = el)}
                        className="transition-all ease-out duration-300 overflow-hidden"
                        style={{ height: "0px" }}
                    >
                        <p className="pt-2">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FAQ;
