import React from 'react';
import { Terminal, Download, Share2, Search, Trash2 } from 'lucide-react';

const Logs: React.FC = () => {
  const logEntries = Array.from({ length: 15 }).map((_, i) => ({
    timestamp: `2024-05-18 14:2${Math.floor(i/10)}:${10+i}`,
    level: i % 5 === 0 ? 'ERR' : i % 3 === 0 ? 'WRN' : 'INF',
    module: i % 2 === 0 ? 'AUTH' : 'NET_FLOW',
    event: i % i === 0 ? 'User login failed' : 'Connection timeout from node_45',
    id: `LOG_${1000 + i}`
  }));

  return (
    <div className="space-y-8 pb-12">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
            System <span className="text-cyber-blue">Logs</span>
          </h2>
          <p className="text-slate-500 font-mono text-xs mt-1">RAW_EVENT_STREAM // PERSISTENT_STORAGE_BLOCK_A</p>
        </div>
        <div className="flex gap-4">
          <button className="cyber-button py-2 flex items-center gap-2 border-white/20 text-white hover:bg-white/10">
            <Download className="w-4 h-4" />
            EXPORT
          </button>
          <button className="cyber-button py-2 flex items-center gap-2 border-white/20 text-white hover:bg-white/10">
            <Share2 className="w-4 h-4" />
            STREAM
          </button>
          <button className="cyber-button py-2 flex items-center gap-2 border-cyber-red text-cyber-red hover:bg-cyber-red/10">
            <Trash2 className="w-4 h-4" />
            PURGE
          </button>
        </div>
      </header>

      <div className="glass-panel overflow-hidden flex flex-col">
        <div className="p-4 bg-cyber-dark/60 border-b border-white/5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded text-[10px] font-mono text-cyber-blue">
              FILTER: ALL_MODULES
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
            <input 
              type="text" 
              placeholder="SEARCH_LOGS..." 
              className="bg-cyber-black/40 border border-white/10 rounded py-1 pl-8 pr-4 text-[10px] font-mono focus:border-cyber-blue outline-none w-48"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[11px] font-mono border-collapse">
            <thead className="bg-cyber-dark text-slate-500 uppercase">
              <tr className="border-b border-white/5">
                <th className="py-3 px-4 font-normal">Timestamp</th>
                <th className="py-3 px-4 font-normal">Level</th>
                <th className="py-3 px-4 font-normal">Module</th>
                <th className="py-3 px-4 font-normal">Event Description</th>
                <th className="py-3 px-4 font-normal">Event ID</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-white/5">
              {logEntries.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors group">
                  <td className="py-3 px-4 whitespace-nowrap text-slate-500">{log.timestamp}</td>
                  <td className="py-3 px-4">
                    <span className={
                      log.level === 'ERR' ? 'text-cyber-red' : 
                      log.level === 'WRN' ? 'text-cyber-yellow' : 
                      'text-cyber-blue'
                    }>{log.level}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-400">{log.module}</td>
                  <td className="py-3 px-4 group-hover:text-white transition-colors">{log.event}</td>
                  <td className="py-3 px-4 text-slate-600">{log.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-cyber-dark/40 border-t border-white/5 flex items-center justify-between">
          <div className="text-[10px] text-slate-500 font-mono">SHOWING 15 OF 1,402 ENTRIES</div>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 hover:text-white">PREV</button>
            <button className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400 hover:text-white">NEXT</button>
          </div>
        </div>
      </div>
      
      <div className="glass-panel p-4 bg-cyber-blue/5 border-cyber-blue/20">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-cyber-blue" />
          <p className="text-[10px] font-mono text-cyber-blue leading-relaxed">
            tail -f /var/log/sentinel/core.log || listening for remote telemetry on port 5542...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logs;
