"use client";
import React from "react";
import { Shield, Activity, Terminal, CheckCircle2, History } from "lucide-react";
import { TriageQueue } from "@/components/ui/TriageQueue";
import { AgentInsights } from "@/components/ui/AgentInsights";
import { NetworkTopology } from "@/components/ui/NetworkTopology";
import { CommandBar } from "@/components/ui/CommandBar";
import { PlaybookTracker } from "@/components/ui/PlaybookTracker";

export default function EnterpriseSecOps() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-[#4ade80] selection:text-black overflow-hidden h-screen flex flex-col">
      
      {/* Enterprise Header */}
      <nav className="border-b border-white/5 px-6 py-3 flex justify-between items-center bg-[#0a0a0a] shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 bg-[#4ade80] flex items-center justify-center rounded-sm">
               <Shield className="h-3 w-3 text-black" fill="currentColor" />
            </div>
            <h1 className="text-xs font-bold tracking-widest uppercase text-white">OpenEnv // SecOps</h1>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex gap-4 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
             <span className="text-white">Active Deployment</span>
             <span className="hover:text-white cursor-pointer transition-colors">Historical Audits</span>
             <span className="hover:text-white cursor-pointer transition-colors">Policy Config</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-mono">
           <span className="flex items-center gap-2 text-neutral-400 bg-white/5 px-2 py-1 border border-white/5 rounded-sm">
             Uplink: Port 7860 <span className="h-2 w-2 bg-[#4ade80] rounded-full animate-pulse ml-2" />
           </span>
        </div>
      </nav>

      {/* 3-Column Layout */}
      <main className="flex-1 flex overflow-hidden">
         
         {/* Left Column: Triage & Insights */}
         <aside className="w-[340px] border-r border-white/5 bg-[#0a0a0a] flex flex-col shrink-0">
            <div className="p-4 border-b border-white/5">
               <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
                 <CheckCircle2 size={14} className="text-[#4ade80]" /> Action Required
               </h2>
               <TriageQueue />
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
               <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4 flex items-center gap-2">
                 <History size={14} /> Threat Investigation
               </h2>
               <AgentInsights /> 
            </div>
         </aside>

         {/* Center Column: Query Bar & Live Topology */}
         <section className="flex-1 flex flex-col relative bg-[#131314]">
            {/* NEW: Threat Hunting Command Bar */}
            <CommandBar />

            {/* Existing Topology Map with Scrubber Header */}
            <div className="flex-1 overflow-hidden relative flex flex-col">
                <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-start pointer-events-none">
                   <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm pointer-events-auto">
                      <Activity size={14} className="text-[#4ade80]" />
                      <span className="text-xs font-mono text-white">Neural Topology Map</span>
                   </div>
                   <div className="flex flex-col items-end gap-2 pointer-events-auto">
                      <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-sm">
                         <History size={14} className="text-neutral-400" />
                         <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Playback Mode</span>
                         <span className="bg-[#4ade80]/10 text-[#4ade80] px-1.5 py-0.5 text-[9px] rounded-sm ml-2 font-mono">LIVE</span>
                      </div>
                   </div>
                </div>
                <div className="flex-1 relative">
                   <NetworkTopology />
                </div>
            </div>
         </section>

         {/* Right Column: Split Playbooks and Telemetry */}
         <aside className="w-[350px] border-l border-white/5 bg-[#0a0a0a] flex flex-col shrink-0">
            {/* Top Half: Automated Playbook Tracker */}
            <div className="h-1/2 border-b border-white/5 flex flex-col">
               <PlaybookTracker />
            </div>

            {/* Bottom Half: Raw SIEM Logs */}
            <div className="h-1/2 flex flex-col">
               <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-black">
                  <h2 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                    <Terminal size={14} /> Raw Telemetry
                  </h2>
               </div>
               <div className="flex-1 overflow-y-auto p-2 font-mono text-[10px] text-neutral-400 space-y-1">
                  <div className="py-1 px-2 hover:bg-white/5 transition-colors"><span className="text-neutral-600">14:02:11</span> [INFO] Agent observation space updated.</div>
                  <div className="py-1 px-2 hover:bg-white/5 transition-colors"><span className="text-neutral-600">14:02:12</span> [WARN] Port 445 scan detected from 10.0.0.5</div>
                  <div className="py-1 px-2 hover:bg-white/5 transition-colors"><span className="text-neutral-600">14:02:12</span> [CALC] PPO Value function evaluation: -0.45</div>
                  <div className="py-1 px-2 bg-red-500/10 text-red-400 border-l border-red-500"><span className="text-red-500/50">14:02:13</span> [CRIT] Lateral movement signature matched.</div>
                  <div className="py-1 px-2 hover:bg-white/5 transition-colors"><span className="text-neutral-600">14:02:14</span> [ACTN] Queued action: Isolate Subnet_B. Awaiting HITL.</div>
               </div>
            </div>
         </aside>

      </main>
    </div>
  );
}