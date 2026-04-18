"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Zap, ShieldAlert, Skull } from "lucide-react";

export const ChaosControl = () => {
  return (
    <div className="flex flex-col h-full justify-center space-y-6 p-2">
      <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-900 rounded-md group-hover:text-blue-400 transition-colors">
            <Zap size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-200">Simulate Phishing</p>
            <p className="text-xs text-neutral-500 font-mono">Trigger external payload</p>
          </div>
        </div>
        <Switch />
      </div>

      <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-900 rounded-md group-hover:text-yellow-400 transition-colors">
            <ShieldAlert size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-neutral-200">DDoS Stress Test</p>
            <p className="text-xs text-neutral-500 font-mono">Flood port 445</p>
          </div>
        </div>
        <Switch />
      </div>

      <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-900 border border-red-500/20 rounded-md group-hover:text-red-500 transition-colors">
            <Skull size={18} className="text-red-500/70" />
          </div>
          <div>
            <p className="text-sm font-bold text-red-400">Lateral Ransomware</p>
            <p className="text-xs text-red-500/50 font-mono">Initiate zero-day spread</p>
          </div>
        </div>
        <Switch className="data-[state=checked]:bg-red-500" />
      </div>
    </div>
  );
};