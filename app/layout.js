import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Whatsapp from "@/components/Whatsapp";

export const metadata = {
    title: {
        default: "WC-Direct | Mobiele toiletten huren in Noord-Holland",
        template: "WC-Direct | %s",
    },
    keywords: [
        "mobiel toilet huren",
        "mobiele toiletten Noord-Holland",
        "dixi huren",
        "toiletverhuur Purmerend",
        "toilet huren Amsterdam",
        "sanitair huren",
    ],
    description:
        "Huur snel een mobiel toilet bij WC-Direct. Transparante prijzen, levering binnen 48 uur en wekelijkse schoonmaak in heel Noord-Holland.",
    openGraph: {
        siteName: "WC-Direct",
        locale: "nl_NL",
        type: "website",
        images: [
            {
                url: "https://www.wc-direct.nl/og/mobiele-toilet-bouw-huren.png",
                width: 1200,
                height: 630,
                alt: "Contact WC-Direct",
            },
        ],
    },
    robots: "index, follow",
    alternates: {
        canonical: "https://www.wc-direct.nl/",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Logo />
                {children}
                <Whatsapp />
                <Footer />
            </body>
        </html>
    );
}
