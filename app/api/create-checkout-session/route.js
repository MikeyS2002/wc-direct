// app/api/create-checkout-session/route.js
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
    console.log("Stripe API route called");

    try {
        console.log("Environment check:", {
            hasStripeKey: !!process.env.STRIPE_SECRET_KEY,
            stripeKeyPrefix: process.env.STRIPE_SECRET_KEY?.substring(0, 7),
        });

        if (!process.env.STRIPE_SECRET_KEY) {
            console.error("STRIPE_SECRET_KEY not found");
            return NextResponse.json(
                { error: "Stripe configuration missing" },
                { status: 500 }
            );
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: "2023-10-16",
        });

        const { formData, selected, total, weeks } = await request.json();
        console.log("Received data:", { formData, selected, total, weeks });

        // Validate required data
        if (!formData || !selected?.from || total === undefined || !weeks) {
            console.error("Missing required data:", {
                formData: !!formData,
                selected: !!selected?.from,
                total,
                weeks,
            });
            return NextResponse.json(
                { error: "Missing required data" },
                { status: 400 }
            );
        }

        console.log("Creating Stripe session...");

        // Get the origin for redirect URLs
        const origin = request.headers.get("origin") || "http://localhost:3000";

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card", "ideal"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: `Toilethuur - ${formData.aantal} toilet${
                                parseInt(formData.aantal) !== 1 ? "ten" : ""
                            }`,
                            description: `Periode: ${weeks} week${
                                weeks !== 1 ? "s" : ""
                            } | Van ${new Date(
                                selected.from
                            ).toLocaleDateString("nl-NL")}${
                                selected.to
                                    ? ` tot ${new Date(
                                          selected.to
                                      ).toLocaleDateString("nl-NL")}`
                                    : ""
                            }`,
                        },
                        unit_amount: Math.round(total * 100), // Stripe expects amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/offerte`,
            customer_email: formData.email,
            metadata: {
                type: formData.type,
                naam: formData.naam,
                email: formData.email,
                aantal: formData.aantal,
                adres: formData.adres,
                postcode: formData.postcode,
                stad: formData.stad,
                van: selected.from,
                tot: selected.to || "",
                weeks: weeks.toString(),
            },
        });

        console.log("Stripe session created successfully:", session.id);

        return NextResponse.json({ sessionId: session.id });
    } catch (err) {
        console.error("Stripe API Error:", {
            message: err.message,
            type: err.type,
            code: err.code,
            stack: err.stack,
        });

        return NextResponse.json(
            {
                error: err.message || "Internal server error",
                type: err.type || "unknown_error",
            },
            { status: 500 }
        );
    }
}
