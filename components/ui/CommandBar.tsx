"use client";
import React, { useState } from "react";
import { Search, Command, ChevronRight } from "lucide-react";

export const CommandBar = () => {
  const [query, setQuery] = useState("index=secops sourcetype=syslog action=blocked");

  return (
    <div className="w-full bg-[#0a0a0a] border-b border-white/5 p-2 flex flex-col">
       <div className="flex items-center gap-2 mb-1 px-2">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-1">
             <Command size={10} /> Neural Query Language (NQL)
          </span>
       </div>
       <div className="relative flex items-center w-full group">
          <ChevronRight size={16} className="absolute left-3 text-[#4ade80]" />
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#131314] border border-white/10 text-neutral-200 font-mono text-xs py-2 pl-9 pr-4 rounded-sm focus:outline-none focus:border-[#4ade80]/50 focus:ring-1 focus:ring-[#4ade80]/20 transition-all placeholder:text-neutral-700"
            spellCheck="false"
          />
          <div className="absolute right-3 flex items-center gap-2">
             <span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-1.5 py-0.5 rounded-sm bg-black">↵ Run</span>
          </div>
       </div>
       <div className="flex items-center gap-4 px-2 mt-2">
          <span className="text-[9px] font-mono text-neutral-600">Suggested:</span>
          <span className="text-[9px] font-mono text-[#4ade80]/70 hover:text-[#4ade80] cursor-pointer transition-colors">`node:auth_server AND status:breached`</span>
          <span className="text-[9px] font-mono text-[#4ade80]/70 hover:text-[#4ade80] cursor-pointer transition-colors">`agent_action:isolate_subnet`</span>
       </div>
    </div>
  );
};