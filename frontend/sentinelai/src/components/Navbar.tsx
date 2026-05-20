import React from 'react';
import { Shield, Bell, Settings, User, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-16 border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl rounded-xl mx-4 mt-4 px-6 flex items-center justify-between sticky top-4 z-50 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{
            rotateY: [0, 180, 360],
            filter: ["drop-shadow(0 0 2px #06b6d4)", "drop-shadow(0 0 10px #06b6d4)", "drop-shadow(0 0 2px #06b6d4)"]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="w-8 h-8 text-cyan-500" />
        </motion.div>
        <div>
          <h1 className="text-xl font-black tracking-tighter text-cyan-400">
            Sentinel<span className="text-white">AI</span>
          </h1>
          <div className="text-[10px] text-cyan-500/70 font-bold uppercase tracking-widest leading-none">
            Neural Defense Grid v4.0
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">System Status</span>
          <span className="text-emerald-400 text-xs font-mono flex items-center gap-2">
            <span className="status-indicator status-indicator-online" /> OPERATIONAL
          </span>
        </div>
        
        <div className="h-10 w-[px] bg-slate-800 mx-2" />

        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </button>
          
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-black text-slate-200 uppercase tracking-tight">Admin_Alpha</div>
              <div className="text-[10px] text-cyan-500/60 font-mono font-bold">LVL 9 AUTH</div>
            </div>
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <User className="w-5 h-5 text-cyan-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
