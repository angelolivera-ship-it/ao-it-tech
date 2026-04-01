import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, House, Router, Settings2, Wifi } from 'lucide-react';

const homeServices = [
    { icon: Wifi, title: 'WiFi coverage tuning', detail: 'Eliminate dead zones, stabilize mesh systems, and simplify the way devices connect.' },
    { icon: Router, title: 'Device and printer setup', detail: 'Get household tech talking to each other without the usual setup maze.' },
    { icon: Settings2, title: 'Repairs and troubleshooting', detail: 'Fix what is slow, flaky, disconnected, or misconfigured before it becomes a bigger interruption.' },
];

export default function HomeTech() {
    return (
        <section className="section-frame relative overflow-hidden bg-surface-warm py-28 sm:py-32">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_20%,rgba(0,132,168,0.08),transparent_28%),radial-gradient(circle_at_12%_82%,rgba(185,134,74,0.12),transparent_26%)]" aria-hidden="true" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6"
                    >
                        <div className="rounded-[2.25rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-8 sm:p-10">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-4 py-2">
                                <House className="h-4 w-4 text-copper" aria-hidden="true" />
                                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--prose-muted)]">For homes</span>
                            </div>

                            <h2 className="mt-6 text-balance">
                                <span className="block font-heading text-3xl font-bold text-heading sm:text-4xl">House-call support with</span>
                                <span className="mt-1 block font-display text-4xl italic text-brand sm:text-5xl">a concierge feel.</span>
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--prose)]">
                                Home support should feel calm, efficient, and respectful of your time. From WiFi issues to device setup, the goal is a cleaner experience, clearer explanations, and technology that works the way it should.
                            </p>

                            <div className="mt-8 space-y-3">
                                {homeServices.map((service) => (
                                    <div key={service.title} className="rounded-[1.6rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] px-5 py-5">
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(0,132,168,0.1)] text-brand">
                                                <service.icon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            <div className="font-heading text-lg font-semibold text-heading">{service.title}</div>
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-[var(--prose-muted)]">{service.detail}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                <Link to="/contact">
                                    <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                        Get Home Support
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <div className="rounded-full border border-[var(--panel-light-border)] px-5 py-3 text-sm text-[var(--prose-muted)]">
                                    Same-day visits available when schedules allow
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6"
                    >
                        <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--panel-light-border)]">
                            <img
                                src="/images/home-tech.png"
                                alt="Modern home technology workspace with connected devices"
                                className="h-[26rem] w-full object-cover sm:h-[38rem]"
                                width={960}
                                height={1240}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,17,40,0.72)] via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                                <div className="panel-premium-light rounded-[1.7rem] p-5">
                                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">At-home support</div>
                                    <div className="mt-3 font-heading text-2xl font-semibold text-heading">Clean setup, clear explanation, less friction every day.</div>
                                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--prose)]">
                                        Every visit is handled with the same professionalism as a business engagement, just adapted to the pace and priorities of home technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
