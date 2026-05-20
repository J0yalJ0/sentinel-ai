import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Globe, Server, Hash } from 'lucide-react';
import { cn } from '../lib/utils';

interface Threat {
  id: string;
  type: string;
  source: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: string;
}

const threats: Threat[] = [
  { id: 'TX-904', type: 'DDoS Attempt', source: '192.168.1.104', timestamp: '14:22:01', severity: 'high', status: 'MITIGATED' },
  { id: 'TX-905', type: 'SQL Injection', source: '45.12.33.10', timestamp: '14:21:45', severity: 'critical', status: 'BLOCKED' },
  { id: 'TX-906', type: 'SSL Handshake Failure', source: '202.44.11.2', timestamp: '14:21:12', severity: 'low', status: 'LOGGED' },
  { id: 'TX-907', type: 'Brute Force SSH', source: '102.11.45.99', timestamp: '14:20:55', severity: 'medium', status: 'QUARANTINED' },
  { id: 'TX-908', type: 'Unauthorized API Access', source: 'API_NODE_76', timestamp: '14:20:30', severity: 'high', status: 'INTERCEPTED' },
];

const LiveThreatFeed: React.FC = () => {
  return (
    <div className="glass-panel h-full flex flex-col">
      <div className="p-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyber-blue" />
          Live Threat Feed
        </h3>
        <span className="text-[10px] font-mono text-cyber-neon animate-pulse">● LIVE_MONITORING</span>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <AnimatePresence initial={false}>
          {threats.map((threat, index) => (
            <motion.div
              key={threat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500">{threat.id}</span>
                  <span className={cn(
                    "text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-tight",
                    threat.severity === 'critical' ? "bg-cyber-red/20 text-cyber-red" :
                    threat.severity === 'high' ? "bg-cyber-magenta/20 text-cyber-magenta" :
                    threat.severity === 'medium' ? "bg-cyber-yellow/20 text-cyber-yellow" :
                    "bg-cyber-blue/20 text-cyber-blue"
                  )}>
                    {threat.severity}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">{threat.timestamp}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyber-blue transition-colors">
                    {threat.type}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3 text-slate-600" />
                      <span className="text-[10px] font-mono text-slate-400">{threat.source}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-tighter">Status</div>
                  <div className="text-[10px] font-mono text-cyber-neon">{threat.status}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="p-3 bg-white/5 text-center">
        <button className="text-[10px] font-mono text-cyber-blue hover:underline uppercase tracking-widest">
          View All Active Threats
        </button>
      </div>
    </div>
  );
};

export default LiveThreatFeed;

import { Activity } from 'lucide-react';
