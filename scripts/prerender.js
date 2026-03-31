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
            const appHtml = render(route.path);

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

            // Add Open Graph tags
            const ogTags = `
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="AO IT Tech" />`;

            html = html.replace('</head>', `${ogTags}\n</head>`);

            // Add structured data (JSON-LD)
            const jsonLd = route.path === '/'
                ? `<script type="application/ld+json">${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "AO IT Tech",
                    "description": route.description,
                    "url": "https://aoittech.com",
                    "founder": { "@type": "Person", "name": "Angel Olivera" },
                    "foundingDate": "2009",
                    "areaServed": "Local & Remote",
                    "serviceType": ["IT Support", "Network Infrastructure", "Security", "AI Solutions"],
                    "telephone": "(555) 123-4567",
                    "email": "contact@aoittech.com"
                })}</script>`
                : '';

            if (jsonLd) {
                html = html.replace('</head>', `    ${jsonLd}\n</head>`);
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
