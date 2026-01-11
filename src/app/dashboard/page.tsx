"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Mic, ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

export default function Dashboard() {
    const router = useRouter();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!roomName) return;
        router.push(`/room/${roomName}`);
    };

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Dot Pattern Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                pointerEvents: 'none',
                zIndex: 1
            }} />

            {/* Navbar */}
            <nav style={{ 
                position: 'relative',
                zIndex: 10,
                padding: '20px 48px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
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
                        <NavLink text="VOICE AGENTS" />
                        <NavLink text="FEATURES" />
                        <NavLink text="DOCS" hasArrow />
                        <NavLink text="RESOURCES" hasChevron />
                        <NavLink text="PRICING" />
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Button onClick={handleLogout} style={{ 
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)', 
                        color: 'white', 
                        border: 'none',
                        borderRadius: '50px',
                        padding: '12px 24px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <LogOut style={{ width: '16px', height: '16px' }} />
                        LOGOUT
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
            <main style={{ 
                position: 'relative',
                zIndex: 10,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                minHeight: 'calc(100vh - 200px)',
                padding: '0 48px',
                textAlign: 'center'
            }}>
                <h1 style={{ 
                    fontSize: 'clamp(48px, 10vw, 120px)', 
                    fontWeight: '400', 
                    color: 'white', 
                    marginBottom: '16px', 
                    letterSpacing: '-3px',
                    lineHeight: '1.05',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    maxWidth: '900px'
                }}>
                    Your voice,
                </h1>
                <h1 style={{ 
                    fontSize: 'clamp(48px, 10vw, 120px)', 
                    fontWeight: '400', 
                    color: 'white', 
                    marginBottom: '48px', 
                    letterSpacing: '-3px',
                    lineHeight: '1.05',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <span style={{ color: '#a855f7' }}>amplified</span> by AI
                </h1>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
                    <form onSubmit={handleJoin} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <input 
                                type="text" 
                                placeholder="Enter room name..." 
                                value={roomName} 
                                onChange={(e) => setRoomName(e.target.value)}
                                style={{ 
                                    width: '220px', 
                                    height: '56px', 
                                    borderRadius: '50px', 
                                    backgroundColor: 'rgba(255,255,255,0.1)', 
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    color: 'white',
                                    paddingLeft: '24px',
                                    paddingRight: '24px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    transition: 'all 0.2s ease',
                                    boxSizing: 'border-box'
                                }} 
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#a855f7';
                                    e.target.style.backgroundColor = 'rgba(168, 85, 247, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                }}
                            />
                        </div>
                        <Button type="submit" style={{ 
                            height: '56px', 
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
                            gap: '10px',
                            padding: '0 32px',
                            letterSpacing: '1px'
                        }}>
                            START SESSION
                            <Sparkles style={{ width: '16px', height: '16px' }} />
                        </Button>
                    </form>

                    <Button style={{ 
                        height: '56px', 
                        borderRadius: '50px', 
                        background: 'transparent', 
                        color: 'white', 
                        fontWeight: '600',
                        fontSize: '14px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        padding: '0 32px',
                        letterSpacing: '1px',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    >
                        READ THE DOCS
                        <Sparkles style={{ width: '16px', height: '16px', opacity: 0.7 }} />
                    </Button>
                </div>

                {/* Stats or Feature Pills */}
                <div style={{ display: 'flex', gap: '24px', marginTop: '32px' }}>
                    <StatPill label="Real-time" value="<100ms latency" />
                    <StatPill label="Languages" value="50+ supported" />
                    <StatPill label="Uptime" value="99.9% SLA" />
                </div>
            </main>
        </div>
    );
}

function NavLink({ text, hasArrow, hasChevron }: { text: string, hasArrow?: boolean, hasChevron?: boolean }) {
    return (
        <a 
            href="#" 
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

function StatPill({ label, value }: { label: string, value: string }) {
    return (
        <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 20px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.1)'
        }}>
            <span style={{ 
                color: '#a855f7', 
                fontSize: '13px', 
                fontWeight: '600',
                letterSpacing: '0.3px'
            }}>{label}</span>
            <span style={{ 
                color: 'rgba(255,255,255,0.6)', 
                fontSize: '13px',
                fontWeight: '400'
            }}>{value}</span>
        </div>
    );
}
