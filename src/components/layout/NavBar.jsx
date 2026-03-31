import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-500 ${scrolled
                    ? 'bg-[var(--surface)]/80 backdrop-blur-2xl shadow-[0_1px_0_var(--border-subtle)] py-3'
                    : 'bg-transparent py-6'
                }`}
            style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--surface) 80%, transparent)' } : undefined}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative w-9 h-9 rounded-lg bg-[var(--brand)] flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_24px_var(--glow)]">
                        <Shield className="w-5 h-5 text-[#0A1128]" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-heading font-bold text-lg tracking-tight text-heading">
                            AO IT Tech
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] mt-0.5 text-muted-theme">
                            Est. 2009
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none ${location.pathname === link.path
                                    ? 'text-heading'
                                    : 'text-body hover:text-heading'
                                }`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-0 rounded-lg bg-[var(--border-subtle)] border border-subtle"
                                    style={{ zIndex: -1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <div className="w-px h-5 mx-2 bg-[var(--border-subtle)]" />
                    <ThemeToggle />
                    <div className="w-px h-5 mx-2 bg-[var(--border-subtle)]" />
                    <Link to="/contact">
                        <Button className="bg-[var(--brand)] text-[#0A1128] hover:opacity-90 font-heading font-semibold text-sm px-5 hover:shadow-[0_0_24px_var(--glow)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:ring-offset-2">
                            Get Support
                        </Button>
                    </Link>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 -mr-2 rounded-lg text-heading focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none"
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
                        className="md:hidden backdrop-blur-2xl border-t border-subtle overflow-hidden"
                        style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 98%, transparent)', overscrollBehavior: 'contain' }}
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
                            <Link to="/contact">
                                <Button className="w-full bg-[var(--brand)] text-[#0A1128] hover:opacity-90 font-heading font-semibold">
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
