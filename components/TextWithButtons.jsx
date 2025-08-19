import React from "react";
import Link from "next/link";

const TextWithButtons = ({ title, text, call }) => {
    // Split text by <br /> and map to JSX elements
    const formatText = (text) => {
        if (!text) return null;

        return text.split("<br />").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < text.split("<br />").length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <article className="mt-20 md:mt-40 mb-20 md:mb-60 max-w-260 mx-auto px-5 md:px-10">
            <h2 className="h2 mb-5 md:mb-10 md:text-center">{title}</h2>
            <p className="md:text-center">{formatText(text)}</p>
            <div
                className={`mt-10 relative ${
                    call ? "flex justify-center gap-4" : ""
                }`}
            >
                {call && (
                    <a
                        href="tel:0634124702"
                        className="button mb-5 block cursor-pointer order-2 bg-black"
                    >
                        Bel direct
                    </a>
                )}
                {!call && (
                    <Link href="/mobiele-toilet">
                        <button className="button mb-5 block cursor-pointer bg-black md:absolute left-[calc(50%+20px)]">
                            Klik hier voor meer informatie
                        </button>
                    </Link>
                )}

                <Link href="/bestellen">
                    <button
                        className={`button block cursor-pointer bg-primary ${
                            call
                                ? ""
                                : "left-[calc(50%-20px)] md:-translate-x-full md:absolute"
                        } `}
                    >
                        Vraag direct een offerte aan
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default TextWithButtons;
