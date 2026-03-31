import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Wrench, Users } from 'lucide-react';

const stats = [
    { icon: Clock, value: '15+', label: 'Years', desc: 'Hands-on field experience' },
    { icon: ShieldCheck, value: '100%', label: 'Security-First', desc: 'Every engagement, every time' },
    { icon: Wrench, value: 'Full', label: 'Stack IT', desc: 'Business & home coverage' },
    { icon: Users, value: 'Direct', label: 'Access', desc: 'No call centers, no queues' },
];

export default function TrustIntro() {
    return (
        <section className="relative py-32 bg-surface overflow-hidden">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 lg:sticky lg:top-32"
                    >
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Why AO IT Tech</span>
                        <h2 className="mt-4 mb-6" style={{ textWrap: 'balance' }}>
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">Technology support</span>
                            <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">built on trust.</span>
                        </h2>
                        <p className="text-body text-base leading-relaxed font-body max-w-md">
                            AO IT Tech is led by Angel Olivera — an experienced IT specialist with over 15 years helping small businesses and local clients keep their technology running smoothly, securely, and efficiently.
                        </p>
                        <p className="text-body text-base leading-relaxed font-body max-w-md mt-4">
                            No call centers. No ticket queues. Just direct, knowledgeable support from someone who understands your systems.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`group relative bg-card-theme border border-subtle rounded-2xl p-7 hover:border-[var(--brand)]/30 transition-all duration-500 ${i % 2 === 1 ? 'sm:mt-8' : ''}`}
                                    style={{ boxShadow: 'var(--card-shadow)' }}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500" style={{ background: 'var(--icon-bg)' }}>
                                            <stat.icon className="w-4.5 h-4.5 text-brand" aria-hidden="true" />
                                        </div>
                                        <div className="font-heading font-bold text-3xl text-heading tracking-tight">{stat.value}</div>
                                    </div>
                                    <div className="font-heading font-semibold text-heading text-sm uppercase tracking-wider">{stat.label}</div>
                                    <div className="text-muted-theme text-sm mt-1.5 font-body">{stat.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
