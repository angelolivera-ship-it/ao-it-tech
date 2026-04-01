import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';

const topics = ['Network', 'Security', 'Setup', 'AI', 'Home Tech', 'Other'];

const steps = [
    { number: '01', title: 'Share the issue', detail: 'Explain what is happening, what feels urgent, and whether this is a business or home environment.' },
    { number: '02', title: 'Get a clear next step', detail: 'You will get a practical response, a realistic read on urgency, and a recommendation on what should happen first.' },
    { number: '03', title: 'Schedule the work', detail: 'If it makes sense to move forward, the work is planned around the cleanest path to resolution.' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const nameRef = useRef(null);

    const handleTopicToggle = (topic) => {
        setForm((prev) => ({ ...prev, topic: prev.topic === topic ? '' : topic }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill in your name, email, and message.');
            if (!form.name) nameRef.current?.focus();
            return;
        }

        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-surface min-h-screen">
            <section className="section-frame relative overflow-hidden bg-surface-warm pt-36 pb-20 sm:pt-40 sm:pb-20">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(0,132,168,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(185,134,74,0.16),transparent_24%)]" aria-hidden="true" />

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-4xl">
                        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper">Contact</div>
                        <h1 className="mt-6 leading-[0.98]" style={{ textWrap: 'balance' }}>
                            <span className="block font-heading text-5xl font-bold tracking-[-0.04em] text-heading sm:text-6xl lg:text-7xl">Tell us what is happening.</span>
                            <span className="mt-2 block font-display text-5xl italic text-brand sm:text-6xl lg:text-7xl">Get a clear next step.</span>
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--prose)] sm:text-xl">
                            Whether this is an office outage, a security concern, a home setup problem, or a larger infrastructure project, the first step is simple: reach out and describe what is happening.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-frame relative overflow-hidden bg-surface-cream py-20 sm:py-24">
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5"
                        >
                            <div className="space-y-5">
                                <div className="rounded-[2rem] border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] p-7">
                                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">How the first conversation works</div>
                                    <div className="mt-6 grid gap-5">
                                        {steps.map((step) => (
                                            <div key={step.number} className="grid gap-3 md:grid-cols-[72px_minmax(0,1fr)] md:items-start">
                                                <div className="font-display text-4xl italic leading-none text-copper">{step.number}</div>
                                                <div>
                                                    <div className="font-heading text-xl font-semibold text-heading">{step.title}</div>
                                                    <p className="mt-2 text-sm leading-relaxed text-[var(--prose-muted)]">{step.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="panel-premium-dark rounded-[2rem] p-7 text-white">
                                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9DDFF0]">Direct contact</div>
                                    <div className="mt-5 space-y-4">
                                        <a href="mailto:contact@aoittech.com" className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors duration-300 hover:bg-white/[0.06]">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#9DDFF0]">
                                                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                                            </span>
                                            <span>
                                                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Email</span>
                                                <span className="mt-1 block font-heading text-lg font-semibold text-white">contact@aoittech.com</span>
                                            </span>
                                        </a>

                                        <a href="tel:+15551234567" className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 transition-colors duration-300 hover:bg-white/[0.06]">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#9DDFF0]">
                                                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                                            </span>
                                            <span>
                                                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Phone</span>
                                                <span className="mt-1 block font-heading text-lg font-semibold text-white">(863) 288-0163</span>
                                            </span>
                                        </a>

                                        <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06] text-[#F4D6B0]">
                                                <MapPin className="h-4.5 w-4.5" aria-hidden="true" />
                                            </span>
                                            <span>
                                                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/42">Service area</span>
                                                <span className="mt-1 block font-heading text-lg font-semibold text-white">Winter Haven, Lakeland, Haines City &amp; Central Florida</span>
                                                <span className="mt-1 block text-sm text-white/60">Remote support available when appropriate</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.6, delay: 0.08 }}
                            className="lg:col-span-7"
                        >
                            {submitted ? (
                                <div className="panel-premium-light rounded-[2.2rem] p-10 text-center sm:p-12">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[rgba(0,132,168,0.1)] text-brand">
                                        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                                    </div>
                                    <h3 className="mt-6 font-heading text-3xl font-semibold text-heading">Message sent</h3>
                                    <p className="mt-3 text-base leading-relaxed text-[var(--prose)]">
                                        Thanks for reaching out. Expect a response within one business day. If the issue is time-sensitive, call directly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="panel-premium-light rounded-[2.2rem] p-8 sm:p-10 space-y-7" aria-label="Contact form">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="space-y-2.5">
                                            <Label htmlFor="contact-name" className="text-sm font-body text-[var(--prose-muted)]">Name *</Label>
                                            <Input
                                                id="contact-name"
                                                ref={nameRef}
                                                name="name"
                                                autoComplete="name"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Your name"
                                                className="h-12 rounded-2xl border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-heading placeholder:text-[var(--text-muted)]"
                                            />
                                        </div>
                                        <div className="space-y-2.5">
                                            <Label htmlFor="contact-email" className="text-sm font-body text-[var(--prose-muted)]">Email *</Label>
                                            <Input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                spellCheck={false}
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="you@email.com"
                                                className="h-12 rounded-2xl border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-heading placeholder:text-[var(--text-muted)]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label htmlFor="contact-phone" className="text-sm font-body text-[var(--prose-muted)]">Phone</Label>
                                        <Input
                                            id="contact-phone"
                                            type="tel"
                                            name="phone"
                                            autoComplete="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="(863) 288-0163"
                                            className="h-12 rounded-2xl border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-heading placeholder:text-[var(--text-muted)]"
                                        />
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label className="text-sm font-body text-[var(--prose-muted)]">What do you need help with?</Label>
                                        <div className="flex flex-wrap gap-2" role="group" aria-label="Topic selection">
                                            {topics.map((topic) => (
                                                <button
                                                    key={topic}
                                                    type="button"
                                                    onClick={() => handleTopicToggle(topic)}
                                                    className={`rounded-full px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] transition-all duration-300 ${form.topic === topic
                                                        ? 'bg-[var(--navy)] text-white'
                                                        : 'border border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-[var(--prose-muted)] hover:text-heading'
                                                        }`}
                                                    aria-pressed={form.topic === topic}
                                                >
                                                    {topic}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2.5">
                                        <Label htmlFor="contact-message" className="text-sm font-body text-[var(--prose-muted)]">Message *</Label>
                                        <Textarea
                                            id="contact-message"
                                            name="message"
                                            rows={6}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="What is happening, what feels urgent, and what outcome do you need?"
                                            className="rounded-[1.6rem] border-[var(--panel-light-border)] bg-[var(--panel-light-bg)] text-heading placeholder:text-[var(--text-muted)] resize-none"
                                        />
                                    </div>

                                    <Button type="submit" disabled={loading} className="btn-premium-primary h-14 w-full rounded-full text-sm font-heading font-semibold disabled:opacity-60">
                                        {loading ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
