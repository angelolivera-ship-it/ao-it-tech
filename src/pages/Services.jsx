import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Cloud, HardDrive, Laptop, Lock, Mail, Monitor, Printer, Router, Server, Settings, Shield, Sparkles, Wifi, Zap } from 'lucide-react';

const businessServices = [
    { icon: Server, title: 'Network design and deployment', desc: 'Structured infrastructure for offices that need stable connectivity, clear segmentation, and room to grow.' },
    { icon: HardDrive, title: 'Server setup and management', desc: 'On-prem and hybrid systems configured to stay reliable, recoverable, and easier to support.' },
    { icon: Shield, title: 'Security and firewall management', desc: 'Firewall hardening, endpoint protection, access controls, and the discipline to reduce avoidable exposure.' },
    { icon: Monitor, title: 'Remote access and hybrid work', desc: 'VPNs, remote desktop, and secure connectivity so teams can work from wherever the business needs them.' },
    { icon: Cloud, title: 'Backup and disaster recovery', desc: 'Recovery planning that assumes something eventually goes wrong and prepares for it ahead of time.' },
    { icon: Settings, title: 'Office technology management', desc: 'Support for the devices and systems that slow teams down when they are ignored.' },
];

const homeServices = [
    { icon: Wifi, title: 'WiFi setup and optimization', desc: 'Coverage tuning, mesh systems, and simpler connectivity throughout the home.' },
    { icon: Laptop, title: 'Computer repair and maintenance', desc: 'Performance cleanup, troubleshooting, upgrades, and help with systems that feel unreliable.' },
    { icon: Printer, title: 'Printer and device setup', desc: 'Connected devices configured correctly so they stop turning into repeat problems.' },
    { icon: Mail, title: 'Email and account setup', desc: 'Account recovery, migration, and safer configuration for everyday use.' },
    { icon: Router, title: 'Home network security', desc: 'Safer router setups, guest networks, and sensible controls for connected households.' },
    { icon: Lock, title: 'General troubleshooting', desc: 'When the issue is unclear, the work starts with diagnosis and ends with a real fix.' },
];

const aiServices = [
    { icon: Bot, title: 'Custom AI agents', desc: 'Assistants for inquiry handling, scheduling, intake, and the repetitive communication that drags teams down.' },
    { icon: Zap, title: 'Workflow automation', desc: 'Automation for follow-up, routing, reporting, and admin-heavy tasks that eat up time.' },
    { icon: Sparkles, title: 'AI strategy consulting', desc: 'A practical rollout plan for where AI fits, what to automate first, and what should stay manual.' },
];

function ServiceCard({ service, theme = 'light' }) {
    return (
        <div className={`rounded-[1.8rem] border p-6 ${theme === 'dark' ? 'border-white/10 bg-white/[0.04]' : 'border-[var(--panel-light-border)] bg-[var(--panel-light-bg)]'}`}>
            <div className={`flex h-12 w-12 items-center justify-center rounded-[1.25rem] ${theme === 'dark' ? 'bg-white/[0.06] text-[#9DDFF0]' : 'bg-[rgba(0,132,168,0.1)] text-brand'}`}>
                <service.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className={`mt-5 font-heading text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-heading'}`}>{service.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${theme === 'dark' ? 'text-white/68' : 'text-[var(--prose-muted)]'}`}>{service.desc}</p>
        </div>
    );
}

export default function Services() {
    return (
        <div className="bg-surface">
            <section className="section-frame relative overflow-hidden bg-surface-warm pt-36 pb-20 sm:pt-40 sm:pb-24">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,132,168,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(185,134,74,0.16),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-4xl">
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Services</div>
                        <h1 className="mt-6 leading-[0.98]" style={{ textWrap: 'balance' }}>
                            <span className="block font-heading text-5xl font-bold tracking-[-0.04em] text-heading sm:text-6xl lg:text-7xl">Support designed around</span>
                            <span className="mt-2 block font-display text-5xl italic text-brand sm:text-6xl lg:text-7xl">real operating needs.</span>
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--prose)] sm:text-xl">
                            AO IT Tech supports businesses, homes, and modern automation needs without turning the work into jargon. The focus is cleaner systems, stronger security, and recommendations that stay practical.
                        </p>
                    </motion.div>
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
                                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Business IT</div>
                                <h2 className="mt-5 text-balance">
                                    <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Infrastructure support for</span>
                                    <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">growing operations.</span>
                                </h2>
                                <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--prose)]">
                                    For offices that need systems to stay stable, secure, and recoverable without carrying the cost of a full internal IT department.
                                </p>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {businessServices.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                    >
                                        <ServiceCard service={service} />
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
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#F4D6B0]">Home Tech</div>
                            <h2 className="mt-5 text-balance">
                                <span className="block font-heading text-3xl font-bold sm:text-4xl">House-call support with</span>
                                <span className="mt-1 block font-display text-4xl italic text-[#9DDFF0] sm:text-5xl">clarity and follow-through.</span>
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-white/68">
                                Home technology help should feel organized and respectful of your time, not improvised. The goal is fewer recurring issues and less friction in everyday use.
                            </p>
                            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
                                <img
                                    src="/images/home-tech.png"
                                    alt="Home technology support environment"
                                    className="h-[18rem] w-full object-cover"
                                    width={960}
                                    height={720}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>

                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {homeServices.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                    >
                                        <ServiceCard service={service} theme="dark" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-surface py-24 sm:py-28">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,132,168,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(185,134,74,0.1),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Agent Ace</div>
                            <h2 className="mt-5 text-balance">
                                <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">AI and automation</span>
                                <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">without the hype cycle.</span>
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--prose)]">
                                For businesses that want practical wins from automation, faster responses, and workflow cleanup instead of another shiny experiment.
                            </p>
                        </motion.div>

                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {aiServices.map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-80px' }}
                                        transition={{ duration: 0.5, delay: index * 0.06 }}
                                    >
                                        <ServiceCard service={service} />
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55, delay: 0.14 }}
                                className="mt-8"
                            >
                                <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer">
                                    <Button className="btn-premium-secondary h-14 rounded-full px-8 font-heading">
                                        Explore Agent Ace
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-surface-cream py-24 sm:py-28">
                <div className="relative max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="panel-premium-light rounded-[2.3rem] px-8 py-10 text-center sm:px-12"
                    >
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Need help deciding?</div>
                        <h2 className="mt-5 text-balance">
                            <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Most engagements start with</span>
                            <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">a quick review.</span>
                        </h2>
                        <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-[var(--prose)]">
                            Describe the issue, the urgency, and the outcome you need. You will get a straightforward recommendation, not a padded proposal.
                        </p>
                        <div className="mt-8">
                            <Link to="/contact">
                                <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                    Request a Recommendation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
