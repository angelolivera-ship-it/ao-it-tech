import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-end overflow-hidden bg-surface">
            {/* Background image with parallax */}
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                <img
                    src="/images/hero-server.png"
                    alt="Server rack with blue LED lights in a modern data center"
                    className="w-full h-[120%] object-cover"
                    width={1920}
                    height={1080}
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] via-[var(--surface)]/90 to-[var(--surface)]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/40 to-transparent" />
            </motion.div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
                <div className="absolute left-[25%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
            </div>

            {/* Ghost "15" */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none" aria-hidden="true">
                <span className="font-display font-normal text-[45vw] leading-none italic text-heading">15</span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-48 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-12 bg-[var(--brand)]" />
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                                    <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">
                                        15+ Years of Trusted IT Support
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="leading-[1.05] mb-8"
                            style={{ textWrap: 'balance' }}
                        >
                            <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block text-heading">
                                IT infrastructure
                            </span>
                            <span className="font-display italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block mt-1 text-brand">
                                you can rely on.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            className="text-body text-lg sm:text-xl leading-relaxed mb-4 max-w-xl font-body"
                        >
                            From business networks and servers to home WiFi and device setup — security-minded, hands-on technology support done right.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-2 mb-12"
                        >
                            <MapPin className="w-3.5 h-3.5 text-brand shrink-0" aria-hidden="true" />
                            <span className="text-brand text-sm font-mono tracking-wide">Serving Winter Haven, Lakeland &amp; Central Florida</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/contact">
                                <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500">
                                    Secure Your Infrastructure
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="border-subtle text-body hover:text-heading hover:border-hover-theme font-heading font-medium text-base px-8 py-6 transition-all duration-300">
                                    View Services
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="lg:col-span-4 hidden lg:flex flex-col justify-end gap-6"
                    >
                        {[
                            { num: '15', suffix: '+', label: 'Years Experience' },
                            { num: '100', suffix: '%', label: 'Direct Support' },
                            { num: '24/7', suffix: '', label: 'Emergency Response' },
                        ].map((stat) => (
                            <div key={stat.label} className="border-l border-subtle pl-5">
                                <div className="font-heading font-bold text-2xl text-heading">
                                    <AnimatedCounter value={stat.num} suffix={stat.suffix} delay={800} />
                                </div>
                                <div className="text-muted-theme text-sm font-body mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px rule-accent" />
        </section>
    );
}
