import React from "react";
import Services from "./Services";

const Footer = () => {
    return (
        <>
            <Services />
            <footer className="bg-black p-5 md:p-10  text-white md:flex justify-between">
                <div className="flex flex-col mb-10 md:mb-0 justify-between gap-5">
                    <p>WC-Direct</p>
                    <p>
                        Kvk: 92591558
                        <br />
                        Nummer: 0650928799
                        <br />
                        Email: info@dryveverhuur.nl
                    </p>
                </div>
                <div className="lg:w-[800px] gap-5 flex-wrap flex justify-between">
                    <ul className="space-y-1 ">
                        <li className="opacity-50 mb-5 font-semibold">
                            Sitemap
                        </li>
                        <li>Home</li>
                        <li>Bouw</li>
                        <li>Evenementen</li>
                        <li>Particulier</li>
                    </ul>
                    <ul className="space-y-1 ">
                        <li className="opacity-50 mb-5 font-semibold">
                            Helpdesk
                        </li>
                        <li>Contact</li>
                        <li>Algemene voorwaarden</li>
                        <li>Annulerings voorwaarden</li>
                    </ul>
                    <ul className="space-y-1 ">
                        <li className="opacity-50 font-semibold mb-5">
                            Locaties
                        </li>
                        <li>Purmerend</li>
                        <li>Amsterdam</li>
                        <li>Alkmaar</li>
                        <li>Hoorn</li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
