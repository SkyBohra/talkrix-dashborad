export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ minHeight: '100vh', width: '100%', display: 'flex' }}>
            {/* Left Panel - With animated elements */}
            <div style={{ 
                display: 'flex',
                width: '55%', 
                position: 'relative', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)'
            }}>
                {/* Animated Orbs */}
                <div style={{ 
                    position: 'absolute', 
                    top: '10%', 
                    left: '10%', 
                    width: '300px', 
                    height: '300px', 
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    animation: 'drift 20s ease-in-out infinite'
                }} />
                <div style={{ 
                    position: 'absolute', 
                    bottom: '20%', 
                    right: '10%', 
                    width: '250px', 
                    height: '250px', 
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.25) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    animation: 'drift 15s ease-in-out infinite reverse'
                }} />
                <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    width: '200px', 
                    height: '200px', 
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    animation: 'drift 18s ease-in-out infinite'
                }} />

                {/* Grid Pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)'
                }} />

                {/* Floating particles */}
                <div style={{ position: 'absolute', top: '20%', left: '20%', width: '6px', height: '6px', backgroundColor: '#a855f7', borderRadius: '50%', opacity: 0.6, animation: 'float 6s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '40%', left: '60%', width: '4px', height: '4px', backgroundColor: '#fbbf24', borderRadius: '50%', opacity: 0.6, animation: 'float 8s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '70%', left: '30%', width: '5px', height: '5px', backgroundColor: '#f97316', borderRadius: '50%', opacity: 0.6, animation: 'float 7s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '30%', left: '80%', width: '4px', height: '4px', backgroundColor: '#a855f7', borderRadius: '50%', opacity: 0.6, animation: 'float 9s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '80%', left: '70%', width: '6px', height: '6px', backgroundColor: '#fbbf24', borderRadius: '50%', opacity: 0.6, animation: 'float 5s ease-in-out infinite' }} />
                
                {/* Text Content */}
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 64px' }}>
                    <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        marginBottom: '24px',
                        borderRadius: '16px', 
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: '0 12px 40px rgba(251, 191, 36, 0.3)'
                    }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white"/>
                        </svg>
                    </div>
                    <h1 style={{ fontSize: '44px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: 1.2 }}>
                        Welcome to <span style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Talkrix</span>
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', lineHeight: 1.7, maxWidth: '420px' }}>
                        Experience the future of communication with our AI-powered voice system. Seamless conversations, intelligent responses, and natural interactions.
                    </p>
                    
                    {/* Feature badges */}
                    <div style={{ display: 'flex', gap: '12px', marginTop: '32px', flexWrap: 'wrap' }}>
                        <div style={{ padding: '8px 16px', backgroundColor: 'rgba(168, 85, 247, 0.15)', borderRadius: '20px', border: '1px solid rgba(168, 85, 247, 0.3)', fontSize: '13px', color: '#a855f7' }}>
                            ✨ AI Powered
                        </div>
                        <div style={{ padding: '8px 16px', backgroundColor: 'rgba(251, 191, 36, 0.15)', borderRadius: '20px', border: '1px solid rgba(251, 191, 36, 0.3)', fontSize: '13px', color: '#fbbf24' }}>
                            🎯 Real-time
                        </div>
                        <div style={{ padding: '8px 16px', backgroundColor: 'rgba(34, 197, 94, 0.15)', borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.3)', fontSize: '13px', color: '#22c55e' }}>
                            🔒 Secure
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right Panel - Form */}
            <div style={{ 
                width: '45%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#ffffff',
                padding: '48px'
            }}>
                <div style={{ width: '100%', maxWidth: '380px' }}>
                    {children}
                </div>
            </div>

            <style>{`
                @keyframes drift {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(30px, -30px); }
                    50% { transform: translate(0, -50px); }
                    75% { transform: translate(-30px, -25px); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); opacity: 0.6; }
                    50% { transform: translateY(-20px); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
