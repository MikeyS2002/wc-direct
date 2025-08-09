import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!email || !message) {
            return NextResponse.json(
                { error: "Email and message are required" },
                { status: 400 }
            );
        }

        // Create nodemailer transporter
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

        // Email content
        const mailOptions = {
            from: `"WC Direct Contact" <${process.env.SMTP_USER}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: `WC-Direct Contact formulier van ${name || "Onbekend"}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
                        WC-Direct Contact formulier
                    </h2>
                    
                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold;">Naam:</td>
                                <td style="padding: 8px 0;">${
                                    name || "Niet opgegeven"
                                }</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold;">E-mail:</td>
                                <td style="padding: 8px 0;">${email}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin: 20px 0; background: #f9f9f9; padding: 20px; border-radius: 5px;">
                        <h3 style="color: #444; margin-top: 0;">Bericht:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
                    </div>

                    <div style="margin: 20px 0; color: #666; font-size: 14px;">
                        <p>Dit bericht is verzonden via het contactformulier op de WC-Direct website.</p>
                    </div>
                </div>
            `,
            // Add reply-to for easy response
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
