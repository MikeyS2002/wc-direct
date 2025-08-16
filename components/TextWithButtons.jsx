import React from "react";
import Link from "next/link";

const TextWithButtons = ({ title, text }) => {
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
            <h2 className="h2 mb-5 md:mb-10 md:text-center ">{title}</h2>
            <p className="md:text-center">{formatText(text)}</p>
            <div className="mt-10 relative">
                <Link href="/mobiele-toilet">
                    <button className="button mb-5 block cursor-pointer bg-black md:absolute left-[calc(50%+20px)]">
                        Huur nu je mobiele toilet
                    </button>
                </Link>
                <Link href="/bestellen">
                    <button className="button block cursor-pointer bg-primary md:absolute md:-translate-x-full  left-[calc(50%-20px)]">
                        Vraag direct een offerte aan
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default TextWithButtons;
