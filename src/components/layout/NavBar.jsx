import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    const isDark = theme === 'dark';
    const useLight = isDark;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-500 ${scrolled
                    ? (isDark
                        ? 'bg-[#0A1128]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)] py-3'
                        : 'bg-white/95 backdrop-blur-2xl shadow-[0_1px_0_rgba(10,17,40,0.06)] py-3')
                    : (isDark
                        ? 'bg-transparent py-6'
                        : 'bg-white py-6 shadow-[0_1px_0_rgba(10,17,40,0.06)]')
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center group relative">
                    <img
                        src="/images/logo.png"
                        alt="AO IT Tech"
                        className={`h-20 w-auto absolute -top-6 left-0 transition-all duration-300 ${useLight ? 'brightness-0 invert' : ''}`}
                    />
                    <div className="w-24 h-8" />
                </Link>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none ${location.pathname === link.path
                                    ? (useLight ? 'text-white' : 'text-[#0A1128]')
                                    : (useLight ? 'text-white/60 hover:text-white' : 'text-[#0A1128]/45 hover:text-[#0A1128]/75')
                                }`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-active"
                                    className={`absolute inset-0 rounded-lg border ${useLight ? 'bg-white/[0.08] border-white/[0.1]' : 'bg-[#0A1128]/[0.04] border-[#0A1128]/[0.06]'}`}
                                    style={{ zIndex: -1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <div className={`w-px h-5 mx-2 transition-colors duration-300 ${useLight ? 'bg-white/15' : 'bg-[#0A1128]/10'}`} />
                    <ThemeToggle light={useLight} />
                    <div className={`w-px h-5 mx-2 transition-colors duration-300 ${useLight ? 'bg-white/15' : 'bg-[#0A1128]/10'}`} />
                    <div className="hidden lg:flex items-center gap-1">
                        <a href="tel:+18632880163" className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm font-heading font-medium transition-colors duration-300 ${useLight ? 'text-white/70 hover:text-white hover:bg-white/[0.06]' : 'text-[#0A1128]/60 hover:text-[#0A1128] hover:bg-[#0A1128]/[0.04]'}`} title="Call us">
                            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                            (863) 288-0163
                        </a>
                        <a href="sms:+18632880163" className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300 ${useLight ? 'text-white/50 hover:text-white hover:bg-white/[0.06]' : 'text-[#0A1128]/40 hover:text-[#0A1128] hover:bg-[#0A1128]/[0.04]'}`} title="Send a text">
                            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                    </div>
                    <div className={`hidden lg:block w-px h-5 mx-2 transition-colors duration-300 ${useLight ? 'bg-white/15' : 'bg-[#0A1128]/10'}`} />
                    <Link to="/contact">
                        <Button className="btn-premium-primary h-11 rounded-full px-5 font-heading text-sm font-semibold">
                            Get Support
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle light={useLight} />
                    <button
                        className={`p-2 -mr-2 rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none transition-colors duration-300 ${useLight ? 'text-white' : 'text-[#0A1128]'}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`md:hidden backdrop-blur-2xl border-t overflow-hidden ${isDark ? 'bg-[#0A1128]/95 border-white/[0.06]' : 'bg-white/95 border-[#0A1128]/[0.06]'}`}
                        style={{ overscrollBehavior: 'contain' }}
                    >
                        <div className="px-6 py-8 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block text-lg font-heading font-medium py-3 px-4 rounded-lg transition-colors ${location.pathname === link.path
                                                ? 'text-brand bg-[var(--icon-bg)]'
                                                : 'text-body hover:text-heading hover:bg-[var(--border-subtle)]'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="rule-accent my-4" />
                            <div className="flex items-center gap-2">
                                <a href="tel:+18632880163" className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg text-brand hover:bg-[var(--icon-bg)] transition-colors">
                                    <Phone className="h-4 w-4" aria-hidden="true" />
                                    <span className="font-heading font-medium text-lg">(863) 288-0163</span>
                                </a>
                                <a href="sms:+18632880163" className="flex items-center justify-center w-12 h-12 rounded-lg text-brand hover:bg-[var(--icon-bg)] transition-colors" title="Send a text">
                                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </div>
                            <div className="mt-2" />
                            <Link to="/contact">
                                <Button className="btn-premium-primary w-full rounded-full font-heading font-semibold">
                                    Get Support
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
