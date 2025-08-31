export default function sitemap() {
    const baseUrl = "https://www.wc-direct.nl";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/bestellen`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mobiele-toilet`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-particulier`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-zakelijk`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/success`,
            lastModified: new Date().toISOString(),
            changeFrequency: "never",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/algemene-voorwaarden`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 0.6,
        },

        // Lokale pagina's
        {
            url: `${baseUrl}/mobiele-toilet-huren-alkmaar`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-amsterdam`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-hoorn`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-purmerend`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/mobiele-toilet-huren-zaandam`,
            lastModified: new Date().toISOString(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];
}
