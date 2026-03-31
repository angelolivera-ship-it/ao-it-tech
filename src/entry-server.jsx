import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from '@/components/layout/SiteLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import PageNotFound from '@/pages/PageNotFound';

export function render(url) {
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <Routes>
                <Route element={<SiteLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </StaticRouter>
    );
    return html;
}
