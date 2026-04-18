"use client";
import React from "react";

export const RewardMetrics = () => {
  // Mock data representing the agent's reward score over the last 20 steps
  const scores = [12, 15, 8, 22, 30, 25, 35, 42, 38, 50, 48, 55, 60, 58, 70, 75, 72, 85, 90, 95];

  return (
    <div className="h-full flex flex-col justify-end w-full relative">
      <div className="absolute top-0 left-0">
        <p className="text-3xl font-bold text-green-400">+95.00</p>
        <p className="text-xs font-mono uppercase text-neutral-500 tracking-widest">Cumulative Reward</p>
      </div>
      
      <div className="flex items-end justify-between gap-1 h-24 w-full mt-12">
        {scores.map((score, i) => (
          <div
            key={i}
            className="w-full bg-green-500/20 rounded-t-sm hover:bg-green-400 transition-all duration-300 relative group"
            style={{ height: `${score}%` }}
          >
            {/* Tooltip on hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-neutral-800 text-[10px] py-1 px-2 rounded text-white transition-opacity">
              {score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};