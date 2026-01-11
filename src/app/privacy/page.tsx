"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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

            {/* Header */}
            <header style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '20px 48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <button 
                    onClick={() => router.push('/')}
                    style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >
                    <ArrowLeft style={{ width: '18px', height: '18px' }} />
                    Back to Home
                </button>
                <div style={{ 
                    fontWeight: '800', 
                    fontSize: '24px', 
                    color: 'white', 
                    letterSpacing: '-1px'
                }}>
                    TALKRIX
                </div>
                <div style={{ width: '120px' }} />
            </header>

            {/* Content */}
            <main style={{ 
                position: 'relative',
                zIndex: 10,
                maxWidth: '800px',
                margin: '0 auto',
                padding: '80px 24px'
            }}>
                <h1 style={{ 
                    fontSize: '48px', 
                    fontWeight: '300', 
                    color: 'white', 
                    letterSpacing: '-2px',
                    marginBottom: '16px'
                }}>
                    Privacy Policy
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '48px' }}>
                    Last updated: January 11, 2026
                </p>

                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: '1.8' }}>
                    <Section title="1. Introduction">
                        <p>
                            At Talkrix (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our voice AI platform and related services.
                        </p>
                        <p style={{ marginTop: '16px' }}>
                            Please read this privacy policy carefully. By using our Service, you consent to the practices described in this policy.
                        </p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginTop: '24px', marginBottom: '12px' }}>
                            2.1 Information You Provide
                        </h3>
                        <ul style={{ paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Account information (name, email, password)</li>
                            <li style={{ marginBottom: '8px' }}>Payment and billing information</li>
                            <li style={{ marginBottom: '8px' }}>Profile information and preferences</li>
                            <li style={{ marginBottom: '8px' }}>Communications with our support team</li>
                            <li style={{ marginBottom: '8px' }}>Voice recordings and transcripts processed through our Service</li>
                        </ul>

                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginTop: '24px', marginBottom: '12px' }}>
                            2.2 Information Collected Automatically
                        </h3>
                        <ul style={{ paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Device information (IP address, browser type, operating system)</li>
                            <li style={{ marginBottom: '8px' }}>Usage data (features used, interaction patterns)</li>
                            <li style={{ marginBottom: '8px' }}>Log data (access times, pages viewed, errors)</li>
                            <li style={{ marginBottom: '8px' }}>Cookies and similar tracking technologies</li>
                        </ul>
                    </Section>

                    <Section title="3. How We Use Your Information">
                        <p>We use the information we collect to:</p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Provide, maintain, and improve our Service</li>
                            <li style={{ marginBottom: '8px' }}>Process transactions and send related information</li>
                            <li style={{ marginBottom: '8px' }}>Send technical notices, updates, and support messages</li>
                            <li style={{ marginBottom: '8px' }}>Respond to your comments, questions, and requests</li>
                            <li style={{ marginBottom: '8px' }}>Monitor and analyze trends, usage, and activities</li>
                            <li style={{ marginBottom: '8px' }}>Detect, investigate, and prevent security incidents</li>
                            <li style={{ marginBottom: '8px' }}>Personalize and improve your experience</li>
                            <li style={{ marginBottom: '8px' }}>Comply with legal obligations</li>
                        </ul>
                    </Section>

                    <Section title="4. Voice Data Processing">
                        <p>
                            Given the nature of our voice AI service, we want to be transparent about how we handle voice data:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Voice data is processed in real-time to provide our AI services</li>
                            <li style={{ marginBottom: '8px' }}>Recordings may be temporarily stored for service delivery</li>
                            <li style={{ marginBottom: '8px' }}>You can configure data retention settings in your dashboard</li>
                            <li style={{ marginBottom: '8px' }}>We do not use your voice data to train our models without explicit consent</li>
                            <li style={{ marginBottom: '8px' }}>All voice data is encrypted in transit and at rest</li>
                        </ul>
                    </Section>

                    <Section title="5. Information Sharing">
                        <p>We may share your information with:</p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Service Providers:</strong> Third parties that perform services on our behalf (hosting, analytics, payment processing)</li>
                            <li style={{ marginBottom: '8px' }}><strong>Business Partners:</strong> With your consent, for integrated services you choose to use</li>
                            <li style={{ marginBottom: '8px' }}><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li style={{ marginBottom: '8px' }}><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                        </ul>
                        <p style={{ marginTop: '16px' }}>
                            We do not sell your personal information to third parties.
                        </p>
                    </Section>

                    <Section title="6. Data Security">
                        <p>
                            We implement robust security measures to protect your information:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>End-to-end encryption for voice data transmission</li>
                            <li style={{ marginBottom: '8px' }}>AES-256 encryption for data at rest</li>
                            <li style={{ marginBottom: '8px' }}>SOC2 Type II certified infrastructure</li>
                            <li style={{ marginBottom: '8px' }}>Regular security audits and penetration testing</li>
                            <li style={{ marginBottom: '8px' }}>Access controls and authentication protocols</li>
                            <li style={{ marginBottom: '8px' }}>Employee security training programs</li>
                        </ul>
                    </Section>

                    <Section title="7. Data Retention">
                        <p>
                            We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. You may request deletion of your data at any time through your account settings or by contacting us.
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Account data: Retained until account deletion</li>
                            <li style={{ marginBottom: '8px' }}>Voice recordings: Configurable retention (default 30 days)</li>
                            <li style={{ marginBottom: '8px' }}>Usage logs: 12 months</li>
                            <li style={{ marginBottom: '8px' }}>Payment records: As required by law (typically 7 years)</li>
                        </ul>
                    </Section>

                    <Section title="8. Your Rights">
                        <p>Depending on your location, you may have the following rights:</p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Access:</strong> Request a copy of your personal data</li>
                            <li style={{ marginBottom: '8px' }}><strong>Correction:</strong> Request correction of inaccurate data</li>
                            <li style={{ marginBottom: '8px' }}><strong>Deletion:</strong> Request deletion of your data</li>
                            <li style={{ marginBottom: '8px' }}><strong>Portability:</strong> Request transfer of your data</li>
                            <li style={{ marginBottom: '8px' }}><strong>Restriction:</strong> Request restriction of processing</li>
                            <li style={{ marginBottom: '8px' }}><strong>Objection:</strong> Object to certain processing activities</li>
                            <li style={{ marginBottom: '8px' }}><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                        </ul>
                        <p style={{ marginTop: '16px' }}>
                            To exercise these rights, please contact us at privacy@talkrix.com
                        </p>
                    </Section>

                    <Section title="9. Cookies and Tracking">
                        <p>
                            We use cookies and similar technologies to enhance your experience:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Essential Cookies:</strong> Required for service functionality</li>
                            <li style={{ marginBottom: '8px' }}><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                            <li style={{ marginBottom: '8px' }}><strong>Preference Cookies:</strong> Remember your settings</li>
                        </ul>
                        <p style={{ marginTop: '16px' }}>
                            You can manage cookie preferences through your browser settings.
                        </p>
                    </Section>

                    <Section title="10. International Data Transfers">
                        <p>
                            Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses and adequacy decisions, to protect your data in accordance with this policy.
                        </p>
                    </Section>

                    <Section title="11. Children&apos;s Privacy">
                        <p>
                            Our Service is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </Section>

                    <Section title="12. Changes to This Policy">
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. Significant changes will be communicated via email.
                        </p>
                    </Section>

                    <Section title="13. Contact Us">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div style={{ marginTop: '16px', padding: '24px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                            <p style={{ marginBottom: '8px' }}><strong>Email:</strong> <span style={{ color: '#a855f7' }}>privacy@talkrix.com</span></p>
                            <p style={{ marginBottom: '8px' }}><strong>Address:</strong> Talkrix Inc., 123 AI Boulevard, San Francisco, CA 94105</p>
                            <p><strong>Data Protection Officer:</strong> <span style={{ color: '#a855f7' }}>dpo@talkrix.com</span></p>
                        </div>
                    </Section>
                </div>
            </main>

            {/* Footer */}
            <footer style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '32px 48px',
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

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div style={{ marginBottom: '48px' }}>
            <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: 'white', 
                marginBottom: '16px',
                letterSpacing: '-0.5px'
            }}>
                {title}
            </h2>
            {children}
        </div>
    );
}
