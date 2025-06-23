import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed flex w-[calc(100%-40px)] md:min-w-[500px] md:max-w-[500px] items-center  z-40 justify-between md:top-10 top-5 right-5 md:right-10 text-white bg-black rounded-lg">
            <ul className="flex justify-between w-full mx-2">
                <li className="body ml-2">
                    <Link href="/mobiele-toiletten-huren-bouw">Bouw</Link>
                </li>
                <li className="body">
                    <Link href="/mobiele-toiletten-huren-evenementen">
                        Evenementen
                    </Link>
                </li>
                <li className="body">
                    <Link href="/mobiele-toilet-huren-particulier">
                        Particulier
                    </Link>
                </li>
            </ul>
            <button className="bg-[#8ab2ee] body m-2 gap-2 px-2 rounded py-1 ">
                <Link
                    href="/bestellen"
                    className="flex flex-nowrap gap-1 wrap-break-word whitespace-nowrap"
                >
                    <span>Offerte</span>
                    <span className="hidden sm:block">aanvragen</span>
                </Link>
            </button>
        </nav>
    );
};

export default Navbar;
