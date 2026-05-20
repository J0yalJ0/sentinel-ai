import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  AlertTriangle, 
  Database, 
  Globe, 
  Zap, 
  ShieldAlert,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: AlertTriangle, label: 'Threat Alerts', path: '/alerts' },
  { icon: Database, label: 'System Logs', path: '/logs' },
  { icon: Globe, label: 'Global Defense', path: '/defense' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/40 backdrop-blur-md flex flex-col h-[calc(100vh-80px)] overflow-y-auto m-4 mr-0 rounded-2xl">
      <div className="p-6 space-y-8">
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] px-3 font-bold">Main Console</p>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 group font-bold tracking-tight",
                  isActive 
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]" 
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <item.icon className={cn(
                  "w-4 h-4 transition-transform duration-300 group-hover:scale-110",
                  "group-hover:drop-shadow-[0_0_3px_currentColor]"
                )} />
                <span className="uppercase">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] px-3 font-bold">Neural Load</p>
          <div className="space-y-4 px-3">
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
                <span>CPU_CORE</span>
                <span className="text-cyan-400">42%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-[42%] shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
                <span>MEM_STACK</span>
                <span className="text-fuchsia-400">68%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-fuchsia-500 w-[68%] shadow-[0_0_8px_rgba(217,70,239,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 shrink-0 shadow-inner flex items-center justify-center border border-white/5 italic font-black text-slate-500">A</div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-slate-200 truncate uppercase tracking-tighter">admin_alpha</p>
            <p className="text-[9px] text-cyan-500 font-mono font-black uppercase">LVL 9 AUTH</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
