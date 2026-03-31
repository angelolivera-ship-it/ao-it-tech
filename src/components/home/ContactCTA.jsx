import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section className="relative py-32 bg-surface-alt">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
                    className="relative bg-card-theme border border-subtle rounded-3xl p-10 sm:p-16 lg:p-20 overflow-hidden"
                    style={{ boxShadow: 'var(--card-shadow)' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/25 to-transparent" />
                    <div className="relative text-center max-w-2xl mx-auto">
                        <h2 className="mb-6" style={{ textWrap: 'balance' }}>
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">Ready to get your technology</span>
                            <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">sorted?</span>
                        </h2>
                        <p className="text-body text-lg mb-12 font-body">Whether you need a full network overhaul or just help setting up your home WiFi — a free consultation is just a message away.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <Link to="/contact">
                                <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500">
                                    Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <a href="tel:+15551234567">
                                <Button variant="outline" className="border-subtle text-body hover:text-heading hover:border-hover-theme font-heading font-medium text-base px-8 py-6 transition-all duration-300">
                                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />(555) 123-4567
                                </Button>
                            </a>
                        </div>
                        <a href="mailto:contact@aoittech.com" className="inline-flex items-center gap-2 text-muted-theme hover:text-brand text-sm transition-colors duration-300">
                            <Mail className="w-4 h-4" aria-hidden="true" />contact@aoittech.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
