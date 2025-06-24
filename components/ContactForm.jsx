"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Naam is verplicht";
        }

        if (!formData.email.trim()) {
            newErrors.email = "E-mailadres is verplicht";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Voer een geldig e-mailadres in";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Bericht is verplicht";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setStatus("sending");
        setErrors({});

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    return (
        <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="sr-only">
                Contact formulier
            </h2>

            <form
                onSubmit={handleSubmit}
                noValidate
                aria-describedby="form-instructions"
            >
                <div id="form-instructions" className="sr-only">
                    Vul het formulier in om contact met ons op te nemen. Alle
                    velden met een sterretje zijn verplicht.
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Naam (verplicht)
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Naam *"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input w-full ${
                                errors.name ? "border-red-500" : ""
                            }`}
                            aria-invalid={errors.name ? "true" : "false"}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                            required
                        />
                        {errors.name && (
                            <div
                                id="name-error"
                                className="text-red-500 text-sm mt-1"
                                role="alert"
                            >
                                {errors.name}
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            E-mailadres (verplicht)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mailadres *"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input w-full ${
                                errors.email ? "border-red-500" : ""
                            }`}
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={
                                errors.email ? "email-error" : undefined
                            }
                            required
                        />
                        {errors.email && (
                            <div
                                id="email-error"
                                className="text-red-500 text-sm mt-1"
                                role="alert"
                            >
                                {errors.email}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="sr-only">
                        Bericht (verplicht)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Bericht *"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`input w-full ${
                            errors.message ? "border-red-500" : ""
                        }`}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                            errors.message ? "message-error" : undefined
                        }
                        required
                    />
                    {errors.message && (
                        <div
                            id="message-error"
                            className="text-red-500 text-sm mt-1"
                            role="alert"
                        >
                            {errors.message}
                        </div>
                    )}
                </div>

                <div className="flex justify-between items-center w-full">
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-4 md:mt-10 button bg-black disabled:opacity-50 disabled:cursor-not-allowed "
                        aria-describedby="submit-status"
                    >
                        {status === "sending"
                            ? "Versturen..."
                            : "Verzend je bericht"}
                    </button>

                    <div
                        id="submit-status"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {status === "success" && (
                            <p className="text-green-500" role="status">
                                Bericht succesvol verstuurd!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600" role="alert">
                                Er ging iets mis. Probeer het opnieuw.
                            </p>
                        )}
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
