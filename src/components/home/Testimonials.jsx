import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Angel migrated our entire server environment over a weekend with zero downtime. Monday morning, everything just worked. That kind of reliability is rare.",
        name: "Marcus T.",
        role: "Operations Manager",
        company: "Regional Distribution Co.",
    },
    {
        quote: "We called at 9pm on a Friday because our network went down during a critical deadline. Angel picked up and had us back online in under an hour. That's the difference between a real IT partner and a help desk.",
        name: "Jennifer R.",
        role: "Office Manager",
        company: "Lakeland Law Group",
    },
    {
        quote: "After getting hit with a ransomware scare, AO IT Tech rebuilt our entire security setup. Firewalls, endpoint protection, backup strategy — everything. We sleep better now knowing our data is actually protected.",
        name: "David K.",
        role: "Small Business Owner",
        company: "Central FL Accounting",
    },
    {
        quote: "The AI chatbot Agent Ace built for us handles 60% of our customer inquiries automatically. It saved us from hiring another full-time employee and our response times went from hours to seconds.",
        name: "Sarah M.",
        role: "Founder",
        company: "Winter Haven Wellness",
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-32 bg-surface-alt overflow-hidden">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            {/* Decorative glow */}
            <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'var(--glow-subtle)' }} aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Testimonials</span>
                        <h2 className="mt-4" style={{ textWrap: 'balance' }}>
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">What our clients </span>
                            <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">have to say</span>
                        </h2>
                    </div>
                    <p className="text-body text-base max-w-md font-body lg:text-right">15+ years of relationships built on reliability, transparency, and results.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-card-theme border border-subtle rounded-2xl p-7 sm:p-8 hover:border-[var(--brand)]/20 transition-all duration-500 hover:-translate-y-1"
                            style={{ boxShadow: 'var(--card-shadow)' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}
                        >
                            <Quote className="w-8 h-8 text-[var(--brand)] opacity-15 mb-4" aria-hidden="true" />
                            <p className="text-body text-sm sm:text-base leading-relaxed font-body mb-6 italic">"{t.quote}"</p>
                            <div className="flex items-center gap-3 pt-5 border-t border-subtle">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white" style={{ background: 'var(--brand)' }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-heading font-semibold text-heading text-sm">{t.name}</div>
                                    <div className="text-muted-theme text-xs font-body">{t.role}, {t.company}</div>
                                </div>
                                <div className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                                    {[...Array(5)].map((_, si) => (
                                        <Star key={si} className="w-3.5 h-3.5 fill-[var(--brand)] text-[var(--brand)]" aria-hidden="true" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
