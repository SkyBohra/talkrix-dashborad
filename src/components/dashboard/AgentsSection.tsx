"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Bot, Plus, Pencil, Trash2, X, Save, Play, Pause, Loader2, Search, Mic } from "lucide-react";
import { createAgent, fetchAgentsByUser, updateAgent, deleteAgent, fetchVoices } from "../../lib/agentApi";

interface Voice {
    voiceId: string;
    name: string;
    description: string;
    primaryLanguage: string | null;
    previewUrl: string;
    provider: string;
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

interface Agent {
    _id: string;
    talkrixAgentId: string;
    userId: string;
    name: string;
    callTemplate: {
        name: string;
        initialOutputMedium: string;
        joinTimeout: string;
        maxDuration: string;
        recordingEnabled: boolean;
        systemPrompt: string;
        temperature: number;
        voice: string;
        firstSpeakerSettings?: {
            agent?: {
                uninterruptible: boolean;
                text: string;
            };
        };
        inactivityMessages?: Array<{
            duration: string;
            message: string;
            endBehavior?: string;
        }>;
    };
}

interface FormData {
    name: string;
    callTemplateName: string;
    initialOutputMedium: string;
    joinTimeout: string;
    maxDuration: string;
    recordingEnabled: boolean;
    systemPrompt: string;
    temperature: number;
    voice: string;
    firstSpeakerText: string;
    firstSpeakerUninterruptible: boolean;
    inactivityMessage1Duration: string;
    inactivityMessage1Text: string;
    inactivityMessage2Duration: string;
    inactivityMessage2Text: string;
    inactivityMessage3Duration: string;
    inactivityMessage3Text: string;
}

const defaultFormData: FormData = {
    name: "",
    callTemplateName: "",
    initialOutputMedium: "MESSAGE_MEDIUM_VOICE",
    joinTimeout: "30s",
    maxDuration: "300s",
    recordingEnabled: true,
    systemPrompt: "You are a helpful assistant",
    temperature: 0,
    voice: "Crhysa",
    firstSpeakerText: "Hello, how can I help you today?",
    firstSpeakerUninterruptible: true,
    inactivityMessage1Duration: "30s",
    inactivityMessage1Text: "Are you still there?",
    inactivityMessage2Duration: "15s",
    inactivityMessage2Text: "If there's nothing else, may I end the call?",
    inactivityMessage3Duration: "10s",
    inactivityMessage3Text: "Thank you for calling. Have a great day. Goodbye.",
};

export default function AgentsSection() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAgent, setEditingAgent] = useState<Agent | null>(null);
    const [formData, setFormData] = useState<FormData>(defaultFormData);
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Voice selector state
    const [voices, setVoices] = useState<Voice[]>([]);
    const [voicesLoading, setVoicesLoading] = useState(false);
    const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
    const [voiceSearch, setVoiceSearch] = useState('');
    const [isVoiceDropdownOpen, setIsVoiceDropdownOpen] = useState(false);
    const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
    const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);
    const voiceDropdownRef = useRef<HTMLDivElement>(null);
    const debouncedVoiceSearch = useDebounce(voiceSearch, 300);

    // Get userId from localStorage (set during login)
    const getUserId = () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("userId") || "";
        }
        return "";
    };

    const statusColors = {
        active: { bg: "rgba(34, 197, 94, 0.1)", color: "#22c55e", border: "rgba(34, 197, 94, 0.3)" },
        inactive: { bg: "rgba(239, 68, 68, 0.1)", color: "#ef4444", border: "rgba(239, 68, 68, 0.3)" },
        draft: { bg: "rgba(251, 191, 36, 0.1)", color: "#fbbf24", border: "rgba(251, 191, 36, 0.3)" },
    };

    // Fetch agents on mount
    useEffect(() => {
        const loadAgents = async () => {
            const userId = getUserId();
            if (!userId) {
                setFetchLoading(false);
                return;
            }
            try {
                const response = await fetchAgentsByUser(userId);
                if (response.success && response.data) {
                    setAgents(response.data);
                } else {
                    console.error("Failed to fetch agents:", response.message);
                }
            } catch (err) {
                console.error("Error fetching agents:", err);
            } finally {
                setFetchLoading(false);
            }
        };
        loadAgents();
    }, []);

    // Voice loading function
    const loadVoices = useCallback(async (search?: string) => {
        setVoicesLoading(true);
        try {
            const res = await fetchVoices(search);
            if (res.success && res.data?.results) {
                setVoices(res.data.results);
            }
        } catch (error) {
            console.error('Failed to fetch voices:', error);
        } finally {
            setVoicesLoading(false);
        }
    }, []);

    // Server-side search when debounced search changes
    useEffect(() => {
        if (isVoiceDropdownOpen) {
            loadVoices(debouncedVoiceSearch || undefined);
        }
    }, [debouncedVoiceSearch, isVoiceDropdownOpen, loadVoices]);

    // Close voice dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (voiceDropdownRef.current && !voiceDropdownRef.current.contains(event.target as Node)) {
                setIsVoiceDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle voice preview playback
    const handlePlayPreview = (voice: Voice) => {
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

    // Handle voice selection
    const handleVoiceSelect = (voice: Voice) => {
        setSelectedVoice(voice);
        setVoiceSearch(voice.name);
        setFormData({ ...formData, voice: voice.voiceId });
        setIsVoiceDropdownOpen(false);
    };

    // Provider color mapping for voice dropdown
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

    const openCreateModal = () => {
        setEditingAgent(null);
        setFormData(defaultFormData);
        setSelectedVoice(null);
        setVoiceSearch('');
        setError(null);
        setIsModalOpen(true);
    };

    const openEditModal = async (agent: Agent) => {
        setEditingAgent(agent);
        setFormData({
            name: agent.name,
            callTemplateName: agent.callTemplate?.name || "",
            initialOutputMedium: agent.callTemplate?.initialOutputMedium || "MESSAGE_MEDIUM_VOICE",
            joinTimeout: agent.callTemplate?.joinTimeout || "30s",
            maxDuration: agent.callTemplate?.maxDuration || "300s",
            recordingEnabled: agent.callTemplate?.recordingEnabled ?? true,
            systemPrompt: agent.callTemplate?.systemPrompt || "",
            temperature: agent.callTemplate?.temperature ?? 0,
            voice: agent.callTemplate?.voice || "Crhysa",
            firstSpeakerText: agent.callTemplate?.firstSpeakerSettings?.agent?.text || "",
            firstSpeakerUninterruptible: agent.callTemplate?.firstSpeakerSettings?.agent?.uninterruptible ?? true,
            inactivityMessage1Duration: agent.callTemplate?.inactivityMessages?.[0]?.duration || "30s",
            inactivityMessage1Text: agent.callTemplate?.inactivityMessages?.[0]?.message || "",
            inactivityMessage2Duration: agent.callTemplate?.inactivityMessages?.[1]?.duration || "15s",
            inactivityMessage2Text: agent.callTemplate?.inactivityMessages?.[1]?.message || "",
            inactivityMessage3Duration: agent.callTemplate?.inactivityMessages?.[2]?.duration || "10s",
            inactivityMessage3Text: agent.callTemplate?.inactivityMessages?.[2]?.message || "",
        });
        
        // Try to find the existing voice
        if (agent.callTemplate?.voice) {
            setVoiceSearch(agent.callTemplate.voice);
            // Search for the voice to get full details
            try {
                const res = await fetchVoices(agent.callTemplate.voice);
                if (res.success && res.data?.results) {
                    const existingVoice = res.data.results.find(
                        (v: Voice) => v.voiceId === agent.callTemplate.voice || v.name === agent.callTemplate.voice
                    );
                    if (existingVoice) {
                        setSelectedVoice(existingVoice);
                        setVoiceSearch(existingVoice.name);
                    }
                }
            } catch (err) {
                console.error('Failed to fetch existing voice:', err);
            }
        } else {
            setSelectedVoice(null);
            setVoiceSearch('');
        }
        
        setError(null);
        setIsModalOpen(true);
    };

    const buildAgentPayload = () => {
        return {
            name: formData.name,
            callTemplate: {
                name: formData.callTemplateName || formData.name,
                initialOutputMedium: formData.initialOutputMedium,
                joinTimeout: formData.joinTimeout,
                maxDuration: formData.maxDuration,
                model: "fixie-ai/ultravox-70B", // Hidden from UI
                recordingEnabled: formData.recordingEnabled,
                firstSpeakerSettings: {
                    agent: {
                        uninterruptible: formData.firstSpeakerUninterruptible,
                        text: formData.firstSpeakerText,
                    },
                },
                systemPrompt: formData.systemPrompt,
                temperature: formData.temperature,
                voice: formData.voice,
                inactivityMessages: [
                    {
                        duration: formData.inactivityMessage1Duration,
                        message: formData.inactivityMessage1Text,
                    },
                    {
                        duration: formData.inactivityMessage2Duration,
                        message: formData.inactivityMessage2Text,
                    },
                    {
                        duration: formData.inactivityMessage3Duration,
                        message: formData.inactivityMessage3Text,
                        endBehavior: "END_BEHAVIOR_HANG_UP_SOFT",
                    },
                ],
            },
        };
    };

    const handleSave = async () => {
        if (!formData.name.trim()) {
            setError("Agent name is required");
            return;
        }

        const userId = getUserId();
        if (!userId) {
            setError("User not authenticated. Please log in again.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const payload = buildAgentPayload();

            if (editingAgent) {
                const response = await updateAgent(editingAgent._id, payload);
                if (response.success) {
                    setAgents(agents.map(a => 
                        a._id === editingAgent._id ? { ...a, ...response.data } : a
                    ));
                    setIsModalOpen(false);
                } else {
                    setError(response.message || "Failed to update agent");
                }
            } else {
                const response = await createAgent(userId, payload);
                if (response.success && response.data) {
                    setAgents([...agents, response.data]);
                    setIsModalOpen(false);
                } else {
                    setError(response.message || response.error || "Failed to create agent");
                }
            }
        } catch (err: any) {
            console.error("Error saving agent:", err);
            setError(err?.response?.data?.message || err?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this agent?")) return;
        
        try {
            const response = await deleteAgent(id);
            if (response.success) {
                setAgents(agents.filter(a => a._id !== id));
            } else {
                alert(response.message || response.error || "Failed to delete agent");
            }
        } catch (err: any) {
            console.error("Error deleting agent:", err);
            alert(err?.response?.data?.message || err?.message || "Failed to delete agent");
        }
    };

    return (
        <div style={{ padding: "32px", maxWidth: "1400px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                    <h1 style={{ fontSize: "28px", fontWeight: "700", color: "white", marginBottom: "8px" }}>
                        Agents
                    </h1>
                    <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)" }}>
                        Manage your voice agents and their configurations.
                    </p>
                </div>
                <button
                    onClick={openCreateModal}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: "none",
                        background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                >
                    <Plus size={18} />
                    Create Agent
                </button>
            </div>

            {/* Loading State */}
            {fetchLoading && (
                <div style={{ display: "flex", justifyContent: "center", padding: "48px" }}>
                    <Loader2 size={32} style={{ animation: "spin 1s linear infinite", color: "#a855f7" }} />
                </div>
            )}

            {/* Empty State */}
            {!fetchLoading && agents.length === 0 && (
                <div style={{ textAlign: "center", padding: "48px", color: "rgba(255, 255, 255, 0.5)" }}>
                    <Bot size={48} style={{ marginBottom: "16px", opacity: 0.5 }} />
                    <p>No agents yet. Create your first agent to get started!</p>
                </div>
            )}

            {/* Agents Grid */}
            {!fetchLoading && agents.length > 0 && (
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {agents.map(agent => (
                        <div
                            key={agent._id}
                            style={{
                                background: "rgba(10, 10, 15, 0.6)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                borderRadius: "16px",
                                padding: "24px",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#a855f7",
                                    }}
                                >
                                    <Bot size={24} />
                                </div>
                                <div
                                    style={{
                                        padding: "4px 12px",
                                        borderRadius: "20px",
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        background: statusColors.active.bg,
                                        color: statusColors.active.color,
                                        border: `1px solid ${statusColors.active.border}`,
                                    }}
                                >
                                    Active
                                </div>
                            </div>

                            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "white", marginBottom: "8px" }}>
                                {agent.name}
                            </h3>
                            <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.5)", marginBottom: "16px", lineHeight: "1.5" }}>
                                {agent.callTemplate?.systemPrompt?.substring(0, 80) || "No description"}...
                            </p>

                            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
                                <div>
                                    <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", marginBottom: "4px" }}>Voice</p>
                                    <p style={{ fontSize: "13px", color: "white" }}>{agent.callTemplate?.voice || "Default"}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", marginBottom: "4px" }}>Max Duration</p>
                                    <p style={{ fontSize: "13px", color: "white" }}>{agent.callTemplate?.maxDuration || "N/A"}</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "8px" }}>
                                <button
                                    onClick={() => openEditModal(agent)}
                                    style={{
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "6px",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(168, 85, 247, 0.3)",
                                        background: "rgba(168, 85, 247, 0.1)",
                                        color: "#a855f7",
                                        fontSize: "13px",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <Pencil size={14} />
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(agent._id)}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(239, 68, 68, 0.3)",
                                        background: "rgba(239, 68, 68, 0.1)",
                                        color: "#ef4444",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                        overflow: "auto",
                        padding: "20px",
                    }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        style={{
                            background: "rgba(15, 15, 20, 0.95)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            padding: "32px",
                            width: "100%",
                            maxWidth: "640px",
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                            <h2 style={{ fontSize: "20px", fontWeight: "600", color: "white" }}>
                                {editingAgent ? "Edit Agent" : "Create New Agent"}
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "rgba(255, 255, 255, 0.5)",
                                    cursor: "pointer",
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {error && (
                            <div style={{
                                background: "rgba(239, 68, 68, 0.1)",
                                border: "1px solid rgba(239, 68, 68, 0.3)",
                                borderRadius: "8px",
                                padding: "12px",
                                marginBottom: "20px",
                                color: "#ef4444",
                                fontSize: "14px",
                            }}>
                                {error}
                            </div>
                        )}

                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            {/* Agent Name */}
                            <div>
                                <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                    Agent Name *
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter agent name..."
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "10px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        background: "rgba(255, 255, 255, 0.05)",
                                        color: "white",
                                        fontSize: "14px",
                                        outline: "none",
                                        boxSizing: "border-box",
                                    }}
                                />
                            </div>

                            {/* System Prompt */}
                            <div>
                                <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                    System Prompt
                                </label>
                                <textarea
                                    value={formData.systemPrompt}
                                    onChange={(e) => setFormData({ ...formData, systemPrompt: e.target.value })}
                                    placeholder="You are a helpful assistant..."
                                    rows={3}
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "10px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        background: "rgba(255, 255, 255, 0.05)",
                                        color: "white",
                                        fontSize: "14px",
                                        outline: "none",
                                        resize: "vertical",
                                        fontFamily: "inherit",
                                        boxSizing: "border-box",
                                    }}
                                />
                            </div>

                            {/* First Speaker Settings */}
                            <div>
                                <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                    Greeting Message
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstSpeakerText}
                                    onChange={(e) => setFormData({ ...formData, firstSpeakerText: e.target.value })}
                                    placeholder="Hello, how can I help you today?"
                                    style={{
                                        width: "100%",
                                        padding: "12px 16px",
                                        borderRadius: "10px",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        background: "rgba(255, 255, 255, 0.05)",
                                        color: "white",
                                        fontSize: "14px",
                                        outline: "none",
                                        boxSizing: "border-box",
                                    }}
                                />
                            </div>

                            {/* Voice and Temperature */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                <div ref={voiceDropdownRef} style={{ position: "relative" }}>
                                    <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                        Voice
                                    </label>
                                    <div style={{ position: "relative" }}>
                                        <Search
                                            size={16}
                                            style={{
                                                position: "absolute",
                                                left: "12px",
                                                top: "50%",
                                                transform: "translateY(-50%)",
                                                color: "rgba(255,255,255,0.4)",
                                                pointerEvents: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            value={voiceSearch}
                                            onChange={(e) => {
                                                setVoiceSearch(e.target.value);
                                                setIsVoiceDropdownOpen(true);
                                                if (!e.target.value) {
                                                    setSelectedVoice(null);
                                                    setFormData({ ...formData, voice: '' });
                                                }
                                            }}
                                            onFocus={() => {
                                                setIsVoiceDropdownOpen(true);
                                                if (!voices.length) loadVoices();
                                            }}
                                            placeholder="Search voices..."
                                            style={{
                                                width: "100%",
                                                padding: "12px 40px 12px 36px",
                                                borderRadius: "10px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "14px",
                                                outline: "none",
                                                boxSizing: "border-box",
                                            }}
                                        />
                                        {voicesLoading ? (
                                            <Loader2
                                                size={16}
                                                style={{
                                                    position: "absolute",
                                                    right: "12px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    color: "#a855f7",
                                                    animation: "spin 1s linear infinite",
                                                }}
                                            />
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsVoiceDropdownOpen(!isVoiceDropdownOpen);
                                                    if (!voices.length) loadVoices();
                                                }}
                                                style={{
                                                    position: "absolute",
                                                    right: "8px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    background: "transparent",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "4px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="rgba(255,255,255,0.4)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d={isVoiceDropdownOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                                                </svg>
                                            </button>
                                        )}
                                    </div>

                                    {/* Voice Dropdown */}
                                    {isVoiceDropdownOpen && (
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "100%",
                                                left: 0,
                                                right: 0,
                                                marginTop: "4px",
                                                background: "rgba(20, 20, 30, 0.98)",
                                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                                borderRadius: "12px",
                                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                                                maxHeight: "280px",
                                                overflowY: "auto",
                                                zIndex: 100,
                                            }}
                                        >
                                            {voicesLoading ? (
                                                <div style={{ padding: "16px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
                                                    <Loader2 size={20} style={{ animation: "spin 1s linear infinite", marginRight: "8px" }} />
                                                    Searching voices...
                                                </div>
                                            ) : voices.length === 0 ? (
                                                <div style={{ padding: "16px", textAlign: "center", color: "rgba(255,255,255,0.5)" }}>
                                                    No voices found
                                                </div>
                                            ) : (
                                                voices.map((voice) => {
                                                    const providerStyle = getProviderColor(voice.provider);
                                                    const isPlaying = playingVoiceId === voice.voiceId;
                                                    const isSelected = selectedVoice?.voiceId === voice.voiceId;
                                                    
                                                    return (
                                                        <div
                                                            key={voice.voiceId}
                                                            onClick={() => handleVoiceSelect(voice)}
                                                            style={{
                                                                padding: "12px 16px",
                                                                cursor: "pointer",
                                                                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                                                                background: isSelected ? "rgba(168, 85, 247, 0.15)" : "transparent",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                transition: "background 0.15s ease",
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                if (!isSelected) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                if (!isSelected) e.currentTarget.style.background = "transparent";
                                                            }}
                                                        >
                                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
                                                                    <span style={{ fontWeight: "500", color: "white", fontSize: "14px" }}>
                                                                        {voice.name}
                                                                    </span>
                                                                    {isSelected && (
                                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#a855f7">
                                                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                                    <span
                                                                        style={{
                                                                            padding: "2px 6px",
                                                                            borderRadius: "4px",
                                                                            fontSize: "11px",
                                                                            fontWeight: "500",
                                                                            color: providerStyle.color,
                                                                            background: providerStyle.bg,
                                                                        }}
                                                                    >
                                                                        {voice.provider}
                                                                    </span>
                                                                    {voice.primaryLanguage && (
                                                                        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                                                                            {voice.primaryLanguage}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {voice.previewUrl && (
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handlePlayPreview(voice);
                                                                    }}
                                                                    style={{
                                                                        width: "32px",
                                                                        height: "32px",
                                                                        borderRadius: "50%",
                                                                        background: isPlaying
                                                                            ? "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)"
                                                                            : "rgba(168, 85, 247, 0.2)",
                                                                        border: "none",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                        cursor: "pointer",
                                                                        marginLeft: "8px",
                                                                        flexShrink: 0,
                                                                        transition: "all 0.2s ease",
                                                                    }}
                                                                >
                                                                    {isPlaying ? (
                                                                        <Pause size={14} color="white" />
                                                                    ) : (
                                                                        <Play size={14} color="white" style={{ marginLeft: "2px" }} />
                                                                    )}
                                                                </button>
                                                            )}
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    )}

                                    {/* Selected voice indicator */}
                                    {selectedVoice && (
                                        <div
                                            style={{
                                                marginTop: "8px",
                                                padding: "8px 12px",
                                                background: "rgba(168, 85, 247, 0.1)",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <Mic size={14} color="#a855f7" />
                                                <span style={{ fontSize: "12px", color: "white" }}>{selectedVoice.name}</span>
                                                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                                                    ({selectedVoice.provider})
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedVoice(null);
                                                    setVoiceSearch('');
                                                    setFormData({ ...formData, voice: '' });
                                                }}
                                                style={{
                                                    background: "transparent",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    padding: "2px",
                                                    display: "flex",
                                                }}
                                            >
                                                <X size={14} color="rgba(255,255,255,0.5)" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                        Temperature
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={formData.temperature}
                                        onChange={(e) => setFormData({ ...formData, temperature: parseFloat(e.target.value) || 0 })}
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "white",
                                            fontSize: "14px",
                                            outline: "none",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Timeouts */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                <div>
                                    <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                        Join Timeout
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.joinTimeout}
                                        onChange={(e) => setFormData({ ...formData, joinTimeout: e.target.value })}
                                        placeholder="30s"
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "white",
                                            fontSize: "14px",
                                            outline: "none",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                        Max Duration
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.maxDuration}
                                        onChange={(e) => setFormData({ ...formData, maxDuration: e.target.value })}
                                        placeholder="300s"
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px",
                                            borderRadius: "10px",
                                            border: "1px solid rgba(255, 255, 255, 0.1)",
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: "white",
                                            fontSize: "14px",
                                            outline: "none",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Recording Toggle */}
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <input
                                    type="checkbox"
                                    id="recordingEnabled"
                                    checked={formData.recordingEnabled}
                                    onChange={(e) => setFormData({ ...formData, recordingEnabled: e.target.checked })}
                                    style={{ width: "18px", height: "18px", accentColor: "#a855f7" }}
                                />
                                <label htmlFor="recordingEnabled" style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)" }}>
                                    Enable Recording
                                </label>
                            </div>

                            {/* Inactivity Messages Section */}
                            <div>
                                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "white", marginBottom: "12px" }}>
                                    Inactivity Messages
                                </h3>
                                
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {/* Message 1 */}
                                    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px" }}>
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage1Duration}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage1Duration: e.target.value })}
                                            placeholder="30s"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage1Text}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage1Text: e.target.value })}
                                            placeholder="Are you still there?"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                    </div>

                                    {/* Message 2 */}
                                    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px" }}>
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage2Duration}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage2Duration: e.target.value })}
                                            placeholder="15s"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage2Text}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage2Text: e.target.value })}
                                            placeholder="If there's nothing else, may I end the call?"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                    </div>

                                    {/* Message 3 (with hang up) */}
                                    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px" }}>
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage3Duration}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage3Duration: e.target.value })}
                                            placeholder="10s"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                        <input
                                            type="text"
                                            value={formData.inactivityMessage3Text}
                                            onChange={(e) => setFormData({ ...formData, inactivityMessage3Text: e.target.value })}
                                            placeholder="Thank you for calling. Goodbye. (hangs up)"
                                            style={{
                                                padding: "10px 12px",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                                background: "rgba(255, 255, 255, 0.05)",
                                                color: "white",
                                                fontSize: "13px",
                                                outline: "none",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleSave}
                                disabled={loading}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    padding: "14px 24px",
                                    borderRadius: "12px",
                                    border: "none",
                                    background: loading 
                                        ? "rgba(168, 85, 247, 0.5)" 
                                        : "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    cursor: loading ? "not-allowed" : "pointer",
                                    marginTop: "8px",
                                }}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                                        {editingAgent ? "Saving..." : "Creating..."}
                                    </>
                                ) : (
                                    <>
                                        <Save size={16} />
                                        {editingAgent ? "Save Changes" : "Create Agent"}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
