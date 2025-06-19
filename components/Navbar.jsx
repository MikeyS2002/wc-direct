import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed flex w-[calc(100%-40px)] md:min-w-[500px] md:max-w-[500px] items-center  justify-between md:top-10 top-5 right-5 md:right-10 text-white bg-black rounded-lg">
            <ul className="flex justify-between w-full mx-2">
                <li className="body">Bouw</li>
                <li className="body">Evenementen</li>
                <li className="body">Particulier</li>
            </ul>
            <button className="bg-[#8ab2ee] body m-2 gap-2 px-2 rounded py-1 flex flex-nowrap wrap-break-word whitespace-nowrap">
                <span>Offerte</span>
                <span className="hidden sm:block">aanvragen</span>
            </button>
        </nav>
    );
};

export default Navbar;
