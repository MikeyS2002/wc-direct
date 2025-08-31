"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const fadeInAndUpVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
        },
    },
};

const Whatsapp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // Show button when user scrolls more than 300px
            const scrollThreshold = 500;
            if (window.scrollY > scrollThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="fixed z-10 p-2 px-4 bg-green-600 rounded transition-dryve hover:bg-green-700 bottom-4 left-4"
            variants={fadeInAndUpVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <a
                href="https://wa.me/31634124702"
                className="flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsWhatsapp className="text-white" />
                <div className="mr-2 text-white smalll">Stel uw vraag</div>
            </a>
        </motion.div>
    );
};

export default Whatsapp;
