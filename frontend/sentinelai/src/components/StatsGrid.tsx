import React from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, AlertTriangle, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'Total Threats', value: '1,284', change: '+12%', icon: AlertTriangle, color: 'text-cyber-magenta' },
  { label: 'Network Load', value: '42.8 GB/s', change: '-5%', icon: Activity, color: 'text-cyber-blue' },
  { label: 'AI Accuracy', value: '99.4%', change: '+0.2%', icon: Cpu, color: 'text-cyber-neon' },
  { label: 'Shield Uptime', value: '99.98%', change: 'Stable', icon: Shield, color: 'text-cyber-blue' },
];

const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-panel p-4 flex items-center gap-4 group"
        >
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/5",
            "group-hover:border-cyber-blue/30 group-hover:scale-110 transition-all duration-300"
          )}>
            <stat.icon className={cn("w-6 h-6", stat.color)} />
          </div>
          <div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-xl font-bold text-white">{stat.value}</h4>
              <span className={cn(
                "text-[10px] font-mono",
                stat.change.startsWith('+') ? "text-cyber-neon" : "text-slate-500"
              )}>
                {stat.change}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
