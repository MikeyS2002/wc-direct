import React from "react";

const SideText = ({ header, text }) => {
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
        <section className="mx-5 my-10 md:m-10 md:w-[500px] md:ml-auto">
            <h2 className="font-semibold text-justify text-[18.5px] mb-2">
                {header}
            </h2>
            <p className="text-justify">{formatText(text)}</p>
        </section>
    );
};

export default SideText;
