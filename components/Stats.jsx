import Image from "next/image";
import Link from "next/link";
import React from "react";

const Stats = ({ stats }) => {
    return (
        <section className="md:grid grid-cols-2 md:mx-10 mx-5 gap-10 my-20 md:my-40 z-0 md:relative">
            <div className="h-[60svh] md:h-[100lvh] relative bg-contrast mb-5 md:mb-0 w-full">
                <Image
                    src="/images/toilet1.png"
                    alt="alt"
                    width={300}
                    height={500}
                    className="w-full h-full object-contain md:px-30 p-20"
                />
            </div>
            <div className=" space-y-3 md:sticky md:top-[128px] h-fit">
                {stats.map((item, i) => (
                    <h3
                        key={i}
                        className="button text-black border border-black/30 text-left w-full lg:w-[500px]"
                    >
                        {item}
                    </h3>
                ))}
                <Link href="/bestellen">
                    <button className="button cursor-pointer bg-black">
                        Bestel gelijk
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Stats;
