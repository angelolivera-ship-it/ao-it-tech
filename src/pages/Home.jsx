import React from 'react';
import Hero from '@/components/home/Hero';
import TrustIntro from '@/components/home/TrustIntro';
import ServicesOverview from '@/components/home/ServicesOverview';
import BusinessIT from '@/components/home/BusinessIT';
import HomeTech from '@/components/home/HomeTech';
import Testimonials from '@/components/home/Testimonials';
import AgentAceSection from '@/components/home/AgentAceSection';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <TrustIntro />
            <ServicesOverview />
            <BusinessIT />
            <HomeTech />
            <Testimonials />
            <AgentAceSection />
            <ContactCTA />
        </>
    );
}