"use client";

import React, { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { nl } from "react-day-picker/locale";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import Services from "./Services";

// Initialize Stripe
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Offerte = () => {
    const [selected, setSelected] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isStripeLoading, setIsStripeLoading] = useState(false);
    const [formData, setFormData] = useState({
        type: "",
        naam: "",
        email: "",
        aantal: "",
        adres: "",
        postcode: "",
        stad: "",
        opmerking: "",
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [maxVoorraad, setMaxVoorraad] = useState(5);

    const datePickerRef = useRef(null);

    // Fetch maximum voorraad from API
    useEffect(() => {
        const fetchMaxVoorraad = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/voorraad`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setMaxVoorraad(data.data.maximum_voorraad);
                }
            } catch (error) {
                console.error("Error fetching voorraad:", error);
            }
        };

        fetchMaxVoorraad();
    }, []);

    const calculateWeeks = () => {
        if (!selected?.from) return 0;

        const startDate = new Date(selected.from);
        const endDate = selected.to
            ? new Date(selected.to)
            : new Date(selected.from);

        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

        return Math.ceil(daysDiff / 7);
    };

    const calculatePricePerToilet = () => {
        const weeks = calculateWeeks();
        if (weeks === 0) return 0;
        if (weeks === 1) return 125;
        return 125 + (weeks - 1) * 40;
    };

    const calculateTotal = () => {
        const aantal = parseInt(formData.aantal) || 0;
        const prijsPerToilet = calculatePricePerToilet();
        return aantal * prijsPerToilet;
    };

    const shouldShowPrice = () => {
        const aantal = parseInt(formData.aantal) || 0;
        return aantal < 10;
    };

    const shouldShowDirectPayment = () => {
        return (
            formData.type === "particulier" &&
            parseInt(formData.aantal || 0) <= maxVoorraad &&
            shouldShowPrice() // Only show direct payment when price is shown
        );
    };

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.type) newErrors.type = "Alle velden zijn verplicht";
        if (!formData.naam.trim())
            newErrors.naam = "Alle velden zijn verplicht";
        if (!formData.email.trim())
            newErrors.email = "Alle velden zijn verplicht";
        if (!formData.email.includes("@"))
            newErrors.email = "Voer een geldig e-mailadres in";
        if (!formData.aantal || parseInt(formData.aantal) < 1)
            newErrors.aantal = "Alle velden zijn verplicht";
        if (!selected?.from) newErrors.datum = "Alle velden zijn verplicht";
        if (!formData.adres.trim())
            newErrors.adres = "Alle velden zijn verplicht";
        if (!formData.postcode.trim())
            newErrors.postcode = "Alle velden zijn verplicht";
        if (!formData.stad.trim())
            newErrors.stad = "Alle velden zijn verplicht";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleStripePayment = async () => {
        if (!validateForm()) {
            setSubmitStatus({
                type: "error",
                message: "Alle velden zijn verplicht",
            });
            return;
        }

        setIsStripeLoading(true);
        setSubmitStatus(null);

        try {
            const stripe = await stripePromise;

            const requestData = {
                formData,
                selected,
                total: calculateTotal(),
                weeks: calculateWeeks(),
            };

            console.log("Sending request data:", requestData);

            // Create checkout session
            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            console.log("Response status:", response.status);
            console.log("Response ok:", response.ok);

            // Check if response is ok before trying to parse JSON
            if (!response.ok) {
                const errorText = await response.text();
                console.error("API Error Response:", errorText);
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }

            // Check if response has content
            const responseText = await response.text();
            console.log("Raw response:", responseText);

            if (!responseText) {
                throw new Error("Empty response from server");
            }

            let responseData;
            try {
                responseData = JSON.parse(responseText);
            } catch (parseError) {
                console.error("JSON Parse Error:", parseError);
                throw new Error("Invalid JSON response from server");
            }

            console.log("Parsed response:", responseData);

            if (responseData.error) {
                throw new Error(responseData.error);
            }

            if (!responseData.sessionId) {
                throw new Error("No session ID received from server");
            }

            // Redirect to Stripe Checkout
            const { error: stripeError } = await stripe.redirectToCheckout({
                sessionId: responseData.sessionId,
            });

            if (stripeError) {
                throw new Error(stripeError.message);
            }
        } catch (error) {
            console.error("Stripe payment error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.message ||
                    "Er is een fout opgetreden bij de betaling.",
            });
        } finally {
            setIsStripeLoading(false);
        }
    };

    const handleSubmit = async (type) => {
        if (type === "direct") {
            await handleStripePayment();
            return;
        }

        if (!validateForm()) {
            setSubmitStatus({
                type: "error",
                message: "Alle velden zijn verplicht",
            });
            return;
        }

        setIsLoading(true);
        setSubmitStatus(null);

        try {
            const requestData = {
                ...formData,
                van: selected.from.toISOString(),
                tot: selected.to ? selected.to.toISOString() : null,
                prijs: shouldShowPrice() ? calculateTotal() : null, // Don't send price if 10+ toilets
                opmerking: formData.opmerking || "",
            };

            const response = await fetch("/api/bestellingen", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const result = await response.json();

            if (response.ok) {
                // Redirect to success page for quote requests
                window.location.href = "/success";
            } else {
                throw new Error(result.error || "Er is een fout opgetreden");
            }
        } catch (error) {
            console.error("Submit error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    error.message ||
                    "Er is een fout opgetreden. Probeer het opnieuw.",
            });
        } finally {
            setIsLoading(false);
        }
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
        <>
            <main className="grid md:h-[100lvh] md:grid-cols-2 relative">
                <div className="mx-5 md:mx-10 mt-20 md:mt-10 flex flex-col md:sticky top-10 h-fit">
                    <div className="space-y-2">
                        <h1 className="h4 mb-10">Uw gegevens</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="pr-10 bg-contrast rounded">
                                <label htmlFor="type" className="sr-only">
                                    Ik ben ...
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className={`input w-full `}
                                    required
                                >
                                    <option value="" disabled>
                                        Ik ben ...
                                    </option>
                                    <option value="bedrijf">
                                        Ik ben een bedrijf
                                    </option>
                                    <option value="particulier">
                                        Ik ben een particulier
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="naam" className="sr-only">
                                    Naam
                                </label>
                                <input
                                    type="text"
                                    id="naam"
                                    name="naam"
                                    value={formData.naam}
                                    onChange={handleInputChange}
                                    placeholder="Naam"
                                    className={`input w-full `}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="E-mail"
                                className={`input w-full`}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="aantal" className="sr-only">
                                Aantal
                            </label>
                            <input
                                type="number"
                                id="aantal"
                                name="aantal"
                                value={formData.aantal}
                                onChange={handleInputChange}
                                placeholder="Aantal"
                                min="1"
                                className={`input w-full`}
                                required
                            />
                        </div>
                        <div className="relative" ref={datePickerRef}>
                            <div
                                className={`input cursor-pointer`}
                                onClick={() =>
                                    setShowDatePicker(!showDatePicker)
                                }
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
                            <label htmlFor="adres" className="sr-only">
                                Adres
                            </label>
                            <input
                                type="text"
                                id="adres"
                                name="adres"
                                value={formData.adres}
                                onChange={handleInputChange}
                                placeholder="Adres"
                                className={`input w-full`}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="postcode" className="sr-only">
                                    Postcode
                                </label>
                                <input
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleInputChange}
                                    placeholder="Postcode"
                                    className={`input w-full`}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="stad" className="sr-only">
                                    Stad
                                </label>
                                <input
                                    type="text"
                                    id="stad"
                                    name="stad"
                                    value={formData.stad}
                                    onChange={handleInputChange}
                                    placeholder="Stad"
                                    className={`input w-full`}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="opmerking" className="sr-only">
                                Opmerking (optioneel)
                            </label>
                            <textarea
                                id="opmerking"
                                name="opmerking"
                                value={formData.opmerking}
                                onChange={handleInputChange}
                                placeholder="Opmerking (optioneel)"
                                className={`input w-full min-h-[80px] resize-y`}
                                rows="3"
                            />
                        </div>
                    </div>

                    <div className="border-t md:hidden border-t-black flex mt-10 pt-5 justify-between">
                        <h3 className="h2">
                            {shouldShowPrice()
                                ? `€${calculateTotal()}`
                                : "Prijs op aanvraag"}
                        </h3>
                        <h3 className="">
                            {formData.aantal || 0} toilet
                            {(parseInt(formData.aantal) || 0) !== 1
                                ? "ten"
                                : ""}
                            {calculateWeeks() > 0
                                ? ` - ${calculateWeeks()} ${
                                      calculateWeeks() !== 1 ? "weken" : "week"
                                  }`
                                : ""}
                        </h3>
                    </div>

                    <div className="space-y-2 mt-10">
                        {shouldShowDirectPayment() && (
                            <button
                                className="button bg-black w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => handleSubmit("direct")}
                                disabled={isLoading || isStripeLoading}
                            >
                                {isStripeLoading
                                    ? "Naar betaling..."
                                    : "Betaal direct"}
                            </button>
                        )}

                        {!shouldShowDirectPayment() && (
                            <button
                                className={`bg-black button w-full disabled:opacity-50 disabled:cursor-not-allowed`}
                                onClick={() => handleSubmit("offerte")}
                                disabled={isLoading || isStripeLoading}
                            >
                                {isLoading
                                    ? "Bezig..."
                                    : "Vraag een offerte aan"}
                            </button>
                        )}

                        {submitStatus && (
                            <div
                                className={`p-4 mt-10 rounded-lg ${
                                    submitStatus.type === "success"
                                        ? "bg-green-100 text-green-800 border border-green-300"
                                        : "bg-red-100 text-red-800 border border-red-300"
                                }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-contrast md:flex hidden flex-col justify-between px-5 md:px-10 md:pt-[155px] pt-20">
                    <div className="flex justify-center">
                        <Image
                            src="/images/toilet-transparent.png"
                            alt="gehuurd toilet"
                            width={350}
                            height={350}
                            className=""
                        />
                    </div>
                    <div className="border-t border-t-black flex mb-5 md:mb-10 pt-4 justify-between">
                        <div className="flex items-end gap-2">
                            <h3 className="h2">
                                {shouldShowPrice()
                                    ? `€${calculateTotal()}`
                                    : "Prijs op aanvraag"}
                            </h3>
                            {shouldShowPrice() && (
                                <small className="opacity-50 mb-1">
                                    exclusief BTW
                                </small>
                            )}
                        </div>
                        <h3 className="h3 opacity-50">
                            {formData.aantal || 0} toilet
                            {(parseInt(formData.aantal) || 0) !== 1
                                ? "ten"
                                : ""}
                            {calculateWeeks() > 0
                                ? ` - ${calculateWeeks()} ${
                                      calculateWeeks() !== 1 ? "weken" : "week"
                                  }`
                                : ""}
                        </h3>
                    </div>
                </div>
            </main>
            <Services />
        </>
    );
};

export default Offerte;
