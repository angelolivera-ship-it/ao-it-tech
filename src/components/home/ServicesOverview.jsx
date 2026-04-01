import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const outcomes = [
    {
        number: '01',
        title: 'Keep the office operational',
        description: 'Networks, servers, VPNs, shared devices, and the infrastructure details that quietly keep a workday moving.',
        services: 'Network architecture, server management, remote access, office systems',
    },
    {
        number: '02',
        title: 'Reduce security exposure',
        description: 'Security is built into deployments from the start instead of treated like an add-on after a scare or outage.',
        services: 'Firewall hardening, endpoint protection, backups, risk reduction',
    },
    {
        number: '03',
        title: 'Fix the broken experience at home',
        description: 'WiFi dead zones, stubborn devices, printer headaches, and setups that should have been simple in the first place.',
        services: 'Home WiFi, device setup, printers, troubleshooting visits',
    },
];

export default function ServicesOverview() {
    return (
        <section className="section-frame relative overflow-hidden bg-surface py-28 sm:py-32">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(0,132,168,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(185,134,74,0.08),transparent_26%)]" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="lg:sticky lg:top-28">
                            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">What gets solved</div>
                            <h2 className="mt-5 text-balance">
                                <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">Services framed by</span>
                                <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">business outcomes.</span>
                            </h2>
                            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--prose)]">
                                Whether the issue is security exposure, unstable connectivity, or a home setup that never quite works right, the goal stays the same: reduce friction, restore order, and keep people moving.
                            </p>

                            <div className="mt-8 rounded-[2rem] border border-[var(--panel-light-border)] bg-surface-warm p-6">
                                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Most requested mix</div>
                                <div className="mt-4 text-2xl font-heading font-semibold text-heading">Security + uptime + local support</div>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--prose-muted)]">
                                    Clients usually need a mix of prevention and responsiveness: stronger security, more stable systems, and one trusted person who can get involved quickly when something goes wrong.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-8">
                        <div className="grid gap-4">
                            {outcomes.map((outcome, index) => (
                                <motion.div
                                    key={outcome.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className={`rounded-[2rem] border p-7 sm:p-8 ${index === 1
                                        ? 'panel-premium-dark text-white'
                                        : 'panel-premium-light text-heading'
                                        }`}
                                >
                                    <div className="grid gap-6 md:grid-cols-[96px_minmax(0,1fr)] md:items-start">
                                        <div className={`font-display text-5xl italic leading-none ${index === 1 ? 'text-[#F4D6B0]' : 'text-copper'}`}>{outcome.number}</div>
                                        <div>
                                            <div className={`font-mono text-[10px] uppercase tracking-[0.18em] ${index === 1 ? 'text-[#A8DDEC]' : 'text-brand'}`}>Outcome</div>
                                            <h3 className="mt-3 font-heading text-2xl font-semibold">{outcome.title}</h3>
                                            <p className={`mt-4 max-w-2xl text-base leading-relaxed ${index === 1 ? 'text-white/74' : 'text-[var(--prose)]'}`}>{outcome.description}</p>
                                            <div className={`mt-5 inline-flex rounded-full border px-4 py-2 text-[11px] font-mono uppercase tracking-[0.18em] ${index === 1
                                                ? 'border-white/12 bg-white/[0.04] text-white/60'
                                                : 'border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-[var(--prose-muted)]'
                                                }`}>
                                                {outcome.services}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.55, delay: 0.18 }}
                            className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-6 py-5"
                        >
                            <div>
                                <div className="font-heading text-xl font-semibold text-heading">Need the full service list?</div>
                                <div className="mt-1 text-sm text-[var(--prose-muted)]">Browse every support category and project type.</div>
                            </div>
                            <Link to="/services">
                                <Button className="btn-premium-secondary rounded-full px-6 font-heading">
                                    Explore All Services
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
