import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Server, Wifi, Shield, Monitor, HardDrive, Printer, ArrowRight } from 'lucide-react';

const services = [
    { icon: Server, title: 'Networks & Servers', desc: 'Design, deployment, and maintenance of reliable network infrastructure and server environments.', span: 'sm:col-span-2 lg:col-span-1' },
    { icon: Shield, title: 'Security & Compliance', desc: 'Firewall management, endpoint protection, and security-first IT strategies for your business.', featured: true, span: 'sm:col-span-2 lg:col-span-2 lg:row-span-2' },
    { icon: Monitor, title: 'Remote Access', desc: 'Secure VPN, remote desktop, and cloud connectivity for flexible work.', span: 'sm:col-span-1' },
    { icon: HardDrive, title: 'Business Continuity', desc: 'Backup solutions, disaster recovery, and system redundancy to keep you running.', span: 'sm:col-span-1' },
    { icon: Wifi, title: 'WiFi & Connectivity', desc: 'Enterprise and home WiFi optimization, mesh networking, and troubleshooting.', span: 'sm:col-span-1' },
    { icon: Printer, title: 'Office Technology', desc: 'Printers, scanners, email setup, and device management.', span: 'sm:col-span-1' },
];

export default function ServicesOverview() {
    return (
        <section className="relative py-32 bg-surface-alt">
            <div className="absolute top-0 left-0 right-0 rule-accent" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <div>
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Services</span>
                        <h2 className="mt-4" style={{ textWrap: 'balance' }}>
                            <span className="font-heading font-bold text-3xl sm:text-4xl text-heading">Comprehensive </span>
                            <span className="font-display italic text-4xl sm:text-5xl text-brand">IT services</span>
                        </h2>
                    </div>
                    <p className="text-body text-base max-w-md font-body lg:text-right">From infrastructure architecture to everyday troubleshooting. One trusted provider for all your technology needs.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((svc, i) => (
                        <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
                            className={`group relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${svc.span} ${svc.featured
                                ? 'border border-[var(--brand)]/15 hover:border-[var(--brand)]/30 bg-[var(--icon-bg)]'
                                : 'bg-card-theme border border-subtle hover:border-hover-theme'}`}
                            style={{ boxShadow: 'var(--card-shadow)' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--card-shadow-hover)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--card-shadow)'}
                        >
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500`} style={{ background: svc.featured ? 'var(--icon-bg-hover)' : 'var(--icon-bg)' }}>
                                <svc.icon className={`w-5 h-5 text-brand transition-colors duration-500`} aria-hidden="true" />
                            </div>
                            <h3 className="font-heading font-semibold text-heading text-lg mb-2">{svc.title}</h3>
                            <p className="text-body text-sm leading-relaxed font-body">{svc.desc}</p>
                            {svc.featured && (
                                <div className="mt-6 pt-6 border-t border-subtle">
                                    <p className="text-muted-theme text-xs font-mono uppercase tracking-wider">Most requested service</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 flex justify-center">
                    <Link to="/services">
                        <Button variant="outline" className="border-subtle text-body hover:text-heading hover:border-hover-theme font-heading font-medium transition-all duration-300">
                            Explore All Services
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
