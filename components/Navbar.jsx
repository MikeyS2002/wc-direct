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
                    role="none"
                >
                    <Link href="/mobiele-toilet-huren-zakelijk" role="menuitem">
                        Zakelijk
                    </Link>
                </li>

                <li className="body" role="none">
                    <Link
                        href="/mobiele-toilet-huren-particulier"
                        role="menuitem"
                    >
                        Particulier
                    </Link>
                </li>
                <li className="body" role="none">
                    <Link href="/contact" role="menuitem">
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="bg-[#00ab7c] body m-2 gap-2 px-2 rounded py-1">
                <Link
                    href="/bestellen"
                    className="flex flex-nowrap gap-1 wrap-break-word whitespace-nowrap"
                    aria-label="Vraag een offerte aan voor mobiele toilet verhuur"
                >
                    <span>Bestel</span>
                    <span className="hidden sm:block">gelijk</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
