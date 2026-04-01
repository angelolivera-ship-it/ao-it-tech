import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const contactOptions = [
    { label: 'Call', value: '(863) 288-0163', href: 'tel:+15551234567', icon: Phone },
    { label: 'Email', value: 'contact@aoittech.com', href: 'mailto:contact@aoittech.com', icon: Mail },
];

export default function ContactCTA() {
    return (
        <section className="section-frame relative overflow-hidden bg-surface-cream py-28 sm:py-32">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(185,134,74,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,132,168,0.08),transparent_26%)]" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="panel-premium-light rounded-[2.4rem] p-8 sm:p-10 lg:p-12"
                >
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
                        <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Next step</div>
                            <h2 className="mt-5 text-balance">
                                <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Ready to bring more order</span>
                                <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">to your technology?</span>
                            </h2>
                            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--prose)]">
                                Whether you need infrastructure help, security improvements, or a fix for a stubborn issue at home, the next step is simple: explain what is happening and get a clear recommendation.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Link to="/contact">
                                    <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                        Request a Consultation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <div className="rounded-full border border-[var(--panel-light-border)] px-5 py-3 text-sm text-[var(--prose-muted)]">
                                    Free initial consultation for business and home support
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-6">
                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Direct contact</div>
                            <div className="mt-5 space-y-3">
                                {contactOptions.map((option) => (
                                    <a
                                        key={option.label}
                                        href={option.href}
                                        className="flex items-center gap-4 rounded-[1.4rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-4 py-4 transition-colors duration-300 hover:bg-white"
                                    >
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(0,132,168,0.1)] text-brand">
                                            <option.icon className="h-4.5 w-4.5" aria-hidden="true" />
                                        </span>
                                        <span>
                                            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--prose-faint)]">{option.label}</span>
                                            <span className="mt-1 block font-heading text-lg font-semibold text-heading">{option.value}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
