import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const features = ['Network design & deployment', 'Server setup & management', 'Security audits & firewall config', 'Remote access & VPN solutions', 'Backup & disaster recovery', 'Business continuity planning'];

export default function BusinessIT() {
    return (
        <section className="relative py-32 bg-surface">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }} className="lg:col-span-5">
                        <div className="relative group">
                            <div className="relative rounded-2xl overflow-hidden border border-subtle">
                                <img src="/images/business-network.png" alt="Organized ethernet network cables in a server patch panel" className="w-full h-80 lg:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]" width={640} height={448} loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-4 left-6 right-6 bg-card-theme backdrop-blur-xl border border-subtle rounded-xl px-5 py-3 flex items-center gap-3" style={{ boxShadow: 'var(--card-shadow)' }}>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-body text-xs font-mono">Enterprise-grade infrastructure</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }} className="lg:col-span-7">
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">For Businesses</span>
                        <h2 className="mt-4 mb-6">
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">IT infrastructure that works</span>
                            <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">as hard as you do</span>
                        </h2>
                        <p className="text-body text-base leading-relaxed mb-10 font-body max-w-lg">Small businesses deserve enterprise-grade IT without the enterprise price tag. AO IT Tech builds and maintains the networks, servers, and security systems that keep your operations running.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                            {features.map(f => (
                                <div key={f} className="flex items-center gap-3 group/item">
                                    <CheckCircle2 className="w-4 h-4 text-[var(--brand)]/60 shrink-0 group-hover/item:text-brand transition-colors" aria-hidden="true" />
                                    <span className="text-body text-sm group-hover/item:text-heading transition-colors">{f}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/contact">
                            <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold hover:shadow-[0_0_24px_var(--glow)] transition-all duration-500">
                                Discuss Your IT Needs <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
