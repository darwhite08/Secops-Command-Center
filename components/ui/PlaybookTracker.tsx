"use client";
import React from "react";
import { CheckCircle2, CircleDashed, Circle, AlertCircle } from "lucide-react";

export const PlaybookTracker = () => {
  const steps = [
    { id: 1, action: "Capture Volatile Memory", status: "complete", time: "14:02:12" },
    { id: 2, action: "Revoke Compromised JWTs", status: "complete", time: "14:02:14" },
    { id: 3, action: "Apply Subnet B Firewall Rules", status: "running", time: "14:02:15" },
    { id: 4, action: "Notify SecOps Lead", status: "pending", time: "--:--:--" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
       <div className="p-3 border-b border-white/5 flex justify-between items-center bg-black">
          <h3 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <AlertCircle size={14} className="text-yellow-500" /> Active Playbook
          </h3>
          <span className="text-[9px] text-white/40 font-mono bg-white/5 px-1.5 py-0.5 rounded-sm">PB-44-ISOLATION</span>
       </div>
       <div className="p-4 flex-1 overflow-y-auto">
          <div className="relative border-l border-white/10 ml-2 space-y-4">
             {steps.map((step) => (
               <div key={step.id} className="relative pl-6">
                  {/* Timeline Node */}
                  <div className="absolute -left-[9px] top-0.5 bg-[#0a0a0a] py-1">
                     {step.status === "complete" && <CheckCircle2 size={16} className="text-[#4ade80]" />}
                     {step.status === "running" && <CircleDashed size={16} className="text-yellow-500 animate-[spin_3s_linear_infinite]" />}
                     {step.status === "pending" && <Circle size={16} className="text-neutral-700" />}
                  </div>
                  
                  {/* Step Content */}
                  <div>
                     <p className={`text-xs font-mono ${step.status === "running" ? "text-yellow-500" : step.status === "complete" ? "text-neutral-300" : "text-neutral-600"}`}>
                       {step.action}
                     </p>
                     <p className="text-[9px] font-mono text-neutral-600 mt-0.5">{step.time}</p>
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};