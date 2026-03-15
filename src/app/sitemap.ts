import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bali.enterprises';

    // Core Pages
    const coreRoutes = [
        '',
        '/about',
        '/services',
        '/ecosystem',
        '/why-us',
        '/contact',
        '/starting-business-bali-guide',
        '/why-invest-in-bali',
        '/startup-ecosystem-bali',
        '/bali-vs-thailand-business',
        '/bali-vs-singapore-startup',
        '/bali-vs-dubai-business',
        '/indonesia-vs-malaysia-business',
        '/why-bali-for-startups',
        '/business-regions-indonesia',
        '/doing-business-in-bali',
        '/bali-business-environment',
        '/business-opportunities-bali',
        '/cost-of-doing-business-bali',
        '/industries-growing-bali',
        '/how-to-start-a-business-in-bali',
        '/entrepreneurship-in-bali',
        '/digital-nomads-startups-bali',
        '/building-a-business-in-bali',
        '/mistakes-foreign-entrepreneurs-make',
        '/foreign-investment-indonesia',
        '/why-invest-indonesia',
        '/investment-opportunities-indonesia',
        '/bali-investment-guide',
        '/sectors-open-foreign-investors',
        '/indonesia-business-growth',
        '/bali-enterprises-ecosystem',
        '/investor-referral-bali',
        '/bali-corporate-services',
        '/bali-investment-consultancy',
        '/boutique-investment-bali',
        '/expanding-business-indonesia',
        '/build-company-in-bali',
        '/build-company-in-jakarta',
        '/company-formation-bali',
        '/company-formation-jakarta',
        '/company-formation-indonesia',
    ].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : route === '/starting-business-bali-guide' ? 0.95 : 0.8,
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
