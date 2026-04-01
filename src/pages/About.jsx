import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock3, Eye, Lock, ShieldCheck, Target, Zap } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const operatingStandards = [
    {
        number: '01',
        title: 'Security first',
        description: 'Every project starts with reducing risk, not adding complexity. Firewalls, access, backups, and exposure are considered from the beginning.',
    },
    {
        number: '02',
        title: 'Right-sized decisions',
        description: 'Recommendations are matched to the client, the budget, and the actual problem instead of chasing oversized enterprise patterns.',
    },
    {
        number: '03',
        title: 'Direct accountability',
        description: 'Clients work with someone who knows the environment and can explain both the fix and the reasoning behind it.',
    },
];

const principles = [
    { icon: ShieldCheck, title: 'Security-conscious deployments', desc: 'Systems are designed to stay supportable and resilient, not just functional on day one.' },
    { icon: Clock3, title: 'Urgency where it matters', desc: 'Outages, access issues, and security concerns are handled with clear priorities and fast response.' },
    { icon: Eye, title: 'Transparent communication', desc: 'Clients get plain-language explanations, honest recommendations, and no padded complexity.' },
    { icon: Target, title: 'Practical scope control', desc: 'The goal is the right fix, not the biggest invoice or the most impressive sounding toolset.' },
    { icon: Lock, title: 'Backup and continuity mindset', desc: 'Protection, recovery, and future supportability are treated as part of the job, not extras.' },
    { icon: Zap, title: 'Modernization without hype', desc: 'Agent Ace and automation work is approached as a business tool, not a trend experiment.' },
];

const founderSkills = ['Infrastructure planning', 'Security-first IT', 'Business continuity', 'AI automation strategy'];

export default function About() {
    return (
        <div className="bg-surface">
            <section className="section-frame relative overflow-hidden bg-surface-warm pt-36 pb-20 sm:pt-40 sm:pb-24">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,132,168,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(185,134,74,0.16),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65 }}
                            className="lg:col-span-7"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">About AO IT Tech</div>
                            <h1 className="mt-6 max-w-4xl leading-[0.98]" style={{ textWrap: 'balance' }}>
                                <span className="block font-heading text-5xl font-bold tracking-[-0.04em] text-heading sm:text-6xl lg:text-7xl">Built on accountability,</span>
                                <span className="mt-2 block font-display text-5xl italic text-brand sm:text-6xl lg:text-7xl">not volume support.</span>
                            </h1>
                            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--prose)] sm:text-xl">
                                AO IT Tech was founded to give businesses and homeowners a better option than faceless ticket queues. The approach is straightforward: listen carefully, fix the right thing, and stay accountable after the work is done.
                            </p>

                            <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                {[{ value: '2009', label: 'Founded' }, { value: '15+', label: 'Years in the field' }, { value: 'Central FL', label: 'Service focus' }].map((item) => (
                                    <div key={item.label} className="rounded-[1.75rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-5 py-5">
                                        <div className="font-heading text-3xl font-semibold text-heading"><AnimatedCounter value={item.value} duration={1500} /></div>
                                        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--prose-faint)]">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.08 }}
                            className="lg:col-span-5"
                        >
                            <div className="panel-premium-light overflow-hidden rounded-[2rem] p-4 sm:p-5">
                                <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--panel-light-border)]">
                                    <img
                                        src="/images/angel.png"
                                        alt="Angel Olivera, founder of AO IT Tech"
                                        className="h-[30rem] w-full object-cover object-[center_15%] sm:h-[36rem]"
                                        width={720}
                                        height={960}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-[var(--navy)]/20 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 p-6">
                                        <div className="rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md">
                                            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#7DD3E8]">Angel Olivera</div>
                                            <div className="mt-2 font-heading text-2xl font-semibold text-white">Founder, advisor, and the person clients actually hear from.</div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {founderSkills.map((skill) => (
                                                    <span key={skill} className="rounded-full bg-[var(--navy)] px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-white">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-surface-cream py-24 sm:py-28">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <div className="lg:sticky lg:top-28">
                                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">How the work is approached</div>
                                <h2 className="mt-5 text-balance">
                                    <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">A calm operator</span>
                                    <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">behind the systems.</span>
                                </h2>
                                <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--prose)]">
                                    The value is not only technical knowledge. It is judgment under pressure, cleaner communication, and the kind of continuity that comes from working with someone who knows the environment over time.
                                </p>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-8">
                            <div className="grid gap-4">
                                {operatingStandards.map((item, index) => (
                                    <motion.div
                                        key={item.number}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.55, delay: index * 0.08 }}
                                        className="panel-premium-light rounded-[2rem] p-7 sm:p-8"
                                    >
                                        <div className="grid gap-5 md:grid-cols-[96px_minmax(0,1fr)] md:items-start">
                                            <div className="font-display text-5xl italic leading-none text-copper">{item.number}</div>
                                            <div>
                                                <h3 className="font-heading text-2xl font-semibold text-heading">{item.title}</h3>
                                                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--prose)]">{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-[linear-gradient(180deg,#081120,#0C1730)] py-24 text-white sm:py-28">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,210,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(185,134,74,0.12),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                    >
                        <div>
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4D6B0]">Operating standards</div>
                            <h2 className="mt-5 text-balance">
                                <span className="block font-heading text-3xl font-bold sm:text-4xl">What clients can expect</span>
                                <span className="mt-1 block font-display text-4xl italic text-[#9DDFF0] sm:text-5xl">from every engagement.</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-base leading-relaxed text-white/68 lg:text-right">
                            These are the habits behind the brand: clearer advice, cleaner execution, and support that stays personal as the relationship grows.
                        </p>
                    </motion.div>

                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-[1.25rem] bg-white/[0.06] text-[#9DDFF0]">
                                    <principle.icon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <h3 className="mt-5 font-heading text-xl font-semibold text-white">{principle.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/68">{principle.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, delay: 0.16 }}
                        className="mt-12"
                    >
                        <Link to="/contact">
                            <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                Talk Through Your Setup
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
