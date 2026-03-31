import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Shield, Monitor, HardDrive, Wifi, Printer, Mail, Laptop, Router, Lock, Cloud, Settings, Sparkles, Bot, Zap } from 'lucide-react';

const businessServices = [
    { icon: Server, title: 'Network Design & Deployment', desc: 'Full network infrastructure from planning to installation. Structured cabling, switches, routers, and access points configured for performance and reliability.' },
    { icon: HardDrive, title: 'Server Setup & Management', desc: 'On-premises and cloud server deployment, maintenance, and monitoring. File servers, domain controllers, and application hosting.' },
    { icon: Shield, title: 'Security & Firewall Management', desc: 'Comprehensive security audits, firewall configuration, endpoint protection, and threat monitoring to keep your business safe.' },
    { icon: Monitor, title: 'Remote Access Solutions', desc: 'Secure VPN setup, remote desktop configuration, and cloud connectivity so your team can work from anywhere.' },
    { icon: Cloud, title: 'Backup & Disaster Recovery', desc: 'Automated backup systems, offsite replication, and tested recovery plans. Your data is protected against anything.' },
    { icon: Settings, title: 'Office Technology Management', desc: 'Complete office IT management including printers, scanners, phone systems, and software licensing.' },
];
const homeServices = [
    { icon: Wifi, title: 'WiFi Setup & Optimization', desc: 'Eliminate dead zones, optimize coverage, and set up secure home WiFi networks. Mesh systems and range extension.' },
    { icon: Laptop, title: 'Computer Repair & Maintenance', desc: 'Virus removal, performance optimization, hardware upgrades, and data recovery for desktops and laptops.' },
    { icon: Printer, title: 'Printer & Device Setup', desc: 'Installation and configuration of printers, scanners, smart TVs, and other connected devices.' },
    { icon: Mail, title: 'Email & Account Configuration', desc: 'Email setup, data migration, password recovery, and account security configuration.' },
    { icon: Router, title: 'Home Network Security', desc: 'Secure your home network with proper firewall settings, guest networks, and parental controls.' },
    { icon: Lock, title: 'General Troubleshooting', desc: 'Slow computers, connection issues, error messages — whatever the problem, it gets diagnosed and fixed.' },
];
const aiServices = [
    { icon: Bot, title: 'Custom AI Agents', desc: 'Build AI assistants that handle customer inquiries, appointment scheduling, and routine business tasks 24/7.' },
    { icon: Zap, title: 'Workflow Automation', desc: 'Identify and automate repetitive processes with intelligent automation tools that save hours every week.' },
    { icon: Sparkles, title: 'AI Strategy Consulting', desc: 'Not sure where AI fits in your business? AO IT Tech identifies high-impact opportunities and builds a practical roadmap.' },
];

function ServiceGrid({ services }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => (
                <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group relative bg-card-theme border border-subtle rounded-2xl p-7 hover:border-[var(--brand)]/25 transition-all duration-500 hover:-translate-y-1"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}
                >
                    <div className="absolute top-5 right-5 text-[var(--text-muted)] opacity-20 font-display italic text-4xl pointer-events-none" aria-hidden="true">0{i + 1}</div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500" style={{ background: 'var(--icon-bg)' }}>
                        <svc.icon className="w-5 h-5 text-body group-hover:text-brand transition-colors duration-500" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-semibold text-heading text-lg mb-2">{svc.title}</h3>
                    <p className="text-body text-sm leading-relaxed font-body">{svc.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}

function SectionHeader({ label, title, accent, description }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[var(--brand)]" />
                <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">{label}</span>
            </div>
            <h2>
                <span className="font-heading font-bold text-3xl text-heading block">{title}</span>
                {accent && <span className="font-display italic text-4xl text-brand block mt-1">{accent}</span>}
            </h2>
            {description && <p className="text-body max-w-2xl font-body mt-4">{description}</p>}
        </motion.div>
    );
}

export default function Services() {
    return (
        <div className="bg-surface">
            <section className="pt-40 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Services</span>
                        <h1 className="mt-4 mb-6">
                            <span className="font-heading font-bold text-4xl sm:text-5xl text-heading block">Full-spectrum IT services</span>
                            <span className="font-display italic text-5xl sm:text-6xl text-brand block mt-1">for every need</span>
                        </h1>
                        <p className="text-body text-lg leading-relaxed font-body">From enterprise network architecture to home WiFi troubleshooting — and now, AI automation through Agent Ace. One trusted provider for all your technology needs.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-surface-alt">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader label="Business IT" title="Infrastructure & support for" accent="growing businesses" />
                    <ServiceGrid services={businessServices} />
                </div>
            </section>

            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader label="Home Tech" title="Reliable tech support" accent="for your home" />
                    <ServiceGrid services={homeServices} />
                </div>
            </section>

            <section className="py-24 bg-surface-alt">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeader label="Agent Ace — AI Solutions" title="AI-powered tools for" accent="forward-thinking businesses" description="Agent Ace brings practical AI solutions to businesses that want to work smarter. These aren't experiments — they're tools that deliver real value." />
                    <ServiceGrid services={aiServices} />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10">
                        <a href="https://getagentace.com" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-[var(--brand)]/20 text-brand hover:bg-[var(--icon-bg)] font-heading font-medium transition-all duration-300">
                                Explore Agent Ace <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            <section className="py-28 bg-surface">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="mb-6" style={{ textWrap: 'balance' }}>
                        <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">Not sure what you need?</span>
                        <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">Let's talk.</span>
                    </h2>
                    <p className="text-body text-lg mb-12 font-body">Most clients start with a conversation. Describe what's going on and you'll get an honest recommendation. No pressure, no obligation.</p>
                    <Link to="/contact">
                        <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500">
                            Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
