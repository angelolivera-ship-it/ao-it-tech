import React from 'react';
import { motion } from 'framer-motion';

const cases = [
    {
        metric: '0 downtime',
        title: 'Weekend server migration',
        client: 'Regional Distribution Co.',
        summary: 'A full server environment migration was completed over a weekend so the team came back Monday without interruption.',
        quote: 'Monday morning, everything just worked.',
    },
    {
        metric: '< 1 hour',
        title: 'After-hours outage recovery',
        client: 'Lakeland Law Group',
        summary: 'A Friday night network failure was triaged and resolved during a deadline-critical window instead of waiting for next-business-day support.',
        quote: 'That is the difference between a real IT partner and a help desk.',
    },
    {
        metric: '60% automated',
        title: 'AI-assisted client response',
        client: 'Winter Haven Wellness',
        summary: 'A custom Agent Ace workflow absorbed routine customer inquiries and improved response speed without increasing headcount.',
        quote: 'Our response times went from hours to seconds.',
    },
];

export default function Testimonials() {
    return (
        <section className="section-frame relative overflow-hidden bg-surface-alt py-28 sm:py-32">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(185,134,74,0.1),transparent_22%),radial-gradient(circle_at_90%_75%,rgba(0,132,168,0.08),transparent_26%)]" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Proof in the field</div>
                        <h2 className="mt-5 text-balance">
                            <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Results framed like</span>
                            <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">real engagements.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-base leading-relaxed text-[var(--prose-muted)] lg:text-right">
                        From outage recovery to automation wins, the strongest proof is specific, measurable, and grounded in what changed for the client.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-4">
                    {cases.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            className={`rounded-[2rem] border p-7 sm:p-8 ${index === 1 ? 'panel-premium-dark text-white' : 'panel-premium-light text-heading'}`}
                        >
                            <div className="grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)_minmax(0,300px)] lg:items-start">
                                <div>
                                    <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${index === 1 ? 'text-white/45' : 'text-copper'}`}>Outcome</div>
                                    <div className={`mt-3 font-heading text-4xl font-semibold ${index === 1 ? 'text-[#F4D6B0]' : 'text-heading'}`}>{item.metric}</div>
                                </div>

                                <div>
                                    <div className={`font-heading text-2xl font-semibold ${index === 1 ? 'text-white' : 'text-heading'}`}>{item.title}</div>
                                    <div className={`mt-2 font-mono text-[11px] uppercase tracking-[0.18em] ${index === 1 ? 'text-[#9DDFF0]' : 'text-brand'}`}>{item.client}</div>
                                    <p className={`mt-4 text-base leading-relaxed ${index === 1 ? 'text-white/72' : 'text-[var(--prose)]'}`}>{item.summary}</p>
                                </div>

                                <div className={`rounded-[1.6rem] border px-5 py-5 ${index === 1
                                    ? 'border-white/10 bg-white/[0.04]'
                                    : 'border-[var(--panel-light-border)] bg-[var(--panel-light-bg)]'
                                    }`}>
                                    <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${index === 1 ? 'text-white/45' : 'text-[var(--prose-faint)]'}`}>Client takeaway</div>
                                    <p className={`mt-3 text-base italic leading-relaxed ${index === 1 ? 'text-white/82' : 'text-[var(--prose)]'}`}>
                                        “{item.quote}”
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
