import React from "react";
import Link from "next/link";

const TextWithButtons = ({ title, text }) => {
    return (
        <article className="mt-20 md:mt-40 mb-20 md:mb-60 max-w-260 mx-auto px-5 md:px-10">
            <h2 className="h2 mb-5 md:mb-10 md:text-center ">{title}</h2>
            <p className="md:text-center">{text}</p>
            <div className="mt-10 relative">
                <Link href="/bestellen">
                    <button className="button mb-5 block cursor-pointer bg-black md:absolute left-[calc(50%+20px)]">
                        Bestel gelijk
                    </button>
                </Link>
                <Link href="/mobiele-toilet">
                    <button className="button block cursor-pointer bg-primary md:absolute md:-translate-x-full  left-[calc(50%-20px)]">
                        Zie meer details
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default TextWithButtons;
