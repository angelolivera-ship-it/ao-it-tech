import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
    'Audit the current environment and locate the points of failure.',
    'Harden the network, access controls, and backup posture.',
    'Leave the client with a cleaner, more supportable system.',
];

const capabilities = ['Network design', 'Server deployment', 'Firewall configuration', 'VPN and remote access', 'Backup planning', 'Business continuity'];

export default function BusinessIT() {
    return (
        <section className="section-frame relative overflow-hidden py-28 sm:py-32">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/business-network.png"
                    alt="Structured business network cabling and infrastructure"
                    className="h-full w-full object-cover brightness-[0.85]"
                    width={900}
                    height={1120}
                    loading="lazy"
                />
            </div>

            {/* Theme-aware overlay */}
            <div className="absolute inset-0 bg-white/70 dark:bg-transparent" />
            <div className="absolute inset-0 bg-transparent dark:bg-[#0A1128]/85" />

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(0,210,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,134,74,0.06),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,210,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,134,74,0.12),transparent_28%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5"
                    >
                        <div className="panel-premium-light overflow-hidden rounded-[2rem] border border-[var(--panel-light-border)]">
                            <div className="p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-[1.5rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-5">
                                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Priority</div>
                                        <div className="mt-2 text-lg font-heading font-semibold text-heading">Protect uptime</div>
                                    </div>
                                    <div className="rounded-[1.5rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-5">
                                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Client fit</div>
                                        <div className="mt-2 text-lg font-heading font-semibold text-heading">Growing teams</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7"
                    >
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">For businesses</div>
                        <h2 className="mt-5 text-balance">
                            <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Infrastructure that feels</span>
                            <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">quiet, stable, and ready.</span>
                        </h2>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--prose)]">
                            Small businesses need systems they can trust without carrying an internal IT department. AO IT Tech designs, hardens, and supports the infrastructure behind daily operations so teams can stay focused on the work in front of them.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {capabilities.map((capability) => (
                                <div key={capability} className="flex items-center gap-3 rounded-2xl border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-4 py-4">
                                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-brand" aria-hidden="true" />
                                    <span className="text-sm text-[var(--prose)]">{capability}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 panel-premium-light rounded-[2rem] p-6 sm:p-7">
                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Typical engagement</div>
                            <div className="mt-5 grid gap-5 md:grid-cols-3">
                                {steps.map((step, index) => (
                                    <div key={step}>
                                        <div className="font-display text-4xl italic leading-none text-copper">0{index + 1}</div>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--prose)]">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link to="/contact">
                                <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                    Discuss Your IT Needs
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
