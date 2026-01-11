"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
                    Terms & Conditions
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '48px' }}>
                    Last updated: January 11, 2026
                </p>

                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: '1.8' }}>
                    <Section title="1. Acceptance of Terms">
                        <p>
                            By accessing and using Talkrix (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
                        </p>
                    </Section>

                    <Section title="2. Description of Service">
                        <p>
                            Talkrix provides a voice AI platform that enables developers to build, deploy, and scale real-time voice AI agents. Our services include but are not limited to:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Voice AI agent creation and management</li>
                            <li style={{ marginBottom: '8px' }}>Real-time speech-to-text and text-to-speech processing</li>
                            <li style={{ marginBottom: '8px' }}>API access for voice interactions</li>
                            <li style={{ marginBottom: '8px' }}>Analytics and reporting tools</li>
                            <li style={{ marginBottom: '8px' }}>Integration capabilities with third-party services</li>
                        </ul>
                    </Section>

                    <Section title="3. User Accounts">
                        <p>
                            To access certain features of the Service, you must register for an account. When you register, you agree to:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Provide accurate and complete information</li>
                            <li style={{ marginBottom: '8px' }}>Maintain the security of your account credentials</li>
                            <li style={{ marginBottom: '8px' }}>Notify us immediately of any unauthorized access</li>
                            <li style={{ marginBottom: '8px' }}>Accept responsibility for all activities under your account</li>
                        </ul>
                    </Section>

                    <Section title="4. Acceptable Use Policy">
                        <p>
                            You agree not to use the Service to:
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Violate any applicable laws or regulations</li>
                            <li style={{ marginBottom: '8px' }}>Infringe upon intellectual property rights</li>
                            <li style={{ marginBottom: '8px' }}>Transmit harmful, threatening, or abusive content</li>
                            <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorized access to our systems</li>
                            <li style={{ marginBottom: '8px' }}>Interfere with or disrupt the Service</li>
                            <li style={{ marginBottom: '8px' }}>Use the Service for spam or unsolicited communications</li>
                        </ul>
                    </Section>

                    <Section title="5. Payment Terms">
                        <p>
                            Certain aspects of the Service are provided on a subscription basis. You agree to pay all fees associated with your selected plan. Fees are non-refundable except as required by law or as explicitly stated in these terms.
                        </p>
                        <ul style={{ marginTop: '16px', paddingLeft: '24px' }}>
                            <li style={{ marginBottom: '8px' }}>Subscription fees are billed in advance on a monthly or annual basis</li>
                            <li style={{ marginBottom: '8px' }}>Usage-based charges are billed in arrears</li>
                            <li style={{ marginBottom: '8px' }}>We reserve the right to modify pricing with 30 days notice</li>
                        </ul>
                    </Section>

                    <Section title="6. Intellectual Property">
                        <p>
                            The Service and its original content, features, and functionality are owned by Talkrix and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                        <p style={{ marginTop: '16px' }}>
                            You retain ownership of any content you create using our Service. By using our Service, you grant us a limited license to process your content as necessary to provide the Service.
                        </p>
                    </Section>

                    <Section title="7. Data Processing">
                        <p>
                            We process voice data and other information as necessary to provide the Service. Our data handling practices are described in our Privacy Policy. By using the Service, you consent to such processing.
                        </p>
                    </Section>

                    <Section title="8. Service Level Agreement">
                        <p>
                            For paid plans, we commit to 99.9% uptime for our core services. Scheduled maintenance windows are excluded from this calculation. Credits may be issued for downtime exceeding this threshold as described in our SLA documentation.
                        </p>
                    </Section>

                    <Section title="9. Limitation of Liability">
                        <p>
                            To the maximum extent permitted by law, Talkrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
                        </p>
                    </Section>

                    <Section title="10. Termination">
                        <p>
                            We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>
                    </Section>

                    <Section title="11. Changes to Terms">
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Service. Continued use of the Service after changes constitutes acceptance of the new terms.
                        </p>
                    </Section>

                    <Section title="12. Contact Information">
                        <p>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p style={{ marginTop: '16px', color: '#a855f7' }}>
                            legal@talkrix.com
                        </p>
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
