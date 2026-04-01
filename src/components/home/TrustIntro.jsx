import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, MapPinned, ShieldCheck, Wrench } from 'lucide-react';

const principles = [
    {
        number: '01',
        title: 'Assess the real risk first',
        description: 'The first move is always stabilizing the business impact: uptime, access, backups, exposure, and who is blocked right now.',
    },
    {
        number: '02',
        title: 'Fix with long-term clarity',
        description: 'Projects are delivered with sensible architecture, clean handoff, and fewer hidden dependencies waiting to break later.',
    },
    {
        number: '03',
        title: 'Stay reachable after the install',
        description: 'Clients keep working with the same person who knows their environment, not a rotating queue of generic support reps.',
    },
];

const trustSignals = [
    { icon: Clock3, label: '15+ years in the field' },
    { icon: ShieldCheck, label: 'Security-first by default' },
    { icon: Wrench, label: 'Business and home support' },
    { icon: MapPinned, label: 'Local service footprint' },
];

export default function TrustIntro() {
    return (
        <section className="section-frame relative overflow-hidden bg-surface-cream py-28 sm:py-32">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_15%_20%,rgba(185,134,74,0.08),transparent_25%),radial-gradient(circle_at_85%_75%,rgba(0,132,168,0.08),transparent_28%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-8 sm:p-10">
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Why clients stay</div>
                            <h2 className="mt-5 max-w-sm text-balance">
                                <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">High-trust support</span>
                                <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">without the theater.</span>
                            </h2>
                            <p className="mt-6 text-base leading-relaxed text-[var(--prose)]">
                                AO IT Tech is built for clients who want direct access, fast judgment, and work done cleanly. When your systems affect revenue, staff productivity, or day-to-day life, dependable execution matters more than flashy promises.
                            </p>

                            <div className="mt-8 grid gap-3">
                                {trustSignals.map((signal) => (
                                    <div key={signal.label} className="flex items-center gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--panel-light-bg)] px-4 py-3">
                                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(0,132,168,0.1)] text-brand">
                                            <signal.icon className="h-4.5 w-4.5" aria-hidden="true" />
                                        </span>
                                        <span className="text-sm font-medium text-heading">{signal.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-8">
                        <div className="grid gap-4">
                            {principles.map((principle, index) => (
                                <motion.div
                                    key={principle.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className="panel-premium-light rounded-[2rem] p-7 sm:p-8"
                                >
                                    <div className="grid gap-5 md:grid-cols-[96px_minmax(0,1fr)] md:items-start">
                                        <div className="font-display text-5xl italic leading-none text-copper">{principle.number}</div>
                                        <div>
                                            <h3 className="font-heading text-2xl font-semibold text-heading">{principle.title}</h3>
                                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--prose)]">{principle.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="mt-4 rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--navy)] px-7 py-8 text-white sm:px-8"
                        >
                            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
                                <div>
                                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A8DDEC]">Operating style</div>
                                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/78">
                                        Every engagement is handled with a calm specialist mindset: straightforward communication, practical recommendations, and support from someone accountable for the result.
                                    </p>
                                </div>
                                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Service Footprint</div>
                                    <div className="mt-3 space-y-2 text-sm text-white/78">
                                        <div>Winter Haven</div>
                                        <div>Lakeland</div>
                                        <div>Central Florida</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
