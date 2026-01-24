"use client";

import { useState } from "react";
import { ArrowLeft, Book, Code, Zap, Phone, Users, Brain, Settings, Webhook, Database, ChevronRight, Copy, Check, Terminal, Globe, Shield, Mic } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
    const [activeSection, setActiveSection] = useState("getting-started");
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const sections = [
        { id: "getting-started", title: "Getting Started", icon: <Zap /> },
        { id: "authentication", title: "Authentication", icon: <Shield /> },
        { id: "agents", title: "Voice Agents", icon: <Mic /> },
        { id: "calls", title: "Making Calls", icon: <Phone /> },
        { id: "campaigns", title: "Campaigns", icon: <Users /> },
        { id: "webhooks", title: "Webhooks", icon: <Webhook /> },
        { id: "corpus", title: "Knowledge Base (RAG)", icon: <Database /> },
        { id: "sdks", title: "SDKs & Libraries", icon: <Code /> },
    ];

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', color: 'white' }}>
            {/* Header */}
            <header style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '16px 32px',
                backgroundColor: 'rgba(10, 10, 15, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px' }}>
                        <ArrowLeft style={{ width: '16px', height: '16px' }} />
                        Back to Home
                    </Link>
                    <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Book style={{ width: '20px', height: '20px', color: '#a855f7' }} />
                        <span style={{ fontWeight: '700', fontSize: '18px' }}>Talkrix Docs</span>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ 
                        padding: '6px 12px', 
                        backgroundColor: 'rgba(34, 197, 94, 0.2)', 
                        borderRadius: '20px', 
                        fontSize: '12px', 
                        color: '#22c55e',
                        fontWeight: '600'
                    }}>
                        API v1.0
                    </span>
                </div>
            </header>

            <div style={{ display: 'flex', paddingTop: '64px' }}>
                {/* Sidebar */}
                <aside style={{ 
                    position: 'fixed',
                    left: 0,
                    top: '64px',
                    bottom: 0,
                    width: '280px',
                    padding: '24px',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    overflowY: 'auto',
                    backgroundColor: '#0a0a0f'
                }}>
                    <nav>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px 16px',
                                    marginBottom: '4px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    backgroundColor: activeSection === section.id ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                                    color: activeSection === section.id ? '#a855f7' : 'rgba(255,255,255,0.7)',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: activeSection === section.id ? '600' : '400',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <span style={{ opacity: activeSection === section.id ? 1 : 0.6 }}>{section.icon}</span>
                                {section.title}
                            </button>
                        ))}
                    </nav>

                    <div style={{ marginTop: '32px', padding: '20px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>Need help?</p>
                        <a href="mailto:support@talkrix.com" style={{ color: '#a855f7', fontSize: '13px', textDecoration: 'none' }}>
                            support@talkrix.com
                        </a>
                    </div>
                </aside>

                {/* Main Content */}
                <main style={{ marginLeft: '280px', flex: 1, padding: '40px 60px', maxWidth: '900px' }}>
                    
                    {/* Getting Started */}
                    {activeSection === "getting-started" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Getting Started</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Build intelligent voice agents in minutes. Talkrix provides everything you need to create, deploy, and scale AI-powered voice experiences.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '48px' }}>
                                <FeatureBox icon={<Zap />} title="Sub-100ms Latency" description="Real-time voice interactions with minimal delay" />
                                <FeatureBox icon={<Globe />} title="50+ Languages" description="Multilingual support out of the box" />
                                <FeatureBox icon={<Brain />} title="GPT-4 Powered" description="Advanced reasoning and natural conversations" />
                                <FeatureBox icon={<Shield />} title="Enterprise Security" description="SOC2 Type II, HIPAA compliant" />
                            </div>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Quick Start</h2>
                            
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#a855f7' }}>1. Get your API Key</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                                    Sign up at <a href="https://voice.talkrix.com" style={{ color: '#a855f7' }}>voice.talkrix.com</a> and get your API key from the dashboard.
                                </p>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#a855f7' }}>2. Create your first agent</h3>
                                <CodeBlock 
                                    id="create-agent"
                                    code={`curl -X POST https://api.voice.talkrix.com/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Sales Assistant",
    "systemPrompt": "You are a helpful sales assistant. Be friendly and professional.",
    "voice": "en-US-Neural-Female",
    "language": "en",
    "maxDuration": "600s"
  }'`}
                                    copiedCode={copiedCode}
                                    onCopy={copyToClipboard}
                                />
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#a855f7' }}>3. Make a test call</h3>
                                <CodeBlock 
                                    id="test-call"
                                    code={`curl -X POST https://api.voice.talkrix.com/agents/{agentId}/call \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "callType": "test",
    "customerName": "Test User"
  }'`}
                                    copiedCode={copiedCode}
                                    onCopy={copyToClipboard}
                                />
                            </div>

                            <div style={{ padding: '20px', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                                <p style={{ color: '#22c55e', fontWeight: '600', marginBottom: '8px' }}>🎉 You're ready!</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                    Your AI agent is now live. Use the returned joinUrl to test the voice call in your browser.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Authentication */}
                    {activeSection === "authentication" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Authentication</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Talkrix uses API keys for authentication. Include your API key in the Authorization header of all requests.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>API Key Authentication</h2>
                            <CodeBlock 
                                id="auth-header"
                                code={`Authorization: Bearer YOUR_API_KEY`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Register a New Account</h2>
                            <CodeBlock 
                                id="register"
                                code={`curl -X POST https://api.voice.talkrix.com/auth/register \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "you@company.com",
    "password": "securepassword",
    "name": "Your Name"
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', marginTop: '24px' }}>Response</h3>
                            <CodeBlock 
                                id="register-response"
                                code={`{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userId": "64abc123def456",
    "apiKey": "tk_live_xxxxxxxxxxxx"
  }
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Login</h2>
                            <CodeBlock 
                                id="login"
                                code={`curl -X POST https://api.voice.talkrix.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "you@company.com",
    "password": "securepassword"
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                    {/* Agents */}
                    {activeSection === "agents" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Voice Agents</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Agents are the AI-powered voice assistants that handle conversations. Each agent can have its own personality, voice, and capabilities.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Create Agent</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>POST /agents</code></p>
                            
                            <CodeBlock 
                                id="create-agent-full"
                                code={`{
  "name": "Customer Support Agent",
  "systemPrompt": "You are a helpful customer support agent for Acme Inc. Be friendly, professional, and always try to resolve issues on the first call.",
  "voice": "en-US-Neural-Female",
  "language": "en",
  "maxDuration": "600s",
  "recordingEnabled": true,
  "temperature": 0.7,
  "firstSpeaker": "FIRST_SPEAKER_AGENT",
  "selectedTools": [],
  "corpusIds": []
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', marginTop: '32px' }}>Agent Parameters</h3>
                            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '32px' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ textAlign: 'left', padding: '12px 0', color: 'rgba(255,255,255,0.9)' }}>Parameter</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', color: 'rgba(255,255,255,0.9)' }}>Type</th>
                                        <th style={{ textAlign: 'left', padding: '12px 0', color: 'rgba(255,255,255,0.9)' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ParamRow name="name" type="string" desc="Display name for the agent" required />
                                    <ParamRow name="systemPrompt" type="string" desc="Instructions for the AI agent's behavior" required />
                                    <ParamRow name="voice" type="string" desc="Voice ID (use /agents/voices to list available)" />
                                    <ParamRow name="language" type="string" desc="Language code (en, es, hi, etc.)" />
                                    <ParamRow name="maxDuration" type="string" desc="Max call duration (e.g., '600s')" />
                                    <ParamRow name="recordingEnabled" type="boolean" desc="Enable call recording" />
                                    <ParamRow name="temperature" type="number" desc="AI creativity (0-1)" />
                                    <ParamRow name="corpusIds" type="array" desc="Knowledge base IDs for RAG" />
                                </tbody>
                            </table>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>List Agents</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>GET /agents/user/{'{userId}'}</code></p>
                            
                            <CodeBlock 
                                id="list-agents"
                                code={`curl https://api.voice.talkrix.com/agents/user/{userId}?page=1&limit=10 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Get Available Voices</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>GET /agents/voices</code></p>
                            
                            <CodeBlock 
                                id="get-voices"
                                code={`curl https://api.voice.talkrix.com/agents/voices?search=english \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                    {/* Calls */}
                    {activeSection === "calls" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Making Calls</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Initiate voice calls with your AI agents. Support for test calls, inbound, and outbound calls.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Test Call (Browser-based)</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>POST /agents/{'{agentId}'}/call</code></p>
                            
                            <CodeBlock 
                                id="test-call-full"
                                code={`curl -X POST https://api.voice.talkrix.com/agents/{agentId}/call \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "maxDuration": "300s",
    "recordingEnabled": true,
    "callType": "test",
    "customerName": "Test Customer"
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', marginTop: '24px' }}>Response</h3>
                            <CodeBlock 
                                id="test-call-response"
                                code={`{
  "success": true,
  "data": {
    "callHistoryId": "64abc123def456",
    "joinUrl": "https://call.talkrix.com/join/xxxx",
    "status": "pending"
  }
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Outbound Call (Phone)</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>POST /agents/{'{agentId}'}/outbound-call</code></p>
                            
                            <CodeBlock 
                                id="outbound-call"
                                code={`curl -X POST https://api.voice.talkrix.com/agents/{agentId}/outbound-call \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerPhone": "+14155551234",
    "customerName": "John Doe",
    "maxDuration": "600s",
    "recordingEnabled": true,
    "metadata": {
      "source": "api",
      "campaignId": "optional-campaign-id"
    }
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Get Call History</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>GET /call-history</code></p>
                            
                            <CodeBlock 
                                id="call-history"
                                code={`curl "https://api.voice.talkrix.com/call-history?page=1&limit=20&status=completed" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Call Statistics</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>GET /call-history/stats</code></p>
                            
                            <CodeBlock 
                                id="call-stats"
                                code={`curl https://api.voice.talkrix.com/call-history/stats \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                    {/* Campaigns */}
                    {activeSection === "campaigns" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Campaigns</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Create and manage outbound calling campaigns. Schedule calls, upload contact lists, and track results.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Campaign Types</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
                                <div style={{ padding: '20px', backgroundColor: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                                    <h4 style={{ color: '#a855f7', marginBottom: '8px' }}>Outbound</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Scheduled calls to contact list</p>
                                </div>
                                <div style={{ padding: '20px', backgroundColor: 'rgba(34, 197, 94, 0.1)', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                                    <h4 style={{ color: '#22c55e', marginBottom: '8px' }}>Inbound</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Receive calls on dedicated number</p>
                                </div>
                                <div style={{ padding: '20px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                    <h4 style={{ color: '#3b82f6', marginBottom: '8px' }}>On-Demand</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>Trigger calls via API</p>
                                </div>
                            </div>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Create Campaign</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>POST /campaigns</code></p>
                            
                            <CodeBlock 
                                id="create-campaign"
                                code={`{
  "name": "January Sales Campaign",
  "type": "outbound",
  "agentId": "64abc123def456",
  "description": "Q1 sales outreach campaign",
  "contacts": [
    { "name": "John Doe", "phoneNumber": "+14155551234" },
    { "name": "Jane Smith", "phoneNumber": "+14155555678" }
  ],
  "schedule": {
    "scheduledDate": "2026-01-25",
    "scheduledTime": "09:00",
    "endTime": "17:00",
    "timezone": "America/New_York"
  }
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Start Campaign</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>PUT /campaigns/{'{campaignId}'}/start</code></p>
                            
                            <CodeBlock 
                                id="start-campaign"
                                code={`curl -X PUT https://api.voice.talkrix.com/campaigns/{campaignId}/start \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Campaign Statuses</h2>
                            <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '2' }}>
                                <li><code style={{ color: '#f59e0b' }}>draft</code> - Campaign created but not started</li>
                                <li><code style={{ color: '#3b82f6' }}>scheduled</code> - Scheduled to run at specific time</li>
                                <li><code style={{ color: '#22c55e' }}>active</code> - Currently making calls</li>
                                <li><code style={{ color: '#f59e0b' }}>paused</code> - Temporarily stopped</li>
                                <li><code style={{ color: '#a855f7' }}>completed</code> - All contacts called</li>
                            </ul>
                        </div>
                    )}

                    {/* Webhooks */}
                    {activeSection === "webhooks" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Webhooks</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Receive real-time notifications about call events. Configure webhooks to integrate Talkrix with your systems.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Webhook Events</h2>
                            <ul style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '2', marginBottom: '32px' }}>
                                <li><code style={{ color: '#a855f7' }}>call.started</code> - Call has been initiated</li>
                                <li><code style={{ color: '#a855f7' }}>call.ended</code> - Call has ended</li>
                                <li><code style={{ color: '#a855f7' }}>call.recording.ready</code> - Recording is available</li>
                                <li><code style={{ color: '#a855f7' }}>call.transcript.ready</code> - Transcript is available</li>
                            </ul>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Webhook Payload Example</h2>
                            <CodeBlock 
                                id="webhook-payload"
                                code={`{
  "event": "call.ended",
  "timestamp": "2026-01-24T10:30:00Z",
  "data": {
    "callId": "64abc123def456",
    "agentId": "64xyz789ghi012",
    "status": "completed",
    "duration": 245,
    "recordingUrl": "https://storage.talkrix.com/recordings/xxx.mp3",
    "transcript": "..."
  }
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Configure Webhook</h2>
                            <CodeBlock 
                                id="configure-webhook"
                                code={`curl -X POST https://api.voice.talkrix.com/webhooks \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-server.com/webhook",
    "events": ["call.ended", "call.recording.ready"],
    "secret": "your-webhook-secret"
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                    {/* Corpus (RAG) */}
                    {activeSection === "corpus" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Knowledge Base (RAG)</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Upload documents to create a knowledge base. Your AI agents can reference this information during calls for accurate, contextual responses.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>Create Corpus</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}><code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 8px', borderRadius: '4px', color: '#c084fc' }}>POST /corpus</code></p>
                            
                            <CodeBlock 
                                id="create-corpus"
                                code={`curl -X POST https://api.voice.talkrix.com/corpus \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Product FAQs",
    "description": "Frequently asked questions about our products"
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Upload Document</h2>
                            <CodeBlock 
                                id="upload-document"
                                code={`curl -X POST https://api.voice.talkrix.com/corpus/{corpusId}/documents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@product-manual.pdf" \\
  -F "name=Product Manual"`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Attach to Agent</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                                Add the corpus ID to your agent's <code style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)', padding: '2px 6px', borderRadius: '4px', color: '#c084fc' }}>corpusIds</code> array:
                            </p>
                            <CodeBlock 
                                id="attach-corpus"
                                code={`curl -X PUT https://api.voice.talkrix.com/agents/{agentId} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "corpusIds": ["corpus-id-1", "corpus-id-2"]
  }'`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                    {/* SDKs */}
                    {activeSection === "sdks" && (
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>SDKs & Libraries</h1>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
                                Official SDKs and community libraries to integrate Talkrix into your applications.
                            </p>

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>JavaScript / TypeScript</h2>
                            <CodeBlock 
                                id="js-install"
                                code={`npm install @talkrix/sdk`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <CodeBlock 
                                id="js-usage"
                                code={`import { Talkrix } from '@talkrix/sdk';

const talkrix = new Talkrix({ apiKey: 'YOUR_API_KEY' });

// Create an agent
const agent = await talkrix.agents.create({
  name: 'Sales Bot',
  systemPrompt: 'You are a helpful sales assistant.',
  voice: 'en-US-Neural-Female'
});

// Make a call
const call = await talkrix.calls.create(agent.id, {
  customerPhone: '+14155551234',
  customerName: 'John Doe'
});

console.log('Call initiated:', call.callHistoryId);`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>Python</h2>
                            <CodeBlock 
                                id="python-install"
                                code={`pip install talkrix`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <CodeBlock 
                                id="python-usage"
                                code={`from talkrix import Talkrix

client = Talkrix(api_key="YOUR_API_KEY")

# Create an agent
agent = client.agents.create(
    name="Sales Bot",
    system_prompt="You are a helpful sales assistant.",
    voice="en-US-Neural-Female"
)

# Make a call
call = client.calls.create(
    agent_id=agent.id,
    customer_phone="+14155551234",
    customer_name="John Doe"
)

print(f"Call initiated: {call.call_history_id}")`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />

                            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', marginTop: '32px' }}>React Hook</h2>
                            <CodeBlock 
                                id="react-usage"
                                code={`import { useTalkrix } from '@talkrix/react';

function CallButton({ agentId }) {
  const { startCall, isConnecting, isInCall, endCall } = useTalkrix({
    apiKey: 'YOUR_API_KEY',
    agentId
  });

  return (
    <button onClick={isInCall ? endCall : startCall}>
      {isConnecting ? 'Connecting...' : isInCall ? 'End Call' : 'Start Call'}
    </button>
  );
}`}
                                copiedCode={copiedCode}
                                onCopy={copyToClipboard}
                            />
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}

function FeatureBox({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ color: '#a855f7', marginBottom: '12px' }}>{icon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{description}</p>
        </div>
    );
}

function CodeBlock({ id, code, copiedCode, onCopy }: { id: string, code: string, copiedCode: string | null, onCopy: (code: string, id: string) => void }) {
    return (
        <div style={{ position: 'relative', marginBottom: '24px' }}>
            <pre style={{ 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'auto',
                fontSize: '13px',
                lineHeight: '1.6'
            }}>
                <code style={{ color: '#e2e8f0' }}>{code}</code>
            </pre>
            <button 
                onClick={() => onCopy(code, id)}
                style={{ 
                    position: 'absolute', 
                    top: '12px', 
                    right: '12px',
                    padding: '8px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    color: copiedCode === id ? '#22c55e' : 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {copiedCode === id ? <Check style={{ width: '16px', height: '16px' }} /> : <Copy style={{ width: '16px', height: '16px' }} />}
            </button>
        </div>
    );
}

function ParamRow({ name, type, desc, required }: { name: string, type: string, desc: string, required?: boolean }) {
    return (
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <td style={{ padding: '12px 0' }}>
                <code style={{ color: '#a855f7' }}>{name}</code>
                {required && <span style={{ color: '#ef4444', marginLeft: '4px', fontSize: '12px' }}>*</span>}
            </td>
            <td style={{ padding: '12px 0', color: '#22c55e', fontSize: '13px' }}>{type}</td>
            <td style={{ padding: '12px 0', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{desc}</td>
        </tr>
    );
}
