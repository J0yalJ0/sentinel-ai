import React from 'react';
import { ShieldCheck, ShieldAlert, Cpu, Terminal, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const AlertPanel: React.FC = () => {
  const systems = [
    { name: 'FIREWALL_NODE_ALPHA', status: 'ACTIVE', load: '12%', color: 'text-cyber-neon' },
    { name: 'AI_PREDICTION_CORE', status: 'SYNCING', load: '88%', color: 'text-cyber-yellow' },
    { name: 'ENCRYPTION_ENGINE', status: 'LOCKED', load: '05%', color: 'text-cyber-neon' },
    { name: 'THREAT_DATABASE', status: 'SCANNING', load: '45%', color: 'text-cyber-blue' },
  ];

  return (
    <div className="glass-panel h-full flex flex-col">
      <div className="p-4 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-magenta" />
          AI System Status
        </h3>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {systems.map((sys) => (
          <div key={sys.name} className="flex flex-col gap-2 p-3 rounded-lg bg-cyber-black/40 border border-white/5 hover:border-cyber-blue/20 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-tight">
                {sys.name}
              </span>
              <span className={cn("text-[8px] font-mono font-bold uppercase tracking-widest", sys.color)}>
                {sys.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full transition-all duration-1000 bg-current", sys.color)} 
                  style={{ width: sys.load }} 
                />
              </div>
              <span className="text-[9px] font-mono text-slate-500">{sys.load}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/5 bg-cyber-magenta/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-cyber-magenta/20 flex items-center justify-center border border-cyber-magenta/30">
          <Zap className="w-4 h-4 text-cyber-magenta animate-pulse" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-white uppercase tracking-tight">Rapid Response Active</p>
          <p className="text-[8px] text-slate-500 font-mono">Counter-measure auto-deploy enabled.</p>
        </div>
      </div>
    </div>
  );
};

export default AlertPanel;
