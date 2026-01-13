"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Mic, Search, Play, Pause, Globe, Loader2 } from "lucide-react";
import { fetchVoices } from "../../lib/agentApi";

interface Voice {
    voiceId: string;
    name: string;
    description: string;
    primaryLanguage: string | null;
    previewUrl: string;
    provider: string;
    ownership: string;
    billingStyle: string;
}

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

export default function VoicesSection() {
    const [voices, setVoices] = useState<Voice[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
    const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);
    const [total, setTotal] = useState(0);

    const debouncedSearch = useDebounce(searchQuery, 300);

    const loadVoices = useCallback(async (search?: string) => {
        setLoading(true);
        try {
            const res = await fetchVoices(search);
            if (res.success && res.data?.results) {
                setVoices(res.data.results);
                setTotal(res.data.total || res.data.results.length);
            }
        } catch (error) {
            console.error("Failed to fetch voices:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Initial load
    useEffect(() => {
        loadVoices();
    }, [loadVoices]);

    // Search when debounced value changes
    useEffect(() => {
        loadVoices(debouncedSearch || undefined);
    }, [debouncedSearch, loadVoices]);

    const handlePlayPreview = (voice: Voice) => {
        // Stop current audio if playing
        if (audioRef) {
            audioRef.pause();
            audioRef.currentTime = 0;
        }

        if (playingVoiceId === voice.voiceId) {
            setPlayingVoiceId(null);
            setAudioRef(null);
            return;
        }

        const audio = new Audio(voice.previewUrl);
        audio.onended = () => {
            setPlayingVoiceId(null);
            setAudioRef(null);
        };
        audio.onerror = () => {
            setPlayingVoiceId(null);
            setAudioRef(null);
        };
        audio.play();
        setAudioRef(audio);
        setPlayingVoiceId(voice.voiceId);
    };

    const getProviderColor = (provider: string) => {
        const colors: Record<string, { color: string; bg: string }> = {
            "Eleven Labs": { color: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" },
            "Cartesia": { color: "#6366f1", bg: "rgba(99, 102, 241, 0.1)" },
            "Inworld": { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
            "Google": { color: "#4285f4", bg: "rgba(66, 133, 244, 0.1)" },
            "LMNT": { color: "#a855f7", bg: "rgba(168, 85, 247, 0.1)" },
        };
        return colors[provider] || { color: "#9ca3af", bg: "rgba(156, 163, 175, 0.1)" };
    };

    const getLanguageFlag = (lang: string | null) => {
        if (!lang) return "🌐";
        const langMap: Record<string, string> = {
            "en": "🇺🇸",
            "en-US": "🇺🇸",
            "en-GB": "🇬🇧",
            "en-IN": "🇮🇳",
            "en-NZ": "🇳🇿",
            "en-NG": "🇳🇬",
            "es": "🇪🇸",
            "es-ES": "🇪🇸",
            "fr": "🇫🇷",
            "de": "🇩🇪",
            "it": "🇮🇹",
            "pt": "🇵🇹",
            "pt-BR": "🇧🇷",
            "pt-PT": "🇵🇹",
            "nl": "🇳🇱",
            "pl": "🇵🇱",
            "ru": "🇷🇺",
            "ja": "🇯🇵",
            "ko": "🇰🇷",
            "zh": "🇨🇳",
            "ar": "🇸🇦",
            "ar-EG": "🇪🇬",
            "ar-KW": "🇰🇼",
            "el": "🇬🇷",
            "ua": "🇺🇦",
            "vi": "🇻🇳",
            "ta": "🇮🇳",
            "hi": "🇮🇳",
            "sk": "🇸🇰",
            "ro": "🇷🇴",
            "fi": "🇫🇮",
            "bg": "🇧🇬",
            "hu": "🇭🇺",
            "da": "🇩🇰",
            "cs": "🇨🇿",
        };
        return langMap[lang] || "🌐";
    };

    return (
        <div style={{ padding: "32px 40px", maxWidth: "1400px", margin: "0 auto" }}>
            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Mic size={24} color="white" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "white", margin: 0 }}>
                            Voices
                        </h1>
                        <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "14px" }}>
                            Browse and preview available AI voices ({total} total)
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: "24px" }}>
                <div
                    style={{
                        position: "relative",
                        maxWidth: "400px",
                    }}
                >
                    <Search
                        size={18}
                        style={{
                            position: "absolute",
                            left: "14px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "rgba(255,255,255,0.4)",
                        }}
                    />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search voices by name, language, or description..."
                        style={{
                            width: "100%",
                            padding: "12px 14px 12px 44px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "10px",
                            color: "white",
                            fontSize: "14px",
                            outline: "none",
                            transition: "all 0.2s ease",
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = "rgba(168, 85, 247, 0.5)";
                            e.target.style.background = "rgba(255,255,255,0.08)";
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = "rgba(255,255,255,0.1)";
                            e.target.style.background = "rgba(255,255,255,0.05)";
                        }}
                    />
                    {loading && (
                        <Loader2
                            size={18}
                            style={{
                                position: "absolute",
                                right: "14px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "rgba(168, 85, 247, 0.8)",
                                animation: "spin 1s linear infinite",
                            }}
                        />
                    )}
                </div>
            </div>

            {/* Voices Grid */}
            {loading && voices.length === 0 ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "80px 0",
                        color: "rgba(255,255,255,0.5)",
                    }}
                >
                    <Loader2 size={32} style={{ animation: "spin 1s linear infinite", marginRight: "12px" }} />
                    Loading voices...
                </div>
            ) : voices.length === 0 ? (
                <div
                    style={{
                        textAlign: "center",
                        padding: "80px 0",
                        color: "rgba(255,255,255,0.5)",
                    }}
                >
                    <Mic size={48} style={{ marginBottom: "16px", opacity: 0.3 }} />
                    <p>No voices found matching your search.</p>
                </div>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {voices.map((voice) => {
                        const providerStyle = getProviderColor(voice.provider);
                        const isPlaying = playingVoiceId === voice.voiceId;

                        return (
                            <div
                                key={voice.voiceId}
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "16px",
                                    padding: "20px",
                                    transition: "all 0.2s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Header */}
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                                            <span style={{ fontSize: "20px" }}>{getLanguageFlag(voice.primaryLanguage)}</span>
                                            <h3
                                                style={{
                                                    fontSize: "16px",
                                                    fontWeight: "600",
                                                    color: "white",
                                                    margin: 0,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {voice.name}
                                            </h3>
                                        </div>
                                        {voice.primaryLanguage && (
                                            <span
                                                style={{
                                                    fontSize: "12px",
                                                    color: "rgba(255,255,255,0.4)",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {voice.primaryLanguage}
                                            </span>
                                        )}
                                    </div>

                                    {/* Play Button */}
                                    <button
                                        onClick={() => handlePlayPreview(voice)}
                                        disabled={!voice.previewUrl}
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: isPlaying
                                                ? "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)"
                                                : "rgba(168, 85, 247, 0.2)",
                                            border: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: voice.previewUrl ? "pointer" : "not-allowed",
                                            opacity: voice.previewUrl ? 1 : 0.5,
                                            transition: "all 0.2s ease",
                                            flexShrink: 0,
                                        }}
                                        onMouseEnter={(e) => {
                                            if (voice.previewUrl && !isPlaying) {
                                                e.currentTarget.style.background = "rgba(168, 85, 247, 0.4)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isPlaying) {
                                                e.currentTarget.style.background = "rgba(168, 85, 247, 0.2)";
                                            }
                                        }}
                                    >
                                        {isPlaying ? (
                                            <Pause size={18} color="white" />
                                        ) : (
                                            <Play size={18} color="white" style={{ marginLeft: "2px" }} />
                                        )}
                                    </button>
                                </div>

                                {/* Description */}
                                <p
                                    style={{
                                        fontSize: "13px",
                                        color: "rgba(255,255,255,0.5)",
                                        margin: "0 0 16px 0",
                                        lineHeight: "1.5",
                                        minHeight: "40px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {voice.description || "No description available"}
                                </p>

                                {/* Footer - Provider Badge */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span
                                        style={{
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            color: providerStyle.color,
                                            background: providerStyle.bg,
                                        }}
                                    >
                                        {voice.provider}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "11px",
                                            color: "rgba(255,255,255,0.3)",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {voice.ownership}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* CSS for spin animation */}
            <style jsx global>{`
                @keyframes spin {
                    from {
                        transform: translateY(-50%) rotate(0deg);
                    }
                    to {
                        transform: translateY(-50%) rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
