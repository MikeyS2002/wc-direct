"use client";
import React, { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { nl } from "react-day-picker/locale";

const Offerte = () => {
    const [selected, setSelected] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const datePickerRef = useRef(null);

    const formatDateDutch = (date) => {
        if (!date) return "";
        return date.toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const getDateDisplayText = () => {
        if (!selected) return "Datum";

        if (selected.from && selected.to) {
            return `Van ${formatDateDutch(selected.from)} tot ${formatDateDutch(
                selected.to
            )}`;
        } else if (selected.from) {
            return `Vanaf ${formatDateDutch(selected.from)}`;
        }
        return "Datum";
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target)
            ) {
                setShowDatePicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <main className="grid h-[100lvh] md:grid-cols-2">
            <div className="mx-5 md:mx-10 mt-20 md:mt-10 space-y-2">
                <h1 className="h4 mb-10">Uw gegevens</h1>
                <div className="grid grid-cols-2 gap-2 ">
                    <div className="pr-10 bg-contrast rounded">
                        <label htmlFor="type" className="sr-only">
                            Ik ben ...
                        </label>
                        <select
                            id="type"
                            name="type"
                            className={`input w-full `}
                            required
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Ik ben ...
                            </option>
                            <option value="bedrijf">Ik ben een bedrijf</option>
                            <option value="particulier">
                                Ik ben een particulier
                            </option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Naam
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Naam"
                            className={`input w-full `}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="sr-only">
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        className={`input w-full `}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name" className="sr-only">
                        Aantal
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Aantal"
                        className={`input w-full `}
                        required
                    />
                </div>
                <div className="relative" ref={datePickerRef}>
                    <div
                        className="input cursor-pointer"
                        onClick={() => setShowDatePicker(!showDatePicker)}
                    >
                        <p className={selected ? "" : "opacity-50"}>
                            {getDateDisplayText()}
                        </p>
                    </div>
                    {showDatePicker && (
                        <div className="w-fit p-5 absolute top-[calc(100%+8px)] left-0 text-white rounded-lg bg-black z-10">
                            <DayPicker
                                mode="range"
                                selected={selected}
                                onSelect={setSelected}
                                locale={nl}
                                required
                                disabled={{ before: new Date() }}
                                classNames={{
                                    today: ``,
                                    selected: `border-primary`,
                                    chevron: `fill-[#3479e2]`,
                                }}
                            />
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="name" className="sr-only">
                        Adres
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Adres"
                        className={`input w-full `}
                        required
                    />
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Postcode
                        </label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            placeholder="Postcode"
                            className={`input w-full `}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Stad
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Stad"
                            className={`input w-full `}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="bg-contrast"></div>
        </main>
    );
};

export default Offerte;
