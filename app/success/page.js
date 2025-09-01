import Success from "@/components/Success";

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

export default function SuccessPage() {
    return <Success />;
}
