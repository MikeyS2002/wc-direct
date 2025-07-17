"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Logo = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Definieer de URLs waar de animatie actief moet zijn
    const animationUrls = [
        "/",
        "/mobiele-toilet-huren-purmerend",
        "/mobiele-toilet-huren-hoorn",
        "/mobiele-toilet-huren-zaandam",
        "/mobiele-toilet-huren-alkmaar",
        "/mobiele-toilet-huren-amsterdam",
        "/bestellen",
    ];
    const shouldAnimate = animationUrls.includes(pathname);

    useEffect(() => {
        if (!shouldAnimate) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [shouldAnimate]);

    return (
        <div className="fixed top-10 left-10 z-50 md:block hidden">
            <Image
                width={140}
                height={100}
                src="/images/logo.png"
                alt="WC-Direct logo"
                className={`relative z-50 transition-transform duration-500 ease-out ${
                    shouldAnimate
                        ? isScrolled
                            ? "transform translate-y-0"
                            : "transform -translate-y-[300px]"
                        : "transform translate-y-0"
                }`}
            />
        </div>
    );
};

export default Logo;
