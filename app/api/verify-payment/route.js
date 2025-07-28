// app/api/verify-payment/route.js (for App Router)
import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});

const formatDateForStrapi = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
};

const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    return date
        .toLocaleDateString("nl-NL", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        })
        .replace(/-/g, "/");
};

// Helper function to ensure a value is a valid number
const ensureNumber = (value, defaultValue = 0) => {
    if (value === null || value === undefined || isNaN(parseFloat(value))) {
        return defaultValue;
    }
    return parseFloat(value);
};

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const session_id = searchParams.get("session_id");

        if (!session_id) {
            return NextResponse.json(
                { error: "Session ID is required" },
                { status: 400 }
            );
        }

        // Retrieve the checkout session from Stripe
        const session = await stripe.checkout.sessions.retrieve(session_id);

        if (session.payment_status === "paid") {
            // Extract order data from session metadata
            const {
                type,
                naam,
                email,
                aantal,
                adres,
                postcode,
                stad,
                van,
                tot,
                weeks,
            } = session.metadata;

            const prijs = session.amount_total / 100; // Convert from cents

            let bestellingId;
            try {
                console.log("Creating order in Strapi with data:", {
                    type,
                    naam,
                    email,
                    aantal,
                    adres,
                    postcode,
                    stad,
                    van,
                    tot,
                });
                console.log("Using API URL:", process.env.NEXT_PUBLIC_API_URL);
                console.log(
                    "API Key exists:",
                    !!process.env.NEXT_PUBLIC_STRAPI_API_KEY
                );

                // Create order in Strapi with betaald: true
                const strapiResponse = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/bestellingens`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
                        },
                        body: JSON.stringify({
                            data: {
                                type: type,
                                naam: naam,
                                email: email,
                                adres: adres,
                                postcode: postcode,
                                stad: stad,
                                van: formatDateForStrapi(van),
                                tot: tot
                                    ? formatDateForStrapi(tot)
                                    : formatDateForStrapi(van),
                                aantal: ensureNumber(aantal, 1),
                                prijs: ensureNumber(prijs, 0),
                                betaald: true, // Set to true for Stripe payments
                                aangevraagd_op: formatDateForStrapi(new Date()),
                                stripe_session_id: session_id, // Remove this line since field doesn't exist in Strapi
                            },
                        }),
                    }
                );

                console.log("Strapi response status:", strapiResponse.status);

                if (!strapiResponse.ok) {
                    const errorText = await strapiResponse.text();
                    console.error("Strapi error response:", errorText);
                    throw new Error("Failed to create order in Strapi");
                }

                const strapiData = await strapiResponse.json();
                bestellingId = strapiData.data.id + 1000;
            } catch (strapiError) {
                console.error("Error creating order in Strapi:", strapiError);
                throw strapiError;
            }

            // Calculate weeks for email display
            const weeksNumber = parseInt(weeks) || 1;

            // Setup email transporter
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT),
                secure: process.env.SMTP_PORT === "465",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            // Business email content
            const businessMailOptions = {
                from: `"WC Direct" <${process.env.SMTP_USER}>`,
                to: process.env.RECIPIENT_EMAIL,
                subject: `Nieuwe BETAALDE bestelling #${bestellingId} - ${naam}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuwe BETAALDE Bestelling #${bestellingId}</h1>
            
            <div style="margin: 20px 0; padding: 15px; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; color: #155724;">
              <strong>✅ BETALING VOLTOOID via Stripe</strong><br>
              Session ID: ${session_id}
            </div>
            
            <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
              <h3 style="color: #444; margin-top: 0;">Klantgegevens</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Type:</strong></td>
                  <td>${type === "bedrijf" ? "Bedrijf" : "Particulier"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Naam:</strong></td>
                  <td>${naam}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>E-mail:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Adres:</strong></td>
                  <td>${adres}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Postcode:</strong></td>
                  <td>${postcode}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Stad:</strong></td>
                  <td>${stad}</td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
              <h3 style="color: #444; margin-top: 0;">Bestelling Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Van:</strong></td>
                  <td>${formatDateForDisplay(van)}</td>
                </tr>
                ${
                    tot
                        ? `
                <tr>
                  <td style="padding: 8px 0;"><strong>Tot:</strong></td>
                  <td>${formatDateForDisplay(tot)}</td>
                </tr>
                `
                        : ""
                }
                <tr>
                  <td style="padding: 8px 0;"><strong>Periode:</strong></td>
                  <td>${weeksNumber} week${weeksNumber !== 1 ? "s" : ""}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Aantal toiletten:</strong></td>
                  <td>${aantal}</td>
                </tr>
                <tr style="background: #e9e9e9;">
                  <td style="padding: 8px 0;"><strong>Totaalprijs:</strong></td>
                  <td><strong>€${prijs.toFixed(2)}</strong></td>
                </tr>
                <tr style="background: #d4edda;">
                  <td style="padding: 8px 0;"><strong>Status:</strong></td>
                  <td><strong>BETAALD ✅</strong></td>
                </tr>
              </table>
            </div>
          </div>
        `,
            };

            // Customer email content
            const customerMailOptions = {
                from: `"WC Direct" <${process.env.SMTP_USER}>`,
                to: email,
                subject: `Betalingsbevestiging #${bestellingId} - WC Direct`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Betaling ontvangen! #${bestellingId}</h1>
            
            <div style="margin: 20px 0; padding: 15px; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; color: #155724;">
              <strong>✅ Je betaling is succesvol verwerkt!</strong>
            </div>
            
            <p style="color: #666; font-size: 16px; line-height: 1.5;">
              Beste ${naam},<br><br>
              Bedankt voor je betaling! We hebben je bestelling én betaling in goede orde ontvangen. Je toiletten worden zo snel mogelijk geleverd.
            </p>

            <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
              <h3 style="color: #444; margin-top: 0;">Jouw bestelling</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Periode:</strong></td>
                  <td>${formatDateForDisplay(van)}${
                    tot ? ` tot ${formatDateForDisplay(tot)}` : ""
                } (${weeksNumber} week${weeksNumber !== 1 ? "s" : ""})</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Aantal toiletten:</strong></td>
                  <td>${aantal}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Leveradres:</strong></td>
                  <td>${adres}, ${postcode} ${stad}</td>
                </tr>
                <tr style="background: #e9e9e9;">
                  <td style="padding: 8px 0;"><strong>Totaalprijs:</strong></td>
                  <td><strong>€${prijs.toFixed(2)}</strong></td>
                </tr>
                <tr style="background: #d4edda;">
                  <td style="padding: 8px 0;"><strong>Status:</strong></td>
                  <td><strong>BETAALD ✅</strong></td>
                </tr>
              </table>
            </div>

            <div style="margin: 20px 0; padding: 20px; background: #f0f8ff; border-radius: 5px; border-left: 4px solid #007bff;">
              <h4 style="color: #444; margin-top: 0;">Wat gebeurt er nu?</h4>
              <ul style="color: #666; line-height: 1.5;">
                <li>Je betaling is verwerkt en bevestigd</li>
                <li>We nemen binnen 24 uur contact met je op voor levering</li>
                <li>We plannen de bezorging en ophaling in</li>
                <li>Je ontvangt van ons alle details over de levering</li>
              </ul>
            </div>

            <div style="margin: 20px 0; color: #666;">
              <p>Heb je nog vragen over je bestelling? Neem gerust contact met ons op via ${
                  process.env.RECIPIENT_EMAIL
              }</p>
              <p style="margin-top: 20px;">
                Met vriendelijke groet,<br>
                Team WC Direct
              </p>
            </div>
          </div>
        `,
            };

            // Send both emails
            try {
                await Promise.all([
                    transporter.sendMail(businessMailOptions),
                    transporter.sendMail(customerMailOptions),
                ]);
            } catch (emailError) {
                console.error("Error sending emails:", emailError);
                // Continue even if email fails - order is still created
            }

            return NextResponse.json({
                id: bestellingId,
                status: "paid",
                customer_email: session.customer_email,
                amount_total: session.amount_total / 100,
                sessionId: session_id,
            });
        } else {
            return NextResponse.json(
                { error: "Payment not completed" },
                { status: 400 }
            );
        }
    } catch (err) {
        console.error("Verify payment error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
