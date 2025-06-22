import React from "react";
import Image from "next/image";

const Header = ({ text, img, alt }) => {
    return (
        <>
            <h1 className="h1 md:mt-[150px] mt-20 mb-5 md:mb-10 mx-5 md:mx-10 text-balance">
                {text}
            </h1>
            <header className="w-full">
                <Image
                    src={img}
                    alt={alt}
                    className="object-contain w-full"
                    width={2000}
                    height={1000}
                />
            </header>
        </>
    );
};

export default Header;
