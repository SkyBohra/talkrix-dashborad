"use client";

import { ArrowRight, Zap, Heart, Globe, Rocket, Users, Brain, Code, Sparkles, MapPin, Clock, DollarSign, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
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
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <NavLink text="FEATURES" href="/#features" />
                        <NavLink text="DOCS" href="/docs" hasArrow />
                        <NavLink text="RESOURCES" hasChevron />
                        <NavLink text="CAREERS" href="/careers" active />
                        <NavLink text="ENTERPRISE" />
                    </div>
                </div>

                <Link 
                    href="/#products"
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
                        textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)'
                    }}
                >
                    GET STARTED
                </Link>
            </nav>

            {/* Hero Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: '70vh',
                padding: '160px 48px 80px',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 20px',
                    backgroundColor: 'rgba(168, 85, 247, 0.15)',
                    borderRadius: '50px',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    marginBottom: '32px'
                }}>
                    <Rocket style={{ width: '16px', height: '16px', color: '#a855f7' }} />
                    <span style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600' }}>We're Hiring!</span>
                </div>

                <h1 style={{ 
                    fontSize: 'clamp(48px, 8vw, 80px)', 
                    fontWeight: '300', 
                    color: 'white', 
                    marginBottom: '24px', 
                    letterSpacing: '-3px',
                    lineHeight: '1.1',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    Build the future of
                    <br />
                    <span style={{ color: '#a855f7' }}>Voice AI</span> with us
                </h1>

                <p style={{
                    fontSize: '20px',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: '700px',
                    lineHeight: '1.6',
                    marginBottom: '48px'
                }}>
                    Join a team of passionate builders creating AI that transforms how businesses communicate. 
                    We're looking for exceptional people who want to make a real impact.
                </p>

                <a 
                    href="#openings"
                    style={{ 
                        height: '60px', 
                        borderRadius: '50px', 
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                        color: 'white', 
                        fontWeight: '600',
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        padding: '0 40px',
                        letterSpacing: '1px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                >
                    VIEW OPEN POSITIONS
                    <ArrowRight style={{ width: '18px', height: '18px' }} />
                </a>
            </section>

            {/* Why Join Us Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(168, 85, 247, 0.05)',
                borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                borderBottom: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                            WHY TALKRIX
                        </p>
                        <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px' }}>
                            More than just a job
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        <BenefitCard 
                            icon={<Rocket />}
                            title="High Impact Work"
                            description="Work on products used by thousands of businesses. Your code ships to production and makes a real difference."
                        />
                        <BenefitCard 
                            icon={<Brain />}
                            title="Cutting-Edge Tech"
                            description="Work with the latest in AI, ML, and voice technology. We're pushing boundaries every day."
                        />
                        <BenefitCard 
                            icon={<Users />}
                            title="Amazing Team"
                            description="Join a team of ex-Google, ex-Meta engineers and entrepreneurs who've built products used by millions."
                        />
                        <BenefitCard 
                            icon={<Globe />}
                            title="Remote First"
                            description="Work from anywhere in the world. We believe great talent isn't limited by geography."
                        />
                        <BenefitCard 
                            icon={<DollarSign />}
                            title="Competitive Package"
                            description="Top-of-market salary, meaningful equity, and comprehensive benefits including health insurance."
                        />
                        <BenefitCard 
                            icon={<Heart />}
                            title="Work-Life Balance"
                            description="Unlimited PTO, flexible hours, and a culture that respects your personal time."
                        />
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                                OUR CULTURE
                            </p>
                            <h2 style={{ fontSize: '40px', fontWeight: '300', color: 'white', letterSpacing: '-1px', marginBottom: '24px', lineHeight: '1.3' }}>
                                We believe in <span style={{ color: '#a855f7' }}>ownership</span>, <span style={{ color: '#22c55e' }}>transparency</span>, and <span style={{ color: '#3b82f6' }}>speed</span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
                                At Talkrix, we move fast and ship often. We're building something ambitious, and we need people who thrive in a high-growth environment. We value:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <CultureItem text="Radical ownership - you own problems end-to-end" />
                                <CultureItem text="Bias for action - done is better than perfect" />
                                <CultureItem text="Customer obsession - we build for users, not ourselves" />
                                <CultureItem text="Continuous learning - we're always getting better" />
                            </ul>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)',
                            borderRadius: '24px',
                            padding: '48px',
                            border: '1px solid rgba(168, 85, 247, 0.3)'
                        }}>
                            <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚀</div>
                            <h3 style={{ fontSize: '28px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                                Startup Vibes, Real Impact
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.8' }}>
                                We're a small team tackling a massive opportunity. You'll have direct access to founders, 
                                work on challenging problems, and see your impact immediately. If you want to build something 
                                meaningful, this is the place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section id="openings" style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                backgroundColor: 'rgba(255,255,255,0.02)'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <p style={{ color: '#a855f7', fontSize: '14px', fontWeight: '600', letterSpacing: '2px', marginBottom: '16px' }}>
                            OPEN POSITIONS
                        </p>
                        <h2 style={{ fontSize: '48px', fontWeight: '300', color: 'white', letterSpacing: '-2px', marginBottom: '16px' }}>
                            Join our team
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
                            We're looking for exceptional people to help us build the future
                        </p>
                    </div>

                    {/* Engineering */}
                    <div style={{ marginBottom: '48px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#a855f7', letterSpacing: '2px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            ENGINEERING
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <JobCard 
                                title="Senior Full Stack Engineer"
                                location="Remote (India)"
                                type="Full-time"
                                department="Engineering"
                            />
                            <JobCard 
                                title="AI/ML Engineer"
                                location="Remote (India)"
                                type="Full-time"
                                department="Engineering"
                            />
                            <JobCard 
                                title="Backend Engineer (Node.js/Python)"
                                location="Remote (India)"
                                type="Full-time"
                                department="Engineering"
                            />
                            <JobCard 
                                title="Voice AI Specialist"
                                location="Remote (India)"
                                type="Full-time"
                                department="Engineering"
                            />
                        </div>
                    </div>

                    {/* Product & Design */}
                    <div style={{ marginBottom: '48px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#22c55e', letterSpacing: '2px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(34, 197, 94, 0.2)' }}>
                            PRODUCT & DESIGN
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <JobCard 
                                title="Product Designer"
                                location="Remote (India)"
                                type="Full-time"
                                department="Design"
                                color="#22c55e"
                            />
                            <JobCard 
                                title="Product Manager"
                                location="Remote (India)"
                                type="Full-time"
                                department="Product"
                                color="#22c55e"
                            />
                        </div>
                    </div>

                    {/* Business */}
                    <div>
                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#3b82f6', letterSpacing: '2px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            BUSINESS & OPERATIONS
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <JobCard 
                                title="Enterprise Sales Executive"
                                location="Remote (India)"
                                type="Full-time"
                                department="Sales"
                                color="#3b82f6"
                            />
                            <JobCard 
                                title="Customer Success Manager"
                                location="Remote (India)"
                                type="Full-time"
                                department="Customer Success"
                                color="#3b82f6"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Don't See Your Role Section */}
            <section style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '100px 48px',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <div style={{ fontSize: '48px', marginBottom: '24px' }}>💼</div>
                    <h2 style={{ fontSize: '36px', fontWeight: '300', color: 'white', letterSpacing: '-1px', marginBottom: '16px' }}>
                        Don't see your role?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
                        We're always looking for talented people. Send us your resume and tell us how you can contribute to Talkrix.
                    </p>
                    <a 
                        href="mailto:careers@talkrix.com"
                        style={{ 
                            height: '56px', 
                            borderRadius: '50px', 
                            background: 'rgba(255,255,255,0.08)', 
                            color: 'white', 
                            fontWeight: '600',
                            fontSize: '14px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '0 32px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        SEND YOUR RESUME
                        <ArrowRight style={{ width: '18px', height: '18px' }} />
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '60px 48px 40px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <Link href="/" style={{ fontWeight: '800', fontSize: '24px', color: 'white', letterSpacing: '-1px', textDecoration: 'none' }}>
                                TALKRIX
                            </Link>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '8px' }}>
                                Building the future of voice AI
                            </p>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
                            © 2026 Talkrix Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({ text, hasArrow, hasChevron, href, active }: { text: string, hasArrow?: boolean, hasChevron?: boolean, href?: string, active?: boolean }) {
    return (
        <a 
            href={href || "#"} 
            style={{ 
                color: active ? '#a855f7' : 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                fontSize: '13px', 
                fontWeight: '500',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s ease'
            }}
        >
            {text}
            {hasArrow && <ArrowUpRight style={{ width: '12px', height: '12px' }} />}
            {hasChevron && <ChevronRight style={{ width: '14px', height: '14px' }} />}
        </a>
    );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div style={{ 
            padding: '32px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.3s ease'
        }}>
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

function CultureItem({ text }: { text: string }) {
    return (
        <li style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '16px', 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '16px' 
        }}>
            <Zap style={{ width: '18px', height: '18px', color: '#a855f7', flexShrink: 0 }} />
            {text}
        </li>
    );
}

function JobCard({ title, location, type, department, color = '#a855f7' }: { 
    title: string, 
    location: string, 
    type: string, 
    department: string,
    color?: string 
}) {
    return (
        <a 
            href={`mailto:careers@talkrix.com?subject=Application for ${title}`}
            style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 32px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = `${color}40`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
        >
            <div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>{title}</h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                        <MapPin style={{ width: '14px', height: '14px' }} />
                        {location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
                        <Clock style={{ width: '14px', height: '14px' }} />
                        {type}
                    </span>
                </div>
            </div>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px' 
            }}>
                <span style={{ 
                    padding: '6px 14px', 
                    backgroundColor: `${color}20`, 
                    borderRadius: '20px', 
                    fontSize: '13px', 
                    color: color,
                    fontWeight: '500'
                }}>
                    {department}
                </span>
                <ArrowRight style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.5)' }} />
            </div>
        </a>
    );
}
