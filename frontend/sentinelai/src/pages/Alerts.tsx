import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, AlertTriangle, Info, BellRing, Filter, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const alerts = [
  { id: 'AL-12', type: 'CRITICAL', title: 'Unauthorized DB Access', time: '10m ago', source: 'Internal_Core', desc: 'Attempt to bypass LDAP auth on Cluster_Zero' },
  { id: 'AL-13', type: 'WARNING', title: 'Massive Ping Influx', time: '14m ago', source: 'Edge_Node_77', desc: 'Potential pre-DDoS recon detected from subnet 104.x' },
  { id: 'AL-14', type: 'INFO', title: 'System Patch Applied', time: '1h ago', source: 'Auto_Agent', desc: 'Security patch v2.4.1 deployed successfully' },
  { id: 'AL-15', type: 'CRITICAL', title: 'Admin Account Lockout', time: '2h ago', source: 'Auth_Portal', desc: 'Admin account (UID: 77) locked after 5 failed attempts' },
  { id: 'AL-16', type: 'WARNING', title: 'Bandwidth Spike', time: '3h ago', source: 'Data_Ingest', desc: 'Unexpected 400% increase in egress traffic' },
];

const Alerts: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
            Threat <span className="text-cyber-red">Alerts</span>
          </h2>
          <p className="text-slate-500 font-mono text-xs mt-1">ACTIVE_SECURITY_INCIDENTS // REALTIME_TRIAGE</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="FILTER_ALERTS..." 
              className="bg-cyber-dark/60 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs font-mono focus:border-cyber-blue outline-none transition-all w-64"
            />
          </div>
          <button className="cyber-button py-2 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            CONFIG
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence>
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 flex flex-col md:flex-row md:items-center gap-6 group hover:translate-x-2 transition-transform cursor-pointer"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border",
                alert.type === 'CRITICAL' ? "bg-cyber-red/10 border-cyber-red/30 text-cyber-red" :
                alert.type === 'WARNING' ? "bg-cyber-yellow/10 border-cyber-yellow/30 text-cyber-yellow" :
                "bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue"
              )}>
                {alert.type === 'CRITICAL' ? <BellRing className="w-6 h-6 animate-pulse" /> :
                 alert.type === 'WARNING' ? <AlertTriangle className="w-6 h-6" /> :
                 <Info className="w-6 h-6" />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-slate-500">{alert.id}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyber-blue transition-colors">
                    {alert.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl">{alert.desc}</p>
              </div>

              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6 min-w-[140px]">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{alert.time}</div>
                <div className="text-[10px] font-mono text-slate-400">{alert.source}</div>
                <button className="text-[10px] font-mono font-bold text-cyber-blue hover:underline uppercase tracking-tighter">TRIAGE_NOW</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-8 border border-white/5 bg-white/5 rounded-xl text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-slate-700 mx-auto" />
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">No more active alerts</h3>
        <p className="text-xs text-slate-500 font-mono">ALL_SYSTEMS_OPERATIONAL // AUTO_SCAN_STILL_ACTIVE</p>
      </div>
    </div>
  );
};

export default Alerts;
