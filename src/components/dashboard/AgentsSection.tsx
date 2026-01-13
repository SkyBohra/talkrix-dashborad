"use client";

import React, { useState, useEffect } from "react";
import { Bot, Plus, Pencil, Trash2, X, Save, Play, Pause, Loader2 } from "lucide-react";
import { createAgent, fetchAgentsByUser, updateAgent, deleteAgent } from "../../lib/agentApi";

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

const voiceOptions = [
    "Crhysa",
    "Mark",
    "Jessica",
    "David",
    "Sarah",
    "James",
];

export default function AgentsSection() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAgent, setEditingAgent] = useState<Agent | null>(null);
    const [formData, setFormData] = useState<FormData>(defaultFormData);
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    const openCreateModal = () => {
        setEditingAgent(null);
        setFormData(defaultFormData);
        setError(null);
        setIsModalOpen(true);
    };

    const openEditModal = (agent: Agent) => {
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
                                <div>
                                    <label style={{ display: "block", fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", marginBottom: "8px" }}>
                                        Voice
                                    </label>
                                    <select
                                        value={formData.voice}
                                        onChange={(e) => setFormData({ ...formData, voice: e.target.value })}
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
                                    >
                                        {voiceOptions.map(voice => (
                                            <option key={voice} value={voice}>{voice}</option>
                                        ))}
                                    </select>
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
