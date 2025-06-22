import React from "react";
import Image from "next/image";

const Blocks = () => {
    return (
        <section className="md:grid grid-cols-2 gap-5 mx-5 mb-20 md:mb-40 md:mx-10">
            <div className="md:mb-0 mb-5">
                <div className="aspect-video w-full">
                    <Image
                        src="/images/bedrijf.jpg"
                        alt="alt"
                        className="object-cover w-full"
                        width={700}
                        height={500}
                    />
                </div>
                <div className="mt-2">
                    <h3 className="h2">Voor bedrijven</h3>
                    <p className="opacity-50">Vraag direct een offerte aan</p>
                </div>
            </div>
            <div>
                <div className="aspect-video  w-full">
                    <Image
                        src="/images/particulier.jpg"
                        alt="alt"
                        className="object-cover w-full"
                        width={700}
                        height={500}
                    />
                </div>
                <div className=" mt-2">
                    <h3 className="h2">Voor particulieren</h3>
                    <p className="opacity-50">Betaal direct</p>
                </div>
            </div>
        </section>
    );
};

export default Blocks;
