"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (sessionId) {
            // Optional: Verify the payment and get order details
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
        } else {
            setLoading(false);
        }
    }, [sessionId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Bevestiging van betaling...
                    </h1>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
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
                        Betaling succesvol!
                    </h1>
                    <p className="text-gray-600">
                        Uw bestelling is geplaatst en bevestigd.
                    </p>
                </div>

                {orderDetails && (
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

                <div className="space-y-3">
                    <Link href="/offerte">
                        <button className="w-full bg-black button">
                            Nieuwe bestelling plaatsen
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="w-full bg-gray-200 text-gray-800 button mt-2">
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
