import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import PageNotFound from '@/pages/PageNotFound';

// Flag for SSR — components can check this to render final state
globalThis.__SSR__ = true;

export function render(url) {
    const html = ReactDOMServer.renderToString(
        <MotionConfig reducedMotion="always">
            <StaticRouter location={url}>
                <Routes>
                    <Route element={<SiteLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </StaticRouter>
        </MotionConfig>
    );
    return html;
}
