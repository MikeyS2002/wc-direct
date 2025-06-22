import React from "react";

const SideText = ({ header, text }) => {
    return (
        <section className="mx-5 my-10 md:m-10 md:w-[500px] md:ml-auto">
            <h2 className="font-semibold mb-2">{header}</h2>
            <p>{text}</p>
        </section>
    );
};

export default SideText;
