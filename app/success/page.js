"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export const metadata = {
    title: "Bedankt voor uw bestelling!",

    description:
        "Bedankt voor uw bestelling of offerte aanvraag bij WC-Direct. U ontvangt binnenkort een bevestiging per e-mail. Wij nemen binnen 24 uur contact met u op.",

    alternates: {
        canonical: "https://www.wc-direct.nl/success",
    },
    robots: {
        index: false,
        follow: false,
    },
};

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isQuoteRequest, setIsQuoteRequest] = useState(false);

    useEffect(() => {
        // If there's no session_id, this is likely a quote request
        if (!sessionId) {
            setIsQuoteRequest(true);
            setLoading(false);
            return;
        }

        // If there is a session_id, verify the Stripe payment
        const verifyPayment = async () => {
            try {
                const response = await fetch(
                    `/api/verify-payment?session_id=${sessionId}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setOrderDetails(data);
                }
            } catch (error) {
                console.error("Error verifying payment:", error);
            } finally {
                setLoading(false);
            }
        };

        verifyPayment();
    }, [sessionId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        {sessionId
                            ? "Bevestiging van betaling..."
                            : "Verwerken..."}
                    </h1>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                <div className="mb-6">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <svg
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {isQuoteRequest || !sessionId
                            ? "Offerte aanvraag verzonden!"
                            : "Betaling succesvol!"}
                    </h1>
                    <p className="text-gray-600">
                        {isQuoteRequest || !sessionId
                            ? "Uw offerte aanvraag is ontvangen. U ontvangt binnenkort een offerte per e-mail."
                            : "Uw bestelling is geplaatst en bevestigd."}
                    </p>
                </div>

                {orderDetails && sessionId && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h2 className="font-semibold mb-2">
                            Bestelling details:
                        </h2>
                        <p className="text-sm text-gray-600">
                            Bestelling ID: {orderDetails.id}
                        </p>
                        <p className="text-sm text-gray-600">
                            U ontvangt een bevestiging per e-mail.
                        </p>
                    </div>
                )}

                {(isQuoteRequest || !sessionId) && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h2 className="font-semibold mb-2 text-primary">
                            Wat gebeurt er nu?
                        </h2>
                        <ul className="text-sm text-blue-700 text-left space-y-1">
                            <li>• We nemen binnen 24 uur contact met u op</li>
                            <li>
                                • U ontvangt een persoonlijke offerte per e-mail
                            </li>
                            <li>
                                • Wij plannen samen de bezorging en ophaling in
                            </li>
                        </ul>
                    </div>
                )}

                <div className="space-y-3">
                    <Link href="/bestellen">
                        <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                            {isQuoteRequest || !sessionId
                                ? "Nieuwe offerte aanvragen"
                                : "Nieuwe bestelling plaatsen"}
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="w-full mt-2 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                            Terug naar homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Success() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Laden...</h1>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                    </div>
                </div>
            }
        >
            <SuccessContent />
        </Suspense>
    );
}
