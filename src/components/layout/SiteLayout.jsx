import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from './NavBar';
import Footer from './Footer';

export default function SiteLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-surface grain">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--brand)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-heading focus:font-semibold">
                Skip to content
            </a>
            <NavBar />
            <main id="main">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
