"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { VideoConference, LiveKitRoom } from "@livekit/components-react";
import "@livekit/components-styles";
import { Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RoomPage() {
    const params = useParams();
    const router = useRouter();
    const roomName = params.roomName as string;
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authToken = localStorage.getItem("token");
        if (!authToken) {
            router.push("/login");
            return;
        }

        const fetchToken = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/token?room=${roomName}&participant=User`,
                    {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch token");
                }

                const data = await res.json();
                setToken(data.token);
                setIsLoading(false);
            } catch (err) {
                setError("Failed to connect to room. Please try again.");
                setIsLoading(false);
            }
        };

        fetchToken();
    }, [roomName, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-grid" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
                </div>
                <div className="z-10 text-center space-y-4 animate-fade-in-up">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Initializing Session</h2>
                        <p className="text-muted-foreground">Connecting to neural voice network...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-grid" />
                </div>
                <div className="z-10 max-w-md w-full glass-panel p-8 rounded-2xl text-center space-y-6 animate-fade-in-up">
                    <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 w-fit mx-auto">
                        <AlertCircle className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Connection Failed</h2>
                        <p className="text-muted-foreground">{error}</p>
                    </div>
                    <Link href="/dashboard">
                        <Button variant="glass-primary" className="w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Return to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen bg-background relative overflow-hidden">
            {/* Custom LiveKit Room Wrapper */}
            <div className="absolute inset-0">
                <LiveKitRoom
                    video={true}
                    audio={true}
                    token={token}
                    serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
                    data-lk-theme="default"
                    style={{ height: "100vh" }}
                    className="livekit-room-custom"
                >
                    <VideoConference />
                </LiveKitRoom>
            </div>

            {/* Custom Overlay Header */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 pointer-events-auto">
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm" className="glass-panel hover:bg-white/10">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Exit
                            </Button>
                        </Link>
                        <div className="glass-panel px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-white">Session: {roomName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for LiveKit */}
            <style jsx global>{`
        .livekit-room-custom {
          --lk-bg: hsl(220 50% 3%);
          --lk-bg2: hsl(220 45% 5%);
          --lk-fg: hsl(210 40% 98%);
          --lk-control-bg: rgba(12, 15, 25, 0.7);
          --lk-control-hover-bg: rgba(15, 18, 30, 0.8);
          --lk-button-bg: hsl(250 90% 68%);
          --lk-button-bg-hover: hsl(250 90% 63%);
        }
        
        .livekit-room-custom .lk-control-bar {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .livekit-room-custom .lk-button {
          border-radius: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .livekit-room-custom .lk-button:hover {
          transform: translateY(-2px);
        }
      `}</style>
        </div>
    );
}
