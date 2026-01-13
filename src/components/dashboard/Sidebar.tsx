"use client";

import { useState } from "react";
import {
    LayoutDashboard,
    Bot,
    Wrench,
    Database,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

type SidebarItem = {
    id: string;
    label: string;
    icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "agents", label: "Agents", icon: <Bot size={20} /> },
    { id: "tools", label: "Tools", icon: <Wrench size={20} /> },
    { id: "rag", label: "RAG", icon: <Database size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
];

interface SidebarProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
    onLogout: () => void;
}

export default function Sidebar({ activeSection, onSectionChange, onLogout }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            style={{
                width: collapsed ? "80px" : "260px",
                minHeight: "100vh",
                background: "rgba(10, 10, 15, 0.8)",
                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                padding: "24px 16px",
                transition: "width 0.3s ease",
                position: "relative",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "40px",
                    paddingLeft: "8px",
                }}
            >
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                >
                    <Bot size={22} color="white" />
                </div>
                {!collapsed && (
                    <span
                        style={{
                            fontWeight: "800",
                            fontSize: "20px",
                            color: "white",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        TALKRIX
                    </span>
                )}
            </div>

            {/* Collapse Button */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    position: "absolute",
                    right: "-14px",
                    top: "40px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(168, 85, 247, 0.2)",
                    border: "1px solid rgba(168, 85, 247, 0.4)",
                    color: "#a855f7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    zIndex: 10,
                }}
            >
                {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>

            {/* Navigation Items */}
            <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                {sidebarItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: collapsed ? "14px" : "14px 16px",
                            borderRadius: "12px",
                            border: "none",
                            background:
                                activeSection === item.id
                                    ? "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%)"
                                    : "transparent",
                            color: activeSection === item.id ? "#a855f7" : "rgba(255, 255, 255, 0.6)",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            justifyContent: collapsed ? "center" : "flex-start",
                            position: "relative",
                        }}
                        onMouseEnter={(e) => {
                            if (activeSection !== item.id) {
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                e.currentTarget.style.color = "white";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeSection !== item.id) {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                            }
                        }}
                    >
                        {activeSection === item.id && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "3px",
                                    height: "24px",
                                    background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)",
                                    borderRadius: "0 4px 4px 0",
                                }}
                            />
                        )}
                        {item.icon}
                        {!collapsed && (
                            <span style={{ fontSize: "14px", fontWeight: "500" }}>{item.label}</span>
                        )}
                    </button>
                ))}
            </nav>

            {/* Logout Button */}
            <button
                onClick={onLogout}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: collapsed ? "14px" : "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    background: "rgba(239, 68, 68, 0.1)",
                    color: "#ef4444",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    justifyContent: collapsed ? "center" : "flex-start",
                    marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)";
                }}
            >
                <LogOut size={20} />
                {!collapsed && <span style={{ fontSize: "14px", fontWeight: "500" }}>Logout</span>}
            </button>
        </aside>
    );
}
