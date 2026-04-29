const BASE_URL = 'https://leminigolfdugolfedumorbihan.fr';

export default function sitemap() {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ];
}
