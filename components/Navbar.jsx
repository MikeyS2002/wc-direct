"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Close dropdown when pressing Escape
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isDropdownOpen]);

    // Handle keyboard navigation
    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleDropdown();
        }
    };

    return (
        <nav
            className="fixed flex w-[calc(100%-40px)] md:min-w-[500px] md:max-w-[500px] items-center z-40 justify-between md:top-10 top-5 right-5 md:right-10 text-white bg-black rounded-lg"
            role="navigation"
            aria-label="Hoofdnavigatie"
        >
            <ul className="flex justify-between w-full mx-2" role="menubar">
                <li className="body ml-2" role="none">
                    <Link href="/" role="menuitem">
                        Home
                    </Link>
                </li>

                <li
                    className="body flex  items-center gap-2 cursor-pointer relative"
                    ref={dropdownRef}
                    role="none"
                >
                    <button
                        onClick={toggleDropdown}
                        onKeyDown={handleKeyDown}
                        className="flex items-center gap-2 cursor-pointer"
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                        aria-controls="bedrijven-dropdown"
                        role="menuitem"
                    >
                        Bedrijven
                        <svg
                            className={`w-2 fill-white ${
                                isDropdownOpen ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            aria-hidden="true"
                        >
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div
                            id="bedrijven-dropdown"
                            className="absolute left-1/2 -translate-x-1/2 bg-black -bottom-20 md:-bottom-22 rounded-lg px-4 py-2"
                            role="menu"
                            aria-labelledby="bedrijven-button"
                        >
                            <ul className="space-y-1" role="none">
                                <li role="none">
                                    <Link
                                        href="/mobiele-toiletten-huren-bouw"
                                        role="menuitem"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        De bouw
                                    </Link>
                                </li>
                                <li role="none">
                                    <Link
                                        href="/mobiele-toiletten-huren-evenementen"
                                        role="menuitem"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Evenementen
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>

                <li className="body" role="none">
                    <Link
                        href="/mobiele-toilet-huren-particulier"
                        role="menuitem"
                    >
                        Particulier
                    </Link>
                </li>
            </ul>

            <div className="bg-[#8ab2ee] body m-2 gap-2 px-2 rounded py-1">
                <Link
                    href="/bestellen"
                    className="flex flex-nowrap gap-1 wrap-break-word whitespace-nowrap"
                    aria-label="Vraag een offerte aan voor mobiele toilet verhuur"
                >
                    <span>Offerte</span>
                    <span className="hidden sm:block">aanvragen</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
