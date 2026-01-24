"use client";

import { ArrowRight, BookOpen, Code, FileText, Headphones, MessageSquare, Play, Download, ExternalLink, Mic, Brain, Zap, Users, Calendar, Clock, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
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
                    <Link href="/" style={{ 
                        fontWeight: '800', 
                        fontSize: '24px', 
                        color: 'white', 
                        letterSpacing: '-1px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        textDecoration: 'none'
                    }}>
                        TALKRIX
                    </Link>
                </div>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                    ← Back to Home
                </Link>
            </nav>

            {/* Hero Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '160px 48px 80px',
                textAlign: 'center',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 20px',
                    backgroundColor: 'rgba(168, 85, 247, 0.15)',
                    borderRadius: '50px',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    marginBottom: '24px'
                }}>
                    <BookOpen style={{ width: '16px', height: '16px', color: '#a855f7' }} />
                    <span style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600' }}>Learning Resources</span>
                </div>
                
                <h1 style={{ 
                    fontSize: '56px', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '24px', 
                    letterSpacing: '-2px',
                    lineHeight: '1.1'
                }}>
                    Everything you need to
                    <br />
                    <span style={{ color: '#a855f7' }}>master Voice AI</span>
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'rgba(255,255,255,0.6)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Guides, tutorials, case studies, and tools to help you build exceptional voice-first experiences with Talkrix
                </p>
            </section>

            {/* Quick Links */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '0 48px 80px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                    <QuickLinkCard icon={<BookOpen />} title="Documentation" description="Complete API reference" href="/docs" />
                    <QuickLinkCard icon={<Play />} title="Video Tutorials" description="Step-by-step guides" href="#tutorials" />
                    <QuickLinkCard icon={<FileText />} title="Case Studies" description="Real-world examples" href="#case-studies" />
                    <QuickLinkCard icon={<MessageSquare />} title="Community" description="Join the discussion" href="#community" />
                </div>
            </section>

            {/* Getting Started Guides */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '80px 48px',
                backgroundColor: 'rgba(168, 85, 247, 0.05)',
                borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                        <div>
                            <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>GETTING STARTED</p>
                            <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>Quick Start Guides</h2>
                        </div>
                        <Link href="/docs" style={{ 
                            color: '#a855f7', 
                            textDecoration: 'none', 
                            fontSize: '14px', 
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            View all guides <ArrowRight style={{ width: '16px', height: '16px' }} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <GuideCard 
                            icon={<Mic />}
                            title="Build Your First Voice Agent"
                            description="Create a conversational AI agent in under 10 minutes with our step-by-step tutorial."
                            duration="10 min read"
                            level="Beginner"
                            color="#a855f7"
                        />
                        <GuideCard 
                            icon={<Code />}
                            title="API Integration Guide"
                            description="Learn how to integrate Talkrix APIs into your existing applications and workflows."
                            duration="15 min read"
                            level="Intermediate"
                            color="#6366f1"
                        />
                        <GuideCard 
                            icon={<Brain />}
                            title="Custom AI Model Training"
                            description="Train your voice AI on custom data for industry-specific conversations."
                            duration="25 min read"
                            level="Advanced"
                            color="#22c55e"
                        />
                    </div>
                </div>
            </section>

            {/* Video Tutorials */}
            <section id="tutorials" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ marginBottom: '48px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>VIDEO TUTORIALS</p>
                    <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>Learn by Watching</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    <VideoCard 
                        title="Talkrix Platform Overview"
                        description="A comprehensive walkthrough of the Talkrix platform, features, and capabilities."
                        duration="12:34"
                        thumbnail="🎬"
                    />
                    <VideoCard 
                        title="Building Multi-turn Conversations"
                        description="Learn how to create AI agents that maintain context across complex conversations."
                        duration="18:22"
                        thumbnail="💬"
                    />
                    <VideoCard 
                        title="Integrating with CRM Systems"
                        description="Connect Talkrix to Salesforce, HubSpot, and other popular CRM platforms."
                        duration="15:45"
                        thumbnail="🔗"
                    />
                    <VideoCard 
                        title="Voice AI Best Practices"
                        description="Tips and tricks from our team for building natural-sounding voice experiences."
                        duration="21:10"
                        thumbnail="✨"
                    />
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '48px', textAlign: 'center' }}>
                        <p style={{ color: '#22c55e', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>CASE STUDIES</p>
                        <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>Success Stories</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                            See how leading companies are transforming their customer experience with Talkrix
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <CaseStudyCard 
                            company="HealthFirst Insurance"
                            industry="Healthcare"
                            metric="85%"
                            metricLabel="Call Resolution Rate"
                            description="Automated member support calls, reducing wait times from 12 minutes to under 30 seconds."
                            color="#ef4444"
                        />
                        <CaseStudyCard 
                            company="TechFlow SaaS"
                            industry="Technology"
                            metric="3.2x"
                            metricLabel="More Qualified Leads"
                            description="AI sales agents pre-qualify leads 24/7, booking demos automatically with prospects."
                            color="#3b82f6"
                        />
                        <CaseStudyCard 
                            company="EduPath Academy"
                            industry="Education"
                            metric="$2.1M"
                            metricLabel="Annual Savings"
                            description="Replaced traditional call center with AI tutoring assistants for student support."
                            color="#22c55e"
                        />
                    </div>
                </div>
            </section>

            {/* Developer Tools & SDKs */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ marginBottom: '48px' }}>
                    <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>DEVELOPER TOOLS</p>
                    <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>SDKs & Libraries</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                    <SDKCard name="JavaScript SDK" version="v2.4.1" icon="🟨" downloads="125K" />
                    <SDKCard name="Python SDK" version="v2.3.0" icon="🐍" downloads="98K" />
                    <SDKCard name="React Hooks" version="v1.8.2" icon="⚛️" downloads="67K" />
                    <SDKCard name="Node.js SDK" version="v2.4.1" icon="🟩" downloads="85K" />
                    <SDKCard name="Swift SDK" version="v1.5.0" icon="🍎" downloads="34K" />
                    <SDKCard name="Kotlin SDK" version="v1.4.2" icon="🤖" downloads="28K" />
                    <SDKCard name="Go SDK" version="v1.2.0" icon="🔵" downloads="19K" />
                    <SDKCard name="REST API" version="v3.0" icon="🔌" downloads="200K+" />
                </div>
            </section>

            {/* Templates & Starters */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(168, 85, 247, 0.05)',
                borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '48px' }}>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>TEMPLATES</p>
                        <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>Ready-to-Use Starters</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <TemplateCard 
                            title="Customer Support Bot"
                            description="Full-featured support agent with FAQ handling, ticket creation, and human handoff."
                            tags={['Support', 'Multi-turn', 'Integrations']}
                        />
                        <TemplateCard 
                            title="Appointment Scheduler"
                            description="Voice agent for booking appointments with calendar integration and reminders."
                            tags={['Scheduling', 'Calendar', 'SMS']}
                        />
                        <TemplateCard 
                            title="Lead Qualification Agent"
                            description="Sales qualification bot that scores leads and books demos with interested prospects."
                            tags={['Sales', 'CRM', 'Analytics']}
                        />
                        <TemplateCard 
                            title="Survey & Feedback Collector"
                            description="Automated voice surveys with sentiment analysis and reporting dashboard."
                            tags={['Surveys', 'Analytics', 'NPS']}
                        />
                        <TemplateCard 
                            title="Order Status Assistant"
                            description="E-commerce agent for order tracking, returns, and shipping inquiries."
                            tags={['E-commerce', 'Tracking', 'Returns']}
                        />
                        <TemplateCard 
                            title="Healthcare Triage Bot"
                            description="HIPAA-compliant agent for symptom assessment and appointment booking."
                            tags={['Healthcare', 'HIPAA', 'Triage']}
                        />
                    </div>
                </div>
            </section>

            {/* Webinars & Events */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ marginBottom: '48px' }}>
                    <p style={{ color: '#f97316', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>WEBINARS & EVENTS</p>
                    <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>Upcoming Sessions</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                    <WebinarCard 
                        title="Voice AI in 2026: Trends & Predictions"
                        date="Feb 5, 2026"
                        time="2:00 PM IST"
                        speakers={['Satish Yadav', 'Guest Speaker']}
                        isLive={false}
                    />
                    <WebinarCard 
                        title="Building Enterprise Voice Solutions"
                        date="Feb 12, 2026"
                        time="3:00 PM IST"
                        speakers={['Ravi Biyani', 'Tech Team']}
                        isLive={false}
                    />
                    <WebinarCard 
                        title="Talkrix Developer Office Hours"
                        date="Every Thursday"
                        time="11:00 AM IST"
                        speakers={['Developer Advocates']}
                        isLive={true}
                    />
                    <WebinarCard 
                        title="Voice AI Security Best Practices"
                        date="Feb 20, 2026"
                        time="4:00 PM IST"
                        speakers={['Security Team']}
                        isLive={false}
                    />
                </div>
            </section>

            {/* Community Section */}
            <section id="community" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '48px', textAlign: 'center' }}>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>COMMUNITY</p>
                        <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>Join the Conversation</h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                            Connect with thousands of developers building the future of voice AI
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <CommunityCard 
                            platform="Discord"
                            members="8,500+"
                            description="Real-time chat with developers and the Talkrix team"
                            icon="💬"
                            color="#5865F2"
                        />
                        <CommunityCard 
                            platform="GitHub Discussions"
                            members="2,100+"
                            description="Technical discussions, feature requests, and bug reports"
                            icon="🐙"
                            color="#171515"
                        />
                        <CommunityCard 
                            platform="Developer Forum"
                            members="5,200+"
                            description="Q&A, tutorials, and community-created content"
                            icon="💡"
                            color="#a855f7"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Highlights */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                    <div>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '8px' }}>FROM THE BLOG</p>
                        <h2 style={{ fontSize: '36px', fontWeight: '400', color: 'white', letterSpacing: '-1px' }}>Latest Articles</h2>
                    </div>
                    <a href="#" style={{ 
                        color: '#a855f7', 
                        textDecoration: 'none', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        View all posts <ArrowRight style={{ width: '16px', height: '16px' }} />
                    </a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                    <BlogCard 
                        title="The Future of Conversational AI: What's Next After ChatGPT?"
                        excerpt="Exploring the evolution of conversational AI and what Talkrix is building for the next generation."
                        date="Jan 20, 2026"
                        readTime="8 min read"
                        category="Industry Insights"
                    />
                    <BlogCard 
                        title="Reducing Voice Latency: Our Journey to Sub-100ms"
                        excerpt="A deep dive into the engineering challenges we solved to achieve industry-leading response times."
                        date="Jan 15, 2026"
                        readTime="12 min read"
                        category="Engineering"
                    />
                    <BlogCard 
                        title="Voice AI ROI: How Enterprises Are Saving Millions"
                        excerpt="Real numbers from our enterprise customers on cost savings and efficiency gains."
                        date="Jan 10, 2026"
                        readTime="6 min read"
                        category="Business"
                    />
                </div>
            </section>

            {/* Newsletter CTA */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                textAlign: 'center'
            }}>
                <div style={{ 
                    maxWidth: '700px', 
                    margin: '0 auto',
                    padding: '60px',
                    backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    borderRadius: '24px',
                    border: '1px solid rgba(168, 85, 247, 0.3)'
                }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>
                        Stay Updated
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginBottom: '32px' }}>
                        Get the latest Voice AI insights, tutorials, and product updates delivered to your inbox.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', maxWidth: '450px', margin: '0 auto' }}>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                height: '52px',
                                borderRadius: '26px',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '0 24px',
                                color: 'white',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            height: '52px',
                            borderRadius: '26px',
                            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '14px',
                            border: 'none',
                            padding: '0 32px',
                            cursor: 'pointer'
                        }}>
                            Subscribe
                        </button>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '16px' }}>
                        No spam. Unsubscribe anytime.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '40px 48px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
            }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
                    © 2026 Talkrix Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

// Component Definitions

function QuickLinkCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
    return (
        <a href={href} style={{
            padding: '24px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
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
                width: '44px', 
                height: '44px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a855f7'
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>{title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{description}</p>
            </div>
        </a>
    );
}

function GuideCard({ icon, title, description, duration, level, color }: { 
    icon: React.ReactNode, title: string, description: string, duration: string, level: string, color: string 
}) {
    return (
        <div style={{
            padding: '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = `${color}50`;
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                backgroundColor: `${color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: color
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '20px' }}>{description}</p>
            <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ 
                    padding: '4px 12px', 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    color: 'rgba(255,255,255,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <Clock style={{ width: '12px', height: '12px' }} /> {duration}
                </span>
                <span style={{ 
                    padding: '4px 12px', 
                    backgroundColor: `${color}20`, 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    color: color 
                }}>
                    {level}
                </span>
            </div>
        </div>
    );
}

function VideoCard({ title, description, duration, thumbnail }: { 
    title: string, description: string, duration: string, thumbnail: string 
}) {
    return (
        <div style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <div style={{ 
                height: '180px', 
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <span style={{ fontSize: '48px' }}>{thumbnail}</span>
                <div style={{
                    position: 'absolute',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(168, 85, 247, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Play style={{ width: '24px', height: '24px', color: 'white', marginLeft: '4px' }} />
                </div>
                <span style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    padding: '4px 8px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'white'
                }}>
                    {duration}
                </span>
            </div>
            <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{description}</p>
            </div>
        </div>
    );
}

function CaseStudyCard({ company, industry, metric, metricLabel, description, color }: { 
    company: string, industry: string, metric: string, metricLabel: string, description: string, color: string 
}) {
    return (
        <div style={{
            padding: '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${color}50`;
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <span style={{ 
                padding: '4px 12px', 
                backgroundColor: `${color}20`, 
                borderRadius: '20px', 
                fontSize: '12px', 
                color: color,
                fontWeight: '600'
            }}>
                {industry}
            </span>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', margin: '16px 0 8px' }}>{company}</h3>
            <div style={{ margin: '20px 0' }}>
                <div style={{ fontSize: '40px', fontWeight: '700', color: color }}>{metric}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{metricLabel}</div>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{description}</p>
            <a href="#" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: color, 
                textDecoration: 'none', 
                fontSize: '14px', 
                fontWeight: '600',
                marginTop: '16px'
            }}>
                Read full story <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
        </div>
    );
}

function SDKCard({ name, version, icon, downloads }: { name: string, version: string, icon: string, downloads: string }) {
    return (
        <div style={{
            padding: '24px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>{icon}</span>
                <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>{name}</h4>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{version}</span>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                    <Download style={{ width: '12px', height: '12px', display: 'inline', marginRight: '4px' }} />
                    {downloads}
                </span>
                <ExternalLink style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.4)' }} />
            </div>
        </div>
    );
}

function TemplateCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
    return (
        <div style={{
            padding: '28px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5', marginBottom: '20px' }}>{description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{ 
                        padding: '4px 10px', 
                        backgroundColor: 'rgba(168, 85, 247, 0.15)', 
                        borderRadius: '20px', 
                        fontSize: '11px', 
                        color: '#c084fc' 
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{
                    flex: 1,
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(168, 85, 247, 0.2)',
                    color: '#a855f7',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Use Template
                </button>
                <button style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ExternalLink style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.5)' }} />
                </button>
            </div>
        </div>
    );
}

function WebinarCard({ title, date, time, speakers, isLive }: { 
    title: string, date: string, time: string, speakers: string[], isLive: boolean 
}) {
    return (
        <div style={{
            padding: '28px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: isLive ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            {isLive && (
                <span style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '4px 10px',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    borderRadius: '20px',
                    fontSize: '11px',
                    color: '#22c55e',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    RECURRING
                </span>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(249, 115, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f97316'
                }}>
                    <Calendar style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                    <div style={{ fontSize: '14px', color: '#f97316', fontWeight: '600' }}>{date}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{time}</div>
                </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '12px' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                <Users style={{ width: '14px', height: '14px', color: 'rgba(255,255,255,0.5)' }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{speakers.join(', ')}</span>
            </div>
            <button style={{
                width: '100%',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: isLive ? 'rgba(34, 197, 94, 0.2)' : 'rgba(249, 115, 22, 0.2)',
                color: isLive ? '#22c55e' : '#f97316',
                fontSize: '13px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
            }}>
                {isLive ? 'Join Now' : 'Register'}
            </button>
        </div>
    );
}

function CommunityCard({ platform, members, description, icon, color }: { 
    platform: string, members: string, description: string, icon: string, color: string 
}) {
    return (
        <div style={{
            padding: '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = `${color}50`;
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>{icon}</span>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>{platform}</h3>
            <div style={{ fontSize: '24px', fontWeight: '700', color: color, marginBottom: '8px' }}>{members}</div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>{description}</p>
            <button style={{
                height: '40px',
                borderRadius: '20px',
                backgroundColor: `${color}20`,
                color: color,
                fontSize: '13px',
                fontWeight: '600',
                border: 'none',
                padding: '0 24px',
                cursor: 'pointer'
            }}>
                Join Community
            </button>
        </div>
    );
}

function BlogCard({ title, excerpt, date, readTime, category }: { 
    title: string, excerpt: string, date: string, readTime: string, category: string 
}) {
    return (
        <div style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
            e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
            <div style={{ padding: '28px' }}>
                <span style={{ 
                    padding: '4px 10px', 
                    backgroundColor: 'rgba(168, 85, 247, 0.15)', 
                    borderRadius: '20px', 
                    fontSize: '11px', 
                    color: '#c084fc',
                    fontWeight: '600'
                }}>
                    {category}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', margin: '16px 0 12px', lineHeight: '1.4' }}>{title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5', marginBottom: '20px' }}>{excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{date}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>{readTime}</span>
                </div>
            </div>
        </div>
    );
}
