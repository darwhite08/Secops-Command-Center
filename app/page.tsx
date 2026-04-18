"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Activity, Lock, Terminal } from "lucide-react";

export default function SecOpsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 py-12 px-4 relative overflow-hidden">
      {/* 1. Futuristic Background */}
      <BackgroundBeams />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
          SecOps Command Center
        </h1>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[30rem]">
          {/* Main Simulation View */}
          <BentoGridItem
            title="Neural Defense Simulation"
            description="Real-time RL agent monitoring lateral movement."
            header={<SimulationPlaceholder />}
            className="md:col-span-2"
            icon={<Activity className="h-4 w-4 text-neutral-500" />}
          />

          {/* Real-time Logs Table */}
          <BentoGridItem
            title="System Intelligence"
            description="Live SIEM log analysis and agent decisions."
            header={<LogTable />}
            className="md:col-span-1"
            icon={<Terminal className="h-4 w-4 text-neutral-500" />}
          />
        </BentoGrid>
      </div>
    </div>
  );
}

// Sub-component: The Live Log Table (Using Shadcn Table)
const LogTable = () => (
  <div className="h-full w-full bg-neutral-900/50 p-4 rounded-xl overflow-y-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[10px] uppercase">Event</TableHead>
          <TableHead className="text-[10px] uppercase text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-xs text-neutral-300">Port 445 Scan</TableCell>
          <TableCell className="text-right"><Badge variant="destructive">Blocked</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-xs text-neutral-300">Lateral Auth</TableCell>
          <TableCell className="text-right"><Badge className="bg-green-500">Verified</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

// Sub-component: Placeholder for your Network Graph
const SimulationPlaceholder = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-950 to-neutral-800 border border-white/[0.1] items-center justify-center">
    <div className="flex flex-col items-center">
      <ShieldAlert className="h-12 w-12 text-red-500 mb-4 animate-pulse" />
      <span className="text-neutral-500 font-mono text-sm tracking-widest">ENCRYPTING SIMULATION...</span>
    </div>
  </div>
);