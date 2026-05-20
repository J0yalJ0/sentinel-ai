import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center gap-8 px-8 py-3 bg-slate-950 border-t border-slate-800 text-[10px] font-mono tracking-wider">
      <div className="flex items-center gap-2">
        <span className="text-slate-500 font-bold">SENTINEL_NODES:</span>
        <span className="text-cyan-400 font-black">14,208</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-500 font-bold">THREATS_DEFLECTED:</span>
        <span className="text-emerald-400 font-black uppercase">243,901</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-500 font-bold">MODEL_DRIFT:</span>
        <span className="text-amber-400 font-black">0.0001%</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <span className="text-slate-500 font-bold uppercase">Network Latency: <span className="text-slate-200">4ms</span></span>
        <div className="flex gap-1 items-center">
          <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
          <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
          <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></div>
          <div className="w-1 h-3 bg-slate-800"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
