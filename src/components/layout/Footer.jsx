import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface-alt border-t border-subtle">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-[var(--brand)] flex items-center justify-center">
                                <Shield className="w-4 h-4 text-[#0A1128]" aria-hidden="true" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-heading font-bold text-lg text-heading">AO IT Tech</span>
                                <span className="text-[9px] text-muted-theme font-mono uppercase tracking-[0.2em]">Est. 2009</span>
                            </div>
                        </div>
                        <p className="text-muted-theme text-sm leading-relaxed max-w-xs font-body">Trusted IT solutions for local businesses and homes. Security-first approach with 15+ years of hands-on experience.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-heading font-semibold text-body mb-5 text-xs uppercase tracking-[0.15em]">Services</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/services" className="text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body">Business IT</Link>
                            <Link to="/services" className="text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body">Home Tech Support</Link>
                            <Link to="/services" className="text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body">Network & Security</Link>
                            <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer" className="text-muted-theme text-sm hover:text-brand transition-colors duration-300 font-body">AI Solutions</a>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-heading font-semibold text-body mb-5 text-xs uppercase tracking-[0.15em]">Company</h4>
                        <div className="flex flex-col gap-3">
                            <Link to="/about" className="text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body">About</Link>
                            <Link to="/contact" className="text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body">Contact</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <h4 className="font-heading font-semibold text-body mb-5 text-xs uppercase tracking-[0.15em]">Get in Touch</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:contact@aoittech.com" className="flex items-center gap-3 text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body group">
                                <Mail className="w-4 h-4 shrink-0 group-hover:text-brand transition-colors" aria-hidden="true" />contact@aoittech.com
                            </a>
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-muted-theme text-sm hover:text-heading transition-colors duration-300 font-body group">
                                <Phone className="w-4 h-4 shrink-0 group-hover:text-brand transition-colors" aria-hidden="true" />(555) 123-4567
                            </a>
                            <div className="flex items-center gap-3 text-muted-theme text-sm font-body">
                                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />Serving Local Businesses & Homes
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-subtle flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-theme text-xs font-body">&copy; {new Date().getFullYear()} AO IT Tech. All rights reserved.</p>
                    <p className="text-muted-theme text-xs font-mono tracking-wide opacity-60">Legacy Support Since 2009</p>
                </div>
            </div>
        </footer>
    );
}
