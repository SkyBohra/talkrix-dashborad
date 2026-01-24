import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://talkrix.com'),
  title: {
    default: "Talkrix - AI Voice Agents for Enterprise | Automate 80% of Customer Calls",
    template: "%s | Talkrix"
  },
  description: "Talkrix builds conversational AI voice agents that understand context, reason through problems, and take actions. Replace 80% of routine calls with enterprise-grade AI that sounds human. Sub-100ms latency, 50+ languages, HIPAA compliant.",
  keywords: [
    "AI voice agents",
    "conversational AI",
    "voice automation",
    "customer support AI",
    "enterprise voice AI",
    "AI call center",
    "voice assistant",
    "speech AI",
    "AI customer service",
    "automated voice calls",
    "real-time voice AI",
    "AI teacher",
    "intelligent tutoring",
    "voice technology"
  ],
  authors: [{ name: "Talkrix", url: "https://talkrix.com" }],
  creator: "Talkrix",
  publisher: "Talkrix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talkrix.com',
    siteName: 'Talkrix',
    title: 'Talkrix - AI Voice Agents for Enterprise',
    description: 'Build conversational AI voice agents that automate 80% of customer calls. Sub-100ms latency, 50+ languages, enterprise-grade security.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Talkrix - AI Voice Agents for Enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talkrix - AI Voice Agents for Enterprise',
    description: 'Build conversational AI voice agents that automate 80% of customer calls. Sub-100ms latency, 50+ languages.',
    images: ['/images/og-image.png'],
    creator: '@talkrix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://talkrix.com',
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
          position: 'relative',
          overflowX: 'hidden'
        }}
      >
        {/* Animated Background Container */}
        <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          
          {/* Animated Gradient Orbs */}
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          
          {/* Grid Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
          }} />
          
          {/* Floating Particles */}
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
          <div className="particle particle-5" />
          <div className="particle particle-6" />
          <div className="particle particle-7" />
          <div className="particle particle-8" />
          
          {/* Animated Lines */}
          <svg style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.15 }}>
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line className="animated-line line-1" x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGrad1)" strokeWidth="1" />
            <line className="animated-line line-2" x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGrad2)" strokeWidth="1" />
            <line className="animated-line line-3" x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#lineGrad1)" strokeWidth="1" />
          </svg>
          
          {/* Glowing Accent Shapes */}
          <div className="glow-shape shape-1" />
          <div className="glow-shape shape-2" />
          <div className="glow-shape shape-3" />
          
          {/* Neural Network Dots */}
          <div className="neural-container">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className={`neural-dot dot-${i + 1}`} />
            ))}
          </div>
          
        </div>
        
        {/* Top gradient bar */}
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'linear-gradient(90deg, #a855f7, #fbbf24, #f97316, #a855f7)',
          backgroundSize: '200% 100%',
          animation: 'gradientMove 3s linear infinite',
          zIndex: 50 
        }} />
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>
          {children}
        </div>
        
        {/* CSS Animations */}
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
          }
          
          @keyframes drift {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(20px, -20px); }
            50% { transform: translate(0, -40px); }
            75% { transform: translate(-20px, -20px); }
          }
          
          @keyframes particle-float {
            0%, 100% { 
              transform: translateY(100vh) scale(0);
              opacity: 0;
            }
            10% { opacity: 1; transform: translateY(90vh) scale(1); }
            90% { opacity: 1; transform: translateY(10vh) scale(1); }
            100% { 
              transform: translateY(0vh) scale(0);
              opacity: 0;
            }
          }
          
          @keyframes line-move {
            0% { stroke-dashoffset: 1000; }
            100% { stroke-dashoffset: 0; }
          }
          
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            animation: drift 20s ease-in-out infinite;
          }
          
          .orb-1 {
            top: 10%;
            left: 10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%);
            animation-delay: 0s;
          }
          
          .orb-2 {
            top: 60%;
            right: 10%;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%);
            animation-delay: -5s;
          }
          
          .orb-3 {
            bottom: 10%;
            left: 30%;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%);
            animation-delay: -10s;
          }
          
          .orb-4 {
            top: 40%;
            right: 30%;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
            animation-delay: -15s;
          }
          
          .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            animation: particle-float linear infinite;
          }
          
          .particle-1 { left: 10%; background: #a855f7; animation-duration: 15s; animation-delay: 0s; }
          .particle-2 { left: 20%; background: #fbbf24; animation-duration: 18s; animation-delay: -2s; }
          .particle-3 { left: 35%; background: #a855f7; animation-duration: 20s; animation-delay: -4s; }
          .particle-4 { left: 50%; background: #f97316; animation-duration: 16s; animation-delay: -6s; }
          .particle-5 { left: 65%; background: #a855f7; animation-duration: 22s; animation-delay: -8s; }
          .particle-6 { left: 75%; background: #fbbf24; animation-duration: 17s; animation-delay: -10s; }
          .particle-7 { left: 85%; background: #f97316; animation-duration: 19s; animation-delay: -12s; }
          .particle-8 { left: 95%; background: #a855f7; animation-duration: 21s; animation-delay: -14s; }
          
          .animated-line {
            stroke-dasharray: 1000;
            animation: line-move 8s linear infinite;
          }
          
          .line-1 { animation-delay: 0s; }
          .line-2 { animation-delay: -2.5s; }
          .line-3 { animation-delay: -5s; }
          
          .glow-shape {
            position: absolute;
            border-radius: 50%;
            animation: pulse-glow 4s ease-in-out infinite;
          }
          
          .shape-1 {
            top: 15%;
            right: 15%;
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), transparent);
            border: 1px solid rgba(168, 85, 247, 0.2);
            animation-delay: 0s;
          }
          
          .shape-2 {
            bottom: 20%;
            left: 10%;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), transparent);
            border: 1px solid rgba(251, 191, 36, 0.2);
            animation-delay: -1.5s;
          }
          
          .shape-3 {
            top: 50%;
            left: 50%;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), transparent);
            border: 1px solid rgba(249, 115, 22, 0.2);
            animation-delay: -3s;
          }
          
          .neural-container {
            position: absolute;
            inset: 0;
          }
          
          .neural-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(168, 85, 247, 0.6);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
            animation: pulse-glow 3s ease-in-out infinite;
          }
          
          .dot-1 { top: 10%; left: 20%; animation-delay: 0s; }
          .dot-2 { top: 15%; left: 45%; animation-delay: -0.2s; background: rgba(251, 191, 36, 0.6); box-shadow: 0 0 10px rgba(251, 191, 36, 0.5); }
          .dot-3 { top: 20%; left: 70%; animation-delay: -0.4s; }
          .dot-4 { top: 30%; left: 15%; animation-delay: -0.6s; background: rgba(249, 115, 22, 0.6); box-shadow: 0 0 10px rgba(249, 115, 22, 0.5); }
          .dot-5 { top: 35%; left: 55%; animation-delay: -0.8s; }
          .dot-6 { top: 40%; left: 85%; animation-delay: -1s; background: rgba(251, 191, 36, 0.6); box-shadow: 0 0 10px rgba(251, 191, 36, 0.5); }
          .dot-7 { top: 55%; left: 25%; animation-delay: -1.2s; }
          .dot-8 { top: 60%; left: 60%; animation-delay: -1.4s; background: rgba(249, 115, 22, 0.6); box-shadow: 0 0 10px rgba(249, 115, 22, 0.5); }
          .dot-9 { top: 65%; left: 80%; animation-delay: -1.6s; }
          .dot-10 { top: 75%; left: 10%; animation-delay: -1.8s; background: rgba(251, 191, 36, 0.6); box-shadow: 0 0 10px rgba(251, 191, 36, 0.5); }
          .dot-11 { top: 78%; left: 40%; animation-delay: -2s; }
          .dot-12 { top: 82%; left: 65%; animation-delay: -2.2s; background: rgba(249, 115, 22, 0.6); box-shadow: 0 0 10px rgba(249, 115, 22, 0.5); }
          .dot-13 { top: 88%; left: 30%; animation-delay: -2.4s; }
          .dot-14 { top: 90%; left: 75%; animation-delay: -2.6s; background: rgba(251, 191, 36, 0.6); box-shadow: 0 0 10px rgba(251, 191, 36, 0.5); }
          .dot-15 { top: 95%; left: 50%; animation-delay: -2.8s; }
        `}</style>
      </body>
    </html>
  );
}
