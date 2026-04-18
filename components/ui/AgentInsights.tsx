"use client";
import React from "react";
import { BrainCircuit } from "lucide-react";

export const AgentInsights = () => (
  <div className="flex flex-col h-full gap-4">
    <div className="bg-[#131314] border border-[#4ade80]/20 p-4 rounded-sm relative overflow-hidden">
       <div className="flex items-center gap-2 mb-3">
          <BrainCircuit size={16} className="text-[#4ade80]" />
          <h4 className="text-xs font-mono text-[#4ade80] uppercase tracking-widest">Active Inference</h4>
       </div>
       
       <p className="text-sm text-neutral-300 leading-relaxed mb-4">
         Agent detected sequential SMB brute-force attempts on <span className="text-white font-mono bg-white/10 px-1 rounded">Auth_Server</span> originating from internal subnet. Pattern matches historical zero-day lateral movement.
       </p>

       <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-neutral-500">Reward Function Delta:</span>
            <span className="text-[#4ade80]">+14.20 (Prevention)</span>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-neutral-500">Predicted Blast Radius:</span>
            <span className="text-red-400">3 Core Services</span>
          </div>
       </div>
    </div>
  </div>
);