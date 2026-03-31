import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        category: 'General',
        questions: [
            {
                q: 'My internet is slow — what should I do first?',
                a: 'Start by restarting your modem and router — unplug them for 30 seconds, then plug them back in. If the issue persists, run a speed test (speedtest.net) to see if you\'re getting the speeds your ISP promised. If you\'re on WiFi, try connecting via ethernet to rule out a wireless issue. Still slow? That\'s when it\'s time to call — it could be a congested network, outdated hardware, or an ISP problem. We diagnose it fast and fix it right.',
            },
            {
                q: 'I think my computer has a virus. What do I do?',
                a: 'Disconnect from the internet immediately — this prevents the malware from spreading or sending data out. Don\'t enter any passwords or open banking apps. If you have antivirus software, run a full scan. If not, or if you\'re unsure, call us. We handle virus removal, malware cleanup, and can set up proper endpoint protection so it doesn\'t happen again.',
            },
            {
                q: 'How much does IT support cost for a small business?',
                a: 'It depends on your needs and the complexity of the work. Most IT support runs between $75–200 per hour. We offer flexible options — from full managed IT to on-call support for when things break. Every engagement starts with a free consultation so we can understand your setup and recommend the right fit without overselling.',
            },
            {
                q: 'What\'s the difference between managed IT and break-fix?',
                a: 'Break-fix means you call us when something goes wrong, and we charge per incident. Managed IT is proactive — we monitor your systems, apply updates, manage security, and prevent problems before they happen. Most businesses save money with managed IT because preventing a network outage is always cheaper than recovering from one.',
            },
        ],
    },
    {
        category: 'Services',
        questions: [
            {
                q: 'Can you help us move to Microsoft 365 or the cloud?',
                a: 'Absolutely. Cloud migration is one of our core services. We handle the full process — planning, data migration, email setup, user training, and security configuration. Whether you\'re moving from on-premise Exchange to Microsoft 365, or migrating file servers to SharePoint/OneDrive, we make it seamless with zero data loss and minimal downtime.',
            },
            {
                q: 'Do you support remote and hybrid teams?',
                a: 'Yes — this is a big part of what we do post-2020. We set up secure VPN access, remote desktop solutions, cloud-based collaboration tools, and endpoint protection for remote devices. Your team can work from anywhere without compromising security or productivity.',
            },
            {
                q: 'What if something breaks at 2 AM?',
                a: 'We offer emergency support for critical issues. If your server goes down or you\'re dealing with a security incident outside business hours, call directly — downtime costs money, and we treat it with urgency. Our managed IT clients get priority emergency response.',
            },
        ],
    },
    {
        category: 'Security',
        questions: [
            {
                q: 'My email got hacked — what do I do right now?',
                a: 'Change your password immediately from a different device. Enable multi-factor authentication if it\'s not already on. Check your sent folder and email rules for any forwarding rules the attacker may have set up. Alert your contacts that your account was compromised. Then call us — we\'ll do a full security audit, check for lateral access to other systems, and lock everything down properly.',
            },
        ],
    },
    {
        category: 'AI & Agent Ace',
        questions: [
            {
                q: 'What is Agent Ace and how can AI help my business?',
                a: 'Agent Ace is the AI solutions arm of AO IT Tech. We build practical AI tools for businesses — things like custom AI chatbots that handle customer inquiries 24/7, workflow automations that eliminate repetitive data entry, and AI-powered scheduling assistants. These aren\'t experiments — they\'re tools that save real businesses real time. We\'ve helped companies cut response times by 80% and save 10+ hours per week on routine tasks.',
            },
        ],
    },
    {
        category: 'Working with Us',
        questions: [
            {
                q: 'Why should I hire a local IT person instead of a big company?',
                a: 'With a big company, you get a ticket number. With AO IT Tech, you get Angel — someone who knows your systems, understands your business, and picks up the phone when it matters. There\'s no call center, no rotating technicians, no upselling. Just direct, knowledgeable support from someone invested in keeping your technology running. That personal relationship means faster diagnosis, better solutions, and real accountability.',
            },
        ],
    },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className="border border-subtle rounded-2xl overflow-hidden transition-all duration-300 hover:border-hover-theme">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-6 text-left focus-visible:ring-2 focus-visible:ring-[var(--brand)]/50 focus-visible:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-heading font-semibold text-heading text-base sm:text-lg pr-4">{question}</span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[var(--brand)] rotate-0' : 'bg-[var(--icon-bg)]'}`}>
                    {isOpen
                        ? <Minus className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-brand'}`} aria-hidden="true" />
                        : <Plus className="w-4 h-4 text-brand" aria-hidden="true" />
                    }
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-6 pt-0">
                    <p className="text-body text-sm sm:text-base leading-relaxed font-body">{answer}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default function FAQ() {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (key) => {
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="bg-surface">
            <section className="pt-40 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                        <span className="text-brand text-xs font-mono uppercase tracking-[0.2em]">FAQ</span>
                        <h1 className="mt-4 mb-6">
                            <span className="font-heading font-bold text-4xl sm:text-5xl text-heading block">Common questions,</span>
                            <span className="font-display italic text-5xl sm:text-6xl text-brand block mt-1">straight answers</span>
                        </h1>
                        <p className="text-body text-lg leading-relaxed font-body">Real answers to the questions we hear most. If you don't find what you're looking for, reach out — we're happy to help.</p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-28">
                <div className="max-w-3xl mx-auto px-6">
                    {faqs.map((category, ci) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-[var(--brand)]" />
                                <h2 className="text-brand text-xs font-mono uppercase tracking-[0.2em]">{category.category}</h2>
                            </div>
                            <div className="flex flex-col gap-3">
                                {category.questions.map((faq, qi) => {
                                    const key = `${ci}-${qi}`;
                                    return (
                                        <FAQItem
                                            key={key}
                                            question={faq.q}
                                            answer={faq.a}
                                            isOpen={!!openItems[key]}
                                            onToggle={() => toggleItem(key)}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 text-center bg-card-theme border border-subtle rounded-3xl p-10 sm:p-14"
                        style={{ boxShadow: 'var(--card-shadow)' }}
                    >
                        <h2 className="mb-4">
                            <span className="font-heading font-bold text-2xl sm:text-3xl text-heading block">Still have questions?</span>
                            <span className="font-display italic text-3xl sm:text-4xl text-brand block mt-1">Let's talk.</span>
                        </h2>
                        <p className="text-body text-base mb-8 font-body max-w-md mx-auto">Every situation is different. Reach out for a free consultation and get advice tailored to your specific needs.</p>
                        <Link to="/contact">
                            <Button className="bg-[var(--brand)] text-white hover:opacity-90 font-heading font-semibold text-base px-8 py-6 hover:shadow-[0_0_40px_var(--glow)] transition-all duration-500">
                                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
