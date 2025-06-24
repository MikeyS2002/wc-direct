import React from "react";
import Link from "next/link";

import Services from "./Services";

const Footer = () => {
    return (
        <>
            <Services />
            <footer className="bg-black p-5 md:p-10  text-white md:flex justify-between">
                <div className="flex flex-col mb-10 md:mb-0 justify-between gap-5">
                    <p>WC-Direct</p>
                    <address className="not-italic">
                        <div className="space-y-1">
                            <div>
                                <span>KvK:</span>
                                <span className="ml-1">92591558</span>
                            </div>
                            <div>
                                <span>Telefoon:</span>
                                <a
                                    href="tel:0650928799"
                                    className="ml-1 hover:underline rounded"
                                    aria-label="Bel ons op 06 50928799"
                                >
                                    06 50928799
                                </a>
                            </div>
                            <div>
                                <span>E-mail:</span>
                                <a
                                    href="mailto:info@dryveverhuur.nl"
                                    className="ml-1 hover:underline rounded"
                                    aria-label="Stuur ons een e-mail"
                                >
                                    info@dryveverhuur.nl
                                </a>
                            </div>
                        </div>
                    </address>
                </div>
                <div className="lg:w-[800px] gap-5 flex-wrap flex justify-between">
                    <ul className="space-y-2 ">
                        <li className="opacity-50 mb-5 font-semibold">
                            Sitemap
                        </li>
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/mobiele-toiletten-huren-bouw">
                            <li>Bouw</li>
                        </Link>
                        <Link href="/mobiele-toiletten-huren-evenementen">
                            <li>Evenementen</li>
                        </Link>
                        <Link href="/mobiele-toilet-huren-particulier">
                            <li>Particulier</li>
                        </Link>
                    </ul>
                    <ul className="space-y-2 ">
                        <li className="opacity-50 mb-5 font-semibold">
                            Helpdesk
                        </li>
                        <Link href="/contact">
                            <li>Contact</li>
                        </Link>
                        <Link href="/mobiele-toilet">
                            <li>Meer over onze toiletten</li>
                        </Link>
                        <Link href="/">
                            <li>Algemene voorwaarden</li>
                        </Link>
                        <Link href="/">
                            <li>Annulerings voorwaarden</li>
                        </Link>
                    </ul>
                    <ul className="space-y-2 ">
                        <li className="opacity-50 font-semibold mb-5">
                            Locaties
                        </li>
                        <Link href="/mobiele-toilet-huren-purmerend">
                            <li>Purmerend</li>
                        </Link>
                        <Link href="/mobiele-toilet-huren-amsterdam">
                            <li>Amsterdam</li>
                        </Link>
                        <Link href="/mobiele-toilet-huren-alkmaar">
                            <li>Alkmaar</li>
                        </Link>
                        <Link href="/mobiele-toilet-huren-hoorn">
                            <li>Hoorn</li>
                        </Link>
                        <Link href="/mobiele-toilet-huren-zaandam">
                            <li>Zaandam</li>
                        </Link>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
