"use client";
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Terminal, Shield } from "lucide-react";
import { NetworkTopology } from "@/components/NetworkTopology";

export default function SecOpsPage() {
  const [threatLevel, setThreatLevel] = useState(12);

  return (
    <div className="min-h-screen bg-[#131314] text-neutral-200 font-sans selection:bg-[#4ade80] selection:text-black">
      {/* Top Navbar - Clean, flat, high-contrast */}
      <nav className="border-b border-white/10 px-8 py-4 flex justify-between items-center bg-[#131314]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="h-6 w-6 bg-[#4ade80] rounded-sm flex items-center justify-center">
             <Shield className="h-4 w-4 text-[#131314]" fill="currentColor" />
          </div>
          <h1 className="text-sm font-semibold tracking-wide">SECOPS_ENV</h1>
          <span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-0.5 rounded-full">v2.0.4-RL</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-mono">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]"></span>
            </span>
            <span className="text-neutral-400">Agent Connected // Port 7860</span>
          </span>
        </div>
      </nav>

      <main className="p-8 max-w-[1600px] mx-auto">
         {/* Brutalist Typographic Header */}
         <header className="mb-12 flex justify-between items-end">
            <div>
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-3 text-white">Threat Intelligence</h2>
               <p className="text-neutral-500 text-sm max-w-xl leading-relaxed">
                 Autonomous reinforcement learning agent monitoring lateral network movement. 
                 Displaying real-time PPO evaluation metrics and active node interventions.
               </p>
            </div>
            <div className="text-right">
               <div className="text-6xl font-light tracking-tighter text-[#4ade80]">{threatLevel}%</div>
               <div className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-mono">Risk Factor</div>
            </div>
         </header>

         {/* Layout Grid using sharp borders and negative space */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Network Topology - Large Minimalist Container */}
            <div className="lg:col-span-8 border border-white/10 rounded-xl bg-black/20 overflow-hidden flex flex-col h-[550px]">
               <div className="border-b border-white/10 px-6 py-4 flex justify-between items-center bg-white/[0.02]">
                  <h3 className="text-sm font-medium flex items-center gap-2 text-white">
                     <Activity className="h-4 w-4 text-neutral-400"/> Topology Map
                  </h3>
                  <button className="text-xs font-mono text-neutral-400 hover:text-[#4ade80] transition-colors border border-white/10 px-3 py-1 rounded-md hover:border-[#4ade80]/50">
                    Run Diagnostics
                  </button>
               </div>
               <div className="flex-1 p-6 relative flex items-center justify-center">
                  {/* Network Map logic goes here */}
                  <div className="text-neutral-600 font-mono text-sm tracking-widest bg-neutral-900/50 px-4 py-2 rounded-md border border-white/5">
                    [ INTERACTIVE CANVAS ]
                  </div>
               </div>
            </div>

            {/* Live Logs - Tall Information Column */}
            <div className="lg:col-span-4 border border-white/10 rounded-xl bg-black/20 flex flex-col h-[550px]">
               <div className="border-b border-white/10 px-6 py-4 bg-white/[0.02]">
                  <h3 className="text-sm font-medium flex items-center gap-2 text-white">
                     <Terminal className="h-4 w-4 text-neutral-400"/> Live Event Stream
                  </h3>
               </div>
               <div className="flex-1 overflow-y-auto p-2">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-transparent">
                        <TableHead className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">Event</TableHead>
                        <TableHead className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-white/10 hover:bg-white/[0.04] transition-colors">
                        <TableCell className="text-xs text-neutral-300 font-mono">192.168.1.45:445 {`->`} SYN</TableCell>
                        <TableCell className="text-right">
                           <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-sm border-0 font-mono shadow-none">BLOCKED</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 hover:bg-white/[0.04] transition-colors">
                        <TableCell className="text-xs text-neutral-300 font-mono">Agent.Isolate(Subnet_B)</TableCell>
                        <TableCell className="text-right">
                           <Badge className="bg-[#4ade80]/10 text-[#4ade80] hover:bg-[#4ade80]/20 rounded-sm border-0 font-mono shadow-none">SUCCESS</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-white/10 hover:bg-white/[0.04] transition-colors">
                        <TableCell className="text-xs text-neutral-300 font-mono">Lateral_Auth_Check</TableCell>
                        <TableCell className="text-right">
                           <Badge className="bg-white/5 text-neutral-400 hover:bg-white/10 rounded-sm border-0 font-mono shadow-none">VERIFIED</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
               </div>
            </div>

         </div>
      </main>
    </div>
  );
}