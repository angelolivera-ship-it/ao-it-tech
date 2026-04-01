import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';

const features = [
    {
        icon: Bot,
        label: 'AI agents',
        detail: 'Custom assistants for intake, inquiries, scheduling, and repetitive communication that slows teams down.',
    },
    {
        icon: Zap,
        label: 'Workflow automation',
        detail: 'Automations for lead routing, onboarding, reminders, and internal handoffs that remove repeated admin work.',
    },
    {
        icon: Sparkles,
        label: 'Measured rollout',
        detail: 'A practical roadmap for where AI fits, where it does not, and what should be deployed first for actual ROI.',
    },
];

export default function AgentAceSection() {
    return (
        <section className="section-frame relative overflow-hidden bg-[linear-gradient(180deg,#081120,#0C1730)] py-28 text-white sm:py-32">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,210,255,0.14),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(185,134,74,0.14),transparent_24%)]" />
                <div className="absolute right-[-6%] top-1/2 hidden w-[28rem] -translate-y-1/2 opacity-25 lg:block">
                    <img src="/images/ai-sphere.png" alt="" className="w-full h-auto" width={896} height={896} loading="lazy" />
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                            <Sparkles className="h-4 w-4 text-[#F4D6B0]" aria-hidden="true" />
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/68">Powered by Agent Ace</span>
                        </div>

                        <h2 className="mt-6 text-balance">
                            <span className="block font-heading text-3xl font-bold sm:text-4xl">Practical AI systems</span>
                            <span className="mt-1 block font-display text-4xl italic text-[#9DDFF0] sm:text-5xl">for local businesses.</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
                            Agent Ace helps businesses put AI to work in practical ways: faster response handling, less manual admin, and smoother internal workflows without turning the operation into a science project.
                        </p>

                        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4D6B0]">Typical wins</div>
                            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                                <div>
                                    <div className="font-heading text-2xl font-semibold text-white">Faster replies</div>
                                    <div className="mt-1 text-sm text-white/58">Customer-facing automation</div>
                                </div>
                                <div>
                                    <div className="font-heading text-2xl font-semibold text-white">Less admin</div>
                                    <div className="mt-1 text-sm text-white/58">Workflow cleanup</div>
                                </div>
                                <div>
                                    <div className="font-heading text-2xl font-semibold text-white">Clearer ROI</div>
                                    <div className="mt-1 text-sm text-white/58">Measured rollout</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7">
                        <div className="grid gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-7"
                                >
                                    <div className="grid gap-5 md:grid-cols-[72px_minmax(0,1fr)] md:items-start">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-white/[0.06] text-[#9DDFF0]">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">0{index + 1}</div>
                                            <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{feature.label}</h3>
                                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/68">{feature.detail}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: 0.16 }}
                            className="mt-5"
                        >
                            <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer">
                                <Button className="btn-premium-secondary h-14 rounded-full px-8 font-heading">
                                    Learn More at Agent Ace
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
