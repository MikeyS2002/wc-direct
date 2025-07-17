import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request) {
    try {
        const { amount, currency = "eur" } = await request.json();

        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Stripe uses cents
            currency,
            metadata: {
                // Add any metadata you need
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        return NextResponse.json(
            { error: "Error creating payment intent" },
            { status: 500 }
        );
    }
}
