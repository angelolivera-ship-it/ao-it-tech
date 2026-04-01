import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Footer() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <footer className="bg-card-theme border-t border-subtle">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4">
                        <div className="flex items-center mb-4">
                            <img
                                src="/images/logo.png"
                                alt="AO IT Tech"
                                className={`h-32 w-auto shrink-0${isDark ? ' brightness-0 invert' : ''}`}
                            />
                            <p className="text-body text-base leading-relaxed font-body">Trusted IT solutions for local businesses and homes. Security first approach with 15+ years of hands-on experience.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-heading font-semibold text-heading/60 mb-5 text-xs uppercase tracking-[0.15em]">Services</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/services" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">Business IT</Link>
                            <Link to="/services" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">Home Tech Support</Link>
                            <Link to="/services" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">Network & Security</Link>
                            <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer" className="text-body text-sm hover:text-brand transition-colors duration-300 font-body">AI Solutions</a>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-heading font-semibold text-heading/60 mb-5 text-xs uppercase tracking-[0.15em]">Company</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/about" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">About</Link>
                            <Link to="/faq" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">FAQ</Link>
                            <Link to="/contact" className="text-body text-sm hover:text-heading transition-colors duration-300 font-body">Contact</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <h4 className="font-heading font-semibold text-heading/60 mb-5 text-xs uppercase tracking-[0.15em]">Get in Touch</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:contact@aoittech.com" className="flex items-center gap-3 text-body text-sm hover:text-heading transition-colors duration-300 font-body group">
                                <Mail className="w-4 h-4 shrink-0 group-hover:text-brand transition-colors" aria-hidden="true" />contact@aoittech.com
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-body text-sm hover:text-heading transition-colors duration-300 font-body group">
                                <Phone className="w-4 h-4 shrink-0 group-hover:text-brand transition-colors" aria-hidden="true" />(863) 288-0163
                            </a>
                            <div className="flex items-center gap-3 text-body text-sm font-body">
                                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />Winter Haven, Lakeland &amp; Central Florida
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-theme text-xs font-body">&copy; {new Date().getFullYear()} AO IT Tech. All rights reserved.</p>
                    <p className="text-muted-theme text-xs font-mono tracking-wide">Legacy Support Since 2009</p>
                </div>
            </div>
        </footer>
    );
}
