import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Clock, Eye, Zap, Target, Lock } from 'lucide-react';

const standards = [
    { icon: ShieldCheck, title: 'Security-First Deployment', desc: 'Every solution starts with security. Firewall configuration to endpoint protection — your data is always the priority.' },
    { icon: Clock, title: 'Zero-Downtime Mentality', desc: 'Your business can\'t afford to stop. Every system is planned, built, and maintained with uptime as the non-negotiable standard.' },
    { icon: Eye, title: 'Full Transparency', desc: 'No hidden fees, no confusing invoices. You\'ll always know exactly what\'s being done and why.' },
    { icon: Target, title: 'Right-Sized Solutions', desc: 'No overselling. Solutions are matched to your actual needs and budget.' },
    { icon: Lock, title: 'Data Integrity & Backup', desc: 'Comprehensive backup strategies and disaster recovery so your critical data is always protected.' },
    { icon: Zap, title: 'Responsive Support', desc: 'When something breaks, time matters. Fast, direct support — no phone trees, no waiting.' },
];

const founderSkills = ['Network Infrastructure', 'Security-First IT', 'AI Integration & Automation', 'Business Continuity'];

export default function About() {
    return (
        <div className="bg-surface">
            <section className="pt-40 pb-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">About AO IT Tech</span>
                        <h1 className="mt-4 mb-6">
                            <span className="font-heading font-bold text-4xl sm:text-5xl text-heading block">15 years of doing IT</span>
                            <span className="font-display italic text-5xl sm:text-6xl text-brand block mt-1">the right way</span>
                        </h1>
                        <p className="text-body text-lg leading-relaxed font-body max-w-2xl">I founded AO IT Tech with a straightforward mission: deliver reliable, security-conscious technology support to small businesses and local clients who deserve better than generic call-center help.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-surface-alt">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-5">
                            <div className="relative group">
                                <div className="relative rounded-2xl overflow-hidden border border-subtle" style={{ boxShadow: 'var(--card-shadow)' }}>
                                    <img src="/images/angel.png" alt="Angel Olivera, founder of AO IT Tech" className="w-full h-[32rem] object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-[1.02]" width={480} height={512} loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-7">
                                        <h3 className="font-heading font-bold text-2xl text-white">Angel Olivera</h3>
                                        <p className="text-[#00D2FF] text-xs font-mono uppercase tracking-[0.15em] mt-1.5">Founder — AO IT Tech</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {founderSkills.map(skill => (
                                                <span key={skill} className="text-white/60 text-xs font-mono bg-white/[0.08] border border-white/[0.1] rounded-full px-3 py-1">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -inset-4 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'var(--glow-subtle)' }} />
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-7 lg:pt-4">
                            <h2 className="mb-8">
                                <span className="font-heading font-bold text-3xl text-heading block">Built on real experience,</span>
                                <span className="font-display italic text-4xl text-brand block mt-1">not certifications on a wall</span>
                            </h2>
                            <div className="space-y-5 text-body text-base leading-relaxed font-body">
                                <p>With over 15 years in the field, I've worked with businesses of every size — from single-person offices to growing companies with complex network needs. That experience means faster diagnosis, better solutions, and less guesswork.</p>
                                <p>What sets AO IT Tech apart is the approach: every client gets direct access to me, not a rotating cast of technicians. You get someone who knows your systems, understands your business, and is invested in keeping things running.</p>
                                <p>Beyond traditional IT, I also lead Agent Ace — an AI solutions initiative that helps forward-thinking businesses adopt practical AI tools like chatbots, workflow automation, and custom AI agents. Because the best IT partner doesn't just maintain your systems — they help you evolve.</p>
                            </div>
                            <div className="mt-10 pt-8 border-t border-subtle grid grid-cols-3 gap-6">
                                {[{ value: '2009', label: 'Founded' }, { value: '15+', label: 'Years Active' }, { value: 'AI', label: 'Agent Ace Launch' }].map(item => (
                                    <div key={item.label}>
                                        <div className="font-heading font-bold text-xl text-heading">{item.value}</div>
                                        <div className="text-muted-theme text-xs font-mono uppercase tracking-wider mt-1">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-28 bg-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                        <div>
                            <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">The Standard</span>
                            <h2 className="mt-4">
                                <span className="font-heading font-bold text-3xl sm:text-4xl text-heading block">The AO IT Tech</span>
                                <span className="font-display italic text-4xl sm:text-5xl text-brand block mt-1">standards</span>
                            </h2>
                        </div>
                        <p className="text-muted-theme text-base max-w-md font-body lg:text-right">Not just what gets done, but how it gets done. These principles guide every engagement.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {standards.map((std, i) => (
                            <motion.div key={std.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="group relative bg-card-theme border border-subtle rounded-2xl p-7 hover:border-[var(--brand)]/25 transition-all duration-500 hover:-translate-y-1"
                                style={{ boxShadow: 'var(--card-shadow)' }}
                                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                                onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}
                            >
                                <div className="absolute top-5 right-5 text-[var(--text-muted)] opacity-20 font-display italic text-4xl pointer-events-none" aria-hidden="true">0{i + 1}</div>
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500" style={{ background: 'var(--icon-bg)' }}>
                                    <std.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                                </div>
                                <h3 className="font-heading font-semibold text-heading text-lg mb-2">{std.title}</h3>
                                <p className="text-body text-sm leading-relaxed font-body">{std.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-16">
                        <Link to="/contact">
                            <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500">
                                Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
