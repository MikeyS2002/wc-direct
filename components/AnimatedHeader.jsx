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
        <div className="m-5 md:m-10 mt-20 md:mt-10">
            <h1 className="sr-only">{seoH1}</h1>
            <span className="h1 block md:w-[66%]">{text} </span>
            <div className="overflow-y-hidden relative h-[44px] md:h-[110px]">
                <AnimatePresence>
                    <motion.span
                        key={currentIndex}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                        className="h1 absolute top-0 left-0 whitespace-nowrap"
                    >
                        {words[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AnimatedHeader;
