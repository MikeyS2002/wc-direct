"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHeader = ({ seoH1, words, text }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <header className="m-5 md:m-10 mt-20 md:mt-10" role="banner">
            <h1 className="sr-only">{seoH1}</h1>
            <div
                className="h1 block md:w-[66%] text-balance"
                aria-describedby="animated-words"
            >
                {text}
            </div>
            <div
                className="overflow-y-hidden relative h-[44px] md:h-[110px] "
                id="animated-words"
                aria-live="polite"
                aria-label="Roterende tekst showcase"
            >
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="h1 font-[400] text-primary absolute top-0 left-0 whitespace-nowrap"
                        role="text"
                        aria-atomic="true"
                    >
                        {words[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </header>
    );
};

export default AnimatedHeader;
