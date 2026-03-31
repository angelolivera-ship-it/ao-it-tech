import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const topics = ['Network', 'Security', 'Setup', 'AI', 'Home Tech', 'Other'];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const nameRef = useRef(null);

    const handleTopicToggle = (topic) => {
        setForm(prev => ({ ...prev, topic: prev.topic === topic ? '' : topic }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill in your name, email, and message.');
            if (!form.name) nameRef.current?.focus();
            return;
        }
        setLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-surface min-h-screen">
            <section className="pt-40 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">Get in Touch</span>
                        <h1 className="mt-4 mb-6">
                            <span className="font-heading font-bold text-4xl sm:text-5xl text-heading block">Let's solve your</span>
                            <span className="font-display italic text-5xl sm:text-6xl text-brand block mt-1">tech challenges</span>
                        </h1>
                        <p className="text-body text-lg leading-relaxed font-body">Whether you're dealing with a network outage or planning a full IT overhaul, reach out. You'll hear back quickly with honest advice and a clear plan.</p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-28">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
                            {submitted ? (
                                <div className="bg-card-theme border border-[var(--brand)]/15 rounded-2xl p-12 text-center" style={{ boxShadow: 'var(--card-shadow)' }}>
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--icon-bg)' }}>
                                        <CheckCircle2 className="w-8 h-8 text-brand" aria-hidden="true" />
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-heading mb-3">Message sent</h3>
                                    <p className="text-body font-body">Thanks for reaching out. Expect a response within one business day.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-card-theme border border-subtle rounded-2xl p-8 sm:p-10 space-y-7" style={{ boxShadow: 'var(--card-shadow)' }} aria-label="Contact form">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="contact-name" className="text-body text-sm font-body">Name *</Label>
                                            <Input id="contact-name" ref={nameRef} name="name" autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name..." className="bg-[var(--surface-alt)] border-subtle text-heading placeholder:text-muted-theme focus:border-[var(--brand)]/50 focus-visible:ring-[var(--brand)]/20 transition-colors duration-300" />
                                        </div>
                                        <div className="space-y-2.5">
                                            <Label htmlFor="contact-email" className="text-body text-sm font-body">Email *</Label>
                                            <Input id="contact-email" type="email" name="email" autoComplete="email" spellCheck={false} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com..." className="bg-[var(--surface-alt)] border-subtle text-heading placeholder:text-muted-theme focus:border-[var(--brand)]/50 focus-visible:ring-[var(--brand)]/20 transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="contact-phone" className="text-body text-sm font-body">Phone (optional)</Label>
                                        <Input id="contact-phone" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(555) 123-4567..." className="bg-[var(--surface-alt)] border-subtle text-heading placeholder:text-muted-theme focus:border-[var(--brand)]/50 focus-visible:ring-[var(--brand)]/20 transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label className="text-body text-sm font-body">What do you need help with?</Label>
                                        <div className="flex flex-wrap gap-2" role="group" aria-label="Topic selection">
                                            {topics.map(topic => (
                                                <button key={topic} type="button" onClick={() => handleTopicToggle(topic)}
                                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none ${form.topic === topic
                                                        ? 'bg-[var(--brand)] text-white shadow-[0_0_16px_var(--glow-subtle)]'
                                                        : 'bg-[var(--surface-alt)] text-body border border-subtle hover:border-hover-theme hover:text-heading'}`}
                                                    aria-pressed={form.topic === topic}>{topic}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-2.5">
                                        <Label htmlFor="contact-message" className="text-body text-sm font-body">Message *</Label>
                                        <Textarea id="contact-message" name="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Describe what's going on with your technology..." rows={5} className="bg-[var(--surface-alt)] border-subtle text-heading placeholder:text-muted-theme focus:border-[var(--brand)]/50 focus-visible:ring-[var(--brand)]/20 resize-none transition-colors duration-300" />
                                    </div>
                                    <Button type="submit" disabled={loading} className="w-full bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500 disabled:opacity-60">
                                        {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4 ml-2" aria-hidden="true" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5 space-y-6">
                            <div className="bg-card-theme border border-subtle rounded-2xl p-8" style={{ boxShadow: 'var(--card-shadow)' }}>
                                <h3 className="font-heading font-semibold text-heading text-lg mb-6">Contact details</h3>
                                <div className="space-y-5">
                                    <a href="mailto:contact@aoittech.com" className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300" style={{ background: 'var(--icon-bg)' }}>
                                            <Mail className="w-4 h-4 text-brand" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-muted-theme text-xs font-mono uppercase tracking-wider">Email</p>
                                            <p className="text-heading group-hover:text-brand transition-colors duration-300 mt-1 text-sm">contact@aoittech.com</p>
                                        </div>
                                    </a>
                                    <a href="tel:+15551234567" className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300" style={{ background: 'var(--icon-bg)' }}>
                                            <Phone className="w-4 h-4 text-brand" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-muted-theme text-xs font-mono uppercase tracking-wider">Phone</p>
                                            <p className="text-heading group-hover:text-brand transition-colors duration-300 mt-1 text-sm">(555) 123-4567</p>
                                        </div>
                                    </a>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--icon-bg)' }}>
                                            <MapPin className="w-4 h-4 text-brand" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-muted-theme text-xs font-mono uppercase tracking-wider">Service Area</p>
                                            <p className="text-heading mt-1 text-sm">Local & Remote Support Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card-theme border border-subtle rounded-2xl p-7" style={{ boxShadow: 'var(--card-shadow)' }}>
                                <h4 className="font-heading font-semibold text-heading mb-3 text-sm">Response time</h4>
                                <p className="text-body text-sm leading-relaxed font-body">Typical response time is a few hours during business days. For urgent issues, call directly — downtime costs money, and that's understood here.</p>
                            </div>
                            <div className="bg-card-theme border border-subtle rounded-2xl p-7" style={{ boxShadow: 'var(--card-shadow)' }}>
                                <h4 className="font-heading font-semibold text-heading mb-3 text-sm">Free consultation</h4>
                                <p className="text-body text-sm leading-relaxed font-body">Not sure what you need? AO IT Tech offers a free initial consultation to understand your situation and recommend the right approach — no strings attached.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
