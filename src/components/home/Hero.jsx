import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[#0A1128]">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-server.png"
                    alt="Server rack with blue LED lights in a modern data center"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/85 to-[#0A1128]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/30 to-transparent" />
            </div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.03]" />
                <div className="absolute left-[25%] top-0 bottom-0 w-px bg-white/[0.03]" />
                <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/[0.03]" />
            </div>

            {/* Ghost "15" */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none" aria-hidden="true">
                <span className="font-display font-normal text-[45vw] leading-none text-white italic">15</span>
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
                                <div className="h-px w-12 bg-[#00D2FF]" />
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" aria-hidden="true" />
                                    <span className="text-[#00D2FF] text-xs font-mono uppercase tracking-[0.2em]">
                                        15+ Years of Trusted IT Support
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-white leading-[1.05] mb-8"
                            style={{ textWrap: 'balance' }}
                        >
                            <span className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block">
                                IT infrastructure
                            </span>
                            <span className="font-display italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block mt-1 text-[#00D2FF]">
                                you can rely on.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            className="text-white/45 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl font-body"
                        >
                            From business networks and servers to home WiFi and device setup — security-minded, hands-on technology support done right.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link to="/contact">
                                <Button className="bg-[#00D2FF] text-[#0A1128] hover:bg-[#00D2FF]/90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_rgba(0,210,255,0.35)] transition-all duration-500">
                                    Secure Your Infrastructure
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="border-white/15 text-white hover:bg-white/[0.06] hover:border-white/25 font-heading font-medium text-base px-8 py-6 transition-all duration-300">
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
                            { num: '15+', label: 'Years Experience' },
                            { num: '100%', label: 'Direct Support' },
                            { num: '24/7', label: 'Emergency Response' },
                        ].map((stat) => (
                            <div key={stat.label} className="border-l border-white/10 pl-5">
                                <div className="font-heading font-bold text-2xl text-white">{stat.num}</div>
                                <div className="text-white/30 text-sm font-body mt-0.5">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </section>
    );
}
