import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ShieldAlert, Cpu, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThreatCardProps {
  prediction: number; // 0 or 1
  probability: number; // 0 to 1
  isAnomaly: boolean;
  className?: string;
}

const ThreatCard: React.FC<ThreatCardProps> = ({ prediction, probability, isAnomaly, className }) => {
  const isDanger = prediction === 1 || isAnomaly;

  return (
    <div className={cn("glass-panel p-6 relative group border-slate-800", className)}>
      {/* Subtle radial gradient */}
      <div className={cn(
        "absolute inset-0 opacity-[0.03] transition-opacity duration-500",
        isDanger ? "bg-rose-500" : "bg-cyan-500"
      )} />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center border",
              isDanger ? "bg-rose-500/10 border-rose-500/30" : "bg-cyan-500/10 border-cyan-500/30"
            )}>
              {isDanger ? (
                <ShieldAlert className="w-6 h-6 text-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.4)]" />
              ) : (
                <ShieldCheck className="w-6 h-6 text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />
              )}
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-none mb-1">Classifier_V4</h3>
              <p className={cn(
                "text-lg font-black tracking-tighter uppercase",
                isDanger ? "text-rose-400" : "text-emerald-400"
              )}>
                {isDanger ? "THREAT_DETECTED" : "POSTURE_OPTIMAL"}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] font-mono text-slate-500 uppercase font-black tracking-widest mb-1">Confidence</div>
            <div className={cn(
              "text-2xl font-black font-mono tracking-tighter leading-none",
              isDanger ? "text-rose-500" : "text-cyan-500"
            )}>
              {(probability * 100).toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-2 mb-1.5">
              <Cpu className="w-3 h-3 text-cyan-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">XGBOOST_CORE</span>
            </div>
            <div className="text-[10px] font-mono font-black text-slate-300">
              STABLE_ENGINE_GRID_A
            </div>
          </div>
          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-2 mb-1.5">
              <Activity className="w-3 h-3 text-fuchsia-500" />
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">ANN_ANOMALY</span>
            </div>
            <div className="text-[10px] font-mono font-black text-slate-300 uppercase">
              {isAnomaly ? "PATTERN_OUTLIER" : "NORMAL_FLOW"}
            </div>
          </div>
        </div>

        <div className="h-2 bg-slate-800 rounded-full mt-2 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${probability * 100}%` }}
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              isDanger ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" : "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreatCard;
