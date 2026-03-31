/**
 * Static Site Generation for AO IT Tech
 *
 * Renders each route to full static HTML at build time using
 * React's server rendering. Crawlers, social previews, and
 * screen readers see real content — not an empty div.
 *
 * Runs after `vite build`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import { Window } from 'happy-dom';

// Full DOM shim for SSR
const window = new Window({ url: 'https://aoittech.com' });
globalThis.window = window;
globalThis.document = window.document;
globalThis.self = window;
globalThis.localStorage = window.localStorage;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, writable: true, configurable: true });
globalThis.SVGElement = window.SVGElement || class SVGElement {};
globalThis.HTMLElement = window.HTMLElement || class HTMLElement {};
globalThis.Element = window.Element || class Element {};
globalThis.Image = window.Image || class Image {};
globalThis.matchMedia = window.matchMedia || (() => ({ matches: false, addListener: () => {}, removeListener: () => {} }));
globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0);
globalThis.cancelAnimationFrame = clearTimeout;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
    {
        path: '/',
        title: 'AO IT Tech — IT Infrastructure You Can Rely On',
        description: '15+ years of trusted IT support for businesses and homes. Network infrastructure, security, and AI solutions by Angel Olivera.',
    },
    {
        path: '/about',
        title: 'About AO IT Tech — 15 Years of Doing IT the Right Way',
        description: 'Founded by Angel Olivera with a straightforward mission: deliver reliable, security-conscious technology support to small businesses and local clients.',
    },
    {
        path: '/services',
        title: 'IT Services — Business IT, Home Tech, AI Solutions | AO IT Tech',
        description: 'Full-spectrum IT services: network infrastructure, security, remote access, backup, WiFi, computer repair, and AI automation through Agent Ace.',
    },
    {
        path: '/contact',
        title: 'Contact AO IT Tech — Free IT Consultation',
        description: 'Get in touch with AO IT Tech for a free consultation. Network support, security audits, home tech help, and AI solutions.',
    },
    {
        path: '/faq',
        title: 'FAQ — Common IT Questions Answered | AO IT Tech',
        description: 'Answers to common IT questions: slow internet fixes, virus removal, IT support costs, cloud migration, email security, and more. Serving Winter Haven & Central Florida.',
    }
];

async function prerender() {
    // Create a Vite server in SSR mode to resolve imports
    const vite = await createServer({
        root: path.resolve(__dirname, '..'),
        server: { middlewareMode: true },
        appType: 'custom',
    });

    try {
        // Load the SSR entry point
        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

        const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

        for (const route of routes) {
            // Render the app to HTML string
            let appHtml = render(route.path);

            // Strip Framer Motion initial animation styles (opacity:0, transforms)
            // so crawlers and no-JS visitors see fully visible content
            appHtml = appHtml
                .replace(/\s*style="opacity:0[^"]*"/g, '')
                .replace(/\s*style="([^"]*?)opacity:0;?([^"]*)"/g, (match, before, after) => {
                    const remaining = (before + after).replace(/;+/g, ';').replace(/^;|;$/g, '').trim();
                    return remaining ? ` style="${remaining}"` : '';
                });

            // Build the full page
            let html = baseHtml
                .replace(
                    /<title>.*?<\/title>/,
                    `<title>${route.title}</title>`
                )
                .replace(
                    /<meta name="description" content=".*?".*?\/?>/,
                    `<meta name="description" content="${route.description}" />`
                )
                .replace(
                    '<div id="root"></div>',
                    `<div id="root">${appHtml}</div>`
                );

            // Add canonical URL
            const canonical = `https://aoittech.com${route.path === '/' ? '' : route.path}`;
            html = html.replace(
                '</head>',
                `    <link rel="canonical" href="${canonical}" />\n</head>`
            );

            // Add Open Graph + Twitter Card tags
            const socialTags = `
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="AO IT Tech" />
    <meta property="og:image" content="https://aoittech.com/images/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://aoittech.com/images/og-image.png" />`;

            html = html.replace('</head>', `${socialTags}\n</head>`);

            // Add structured data (JSON-LD)
            const jsonLdItems = [];

            if (route.path === '/') {
                jsonLdItems.push({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "AO IT Tech",
                    "description": route.description,
                    "url": "https://aoittech.com",
                    "logo": "https://aoittech.com/images/logo.png",
                    "image": "https://aoittech.com/images/og-image.png",
                    "founder": { "@type": "Person", "name": "Angel Olivera" },
                    "foundingDate": "2009",
                    "areaServed": [
                        { "@type": "City", "name": "Winter Haven", "containedInPlace": { "@type": "State", "name": "Florida" } },
                        { "@type": "City", "name": "Lakeland", "containedInPlace": { "@type": "State", "name": "Florida" } },
                        { "@type": "City", "name": "Haines City", "containedInPlace": { "@type": "State", "name": "Florida" } },
                        { "@type": "AdministrativeArea", "name": "Central Florida" }
                    ],
                    "serviceType": ["IT Support", "Managed IT Services", "Network Infrastructure", "Cybersecurity", "Cloud Migration", "AI Solutions", "Computer Repair"],
                    "telephone": "(555) 123-4567",
                    "email": "contact@aoittech.com",
                    "priceRange": "$$",
                    "knowsAbout": ["IT Infrastructure", "Network Security", "Microsoft 365", "AI Automation", "Server Management"]
                });
            }

            if (route.path === '/faq') {
                jsonLdItems.push({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How much does IT support cost for a small business?", "acceptedAnswer": { "@type": "Answer", "text": "Most IT support runs between $75–200 per hour. AO IT Tech offers flexible options from full managed IT to on-call support." } },
                        { "@type": "Question", "name": "What's the difference between managed IT and break-fix?", "acceptedAnswer": { "@type": "Answer", "text": "Break-fix charges per incident when something goes wrong. Managed IT is proactive — we monitor your systems, apply updates, manage security, and prevent problems before they happen." } },
                        { "@type": "Question", "name": "Do you support remote and hybrid teams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We set up secure VPN access, remote desktop solutions, cloud-based collaboration tools, and endpoint protection for remote devices." } },
                        { "@type": "Question", "name": "What if something breaks at 2 AM?", "acceptedAnswer": { "@type": "Answer", "text": "We offer emergency support for critical issues. Managed IT clients get priority emergency response for server outages and security incidents." } },
                        { "@type": "Question", "name": "Why should I hire a local IT person instead of a big company?", "acceptedAnswer": { "@type": "Answer", "text": "With AO IT Tech, you get Angel — someone who knows your systems, understands your business, and picks up the phone. No call center, no rotating technicians, just direct support." } }
                    ]
                });
            }

            for (const item of jsonLdItems) {
                html = html.replace('</head>', `    <script type="application/ld+json">${JSON.stringify(item)}</script>\n</head>`);
            }

            // Write to appropriate path
            if (route.path === '/') {
                fs.writeFileSync(path.join(distDir, 'index.html'), html);
            } else {
                const routeDir = path.join(distDir, route.path);
                fs.mkdirSync(routeDir, { recursive: true });
                fs.writeFileSync(path.join(routeDir, 'index.html'), html);
            }

            console.log(`  Rendered: ${route.path} (${appHtml.length} chars)`);
        }

        // Sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>https://aoittech.com${r.path === '/' ? '' : r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
        console.log('  Generated: sitemap.xml');

        // robots.txt
        fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: https://aoittech.com/sitemap.xml`);
        console.log('  Generated: robots.txt');

        console.log('\nPrerender complete!');
    } finally {
        await vite.close();
    }
}

prerender().catch(err => {
    console.error('Prerender failed:', err);
    process.exit(1);
});
