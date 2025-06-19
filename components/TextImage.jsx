import React from "react";
import Image from "next/image";

const TextImage = ({ img, alt, mt, mb, text, title, reverse }) => {
    return (
        <section
            className={` ${mt ? "mt-40" : ""} ${
                mb ? "mb-40" : ""
            }  grid grid-cols-2`}
        >
            <div className={`aspect-square w-full ${reverse ? "order-2" : ""}`}>
                <Image
                    src={img}
                    alt={alt}
                    className="object-cover w-full h-full"
                    width={1000}
                    height={1000}
                />
            </div>
            <div
                className={`flex gap-10 md:mx-20 mx-10 flex-col justify-center items-center text-center ${
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
