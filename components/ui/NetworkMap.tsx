"use client";
import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Shield, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data: In phase 3, this will come from your Python WebSocket
const MOCK_NODES = [
  { id: 1, label: "Gateway", status: "secure", x: 10, y: 50 },
  { id: 2, label: "Auth Server", status: "attacked", x: 40, y: 20 },
  { id: 3, label: "DB Primary", status: "secure", x: 40, y: 80 },
  { id: 4, label: "Core App", status: "isolated", x: 80, y: 50 },
];

export const NetworkMap = ({ threatLevel = 0 }) => {
  return (
    <div className="relative w-full h-full min-h-[300px] bg-neutral-950/50 rounded-xl border border-white/[0.05] overflow-hidden p-6">
      {/* Background Pulse indicating network traffic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-screen filter blur-[50px] animate-pulse" />
        <div className={cn(
          "absolute top-1/4 right-1/4 w-32 h-32 rounded-full mix-blend-screen filter blur-[50px] transition-all duration-1000",
          threatLevel > 50 ? "bg-red-500" : "bg-green-500 opacity-0"
        )} />
      </div>

      <div className="relative w-full h-full">
        {MOCK_NODES.map((node) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className={cn(
              "p-4 rounded-full border-2 backdrop-blur-md relative",
              node.status === "secure" && "border-green-500/50 bg-green-500/10 text-green-400",
              node.status === "attacked" && "border-red-500 bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]",
              node.status === "isolated" && "border-neutral-500 border-dashed bg-neutral-800/50 text-neutral-400"
            )}>
              {node.id === 3 ? <Database size={24} /> : <Server size={24} />}
              
              {/* Dynamic Status Icons */}
              {node.status === "attacked" && (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="absolute -top-2 -right-2 bg-black rounded-full">
                  <ShieldAlert size={16} className="text-red-500" />
                </motion.div>
              )}
              {node.status === "isolated" && (
                <div className="absolute -top-2 -right-2 bg-black rounded-full p-0.5">
                  <Shield size={14} className="text-blue-400" />
                </div>
              )}
            </div>
            <span className="mt-2 text-xs font-mono font-bold tracking-wider text-neutral-300">
              {node.label}
            </span>
          </motion.div>
        ))}

        {/* Animated Connecting Lines (Simulating Data/Lateral Movement) */}
        <svg className="absolute inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }}>
          <motion.line
            x1="10%" y1="50%" x2="40%" y2="20%"
            stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <line x1="10%" y1="50%" x2="40%" y2="80%" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="40%" y1="20%" x2="80%" y2="50%" stroke="#737373" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4" />
        </svg>
      </div>
    </div>
  );
};