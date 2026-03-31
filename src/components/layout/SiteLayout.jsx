import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

export default function SiteLayout() {
    return (
        <div className="min-h-screen bg-surface grain">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--brand)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-heading focus:font-semibold">
                Skip to content
            </a>
            <NavBar />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
