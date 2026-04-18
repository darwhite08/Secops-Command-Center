"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Shield, ShieldAlert, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

// The architecture of your OpenEnv simulation
const NODES = [
  { id: "gw", label: "External Gateway", x: 10, y: 50, type: "entry", icon: Shield },
  { id: "auth", label: "Auth Server (Port 445)", x: 35, y: 20, type: "compute", icon: Server },
  { id: "api", label: "Core API", x: 35, y: 80, type: "compute", icon: Cpu },
  { id: "db1", label: "Primary DB", x: 65, y: 35, type: "database", icon: Database },
  { id: "db2", label: "Replica DB", x: 65, y: 65, type: "database", icon: Database },
  { id: "vault", label: "Secure Vault", x: 90, y: 50, type: "secure", icon: Database },
];

const EDGES = [
  { source: "gw", target: "auth", status: "attacked" },
  { source: "gw", target: "api", status: "secure" },
  { source: "auth", target: "db1", status: "isolated" },
  { source: "api", target: "db1", status: "secure" },
  { source: "api", target: "db2", status: "secure" },
  { source: "db1", target: "vault", status: "secure" },
];

export const NetworkTopology = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Helper to find coordinates for drawing lines
  const getNode = (id: string) => NODES.find((n) => n.id === id)!;

  return (
    <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden rounded-md border border-white/[0.05] font-sans">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

      {/* Edge Layer (SVG Connections) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {EDGES.map((edge, i) => {
          const source = getNode(edge.source);
          const target = getNode(edge.target);
          
          // Use curved paths for a highly engineered look
          const d = `M ${source.x}% ${source.y}% C ${(source.x + target.x) / 2}% ${source.y}%, ${(source.x + target.x) / 2}% ${target.y}%, ${target.x}% ${target.y}%`;

          return (
            <g key={i}>
              {/* Base Path */}
              <path
                d={d}
                fill="none"
                stroke={edge.status === "isolated" ? "#737373" : "rgba(255,255,255,0.1)"}
                strokeWidth={edge.status === "isolated" ? 1 : 2}
                strokeDasharray={edge.status === "isolated" ? "4 4" : "none"}
              />
              {/* Animated Data Packets / Attacks */}
              {edge.status !== "isolated" && (
                <motion.path
                  d={d}
                  fill="none"
                  stroke={edge.status === "attacked" ? "#ef4444" : "#4ade80"}
                  strokeWidth="2"
                  strokeDasharray="4 12"
                  animate={{ strokeDashoffset: [0, -100] }}
                  transition={{ repeat: Infinity, duration: edge.status === "attacked" ? 1 : 3, ease: "linear" }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Node Layer */}
      <div className="absolute inset-0 w-full h-full">
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isDimmed = hoveredNode && !isHovered;
          const isUnderAttack = node.id === "auth"; // Hardcoded for demo state

          return (
            <motion.div
              key={node.id}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-crosshair transition-opacity duration-300",
                isDimmed ? "opacity-20" : "opacity-100"
              )}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Threat Pulse */}
              {isUnderAttack && (
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse scale-150" />
              )}

              {/* Physical Node Geometry */}
              <div className={cn(
                "relative z-10 p-3 rounded-none border backdrop-blur-md flex items-center justify-center transition-all",
                isUnderAttack ? "bg-red-950/40 border-red-500/50 text-red-500" : "bg-[#131314]/80 border-white/20 text-neutral-300",
                isHovered && !isUnderAttack && "border-[#4ade80] text-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.15)]"
              )}>
                <node.icon size={20} strokeWidth={1.5} />
                {isUnderAttack && (
                   <ShieldAlert size={14} className="absolute -top-2 -right-2 text-red-500 bg-[#131314] rounded-sm" />
                )}
              </div>
              
              {/* Brutalist Label */}
              <div className="mt-2 text-[10px] font-mono tracking-widest uppercase bg-[#131314] px-2 py-0.5 border border-white/10 text-neutral-400">
                {node.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Telemetry Overlay (Shows up when hovering a node) */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute bottom-4 right-4 bg-[#131314] border border-white/10 p-4 shadow-2xl min-w-[250px]"
          >
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
               <h4 className="text-xs font-mono text-[#4ade80] uppercase tracking-widest">Node Telemetry</h4>
               <span className="text-[10px] bg-white/5 px-1 text-neutral-500 font-mono">ID: {hoveredNode.toUpperCase()}</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
               <div className="flex justify-between"><span className="text-neutral-500">Status:</span> <span className={hoveredNode === "auth" ? "text-red-500" : "text-neutral-300"}>{hoveredNode === "auth" ? "BREACH_DETECTED" : "NOMINAL"}</span></div>
               <div className="flex justify-between"><span className="text-neutral-500">RL Agent:</span> <span className="text-neutral-300">Monitoring</span></div>
               <div className="flex justify-between"><span className="text-neutral-500">Throughput:</span> <span className="text-neutral-300">{Math.floor(Math.random() * 500 + 100)} mbps</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};