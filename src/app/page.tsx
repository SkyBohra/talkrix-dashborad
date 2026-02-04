"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, ChevronRight, Mic, Brain, Zap, Globe, Shield, Clock, Users, Phone, Code, Cpu, Headphones, MessageSquare, ArrowRight, Check, Linkedin, Twitter, TrendingUp, Target, Rocket, Menu, X } from "lucide-react";
import Image from "next/image";

// Responsive breakpoints
const useResponsive = () => {
    const [screen, setScreen] = useState({ isMobile: false, isTablet: false, isDesktop: true });
    
    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setScreen({
                isMobile: width < 768,
                isTablet: width >= 768 && width < 1024,
                isDesktop: width >= 1024
            });
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);
    
    return screen;
};

// JSON-LD Structured Data for SEO
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Talkrix",
    url: "https://talkrix.com",
    logo: "https://talkrix.com/icon.svg",
    description: "Talkrix is the AI sales operations platform for Loan & Real Estate. AI calling, WhatsApp automation, and CRM integration that helps DSAs, Loan Agencies, and NBFC sales teams convert more leads and recover more revenue.",
    foundingDate: "2024",
    sameAs: [
        "https://twitter.com/talkrix",
        "https://linkedin.com/company/talkrix"
    ],
    offers: [
        {
            "@type": "Offer",
            name: "AI Sales Operations Platform",
            description: "AI Calling + WhatsApp + CRM Automation for Loan & Real Estate sales teams."
        },
        {
            "@type": "Offer",
            name: "AI Teacher",
            description: "Intelligent tutoring systems that adapt to each student in real-time."
        }
    ]
};

const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Talkrix",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "AI Sales Operations for Loan & Real Estate. Convert more leads, recover more revenue with AI Calling, WhatsApp automation, and deep CRM integration.",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free trial available. Pay-per-conversion pricing."
    },
    featureList: [
        "AI-powered calling for lead qualification",
        "WhatsApp Business API automation",
        "Deep CRM integration (Salesforce, Zoho, custom)",
        "Revenue recovery campaigns",
        "Multi-language support (Hindi, English, Regional)",
        "Real-time analytics and conversion tracking"
    ]
};

export default function Home() {
    const router = useRouter();
    const { isMobile, isTablet, isDesktop } = useResponsive();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change or resize to desktop
    useEffect(() => {
        if (isDesktop) setMobileMenuOpen(false);
    }, [isDesktop]);

    // Responsive padding helper
    const getPadding = () => isMobile ? '16px' : isTablet ? '32px' : '48px';

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
            />
            
            <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            {/* Dot Pattern Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: isMobile ? '16px 16px' : '24px 24px',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* Navbar */}
            <nav style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: isMobile ? '16px 20px' : isTablet ? '16px 32px' : '20px 48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                backgroundColor: 'rgba(26, 26, 46, 0.95)',
                backdropFilter: 'blur(20px)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isDesktop ? '48px' : '24px' }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ 
                            fontWeight: '800', 
                            fontSize: isMobile ? '20px' : '24px', 
                            color: 'white', 
                            letterSpacing: '-1px',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        }}>
                            TALKRIX
                        </span>
                    </div>
                    
                    {/* Nav Links - Desktop only */}
                    {isDesktop && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                            <NavLink text="FEATURES" href="#features" />
                            <NavLink text="DOCS" href="/docs" hasArrow />
                            <NavLink text="RESOURCES" href="/resources" />
                            <NavLink text="CAREERS" href="/careers" />
                        </div>
                    )}
                </div>

                {/* Desktop CTA Button */}
                {!isMobile && (
                    <button 
                        onClick={() => {
                            const productsSection = document.getElementById('products');
                            if (productsSection) {
                                productsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{ 
                            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                            color: 'white', 
                            border: 'none',
                            borderRadius: '50px',
                            padding: isTablet ? '12px 20px' : '14px 28px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: '600',
                            letterSpacing: '0.5px',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 24px rgba(168, 85, 247, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.3)';
                        }}
                    >
                        GET STARTED
                    </button>
                )}

                {/* Mobile Menu Button */}
                {isMobile && (
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobile && mobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(26, 26, 46, 0.98)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 49,
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <MobileNavLink text="FEATURES" href="#features" onClick={() => setMobileMenuOpen(false)} />
                    <MobileNavLink text="DOCS" href="/docs" onClick={() => setMobileMenuOpen(false)} />
                    <MobileNavLink text="RESOURCES" href="/resources" onClick={() => setMobileMenuOpen(false)} />
                    <MobileNavLink text="CAREERS" href="/careers" onClick={() => setMobileMenuOpen(false)} />
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <button 
                            onClick={() => {
                                setMobileMenuOpen(false);
                                const productsSection = document.getElementById('products');
                                if (productsSection) {
                                    productsSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            style={{ 
                                width: '100%',
                                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                                color: 'white', 
                                border: 'none',
                                borderRadius: '12px',
                                padding: '16px 28px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '600',
                                letterSpacing: '0.5px'
                            }}
                        >
                            GET STARTED
                        </button>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '100vh',
                padding: isMobile ? '100px 20px 60px' : isTablet ? '120px 32px 80px' : '120px 48px 80px',
                textAlign: 'center'
            }}>
                {/* Traction Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: isMobile ? '6px 14px' : '8px 20px',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    borderRadius: '50px',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    marginBottom: isMobile ? '24px' : '32px'
                }}>
                    <TrendingUp style={{ width: '16px', height: '16px', color: '#22c55e' }} />
                    <span style={{ color: '#22c55e', fontSize: isMobile ? '12px' : '14px', fontWeight: '600' }}>
                        {isMobile ? '15+ Partners • 40% Growth' : '15+ NBFC & DSA partners • 40% MoM growth'}
                    </span>
                </div>
                
                <h1 style={{ 
                    fontSize: isMobile ? '36px' : isTablet ? '56px' : 'clamp(48px, 10vw, 120px)', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '0', 
                    letterSpacing: isMobile ? '-1px' : '-4px',
                    lineHeight: '1.1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    AI Sales Operations
                </h1>
                <h1 style={{ 
                    fontSize: isMobile ? '36px' : isTablet ? '56px' : 'clamp(48px, 10vw, 120px)', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: isMobile ? '16px' : '24px', 
                    letterSpacing: isMobile ? '-1px' : '-4px',
                    lineHeight: '1.1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    for <span style={{ color: '#a855f7' }}>Loan & Real Estate</span>
                </h1>
                <p style={{
                    fontSize: isMobile ? '16px' : isTablet ? '18px' : '22px',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    marginBottom: isMobile ? '32px' : '48px',
                    padding: isMobile ? '0 8px' : '0'
                }}>
                    <strong style={{ color: 'white' }}>AI Calling + WhatsApp + CRM Automation</strong> that helps DSAs, Loan Agencies, and NBFC sales teams <strong style={{ color: '#22c55e' }}>convert 3x more leads</strong> and <strong style={{ color: '#22c55e' }}>recover 40% more revenue</strong>.
                </p>

                {/* CTA Buttons */}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center', 
                    gap: isMobile ? '12px' : '16px', 
                    marginBottom: isMobile ? '48px' : '80px',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? '320px' : 'none'
                }}>
                    <button 
                        onClick={() => {
                            const productsSection = document.getElementById('products');
                            if (productsSection) {
                                productsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{ 
                            height: isMobile ? '52px' : '60px', 
                            width: isMobile ? '100%' : 'auto',
                            borderRadius: '50px', 
                            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                            color: 'white', 
                            fontWeight: '600',
                            fontSize: isMobile ? '13px' : '14px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: isMobile ? '0 32px' : '0 40px',
                            letterSpacing: '1px',
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.3)';
                        }}
                    >
                        GET STARTED
                        <Sparkles style={{ width: '18px', height: '18px' }} />
                    </button>

                    <button 
                        onClick={() => router.push('/docs')}
                        style={{ 
                            height: isMobile ? '52px' : '60px', 
                            width: isMobile ? '100%' : 'auto',
                            borderRadius: '50px', 
                            background: 'rgba(255,255,255,0.08)', 
                            color: 'white', 
                            fontWeight: '600',
                            fontSize: isMobile ? '13px' : '14px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: isMobile ? '0 32px' : '0 40px',
                            letterSpacing: '1px',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                        }}
                    >
                        READ THE DOCS
                        <Sparkles style={{ width: '18px', height: '18px', opacity: 0.6 }} />
                    </button>
                </div>

                {/* Stats Row */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                    gap: isMobile ? '24px 16px' : '48px',
                    width: isMobile ? '100%' : 'auto',
                    maxWidth: isMobile ? '360px' : 'none'
                }}>
                    <StatItem value="3x" label="Lead Conversion" isMobile={isMobile} />
                    <StatItem value="40%" label="Revenue Recovered" isMobile={isMobile} />
                    <StatItem value="15+" label="NBFC Partners" isMobile={isMobile} />
                    <StatItem value="₹50L+" label="Monthly GMV" isMobile={isMobile} />
                </div>
            </section>

            {/* Problem-Solution Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '100px 48px',
                backgroundColor: 'rgba(168, 85, 247, 0.05)',
                borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                        gap: isMobile ? '48px' : isTablet ? '48px' : '80px', 
                        alignItems: 'center' 
                    }}>
                        <div>
                            <p style={{ color: '#ef4444', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>THE REVENUE LEAK</p>
                            <h2 style={{ fontSize: isMobile ? '26px' : isTablet ? '30px' : '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '24px', lineHeight: '1.3' }}>
                                Your sales team is <span style={{ color: '#ef4444' }}>leaving money on the table</span>.
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                                <strong style={{ color: 'white' }}>70% of loan leads go cold</strong> because your team can't follow up fast enough. DSAs juggle 100+ leads manually. WhatsApp replies are inconsistent. CRM data is always outdated.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.8' }}>
                                Every missed call = lost commission. Every delayed follow-up = competitor's win.
                            </p>
                        </div>
                        <div>
                            <p style={{ color: '#22c55e', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>THE TALKRIX SOLUTION</p>
                            <h2 style={{ fontSize: isMobile ? '26px' : isTablet ? '30px' : '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '24px', lineHeight: '1.3' }}>
                                <span style={{ color: '#22c55e' }}>AI that sells</span> while you sleep.
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                                Talkrix <strong style={{ color: 'white' }}>calls every lead in 30 seconds</strong>, qualifies them with smart questions, <strong style={{ color: 'white' }}>sends personalized WhatsApp follow-ups</strong>, and updates your CRM automatically.
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.8' }}>
                                Your best closer—working 24/7, in Hindi, English, and regional languages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '40px 20px' : isTablet ? '48px 32px' : '60px 48px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: isMobile ? '11px' : '13px', letterSpacing: '2px', marginBottom: isMobile ? '20px' : '32px' }}>
                    BUILT FOR
                </p>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
                    gap: isMobile ? '16px 12px' : '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {['DSAs', 'Loan Agencies', 'NBFCs', 'Real Estate Brokers', 'Housing Finance', 'Insurance Agents'].map((industry) => (
                        <div key={industry} style={{ 
                            color: 'rgba(255,255,255,0.5)', 
                            fontSize: isMobile ? '13px' : isTablet ? '15px' : '18px', 
                            fontWeight: '600', 
                            letterSpacing: '0.5px',
                            textAlign: 'center',
                            padding: isMobile ? '12px 8px' : '0',
                            backgroundColor: isMobile ? 'rgba(255,255,255,0.03)' : 'transparent',
                            borderRadius: isMobile ? '8px' : '0'
                        }}>
                            {industry}
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        THE COMPLETE STACK
                    </p>
                    <h2 style={{ fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px', marginBottom: '24px' }}>
                        <span style={{ color: '#a855f7' }}>AI Calling</span> + <span style={{ color: '#22c55e' }}>WhatsApp</span> + <span style={{ color: '#3b82f6' }}>CRM</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '15px' : '18px', maxWidth: '700px', margin: '0 auto', padding: isMobile ? '0 8px' : '0' }}>
                        Everything your sales team needs to convert more leads and recover more revenue—fully automated, deeply integrated.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
                    gap: isMobile ? '16px' : '24px' 
                }}>
                    <FeatureCard 
                        icon={<Phone />}
                        title="AI Calling That Converts"
                        description="Instant lead follow-up in 30 seconds. Smart qualification questions. Natural Hindi, English, and regional language support."
                        isMobile={isMobile}
                    />
                    <FeatureCard 
                        icon={<MessageSquare />}
                        title="WhatsApp Automation"
                        description="Personalized follow-ups, document collection, and payment reminders. Integrated with WhatsApp Business API."
                        isMobile={isMobile}
                    />
                    <FeatureCard 
                        icon={<Cpu />}
                        title="Deep CRM Integration"
                        description="Auto-sync with Salesforce, Zoho, LeadSquared, or your custom CRM. No more manual data entry."
                        isMobile={isMobile}
                    />
                    <FeatureCard 
                        icon={<TrendingUp />}
                        title="Revenue Recovery"
                        description="Automated EMI reminders, payment follow-ups, and collection campaigns. Recover 40% more with AI persistence."
                        isMobile={isMobile}
                    />
                    <FeatureCard 
                        icon={<Target />}
                        title="Lead Scoring & Routing"
                        description="AI qualifies leads in real-time and routes hot leads to your best closers. No more wasted time on cold leads."
                        isMobile={isMobile}
                    />
                    <FeatureCard 
                        icon={<Shield />}
                        title="Compliance Built-In"
                        description="TRAI DND compliance, call recording, consent management. Built for regulated financial services."
                        isMobile={isMobile}
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
                        <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                            HOW IT WORKS
                        </p>
                        <h2 style={{ fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px' }}>
                            Go live in 48 hours
                        </h2>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
                        gap: isMobile ? '40px' : '48px' 
                    }}>
                        <StepCard 
                            number="01"
                            title="Connect your leads"
                            description="Integrate with your CRM, upload CSV, or connect via API. We'll start calling within minutes of lead arrival."
                            isMobile={isMobile}
                        />
                        <StepCard 
                            number="02"
                            title="Customize your AI agent"
                            description="Set your qualification criteria, script tone, and follow-up sequences. Train on your product knowledge in hours."
                            isMobile={isMobile}
                        />
                        <StepCard 
                            number="03"
                            title="Watch conversions grow"
                            description="AI calls, qualifies, and nurtures leads 24/7. Hot leads get routed to your closers. Track everything in real-time."
                            isMobile={isMobile}
                        />
                    </div>
                </div>
            </section>

            {/* Our Products Section */}
            <section id="products" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        PLATFORM
                    </p>
                    <h2 style={{ fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px' }}>
                        Two markets. One platform.
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '15px' : '18px', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0', padding: isMobile ? '0 8px' : '0' }}>
                        Enterprise voice automation today. AI-powered education tomorrow. Get started with the solution that fits your needs.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
                    gap: isMobile ? '20px' : '32px' 
                }}>
                    {/* Voice AI Product Card */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            borderRadius: isMobile ? '16px' : '24px',
                            padding: isMobile ? '24px 20px' : '48px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <h3 style={{ fontSize: isMobile ? '20px' : '28px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                            Voice AI Platform
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6', marginBottom: isMobile ? '20px' : '32px' }}>
                            Deploy AI voice agents for customer support, sales, and operations. Replace 80% of routine calls while improving customer satisfaction.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: isMobile ? '20px' : '32px' }}>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#c084fc' }}>🎙️ Voice Agents</span>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#c084fc' }}>🤖 AI Calls</span>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#c084fc' }}>⚡ Real-time</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '16px' }}>
                            <a 
                                href={`${process.env.NEXT_PUBLIC_VOICE_AI_URL || 'http://localhost:3001'}/login`}
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                                    color: 'white', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Login <ArrowRight style={{ width: '18px', height: '18px' }} />
                            </a>
                            <a 
                                href={`${process.env.NEXT_PUBLIC_VOICE_AI_URL || 'http://localhost:3001'}/signup`}
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'transparent', 
                                    color: 'white', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    border: '1px solid rgba(168, 85, 247, 0.5)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>

                    {/* AI Teacher Product Card */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(22, 163, 74, 0.05) 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.2)',
                            borderRadius: isMobile ? '16px' : '24px',
                            padding: isMobile ? '24px 20px' : '48px',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            opacity: 0.85,
                        }}
                    >
                        {/* Coming Soon Badge */}
                        <div style={{
                            position: 'absolute',
                            top: isMobile ? '16px' : '24px',
                            right: isMobile ? '16px' : '24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: isMobile ? '6px 12px' : '8px 16px',
                            backgroundColor: 'rgba(245, 158, 11, 0.15)',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            borderRadius: '20px',
                        }}>
                            <Clock style={{ width: isMobile ? '12px' : '14px', height: isMobile ? '12px' : '14px', color: '#f59e0b' }} />
                            <span style={{ fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#f59e0b' }}>Coming Soon</span>
                        </div>

                        <h3 style={{ fontSize: isMobile ? '20px' : '28px', fontWeight: '600', color: 'white', marginBottom: '16px', marginTop: isMobile ? '32px' : '0' }}>
                            AI Teacher
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6', marginBottom: isMobile ? '20px' : '32px' }}>
                            Build intelligent tutoring systems and educational AI assistants. Create personalized learning experiences that adapt to each student.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: isMobile ? '20px' : '32px' }}>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(34, 197, 94, 0.15)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#86efac' }}>📚 Smart Tutoring</span>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(34, 197, 94, 0.15)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#86efac' }}>🎓 Personalized</span>
                            <span style={{ padding: '6px 12px', backgroundColor: 'rgba(34, 197, 94, 0.15)', borderRadius: '20px', fontSize: isMobile ? '11px' : '13px', color: '#86efac' }}>⚡ Interactive</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '10px' : '16px' }}>
                            <div
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'rgba(34, 197, 94, 0.2)', 
                                    color: 'rgba(255,255,255,0.5)', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    border: 'none',
                                    cursor: 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                }}
                            >
                                Login <ArrowRight style={{ width: '18px', height: '18px', opacity: 0.5 }} />
                            </div>
                            <div
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'transparent', 
                                    color: 'rgba(255,255,255,0.5)', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    border: '1px solid rgba(34, 197, 94, 0.2)',
                                    cursor: 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                }}
                            >
                                Sign Up
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        USE CASES
                    </p>
                    <h2 style={{ fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px' }}>
                        Built for Loan & Real Estate
                    </h2>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', 
                    gap: isMobile ? '16px' : '24px' 
                }}>
                    <UseCaseCard 
                        icon={<Phone />}
                        title="Lead Qualification"
                        description="Instant follow-up on every lead. AI qualifies for loan eligibility, budget, timeline—and routes hot leads to your closers in real-time."
                        stats="3x conversion rate"
                        isMobile={isMobile}
                    />
                    <UseCaseCard 
                        icon={<TrendingUp />}
                        title="Revenue Recovery"
                        description="Automated EMI reminders, payment follow-ups, and soft collection calls. Persistent, polite, and effective—24/7."
                        stats="40% more recovered"
                        isMobile={isMobile}
                    />
                    <UseCaseCard 
                        icon={<Users />}
                        title="Property Site Visits"
                        description="Book site visits, send location details via WhatsApp, and confirm attendance. Reduce no-shows by 60%."
                        stats="60% fewer no-shows"
                        isMobile={isMobile}
                    />
                    <UseCaseCard 
                        icon={<MessageSquare />}
                        title="Document Collection"
                        description="Request and collect KYC documents via WhatsApp. Auto-verify and sync to your LOS. Cut processing time in half."
                        stats="2x faster processing"
                        isMobile={isMobile}
                    />
                </div>
            </section>

            {/* Team Section */}
            <section id="team" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>THE TEAM</p>
                    <h2 style={{ fontSize: isMobile ? '26px' : isTablet ? '36px' : '48px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px', marginBottom: '24px' }}>Built by operators, for operators</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '15px' : '18px', maxWidth: '700px', margin: '0 auto', padding: isMobile ? '0 8px' : '0' }}>
                        We've scaled sales teams in lending and real estate. We know the pain. Now we're building the AI tools we wish we had.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '24px' : '48px', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Founder Card */}
                    <div style={{
                        padding: isMobile ? '28px 20px' : '40px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: isMobile ? '16px' : '24px',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                        <div style={{
                            width: isMobile ? '100px' : '140px',
                            height: isMobile ? '100px' : '140px',
                            borderRadius: '50%',
                            margin: '0 auto 24px',
                            overflow: 'hidden',
                            border: '3px solid rgba(168, 85, 247, 0.5)',
                            position: 'relative'
                        }}>
                            <img 
                                src="/images/team/satish.jpg" 
                                alt="Satish Yadav - Founder & CTO"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Satish Yadav</h3>
                        <p style={{ color: '#a855f7', fontSize: isMobile ? '13px' : '14px', fontWeight: '600', marginBottom: '16px' }}>Founder & CTO</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '13px' : '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                            10+ years building AI systems at scale. Ex-tech lead at top social commerce startups. Deep expertise in Voice AI, NLP, and conversational systems.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                            <a href="https://www.linkedin.com/in/sateesh-bohra/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                                <Linkedin style={{ width: '20px', height: '20px' }} />
                            </a>
                        </div>
                    </div>

                    {/* Co-Founder Card */}
                    <div style={{
                        padding: isMobile ? '28px 20px' : '40px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: isMobile ? '16px' : '24px',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                        <div style={{
                            width: isMobile ? '100px' : '140px',
                            height: isMobile ? '100px' : '140px',
                            borderRadius: '50%',
                            margin: '0 auto 24px',
                            overflow: 'hidden',
                            border: '3px solid rgba(34, 197, 94, 0.5)',
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ fontSize: isMobile ? '36px' : '48px', color: 'white', fontWeight: '700' }}>RB</span>
                        </div>
                        <h3 style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Ravi Biyani</h3>
                        <p style={{ color: '#22c55e', fontSize: isMobile ? '13px' : '14px', fontWeight: '600', marginBottom: '16px' }}>Co-Founder & CEO</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '13px' : '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                            Serial entrepreneur with exits in social commerce. Expert in enterprise sales and building high-performance teams.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                            <a href="https://www.linkedin.com/in/ravikumarbiyani/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#22c55e'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                                <Linkedin style={{ width: '20px', height: '20px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traction Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '100px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ color: '#a855f7', fontSize: isMobile ? '12px' : '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>TRACTION</p>
                    <h2 style={{ fontSize: isMobile ? '26px' : isTablet ? '32px' : '40px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px', marginBottom: '24px' }}>Proven results with NBFCs & DSAs</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: isMobile ? '15px' : '18px', marginBottom: isMobile ? '40px' : '60px', maxWidth: '600px', margin: isMobile ? '0 auto 40px' : '0 auto 60px' }}>
                        Real numbers from real lending and real estate partners. Growing 40% month-over-month.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '12px' : '32px' }}>
                        <div style={{ padding: isMobile ? '20px 12px' : '32px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: isMobile ? '12px' : '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            <TrendingUp style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#a855f7', marginBottom: isMobile ? '8px' : '16px' }} />
                            <div style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>3x</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '12px' : '14px' }}>Lead Conversion</div>
                        </div>
                        <div style={{ padding: isMobile ? '20px 12px' : '32px', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: isMobile ? '12px' : '16px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                            <Target style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#22c55e', marginBottom: isMobile ? '8px' : '16px' }} />
                            <div style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>15+</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '12px' : '14px' }}>Partners</div>
                        </div>
                        <div style={{ padding: isMobile ? '20px 12px' : '32px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: isMobile ? '12px' : '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <Users style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#3b82f6', marginBottom: isMobile ? '8px' : '16px' }} />
                            <div style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>₹50L+</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '12px' : '14px' }}>Monthly GMV</div>
                        </div>
                        <div style={{ padding: isMobile ? '20px 12px' : '32px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: isMobile ? '12px' : '16px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                            <Zap style={{ width: isMobile ? '24px' : '32px', height: isMobile ? '24px' : '32px', color: '#f97316', marginBottom: isMobile ? '8px' : '16px' }} />
                            <div style={{ fontSize: isMobile ? '28px' : '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>40%</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '12px' : '14px' }}>Revenue Recovered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '60px 20px' : isTablet ? '80px 32px' : '120px 48px',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: isMobile ? '28px' : isTablet ? '40px' : '56px', fontWeight: '300', color: 'white', letterSpacing: isMobile ? '-1px' : '-2px', marginBottom: '24px', padding: isMobile ? '0 8px' : '0' }}>
                    Ready to 3x your conversions?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '15px' : '20px', marginBottom: isMobile ? '32px' : '48px', maxWidth: '650px', margin: isMobile ? '0 auto 32px' : '0 auto 48px', padding: isMobile ? '0 8px' : '0' }}>
                    Join 15+ NBFCs and DSAs already using Talkrix to convert more leads and recover more revenue.
                </p>
                <button 
                    onClick={() => router.push('/signup')}
                    style={{ 
                        height: isMobile ? '52px' : '64px', 
                        borderRadius: '50px', 
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                        color: 'white', 
                        fontWeight: '600',
                        fontSize: isMobile ? '14px' : '16px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: isMobile ? '0 32px' : '0 48px',
                        letterSpacing: '1px',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(168, 85, 247, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 85, 247, 0.3)';
                    }}
                >
                    GET STARTED FREE
                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                </button>
            </section>

            {/* Footer */}
            <footer style={{ 
                position: 'relative',
                zIndex: 10,
                padding: isMobile ? '48px 20px 32px' : '80px 48px 40px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    {isMobile ? (
                        /* Mobile Footer */
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: '800', fontSize: '20px', color: 'white', letterSpacing: '-1px', marginBottom: '12px' }}>
                                TALKRIX
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: '1.6', marginBottom: '32px' }}>
                                AI Sales Operations for Loan & Real Estate
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '32px' }}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>Twitter</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>LinkedIn</a>
                                <a href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>Privacy</a>
                                <a href="/terms" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>Terms</a>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
                                © 2026 Talkrix Inc.
                            </p>
                        </div>
                    ) : (
                        /* Desktop Footer */
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr 1fr 1fr' : '2fr 1fr 1fr 1fr 1fr', gap: isTablet ? '32px' : '48px', marginBottom: '64px' }}>
                                <div>
                                    <div style={{ fontWeight: '800', fontSize: '24px', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>
                                        TALKRIX
                                    </div>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' }}>
                                        AI Sales Operations for Loan & Real Estate. Convert more leads. Recover more revenue.
                                    </p>
                                </div>
                                <FooterColumn title="Product" links={['Features', 'Pricing', 'Documentation', 'API Reference', 'Changelog']} />
                                <FooterColumn title="Company" links={['About', 'Blog', 'Careers', 'Press Kit', 'Contact']} />
                                {!isTablet && (
                                    <>
                                        <FooterColumn title="Resources" links={['Community', 'Partners', 'Guides', 'Webinars', 'Status']} />
                                        <FooterColumn title="Legal" links={[
                                            { text: 'Privacy', href: '/privacy' },
                                            { text: 'Terms', href: '/terms' },
                                            { text: 'Security' },
                                            { text: 'GDPR' },
                                            { text: 'Cookies' }
                                        ]} />
                                    </>
                                )}
                            </div>
                            <div style={{ display: 'flex', flexDirection: isTablet ? 'column' : 'row', justifyContent: 'space-between', alignItems: isTablet ? 'center' : 'center', gap: isTablet ? '16px' : '0', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
                                    © 2026 Talkrix Inc. All rights reserved.
                                </p>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none' }}>Twitter</a>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none' }}>GitHub</a>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none' }}>Discord</a>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', textDecoration: 'none' }}>LinkedIn</a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </footer>
        </div>
        </>
    );
}

function NavLink({ text, hasArrow, hasChevron, href }: { text: string, hasArrow?: boolean, hasChevron?: boolean, href?: string }) {
    return (
        <a 
            href={href || "#"} 
            style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontSize: '13px', 
                fontWeight: '500',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
            {text}
            {hasArrow && <ArrowUpRight style={{ width: '12px', height: '12px' }} />}
            {hasChevron && <ChevronRight style={{ width: '14px', height: '14px' }} />}
        </a>
    );
}

function MobileNavLink({ text, href, onClick }: { text: string, href?: string, onClick?: () => void }) {
    return (
        <a 
            href={href || "#"} 
            onClick={onClick}
            style={{ 
                color: 'rgba(255,255,255,0.8)', 
                textDecoration: 'none', 
                fontSize: '16px', 
                fontWeight: '500',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'block'
            }}
        >
            {text}
        </a>
    );
}

function StatItem({ value, label, isMobile }: { value: string, label: string, isMobile?: boolean }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: '600', color: 'white', letterSpacing: '-1px' }}>{value}</div>
            <div style={{ fontSize: isMobile ? '12px' : '14px', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
        </div>
    );
}

function FeatureCard({ icon, title, description, isMobile }: { icon: React.ReactNode, title: string, description: string, isMobile?: boolean }) {
    return (
        <div style={{ 
            padding: isMobile ? '24px 20px' : '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: isMobile ? '12px' : '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        }}
        >
            <div style={{ 
                width: isMobile ? '40px' : '48px', 
                height: isMobile ? '40px' : '48px', 
                borderRadius: isMobile ? '10px' : '12px', 
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? '16px' : '20px',
                color: '#a855f7'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: isMobile ? '17px' : '20px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p style={{ fontSize: isMobile ? '14px' : '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{description}</p>
        </div>
    );
}

function StepCard({ number, title, description, isMobile }: { number: string, title: string, description: string, isMobile?: boolean }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ 
                fontSize: isMobile ? '48px' : '72px', 
                fontWeight: '700', 
                background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: isMobile ? '16px' : '24px',
                letterSpacing: '-2px'
            }}>
                {number}
            </div>
            <h3 style={{ fontSize: isMobile ? '18px' : '24px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>{title}</h3>
            <p style={{ fontSize: isMobile ? '14px' : '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{description}</p>
        </div>
    );
}

function UseCaseCard({ icon, title, description, stats, isMobile }: { icon: React.ReactNode, title: string, description: string, stats: string, isMobile?: boolean }) {
    return (
        <div style={{ 
            padding: isMobile ? '24px 20px' : '40px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: isMobile ? '14px' : '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '16px' : '24px',
            alignItems: isMobile ? 'flex-start' : 'flex-start',
            transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        }}
        >
            <div style={{ 
                width: isMobile ? '44px' : '56px', 
                height: isMobile ? '44px' : '56px', 
                borderRadius: isMobile ? '10px' : '14px', 
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#a855f7'
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: isMobile ? '18px' : '22px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: isMobile ? '14px' : '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '16px' }}>{description}</p>
                <span style={{ 
                    display: 'inline-block',
                    padding: '6px 14px', 
                    backgroundColor: 'rgba(168, 85, 247, 0.15)', 
                    borderRadius: '50px',
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#a855f7',
                    fontWeight: '600'
                }}>{stats}</span>
            </div>
        </div>
    );
}

function PricingCard({ name, price, period, description, features, highlighted }: { 
    name: string, 
    price: string, 
    period?: string, 
    description: string, 
    features: string[],
    highlighted?: boolean 
}) {
    return (
        <div style={{ 
            padding: '40px',
            backgroundColor: highlighted ? 'rgba(168, 85, 247, 0.1)' : 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            border: highlighted ? '2px solid rgba(168, 85, 247, 0.5)' : '1px solid rgba(255,255,255,0.08)',
            position: 'relative'
        }}>
            {highlighted && (
                <div style={{ 
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '6px 16px',
                    backgroundColor: '#a855f7',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'white',
                    letterSpacing: '0.5px'
                }}>
                    MOST POPULAR
                </div>
            )}
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>{name}</h3>
            <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '600', color: 'white' }}>{price}</span>
                {period && <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>{period}</span>}
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px' }}>{description}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                        <Check style={{ width: '16px', height: '16px', color: '#a855f7' }} />
                        {feature}
                    </li>
                ))}
            </ul>
            <button style={{ 
                width: '100%',
                height: '48px', 
                borderRadius: '50px', 
                background: highlighted ? 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)' : 'transparent', 
                color: 'white', 
                fontWeight: '600',
                fontSize: '14px',
                border: highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
            }}>
                Get Started
            </button>
        </div>
    );
}

function FooterColumn({ title, links }: { title: string, links: { text: string, href?: string }[] | string[] }) {
    return (
        <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '20px' }}>{title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {links.map((link, i) => {
                    const linkText = typeof link === 'string' ? link : link.text;
                    const linkHref = typeof link === 'string' ? '#' : (link.href || '#');
                    return (
                        <li key={i} style={{ marginBottom: '12px' }}>
                            <a href={linkHref} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                               onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                               onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                            >
                                {linkText}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}