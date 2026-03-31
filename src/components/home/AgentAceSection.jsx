import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';

const features = [
    { icon: Bot, title: 'AI Agents', desc: 'Custom AI assistants that handle customer inquiries, appointment scheduling, and routine tasks 24/7. One client cut response times by 80% and handles 60% of inquiries automatically.' },
    { icon: Zap, title: 'Workflow Automation', desc: 'Eliminate repetitive data entry, reporting, and follow-ups. We\'ve helped businesses save 10+ hours per week by automating invoice processing, lead routing, and client onboarding.' },
    { icon: Sparkles, title: 'Practical AI', desc: 'Not sure where AI fits? We identify high-impact opportunities and build a roadmap. No buzzwords — just tools that deliver measurable ROI for your specific business.' },
];

export default function AgentAceSection() {
    return (
        <section className="relative py-32 overflow-hidden bg-surface">
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'var(--glow-subtle)' }} aria-hidden="true" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-[0.08] dark:opacity-15 pointer-events-none hidden lg:block" aria-hidden="true">
                <img src="/images/ai-sphere.png" alt="" className="w-full h-auto" width={640} height={360} loading="lazy" />
            </div>
            <div className="absolute top-0 left-0 right-0 rule-accent" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'var(--icon-bg)' }}>
                            <Sparkles className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                        </div>
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Powered by Agent Ace</span>
                    </div>
                    <h2 className="mb-6">
                        <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">AI solutions for businesses</span>
                        <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">ready to move faster</span>
                    </h2>
                    <p className="text-body text-base leading-relaxed font-body">Agent Ace is the AI solutions arm of AO IT Tech — helping businesses adopt practical artificial intelligence, from custom AI agents to workflow automations that eliminate busywork. No buzzwords. Just tools that work.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {features.map((feat, i) => (
                        <motion.div key={feat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-card-theme border border-subtle rounded-2xl p-7 hover:border-[var(--brand)]/20 transition-all duration-500 hover:-translate-y-1"
                            style={{ boxShadow: 'var(--card-shadow)' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}>
                            <div className="absolute top-5 right-5 text-[var(--text-muted)] opacity-20 font-display italic text-5xl pointer-events-none" aria-hidden="true">0{i + 1}</div>
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500" style={{ background: 'var(--icon-bg)' }}>
                                <feat.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                            </div>
                            <h3 className="font-heading font-semibold text-heading text-lg mb-2">{feat.title}</h3>
                            <p className="text-muted-theme text-sm leading-relaxed font-body">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                    <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-[var(--brand)]/20 text-brand hover:bg-[var(--icon-bg)] font-heading font-medium transition-all duration-300">
                            Learn More at Agent Ace <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
