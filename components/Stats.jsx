import React from "react";

const Stats = ({ stats }) => {
    return (
        <section className="md:grid grid-cols-2 md:mx-10 mx-5 gap-10 my-20 md:my-40 z-0 md:relative">
            <div className="h-[100lvh] bg-contrast w-full "></div>
            <div className=" space-y-3 md:sticky md:top-[128px] h-fit">
                {stats.map((item) => (
                    <h3 className="button text-black border border-black/30 text-left w-full md:w-[500px]">
                        {item}
                    </h3>
                ))}
                <button className="button cursor-pointer bg-black">
                    Bestel gelijk
                </button>
            </div>
        </section>
    );
};

export default Stats;
