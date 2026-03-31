/**
 * Static prerender script for SEO.
 * Generates index.html files for each route with meaningful content
 * that crawlers can read, even without JavaScript.
 *
 * Run after `vite build` via `npm run postbuild`
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const routes = [
    {
        path: '/',
        title: 'AO IT Tech — IT Infrastructure You Can Rely On',
        description: '15+ years of trusted IT support for businesses and homes. Network infrastructure, security, and AI solutions by Angel Olivera.',
        content: `
            <h1>IT Infrastructure You Can Rely On</h1>
            <p>AO IT Tech delivers security-minded, hands-on technology support for businesses and homes. Over 15 years of trusted IT experience.</p>
            <h2>Services</h2>
            <ul>
                <li>Network Design &amp; Deployment</li>
                <li>Server Setup &amp; Management</li>
                <li>Security &amp; Firewall Management</li>
                <li>Remote Access Solutions</li>
                <li>Backup &amp; Disaster Recovery</li>
                <li>WiFi Setup &amp; Optimization</li>
                <li>Computer Repair &amp; Maintenance</li>
                <li>AI Solutions powered by Agent Ace</li>
            </ul>
            <p>Contact AO IT Tech for a free consultation.</p>
        `
    },
    {
        path: '/about',
        title: 'About AO IT Tech — 15 Years of Doing IT the Right Way',
        description: 'Founded by Angel Olivera with a straightforward mission: deliver reliable, security-conscious technology support to small businesses and local clients.',
        content: `
            <h1>About AO IT Tech</h1>
            <p>15 years of doing IT the right way. Founded by Angel Olivera with a straightforward mission: deliver reliable, security-conscious technology support to small businesses and local clients who deserve better than generic call-center help.</p>
            <h2>The AO IT Tech Standards</h2>
            <ul>
                <li>Security-First Deployment</li>
                <li>Zero-Downtime Mentality</li>
                <li>Full Transparency</li>
                <li>Right-Sized Solutions</li>
                <li>Data Integrity &amp; Backup</li>
                <li>Responsive Support</li>
            </ul>
        `
    },
    {
        path: '/services',
        title: 'IT Services — Business IT, Home Tech, AI Solutions | AO IT Tech',
        description: 'Full-spectrum IT services: network infrastructure, security, remote access, backup, WiFi, computer repair, and AI automation through Agent Ace.',
        content: `
            <h1>Full-Spectrum IT Services for Every Need</h1>
            <h2>Business IT</h2>
            <ul>
                <li>Network Design &amp; Deployment</li>
                <li>Server Setup &amp; Management</li>
                <li>Security &amp; Firewall Management</li>
                <li>Remote Access Solutions</li>
                <li>Backup &amp; Disaster Recovery</li>
                <li>Office Technology Management</li>
            </ul>
            <h2>Home Tech</h2>
            <ul>
                <li>WiFi Setup &amp; Optimization</li>
                <li>Computer Repair &amp; Maintenance</li>
                <li>Printer &amp; Device Setup</li>
                <li>Email &amp; Account Configuration</li>
                <li>Home Network Security</li>
                <li>General Troubleshooting</li>
            </ul>
            <h2>AI Solutions — Agent Ace</h2>
            <ul>
                <li>Custom AI Agents</li>
                <li>Workflow Automation</li>
                <li>AI Strategy Consulting</li>
            </ul>
        `
    },
    {
        path: '/contact',
        title: 'Contact AO IT Tech — Free IT Consultation',
        description: 'Get in touch with AO IT Tech for a free consultation. Network support, security audits, home tech help, and AI solutions.',
        content: `
            <h1>Contact AO IT Tech</h1>
            <p>Whether you're dealing with a network outage or planning a full IT overhaul, reach out. You'll hear back quickly with honest advice and a clear plan.</p>
            <h2>Contact Details</h2>
            <p>Email: contact@aoittech.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Service Area: Local &amp; Remote Support Available</p>
            <p>Free consultation available — no strings attached.</p>
        `
    }
];

// Read the base index.html from dist
const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
    // Update meta tags and add noscript content
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
            `<div id="root"></div>\n    <noscript><div class="seo-content">${route.content}</div></noscript>`
        );

    // Add canonical URL
    if (!html.includes('rel="canonical"')) {
        html = html.replace(
            '</head>',
            `    <link rel="canonical" href="https://aoittech.com${route.path === '/' ? '' : route.path}" />\n</head>`
        );
    } else {
        html = html.replace(
            /rel="canonical" href=".*?"/,
            `rel="canonical" href="https://aoittech.com${route.path === '/' ? '' : route.path}"`
        );
    }

    // Add Open Graph tags
    const ogTags = `
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://aoittech.com${route.path === '/' ? '' : route.path}" />
    <meta property="og:site_name" content="AO IT Tech" />`;

    if (!html.includes('og:title')) {
        html = html.replace('</head>', `${ogTags}\n</head>`);
    }

    // Write to appropriate path
    if (route.path === '/') {
        fs.writeFileSync(path.join(distDir, 'index.html'), html);
    } else {
        const routeDir = path.join(distDir, route.path);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    }

    console.log(`  Generated: ${route.path}`);
}

// Also create a sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/svg" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(r => `  <url>
    <loc>https://aoittech.com${r.path === '/' ? '' : r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('  Generated: sitemap.xml');

// Create robots.txt
const robots = `User-agent: *
Allow: /
Sitemap: https://aoittech.com/sitemap.xml`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('  Generated: robots.txt');

console.log('\nPrerender complete!');
