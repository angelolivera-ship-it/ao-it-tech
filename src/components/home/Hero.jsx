import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Shield, Clock, User } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const proofPoints = [
    { icon: User, label: 'Direct Support', desc: 'Work directly with Angel — not a rotating help desk or ticket queue.' },
    { icon: Shield, label: 'Security-First', desc: 'Firewalls, backups, endpoint protection, and proactive risk reduction from day one.' },
    { icon: Clock, label: '15+ Years', desc: 'Experienced field work across business networks, servers, and home environments.' },
    { icon: MapPin, label: 'Central Florida', desc: 'Winter Haven, Lakeland, Haines City, and surrounding areas.' },
];

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

    return (
        <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col overflow-hidden">
            {/* Full-bleed background image with parallax */}
            <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
                <img
                    src="/images/hero-server.png"
                    alt="Server rack with blue LED lighting in a modern data center"
                    className="h-[115%] w-full object-cover brightness-[0.85]"
                    width={1920}
                    height={1080}
                    fetchpriority="high"
                />
            </motion.div>

            {/* Theme-aware overlay */}
            <div className="absolute inset-0 bg-white/60 dark:bg-transparent" />
            <div className="absolute inset-0 bg-transparent dark:bg-[#0A1128]/80" />

            {/* Ghost "15" watermark */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
                <span className="font-display font-normal text-[45vw] leading-none italic text-heading">15</span>
            </div>

            {/* Ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-[15%] left-[5%] w-[40rem] h-[40rem] rounded-full bg-[rgba(0,132,168,0.08)] dark:bg-[rgba(0,132,168,0.12)] blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-[rgba(185,134,74,0.06)] dark:bg-[rgba(185,134,74,0.08)] blur-[100px]" />
            </div>

            {/* Decorative vertical rules */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
                <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 pb-6 pt-40 sm:pb-8 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                    {/* Left column — branding + copy */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="/images/logo.png"
                                alt="AO IT Tech"
                                className="h-56 w-auto -mb-8 sm:h-72 sm:-mb-12 lg:h-96 lg:-mb-16 dark:brightness-0 dark:invert"
                            />
                            <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] backdrop-blur-md px-4 py-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--prose-muted)]">Accepting new clients in Central Florida</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-7 leading-[0.95]"
                            style={{ textWrap: 'balance' }}
                        >
                            <span className="block font-heading text-[clamp(2.4rem,6vw,4.8rem)] font-bold tracking-[-0.04em] text-heading">
                                IT infrastructure
                            </span>
                            <span className="block font-display text-[clamp(2.8rem,7vw,5.4rem)] italic text-brand">
                                you can rely on.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--prose)] sm:text-lg"
                        >
                            Direct, security-minded technology support for Central Florida businesses and homes. No ticket queues, no handoffs — just experienced field work from someone who knows your systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.32 }}
                            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
                        >
                            <Link to="/contact">
                                <Button className="btn-premium-primary h-14 rounded-full px-8 text-sm font-heading font-semibold">
                                    Request a Consultation
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/services" className="btn-premium-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-heading font-medium transition-all duration-300">
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column — premium proof card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="panel-premium-light rounded-[2rem] p-6 backdrop-blur-xl">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper mb-5">Why clients choose AO IT Tech</div>
                            <div className="space-y-4">
                                {proofPoints.map((point, i) => (
                                    <div key={point.label} className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(0,132,168,0.1)] dark:bg-[rgba(0,210,255,0.08)] text-brand">
                                            <point.icon className="h-4.5 w-4.5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <div className="font-heading text-sm font-semibold text-heading">{point.label}</div>
                                            <p className="mt-1 text-[13px] leading-relaxed text-[var(--prose-muted)]">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
                                <div className="flex items-center justify-between">
                                    <span className="text-[13px] text-[var(--prose-muted)]">Free initial consultation</span>
                                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">Since 2009</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,210,255,0.2)] to-transparent" />
        </section>
    );
}
