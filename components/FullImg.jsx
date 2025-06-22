import Image from "next/image";
import React from "react";

const FullImg = ({ img, alt }) => {
    return (
        <section className="w-full px-5 md:px-10 ">
            <Image
                src={img}
                alt={alt}
                className="object-cover w-full aspect-video"
                width={2000}
                height={1000}
            />
        </section>
    );
};

export default FullImg;
