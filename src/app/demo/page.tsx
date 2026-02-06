"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Mic, MicOff, Volume2, VolumeX, Sparkles, Zap, MessageCircle, Phone, PhoneOff, AlertCircle } from "lucide-react";
import Link from "next/link";

// Backend API URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.voice.talkrix.com';

// WebSocket connection states
type ConnectionState = 'idle' | 'connecting' | 'connected' | 'speaking' | 'listening' | 'processing' | 'error' | 'ended';

// Demo call response interface
interface DemoCallResponse {
    joinUrl: string;
    callId: string;
}

// Responsive hook
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

// Voice Orb Component
const VoiceOrb = ({ state, audioLevel }: { state: ConnectionState; audioLevel: number }) => {
    const getGlowIntensity = () => {
        switch (state) {
            case 'speaking': return 1 + audioLevel * 2;
            case 'listening': return 0.8 + audioLevel * 1.5;
            case 'processing': return 0.6;
            case 'connected': return 0.5;
            default: return 0.3;
        }
    };

    const getOrbColors = () => {
        switch (state) {
            case 'speaking':
                return { primary: 'rgba(124, 58, 237, 0.9)', secondary: 'rgba(139, 92, 246, 0.7)', accent: 'rgba(196, 181, 253, 0.5)', glow: 'rgba(124, 58, 237, 0.6)' };
            case 'listening':
                return { primary: 'rgba(59, 130, 246, 0.9)', secondary: 'rgba(96, 165, 250, 0.7)', accent: 'rgba(147, 197, 253, 0.5)', glow: 'rgba(59, 130, 246, 0.6)' };
            case 'processing':
                return { primary: 'rgba(34, 197, 94, 0.9)', secondary: 'rgba(74, 222, 128, 0.7)', accent: 'rgba(134, 239, 172, 0.5)', glow: 'rgba(34, 197, 94, 0.6)' };
            case 'connected':
                return { primary: 'rgba(99, 102, 241, 0.8)', secondary: 'rgba(129, 140, 248, 0.6)', accent: 'rgba(165, 180, 252, 0.4)', glow: 'rgba(99, 102, 241, 0.4)' };
            case 'error':
                return { primary: 'rgba(239, 68, 68, 0.9)', secondary: 'rgba(248, 113, 113, 0.7)', accent: 'rgba(252, 165, 165, 0.5)', glow: 'rgba(239, 68, 68, 0.6)' };
            default:
                return { primary: 'rgba(148, 163, 184, 0.6)', secondary: 'rgba(203, 213, 225, 0.4)', accent: 'rgba(226, 232, 240, 0.3)', glow: 'rgba(148, 163, 184, 0.3)' };
        }
    };

    const colors = getOrbColors();
    const intensity = getGlowIntensity();
    const isActive = ['speaking', 'listening', 'processing'].includes(state);

    return (
        <div className="voice-orb-container">
            <div className={`orb-ring orb-ring-3 ${isActive ? 'active' : ''}`}
                style={{ background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`, opacity: intensity * 0.3, animation: isActive ? 'pulse-ring 3s ease-in-out infinite' : 'none' }} />
            <div className={`orb-ring orb-ring-2 ${isActive ? 'active' : ''}`}
                style={{ background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`, opacity: intensity * 0.5, animation: isActive ? 'pulse-ring 2.5s ease-in-out infinite 0.5s' : 'none' }} />
            <div className={`orb-ring orb-ring-1 ${isActive ? 'active' : ''}`}
                style={{ background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`, opacity: intensity * 0.7, animation: isActive ? 'pulse-ring 2s ease-in-out infinite 1s' : 'none' }} />
            
            <div className={`voice-orb ${isActive ? 'active' : ''} ${state === 'speaking' ? 'speaking' : ''}`}
                style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${colors.accent} 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, ${colors.secondary} 0%, transparent 50%), radial-gradient(circle at 50% 50%, ${colors.primary} 0%, transparent 70%), linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
                    boxShadow: `0 0 ${60 * intensity}px ${colors.glow}, 0 0 ${120 * intensity}px ${colors.secondary}, inset 0 0 ${40 * intensity}px rgba(255, 255, 255, 0.1)`,
                    transform: `scale(${1 + audioLevel * 0.15})`
                }}>
                <div className="orb-highlight" />
                {isActive && (
                    <div className="particles">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="particle" style={{ animationDelay: `${i * 0.3}s`, background: colors.accent }} />
                        ))}
                    </div>
                )}
            </div>

            <div className="state-indicator">
                {state === 'speaking' && <Volume2 className="state-icon speaking" />}
                {state === 'listening' && <Mic className="state-icon listening" />}
                {state === 'processing' && <Sparkles className="state-icon processing" />}
            </div>

            <style jsx>{`
                .voice-orb-container { position: relative; width: 280px; height: 280px; display: flex; align-items: center; justify-content: center; }
                .orb-ring { position: absolute; border-radius: 50%; transition: all 0.5s ease; }
                .orb-ring-3 { width: 400px; height: 400px; }
                .orb-ring-2 { width: 340px; height: 340px; }
                .orb-ring-1 { width: 300px; height: 300px; }
                .voice-orb { width: 200px; height: 200px; border-radius: 50%; position: relative; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; }
                .voice-orb.active { animation: breathe 3s ease-in-out infinite; }
                .voice-orb.speaking { animation: speak-pulse 0.5s ease-in-out infinite; }
                .orb-highlight { position: absolute; top: 15%; left: 20%; width: 40%; height: 30%; background: radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, transparent 70%); border-radius: 50%; filter: blur(8px); }
                .particles { position: absolute; width: 100%; height: 100%; }
                .particle { position: absolute; width: 6px; height: 6px; border-radius: 50%; animation: float-particle 3s ease-in-out infinite; }
                .particle:nth-child(1) { top: 10%; left: 50%; }
                .particle:nth-child(2) { top: 30%; left: 85%; }
                .particle:nth-child(3) { top: 70%; left: 90%; }
                .particle:nth-child(4) { top: 90%; left: 50%; }
                .particle:nth-child(5) { top: 70%; left: 10%; }
                .particle:nth-child(6) { top: 30%; left: 15%; }
                .state-indicator { position: absolute; bottom: -50px; display: flex; align-items: center; gap: 8px; }
                .state-icon { width: 24px; height: 24px; }
                .state-icon.speaking { color: #8b5cf6; animation: icon-pulse 1s ease-in-out infinite; }
                .state-icon.listening { color: #3b82f6; animation: icon-pulse 1.5s ease-in-out infinite; }
                .state-icon.processing { color: #22c55e; animation: spin 2s linear infinite; }
                @keyframes breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
                @keyframes speak-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
                @keyframes pulse-ring { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.1); opacity: 0.6; } }
                @keyframes float-particle { 0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; } 50% { transform: translateY(-20px) scale(1.2); opacity: 1; } }
                @keyframes icon-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

// Conversation bubble component
const ConversationBubble = ({ message, isAI, isStreaming }: { message: string; isAI: boolean; isStreaming?: boolean }) => (
    <div className={`conversation-bubble ${isAI ? 'ai' : 'user'}`}>
        <div className="bubble-content">
            {message}
            {isStreaming && <span className="streaming-cursor">▊</span>}
        </div>
        <style jsx>{`
            .conversation-bubble { max-width: 85%; margin-bottom: 12px; animation: fadeInUp 0.3s ease; }
            .conversation-bubble.ai { align-self: flex-start; }
            .conversation-bubble.user { align-self: flex-end; }
            .bubble-content { padding: 14px 18px; border-radius: 20px; font-size: 15px; line-height: 1.5; }
            .conversation-bubble.ai .bubble-content { background: rgba(99, 102, 241, 0.15); border: 1px solid rgba(99, 102, 241, 0.3); border-bottom-left-radius: 6px; color: #e0e7ff; }
            .conversation-bubble.user .bubble-content { background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.3); border-bottom-right-radius: 6px; color: #bfdbfe; }
            .streaming-cursor { animation: blink 0.8s infinite; color: #818cf8; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        `}</style>
    </div>
);

export default function DemoPage() {
    const { isMobile } = useResponsive();
    const [connectionState, setConnectionState] = useState<ConnectionState>('idle');
    const [audioLevel, setAudioLevel] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeakerOff, setIsSpeakerOff] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isAI: boolean; isStreaming?: boolean }[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [callDuration, setCallDuration] = useState(0);
    
    const ultravoxSessionRef = useRef<any>(null);
    const callStartTimeRef = useRef<number | null>(null);
    const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Create demo call via backend
    const createDemoCall = async (): Promise<DemoCallResponse | null> => {
        const response = await fetch(`${API_BASE_URL}/demo/call`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ maxDuration: '180s' }),
        });
        const data = await response.json();
        console.log('Demo API response:', data);
        // Check for successful response (statusCode 201 or success: true)
        if ((data.statusCode === 201 || data.success) && data.data && data.data.joinUrl) {
            return { joinUrl: data.data.joinUrl, callId: data.data.callId };
        }
        throw new Error(data.message || 'Failed to create demo call');
    };

    // Connect to Ultravox using SDK
    const connectToUltravox = async (joinUrl: string) => {
        // Dynamically import the Ultravox client
        const { UltravoxSession } = await import('ultravox-client');
        
        // Create a new session
        const session = new UltravoxSession();
        ultravoxSessionRef.current = session;

        // Set up event listeners
        session.addEventListener('status', () => {
            console.log('Session status:', session.status);
            const status = session.status || '';
            
            // Map Ultravox SDK status to our ConnectionState
            // SDK statuses: disconnected, disconnecting, connecting, idle, listening, thinking, speaking
            if (status === 'disconnected' || status === 'disconnecting') {
                setConnectionState('ended');
            } else if (status === 'listening') {
                setConnectionState('listening');
            } else if (status === 'speaking') {
                setConnectionState('speaking');
            } else if (status === 'connecting') {
                setConnectionState('connecting');
            } else if (status === 'idle') {
                setConnectionState('connected');
            } else if (status === 'thinking') {
                setConnectionState('processing');
            }
        });

        session.addEventListener('transcripts', () => {
            const transcripts = session.transcripts || [];
            const formattedMessages = transcripts.map((t: any) => ({
                text: t.text || '',
                isAI: t.speaker === 'agent',
                isStreaming: !t.isFinal && t.speaker === 'agent',
            }));
            setMessages(formattedMessages);
        });

        // Join the call
        await session.joinCall(joinUrl);
        
        // Start duration timer
        callStartTimeRef.current = Date.now();
        durationIntervalRef.current = setInterval(() => {
            if (callStartTimeRef.current) {
                setCallDuration(Math.floor((Date.now() - callStartTimeRef.current) / 1000));
            }
        }, 1000);
        
        setConnectionState('connected');
    };

    // Cleanup
    const cleanup = async () => {
        if (durationIntervalRef.current) { clearInterval(durationIntervalRef.current); durationIntervalRef.current = null; }
        if (ultravoxSessionRef.current) { 
            try {
                await ultravoxSessionRef.current.leaveCall(); 
            } catch (e) {
                console.error('Error leaving call:', e);
            }
            ultravoxSessionRef.current = null; 
        }
        callStartTimeRef.current = null;
    };

    // Start demo
    const startDemo = async () => {
        try {
            setConnectionState('connecting');
            setErrorMessage('');
            setMessages([]);
            setCallDuration(0);
            
            const demoCall = await createDemoCall();
            if (!demoCall) throw new Error('Failed to create demo session');
            
            console.log('Demo call created, joining:', demoCall.joinUrl);
            await connectToUltravox(demoCall.joinUrl);
        } catch (error: any) {
            console.error('Failed to start demo:', error);
            setConnectionState('error');
            setErrorMessage(error.message || 'Failed to connect. Please try again.');
            await cleanup();
        }
    };

    // Stop demo
    const stopDemo = async () => { await cleanup(); setConnectionState('idle'); setAudioLevel(0); };

    // Toggle mute
    const toggleMute = () => {
        if (ultravoxSessionRef.current) {
            if (isMuted) {
                ultravoxSessionRef.current.unmute();
            } else {
                ultravoxSessionRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    // Format duration
    const formatDuration = (seconds: number) => `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;

    // Simulate audio levels
    useEffect(() => {
        if (connectionState === 'speaking' || connectionState === 'listening') {
            const interval = setInterval(() => {
                setAudioLevel(prev => {
                    const target = connectionState === 'speaking' ? 0.5 + Math.random() * 0.3 : 0.2 + Math.random() * 0.2;
                    return prev + (target - prev) * 0.3;
                });
            }, 100);
            return () => clearInterval(interval);
        } else {
            setAudioLevel(0);
        }
    }, [connectionState]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { return () => { cleanup(); }; }, []);

    const getStateMessage = () => {
        switch (connectionState) {
            case 'idle': return 'Click to start conversation';
            case 'connecting': return 'Connecting to AI...';
            case 'connected': return 'Connected! Initializing...';
            case 'speaking': return 'AI is speaking...';
            case 'listening': return 'Listening to you...';
            case 'processing': return 'Processing...';
            case 'error': return errorMessage || 'Connection error';
            case 'ended': return 'Call ended';
            default: return '';
        }
    };

    return (
        <div className="demo-page">
            <div className="bg-gradient" />
            <div className="bg-dots" />
            
            <header className="demo-header">
                <Link href="/" className="back-link">
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>
                
                <div className="header-badge">
                    <Sparkles size={16} />
                    <span>Live Demo</span>
                    {connectionState !== 'idle' && connectionState !== 'error' && (
                        <span className="duration">{formatDuration(callDuration)}</span>
                    )}
                </div>
            </header>

            <main className="demo-main">
                <div className="demo-content">
                    <div className="title-section">
                        <h1 className="demo-title">Experience <span className="gradient-text">AI Voice</span></h1>
                        <p className="demo-subtitle">Talk to our AI assistant in real-time</p>
                    </div>

                    <div className="orb-section" onClick={() => connectionState === 'idle' && startDemo()}>
                        <VoiceOrb state={connectionState} audioLevel={audioLevel} />
                        
                        <p className={`state-message ${connectionState === 'error' ? 'error' : ''}`}>
                            {connectionState === 'error' && <AlertCircle size={16} />}
                            {getStateMessage()}
                        </p>
                        
                        <div className="controls">
                            {connectionState === 'idle' || connectionState === 'ended' ? (
                                <button className="start-btn" onClick={startDemo}>
                                    <Phone size={20} />
                                    <span>{connectionState === 'ended' ? 'Start New Call' : 'Start Conversation'}</span>
                                </button>
                            ) : connectionState === 'error' ? (
                                <button className="start-btn retry" onClick={startDemo}>
                                    <Phone size={20} />
                                    <span>Try Again</span>
                                </button>
                            ) : (
                                <div className="active-controls">
                                    <button className={`control-btn ${isMuted ? 'active' : ''}`} onClick={toggleMute}>
                                        {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                                    </button>
                                    <button className="end-btn" onClick={stopDemo}>
                                        <PhoneOff size={20} />
                                    </button>
                                    <button className={`control-btn ${isSpeakerOff ? 'active' : ''}`} onClick={() => setIsSpeakerOff(!isSpeakerOff)}>
                                        {isSpeakerOff ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {messages.length > 0 && (
                        <div className="conversation-area">
                            <div className="conversation-header">
                                <MessageCircle size={18} />
                                <span>Conversation</span>
                            </div>
                            <div className="messages-container">
                                {messages.map((msg, idx) => (
                                    <ConversationBubble key={idx} message={msg.text} isAI={msg.isAI} isStreaming={msg.isStreaming} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="features-grid">
                        <div className="feature-card">
                            <Zap className="feature-icon" />
                            <h3>Real-time AI</h3>
                            <p>Sub-100ms response latency</p>
                        </div>
                        <div className="feature-card">
                            <Globe className="feature-icon" />
                            <h3>Natural Voice</h3>
                            <p>Human-like conversations</p>
                        </div>
                        <div className="feature-card">
                            <MessageCircle className="feature-icon" />
                            <h3>Context Aware</h3>
                            <p>Understands your needs</p>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .demo-page { min-height: 100vh; position: relative; overflow-x: hidden; background: linear-gradient(135deg, #0a0a1a 0%, #0f0f2d 50%, #1a1a3e 100%); }
                .bg-gradient { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%); pointer-events: none; }
                .bg-dots { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 30px 30px; pointer-events: none; }
                .demo-header { display: flex; justify-content: space-between; align-items: center; padding: 20px ${isMobile ? '16px' : '48px'}; position: relative; z-index: 10; }
                .back-link { display: flex; align-items: center; gap: 8px; color: rgba(255, 255, 255, 0.7); text-decoration: none; font-size: 14px; transition: color 0.2s; }
                .back-link:hover { color: white; }
                .header-badge { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 20px; color: #a5b4fc; font-size: 13px; font-weight: 500; }
                .duration { margin-left: 8px; padding-left: 8px; border-left: 1px solid rgba(255,255,255,0.2); font-family: monospace; }
                .demo-main { display: flex; justify-content: center; padding: ${isMobile ? '20px 16px 60px' : '40px 48px 80px'}; }
                .demo-content { max-width: 800px; width: 100%; display: flex; flex-direction: column; align-items: center; }
                .title-section { text-align: center; margin-bottom: 50px; }
                .demo-title { font-size: ${isMobile ? '2.5rem' : '3.5rem'}; font-weight: 700; color: white; margin-bottom: 16px; letter-spacing: -0.02em; }
                .gradient-text { background: linear-gradient(135deg, #818cf8, #a78bfa, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
                .demo-subtitle { font-size: ${isMobile ? '1rem' : '1.2rem'}; color: rgba(255, 255, 255, 0.6); max-width: 500px; margin: 0 auto; }
                .orb-section { display: flex; flex-direction: column; align-items: center; margin-bottom: 50px; cursor: ${connectionState === 'idle' ? 'pointer' : 'default'}; }
                .state-message { margin-top: 70px; font-size: 16px; color: rgba(255, 255, 255, 0.7); min-height: 24px; display: flex; align-items: center; gap: 8px; }
                .state-message.error { color: #fca5a5; }
                .controls { margin-top: 30px; }
                .start-btn { display: flex; align-items: center; gap: 10px; padding: 16px 32px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; border-radius: 50px; color: white; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4); }
                .start-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5); }
                .start-btn.retry { background: linear-gradient(135deg, #f59e0b, #d97706); box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4); }
                .active-controls { display: flex; align-items: center; gap: 16px; }
                .control-btn { width: 50px; height: 50px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; }
                .control-btn:hover { background: rgba(255, 255, 255, 0.15); }
                .control-btn.active { background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.4); color: #fca5a5; }
                .end-btn { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #ef4444, #dc2626); border: none; color: white; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4); }
                .end-btn:hover { transform: scale(1.05); }
                .conversation-area { width: 100%; max-width: 600px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 20px; margin-bottom: 50px; }
                .conversation-header { display: flex; align-items: center; gap: 8px; color: rgba(255, 255, 255, 0.6); font-size: 14px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
                .messages-container { display: flex; flex-direction: column; max-height: 300px; overflow-y: auto; }
                .features-grid { display: grid; grid-template-columns: repeat(${isMobile ? '1' : '3'}, 1fr); gap: 20px; width: 100%; }
                .feature-card { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 24px; text-align: center; transition: all 0.3s ease; }
                .feature-card:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(99, 102, 241, 0.3); transform: translateY(-4px); }
                .feature-icon { width: 32px; height: 32px; color: #818cf8; margin-bottom: 12px; }
                .feature-card h3 { font-size: 16px; font-weight: 600; color: white; margin-bottom: 8px; }
                .feature-card p { font-size: 14px; color: rgba(255, 255, 255, 0.5); }
            `}</style>
        </div>
    );
}

const Globe = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);
