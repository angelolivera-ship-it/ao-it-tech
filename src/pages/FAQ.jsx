import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const faqs = [
    {
        category: 'General',
        intro: 'Common first-response questions for the issues people ask about most often.',
        questions: [
            {
                q: 'My internet is slow. What should I do first?',
                a: 'Restart the modem and router, then test speeds again. If the issue remains, compare WiFi versus ethernet to isolate whether the problem is coverage, local hardware, or the provider connection. If it is still unclear, the next step is diagnosis rather than guesswork.',
            },
            {
                q: 'I think my computer has a virus. What now?',
                a: 'Disconnect it from the internet, avoid entering passwords, and stop using sensitive accounts from that device. Then have it checked properly. Malware cleanup is most effective when it is handled quickly and followed by stronger protection afterward.',
            },
            {
                q: 'How much does small business IT support usually cost?',
                a: 'Pricing depends on scope, urgency, and whether the work is reactive or ongoing. The fastest way to get a real number is a short review of what is breaking, what needs protection, and how much continuity matters to the business.',
            },
        ],
    },
    {
        category: 'Business IT',
        intro: 'Questions around office infrastructure, support posture, and continuity.',
        questions: [
            {
                q: 'What is the difference between managed IT and break-fix support?',
                a: 'Break-fix means support starts after something fails. Managed IT is more proactive: systems are monitored, updated, and protected to reduce the number and severity of failures in the first place.',
            },
            {
                q: 'Can you help with Microsoft 365, cloud migration, or hybrid work?',
                a: 'Yes. That typically includes planning the move, protecting data, setting up accounts and access, and making sure the result is simpler to support than what was there before.',
            },
            {
                q: 'What if something critical breaks after hours?',
                a: 'Urgent outages and security concerns are treated with priority. The right move is to call directly so the business impact can be assessed quickly and the first stabilizing actions can happen without delay.',
            },
        ],
    },
    {
        category: 'Security',
        intro: 'Questions where response speed and good judgment matter.',
        questions: [
            {
                q: 'My email account was compromised. What should I do right now?',
                a: 'Change the password from a safe device, enable MFA if it is missing, review forwarding rules, and assume related systems may also need checking. After that, the job is containment and review, not just resetting one password and hoping for the best.',
            },
        ],
    },
    {
        category: 'Agent Ace',
        intro: 'Questions about AI and how it fits into real operations.',
        questions: [
            {
                q: 'What is Agent Ace and how can it help my business?',
                a: 'Agent Ace is the AI and automation arm of AO IT Tech. It focuses on practical use cases like inquiry handling, workflow automation, and administrative reduction, with an emphasis on measurable business value instead of hype.',
            },
        ],
    },
    {
        category: 'Working together',
        intro: 'Questions about what it is like to work with AO IT Tech.',
        questions: [
            {
                q: 'Why work with a local specialist instead of a larger provider?',
                a: 'The advantage is direct accountability. You are not routed through layers of support before someone understands the environment. That usually leads to faster diagnosis, better continuity, and less communication drag when something matters.',
            },
        ],
    },
];

function FAQItem({ question, answer, isOpen, onToggle, dark = false }) {
    return (
        <div className={`overflow-hidden rounded-[1.8rem] border transition-colors duration-300 ${dark ? 'border-white/10 bg-white/[0.04]' : 'border-[var(--panel-light-border)] bg-[var(--panel-light-bg)]'}`}>
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none"
                aria-expanded={isOpen}
            >
                <span className={`pr-4 font-heading text-base font-semibold sm:text-lg ${dark ? 'text-white' : 'text-heading'}`}>{question}</span>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[1rem] transition-all duration-300 ${isOpen
                    ? dark ? 'bg-white text-[var(--navy)]' : 'bg-[var(--navy)] text-white'
                    : dark ? 'bg-white/[0.08] text-[#9DDFF0]' : 'bg-[rgba(0,132,168,0.1)] text-brand'
                    }`}>
                    {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-6 pt-0">
                    <p className={`text-sm leading-relaxed sm:text-base ${dark ? 'text-white/68' : 'text-[var(--prose)]'}`}>{answer}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default function FAQ() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (key) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="bg-surface">
            <section className="section-frame relative overflow-hidden bg-surface-warm pt-36 pb-20 sm:pt-40 sm:pb-20">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,132,168,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(185,134,74,0.16),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-4xl">
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">FAQ</div>
                        <h1 className="mt-6 leading-[0.98]" style={{ textWrap: 'balance' }}>
                            <span className="block font-heading text-5xl font-bold tracking-[-0.04em] text-heading sm:text-6xl lg:text-7xl">Common questions.</span>
                            <span className="mt-2 block font-display text-5xl italic text-brand sm:text-6xl lg:text-7xl">Straight answers.</span>
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--prose)] sm:text-xl">
                            These are the issues and decision points clients ask about most. If your situation is more specific, reach out and describe what is happening.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-surface-cream py-20 sm:py-24">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <div className="lg:sticky lg:top-28 rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-7">
                                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Categories</div>
                                <div className="mt-6 space-y-3">
                                    {faqs.map((group) => (
                                        <div key={group.category} className="rounded-[1.4rem] border border-[var(--panel-light-border)] bg-[rgba(255,255,255,0.72)] px-4 py-4">
                                            <div className="font-heading text-lg font-semibold text-heading">{group.category}</div>
                                            <p className="mt-2 text-sm leading-relaxed text-[var(--prose-muted)]">{group.intro}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-8 space-y-6">
                            {faqs.map((group, ci) => {
                                const dark = ci % 2 === 1;
                                return (
                                    <motion.section
                                        key={group.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.5, delay: ci * 0.06 }}
                                        className={`rounded-[2rem] p-6 sm:p-7 ${dark ? 'panel-premium-dark text-white' : 'panel-premium-light text-heading'}`}
                                    >
                                        <div className={`font-mono text-[11px] uppercase tracking-[0.22em] ${dark ? 'text-[#9DDFF0]' : 'text-copper'}`}>{group.category}</div>
                                        <p className={`mt-3 max-w-2xl text-sm leading-relaxed ${dark ? 'text-white/66' : 'text-[var(--prose-muted)]'}`}>{group.intro}</p>
                                        <div className="mt-6 flex flex-col gap-3">
                                            {group.questions.map((faq, qi) => {
                                                const key = `${ci}-${qi}`;
                                                return (
                                                    <FAQItem
                                                        key={key}
                                                        question={faq.q}
                                                        answer={faq.a}
                                                        isOpen={!!openItems[key]}
                                                        onToggle={() => toggleItem(key)}
                                                        dark={dark}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </motion.section>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55 }}
                                className="panel-premium-light rounded-[2.2rem] px-8 py-10 text-center"
                            >
                                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Still unsure?</div>
                                <h2 className="mt-5 text-balance">
                                    <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Some situations need a real</span>
                                    <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">review, not a list.</span>
                                </h2>
                                <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-[var(--prose)]">
                                    Reach out for a free consultation and get advice based on your actual setup, priorities, and timeline.
                                </p>
                                <div className="mt-8">
                                    <Link to="/contact">
                                        <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                            Ask About Your Situation
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
