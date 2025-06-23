import React from "react";
import Image from "next/image";

const SocialProof = ({ title, imgs }) => {
    return (
        <section className="my-20 md:my-40 px-5 md:px-10">
            <h3 className="h2 mb-10">{title}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
                {imgs.map((img) => (
                    <div key={img.img} className="w-full aspect-[10/16]">
                        <Image
                            src={img.img}
                            alt={img.alt}
                            className="object-cover w-full h-full"
                            width={2000}
                            height={1000}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SocialProof;
