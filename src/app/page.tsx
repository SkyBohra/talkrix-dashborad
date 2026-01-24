"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, Sparkles, ChevronRight, Mic, Brain, Zap, Globe, Shield, Clock, Users, Phone, Code, Cpu, Headphones, MessageSquare, ArrowRight, Check, Linkedin, Twitter, TrendingUp, Target, Rocket } from "lucide-react";
import Image from "next/image";

export default function Home() {
    const router = useRouter();

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Dot Pattern Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
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
                padding: '20px 48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                backgroundColor: 'rgba(26, 26, 46, 0.8)',
                backdropFilter: 'blur(20px)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
                    {/* Logo */}
                    <div style={{ 
                        fontWeight: '800', 
                        fontSize: '24px', 
                        color: 'white', 
                        letterSpacing: '-1px',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>
                        TALKRIX
                    </div>
                    
                    {/* Nav Links */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <NavLink text="CUSTOM AGENTS" href="#features" />
                        <NavLink text="DOCS" hasArrow />
                        <NavLink text="RESOURCES" hasChevron />
                        <NavLink text="CAREERS" />
                        <NavLink text="ENTERPRISE" />
                    </div>
                </div>

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
                        padding: '14px 28px',
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
            </nav>

            {/* Hero Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '120px 48px 80px',
                textAlign: 'center'
            }}>
                {/* Y Combinator Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 20px',
                    backgroundColor: 'rgba(255, 102, 0, 0.15)',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 102, 0, 0.3)',
                    marginBottom: '32px'
                }}>
                    <Rocket style={{ width: '16px', height: '16px', color: '#ff6600' }} />
                    <span style={{ color: '#ff6600', fontSize: '14px', fontWeight: '600' }}>Building the Future of Voice AI</span>
                </div>
                
                <h1 style={{ 
                    fontSize: 'clamp(56px, 12vw, 140px)', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '0', 
                    letterSpacing: '-4px',
                    lineHeight: '1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    Voice AI that
                </h1>
                <h1 style={{ 
                    fontSize: 'clamp(56px, 12vw, 140px)', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '24px', 
                    letterSpacing: '-4px',
                    lineHeight: '1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <span style={{ color: '#a855f7' }}>thinks</span>, not just <span style={{ color: '#22c55e' }}>talks</span>
                </h1>
                <p style={{
                    fontSize: '20px',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '700px',
                    lineHeight: '1.6',
                    marginBottom: '48px'
                }}>
                    We're building conversational AI agents that understand context, reason through problems, and take actions—replacing 80% of routine calls for enterprises.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '80px' }}>
                    <button 
                        onClick={() => {
                            const productsSection = document.getElementById('products');
                            if (productsSection) {
                                productsSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        style={{ 
                            height: '60px', 
                            borderRadius: '50px', 
                            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                            color: 'white', 
                            fontWeight: '600',
                            fontSize: '14px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '0 40px',
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
                        style={{ 
                            height: '60px', 
                            borderRadius: '50px', 
                            background: 'rgba(255,255,255,0.08)', 
                            color: 'white', 
                            fontWeight: '600',
                            fontSize: '14px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '0 40px',
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
                <div style={{ display: 'flex', gap: '48px' }}>
                    <StatItem value="<100ms" label="Response Latency" />
                    <StatItem value="80%" label="Call Automation" />
                    <StatItem value="50+" label="Languages" />
                    <StatItem value="$2M+" label="Cost Saved for Clients" />
                </div>
            </section>

            {/* Problem-Solution Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(168, 85, 247, 0.05)',
                borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <p style={{ color: '#ef4444', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>THE PROBLEM</p>
                            <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '24px', lineHeight: '1.3' }}>
                                Enterprises spend <span style={{ color: '#ef4444' }}>$350B annually</span> on call centers, yet 65% of customers still wait 10+ minutes.
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8' }}>
                                Traditional IVR systems frustrate customers. Human agents are expensive and inconsistent. Most "AI chatbots" can't handle complex, multi-turn conversations.
                            </p>
                        </div>
                        <div>
                            <p style={{ color: '#22c55e', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>OUR SOLUTION</p>
                            <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '24px', lineHeight: '1.3' }}>
                                AI agents that <span style={{ color: '#22c55e' }}>reason, remember, and resolve</span>—like your best human agent, at infinite scale.
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8' }}>
                                Talkrix agents maintain context across conversations, integrate with your systems to take real actions (bookings, refunds, escalations), and learn from every interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '60px 48px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px', letterSpacing: '2px', marginBottom: '32px' }}>
                    BUILDING WITH INDUSTRY LEADERS
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '64px', flexWrap: 'wrap' }}>
                    {['Healthcare Co.', 'FinTech Inc.', 'EdTech Ltd.', 'RetailX', 'LogiPro', 'ServiceNow'].map((company) => (
                        <div key={company} style={{ color: 'rgba(255,255,255,0.3)', fontSize: '20px', fontWeight: '600', letterSpacing: '-0.5px' }}>
                            {company}
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section id="features" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        FEATURES
                    </p>
                    <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px', marginBottom: '24px' }}>
                        Everything you need to build
                        <br />
                        <span style={{ color: '#a855f7' }}>voice-first experiences</span>
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        Connect, communicate, and create with intelligent voice technology that understands you
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <FeatureCard 
                        icon={<Mic />}
                        title="Real-time Voice"
                        description="Crystal clear 48kHz audio with adaptive bitrate. Voice activity detection under 100ms."
                    />
                    <FeatureCard 
                        icon={<Brain />}
                        title="AI-Powered"
                        description="Powered by GPT-4, Claude, and custom models. Natural conversations indistinguishable from humans."
                    />
                    <FeatureCard 
                        icon={<Zap />}
                        title="Lightning Fast"
                        description="Sub-100ms latency globally. Instant speech-to-text, LLM inference, and text-to-speech."
                    />
                    <FeatureCard 
                        icon={<Globe />}
                        title="50+ Languages"
                        description="Multilingual support with automatic language detection and real-time translation."
                    />
                    <FeatureCard 
                        icon={<Shield />}
                        title="Enterprise Security"
                        description="End-to-end encryption, SOC2 Type II, HIPAA compliant. Your data never leaves your control."
                    />
                    <FeatureCard 
                        icon={<Code />}
                        title="Developer First"
                        description="Simple REST APIs, WebSocket streams, and SDKs for React, Python, Node.js, and more."
                    />
                </div>
            </section>

            {/* How It Works Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                            HOW IT WORKS
                        </p>
                        <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px' }}>
                            Three steps to go live
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px' }}>
                        <StepCard 
                            number="01"
                            title="Create your agent"
                            description="Define your AI agent's personality, voice, and capabilities using our intuitive dashboard or API."
                        />
                        <StepCard 
                            number="02"
                            title="Connect your systems"
                            description="Integrate with your existing tools—CRM, calendar, databases—with pre-built connectors."
                        />
                        <StepCard 
                            number="03"
                            title="Deploy & scale"
                            description="Launch globally with one click. Auto-scale from 1 to 1 million concurrent calls."
                        />
                    </div>
                </div>
            </section>

            {/* Our Products Section */}
            <section id="products" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        OUR PRODUCTS
                    </p>
                    <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px' }}>
                        Choose your AI solution
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '18px', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                        Two powerful platforms designed for different needs. Get started with the one that fits your use case.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                    {/* Voice AI Product Card */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                            border: '1px solid rgba(168, 85, 247, 0.3)',
                            borderRadius: '24px',
                            padding: '48px',
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
                        <div style={{ 
                            width: '72px', 
                            height: '72px', 
                            borderRadius: '18px', 
                            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginBottom: '24px',
                            boxShadow: '0 12px 40px rgba(168, 85, 247, 0.3)'
                        }}>
                            <Mic style={{ width: '32px', height: '32px', color: 'white' }} />
                        </div>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                            Voice AI
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
                            Create intelligent voice agents for customer support, sales, and automation. Build conversational AI that sounds natural and responds in real-time.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#c084fc' }}>🎙️ Voice Agents</span>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#c084fc' }}>🤖 AI Calls</span>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(168, 85, 247, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#c084fc' }}>⚡ Real-time</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
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
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%)',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '24px',
                            padding: '48px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.6)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{ 
                            width: '72px', 
                            height: '72px', 
                            borderRadius: '18px', 
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginBottom: '24px',
                            boxShadow: '0 12px 40px rgba(34, 197, 94, 0.3)'
                        }}>
                            <Brain style={{ width: '32px', height: '32px', color: 'white' }} />
                        </div>
                        <h3 style={{ fontSize: '28px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                            AI Teacher
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
                            Build intelligent tutoring systems and educational AI assistants. Create personalized learning experiences that adapt to each student.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#86efac' }}>📚 Smart Tutoring</span>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#86efac' }}>🎓 Personalized</span>
                            <span style={{ padding: '6px 14px', backgroundColor: 'rgba(34, 197, 94, 0.2)', borderRadius: '20px', fontSize: '13px', color: '#86efac' }}>⚡ Interactive</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a 
                                href={`${process.env.NEXT_PUBLIC_AI_TEACHER_URL || 'http://localhost:3003'}/login`}
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', 
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
                                href={`${process.env.NEXT_PUBLIC_AI_TEACHER_URL || 'http://localhost:3003'}/signup`}
                                style={{ 
                                    flex: 1,
                                    height: '52px', 
                                    borderRadius: '26px', 
                                    background: 'transparent', 
                                    color: 'white', 
                                    fontWeight: '600',
                                    fontSize: '14px',
                                    border: '1px solid rgba(34, 197, 94, 0.5)',
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
                </div>
            </section>

            {/* Use Cases Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                        USE CASES
                    </p>
                    <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px' }}>
                        Built for every industry
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    <UseCaseCard 
                        icon={<Phone />}
                        title="Customer Support"
                        description="24/7 voice support that resolves 80% of inquiries automatically. Seamless handoff to humans when needed."
                        stats="80% resolution rate"
                    />
                    <UseCaseCard 
                        icon={<Users />}
                        title="Sales & Outreach"
                        description="AI agents that qualify leads, book meetings, and follow up—all with a natural, human touch."
                        stats="3x more meetings"
                    />
                    <UseCaseCard 
                        icon={<Headphones />}
                        title="Virtual Assistants"
                        description="Personal AI assistants for scheduling, reminders, information lookup, and task management."
                        stats="10M+ tasks/month"
                    />
                    <UseCaseCard 
                        icon={<MessageSquare />}
                        title="Healthcare"
                        description="HIPAA-compliant voice agents for appointment scheduling, symptom checking, and patient follow-ups."
                        stats="HIPAA Certified"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section id="team" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>OUR TEAM</p>
                    <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px', marginBottom: '24px' }}>Founded by builders, for builders</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        We've spent years building AI systems at scale. Now we're making enterprise-grade voice AI accessible to everyone.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Founder Card */}
                    <div style={{
                        padding: '40px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: '24px',
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
                            width: '140px',
                            height: '140px',
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
                        <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Satish Yadav</h3>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Founder & CTO</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                            10+ years building AI systems that scaled to millions. Ex-tech lead at top social commerce startups where he architected real-time ML pipelines processing 50M+ events/day. Deep expertise in Voice AI, NLP, and conversational systems. Built and shipped products used by 10M+ users.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                            <a href="https://www.linkedin.com/in/sateesh-bohra/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#a855f7'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                                <Linkedin style={{ width: '20px', height: '20px' }} />
                            </a>
                        </div>
                    </div>

                    {/* Co-Founder Card */}
                    <div style={{
                        padding: '40px',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        borderRadius: '24px',
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
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            margin: '0 auto 24px',
                            overflow: 'hidden',
                            border: '3px solid rgba(34, 197, 94, 0.5)',
                            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>n                            <span style={{ fontSize: '48px', color: 'white', fontWeight: '700' }}>RB</span>
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>Ravi Biyani</h3>
                        <p style={{ color: '#22c55e', fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>Co-Founder & CEO</p>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                            Serial entrepreneur with exits in social commerce space. Previously scaled a D2C brand to ₹100Cr+ ARR. Expert in enterprise sales, strategic partnerships, and building high-performance teams. Obsessed with turning cutting-edge AI into products businesses actually pay for.
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
                padding: '100px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>TRACTION</p>
                    <h2 style={{ fontSize: '40px', fontWeight: '300', color: 'white', letterSpacing: '-2px', marginBottom: '60px' }}>Growing 40% month-over-month</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                        <div style={{ padding: '32px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '16px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            <TrendingUp style={{ width: '32px', height: '32px', color: '#a855f7', marginBottom: '16px' }} />
                            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>500K+</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>API Calls / Month</div>
                        </div>
                        <div style={{ padding: '32px', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '16px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                            <Target style={{ width: '32px', height: '32px', color: '#22c55e', marginBottom: '16px' }} />
                            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>15+</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Enterprise Pilots</div>
                        </div>
                        <div style={{ padding: '32px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <Users style={{ width: '32px', height: '32px', color: '#3b82f6', marginBottom: '16px' }} />
                            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>2,500+</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Active Developers</div>
                        </div>
                        <div style={{ padding: '32px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '16px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                            <Zap style={{ width: '32px', height: '32px', color: '#f97316', marginBottom: '16px' }} />
                            <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>94%</div>
                            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '120px 48px',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '56px', fontWeight: '300', color: 'white', letterSpacing: '-2px', marginBottom: '24px' }}>
                    Ready to automate your calls?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                    Join 2,500+ developers building the future of voice-first applications with Talkrix
                </p>
                <button 
                    onClick={() => router.push('/signup')}
                    style={{ 
                        height: '64px', 
                        borderRadius: '50px', 
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                        color: 'white', 
                        fontWeight: '600',
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '0 48px',
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
                padding: '80px 48px 40px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }}>
                        <div>
                            <div style={{ fontWeight: '800', fontSize: '24px', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>
                                TALKRIX
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' }}>
                                Building the future of voice AI. Enterprise-grade infrastructure for developers.
                            </p>
                        </div>
                        <FooterColumn title="Product" links={['Features', 'Pricing', 'Documentation', 'API Reference', 'Changelog']} />
                        <FooterColumn title="Company" links={['About', 'Blog', 'Careers', 'Press Kit', 'Contact']} />
                        <FooterColumn title="Resources" links={['Community', 'Partners', 'Guides', 'Webinars', 'Status']} />
                        <FooterColumn title="Legal" links={[
                            { text: 'Privacy', href: '/privacy' },
                            { text: 'Terms', href: '/terms' },
                            { text: 'Security' },
                            { text: 'GDPR' },
                            { text: 'Cookies' }
                        ]} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
                </div>
            </footer>
        </div>
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

function StatItem({ value, label }: { value: string, label: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '600', color: 'white', letterSpacing: '-1px' }}>{value}</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div style={{ 
            padding: '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
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
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#a855f7'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{description}</p>
        </div>
    );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ 
                fontSize: '64px', 
                fontWeight: '200', 
                color: 'rgba(168, 85, 247, 0.3)', 
                marginBottom: '24px',
                letterSpacing: '-4px'
            }}>
                {number}
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>{title}</h3>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{description}</p>
        </div>
    );
}

function UseCaseCard({ icon, title, description, stats }: { icon: React.ReactNode, title: string, description: string, stats: string }) {
    return (
        <div style={{ 
            padding: '40px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
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
                width: '56px', 
                height: '56px', 
                borderRadius: '14px', 
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
                <h3 style={{ fontSize: '22px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '16px' }}>{description}</p>
                <span style={{ 
                    display: 'inline-block',
                    padding: '6px 14px', 
                    backgroundColor: 'rgba(168, 85, 247, 0.15)', 
                    borderRadius: '50px',
                    fontSize: '13px',
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