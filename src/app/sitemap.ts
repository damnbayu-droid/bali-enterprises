import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bali.enterprises';

    // Core Pages
    const coreRoutes = ['', '/about', '/services', '/ecosystem', '/why-us', '/contact'].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        })
    );

    // Strategic Blueprint Hub
    const blueprintHub = {
        url: `${baseUrl}/strategic-entry-blueprint-bali`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    };

    // Strategic Blueprint Child Pages
    const blueprintChapters = [
        '/regulatory-landscape-bali',
        '/legal-structure-scenarios',
        '/capital-alignment-framework',
        '/business-scope-architecture',
        '/investor-kitas-sequencing',
        '/zoning-operational-risk',
        '/implementation-roadmap',
        '/five-year-strategic-outlook',
        '/partnership-regulatory-safeguard',
        '/foreign-founder-entry-framework',
    ].map((chapter) => ({
        url: `${baseUrl}/strategic-entry-blueprint-bali${chapter}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...coreRoutes, blueprintHub, ...blueprintChapters];
}
