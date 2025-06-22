import React from "react";
import Image from "next/image";

const TextImage = ({ img, alt, mt, mb, text, title, reverse }) => {
    return (
        <section
            className={` ${mt ? "mt-10 md:mt-40" : ""} ${
                mb ? "mb-10 md:mb-40" : ""
            }  md:grid md:grid-cols-2 md:mb-0 mb-5 `}
        >
            <div
                className={`md:mb-0 mb-5 aspect-square w-full ${
                    reverse ? "order-2" : ""
                }`}
            >
                <Image
                    src={img}
                    alt={alt}
                    className="object-cover w-full h-full"
                    width={1000}
                    height={1000}
                />
            </div>
            <div
                className={`flex gap-5 md:gap-10 md:mx-20 mx-5 md:pb-0 pb-5 flex-col justify-center md:items-center md:text-center ${
                    reverse ? "order-1" : ""
                }`}
            >
                <h4 className="h2">{title}</h4>
                <p>{text}</p>
            </div>
        </section>
    );
};

export default TextImage;
