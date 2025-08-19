import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

// Helper function to calculate weeks between dates
const calculateWeeks = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date(startDate);

    // Bereken het aantal dagen
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 omdat start en eind beide meetellen

    // Bereken aantal weken (elke begonnen week telt als hele week)
    return Math.ceil(daysDiff / 7);
};

// Helper function to calculate price per toilet
const calculatePricePerToilet = (startDate, endDate = null) => {
    const weeks = calculateWeeks(startDate, endDate);
    if (weeks === 0) return 0;
    if (weeks === 1) return 150; // Eerste week
    return 150 + (weeks - 1) * 50; // Eerste week + vervolgweken
};

// Helper function to ensure a value is a valid number
const ensureNumber = (value, defaultValue = 0) => {
    if (value === null || value === undefined || isNaN(parseFloat(value))) {
        return defaultValue;
    }
    return parseFloat(value);
};

export async function POST(request) {
    try {
        const {
            type,
            naam,
            email,
            aantal,
            van,
            tot,
            adres,
            postcode,
            stad,
            prijs,
            opmerking = "",
        } = await request.json();

        // Validation
        if (
            !naam ||
            !email ||
            !aantal ||
            !van ||
            !adres ||
            !postcode ||
            !stad
        ) {
            return NextResponse.json(
                { error: "Alle verplichte velden moeten worden ingevuld" },
                { status: 400 }
            );
        }

        // Get current datetime for Strapi
        const currentDateTime = new Date().toISOString();

        const strapiData = {
            data: {
                type: type || "particulier",
                naam: naam,
                email: email,
                adres: adres,
                postcode: postcode,
                stad: stad,
                van: formatDateForStrapi(van),
                tot: tot ? formatDateForStrapi(tot) : formatDateForStrapi(van),
                aantal: ensureNumber(aantal, 1),
                prijs: ensureNumber(prijs, 0),
                opmerking: opmerking || "",
                betaald: false,
                aangevraagd_op: formatDateForStrapi(new Date()),
            },
        };

        let bestellingId;
        try {
            // Create order in Strapi
            const strapiResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/bestellingens`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${
                            process.env.STRAPI_API_KEY ||
                            process.env.NEXT_PUBLIC_STRAPI_API_KEY
                        }`,
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
                            opmerking: opmerking || "",
                            betaald: false,
                            aangevraagd_op: formatDateForStrapi(new Date()),
                        },
                    }),
                }
            );

            if (!strapiResponse.ok) {
                console.error(
                    "Failed to create order in Strapi:",
                    await strapiResponse.text()
                );
                throw new Error("Failed to create order in Strapi");
            }

            const strapiData = await strapiResponse.json();
            bestellingId = strapiData.data.id + 1000;
        } catch (strapiError) {
            console.error("Error creating order in Strapi:", strapiError);
            throw strapiError;
        }

        // Calculate weeks for email display
        const startDate = new Date(van);
        const endDate = tot ? new Date(tot) : new Date(van);
        const timeDiff = endDate.getTime() - startDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        const weeks = Math.ceil(daysDiff / 7);

        // Calculate total price
        const totalPrice = ensureNumber(prijs) * ensureNumber(aantal, 1);

        // Setup email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
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
            subject: `Nieuwe bestelling #${bestellingId} - ${naam}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
                    <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nieuwe Bestelling #${bestellingId}</h1>
                    
                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <h3 style="color: #444; margin-top: 0;">Klantgegevens</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0;"><strong>Type:</strong></td>
                                <td>${
                                    type === "bedrijf"
                                        ? "Bedrijf"
                                        : "Particulier"
                                }</td>
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
                                <td>${weeks} week${weeks !== 1 ? "s" : ""}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0;"><strong>Aantal toiletten:</strong></td>
                                <td>${aantal}</td>
                            </tr>
                            <tr style="background: #e9e9e9;">
                                <td style="padding: 8px 0;"><strong>Totaalprijs:</strong></td>
                                <td><strong>${
                                    prijs !== null
                                        ? `€${totalPrice.toFixed(2)}`
                                        : "Prijs op aanvraag"
                                }</strong></td>
                            </tr>
                        </table>
                    </div>

                    ${
                        opmerking
                            ? `
                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <h3 style="color: #444; margin-top: 0;">Opmerking van klant</h3>
                        <p style="white-space: pre-wrap;">${opmerking}</p>
                    </div>
                    `
                            : ""
                    }

                    ${
                        opmerking
                            ? `
                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <h3 style="color: #444; margin-top: 0;">Systeem opmerking</h3>
                        <p>${opmerking}</p>
                    </div>
                    `
                            : ""
                    }
                </div>
            `,
        };

        // Customer email content
        const customerMailOptions = {
            from: `"WC Direct" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Bestelling bevestiging #${bestellingId} - WC Direct`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
                    <h1 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Bedankt voor je bestelling! #${bestellingId}</h1>
                    
                    <p style="color: #666; font-size: 16px; line-height: 1.5;">
                        Beste ${naam},<br><br>
                        Bedankt voor je bestelling bij WC Direct. We hebben je bestelling in goede orde ontvangen en zullen deze zo snel mogelijk voor je klaarmaken.
                    </p>

                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <h3 style="color: #444; margin-top: 0;">Jouw bestelling</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0;"><strong>Periode:</strong></td>
                                <td>${formatDateForDisplay(van)}${
                tot ? ` tot ${formatDateForDisplay(tot)}` : ""
            } (${weeks} week${weeks !== 1 ? "s" : ""})</td>
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
                                <td><strong>${
                                    prijs !== null
                                        ? `€${totalPrice.toFixed(2)}`
                                        : "Prijs op aanvraag"
                                }</strong></td>
                            </tr>
                        </table>
                    </div>

                    ${
                        opmerking
                            ? `
                    <div style="margin: 20px 0; background: #f0f8ff; padding: 20px; border-radius: 5px;">
                        <h4 style="color: #444; margin-top: 0;">Jouw opmerking</h4>
                        <p style="white-space: pre-wrap; color: #666;">${opmerking}</p>
                    </div>
                    `
                            : ""
                    }

                    <div style="margin: 20px 0; padding: 20px; background: #f0f8ff; border-radius: 5px; border-left: 4px solid #007bff;">
                        <h4 style="color: #444; margin-top: 0;">Wat gebeurt er nu?</h4>
                        <ul style="color: #666; line-height: 1.5;">
                            <li>We nemen binnen 24 uur contact met je op voor bevestiging</li>
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
        await Promise.all([
            transporter.sendMail(businessMailOptions),
            transporter.sendMail(customerMailOptions),
        ]);

        return NextResponse.json(
            {
                success: true,
                message: "Bestelling is succesvol geplaatst",
                bestellingId: bestellingId,
                redirectUrl: "/success",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing order:", error);
        return NextResponse.json(
            {
                error: "Er is een fout opgetreden bij het verwerken van de bestelling",
            },
            { status: 500 }
        );
    }
}
