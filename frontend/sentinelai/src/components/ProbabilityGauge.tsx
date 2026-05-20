import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProbabilityGaugeProps {
  value: number; // 0 to 1
  size?: number;
  strokeWidth?: number;
}

const ProbabilityGauge: React.FC<ProbabilityGaugeProps> = ({ 
  value = 0, 
  size = 200, 
  strokeWidth = 12 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value * circumference);

  const getStatusColor = (v: number) => {
    if (v < 0.3) return '#10b981'; // Emerald 500
    if (v < 0.7) return '#f59e0b'; // Amber 500
    return '#f43f5e'; // Rose 500
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="rgba(255, 255, 255, 0.03)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={getStatusColor(value)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 8px ${getStatusColor(value)}44)` }}
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          key={value}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl font-black text-white tracking-tighter"
        >
          {(value * 100).toFixed(0)}<span className="text-2xl text-cyan-500 font-bold">%</span>
        </motion.span>
        <span className="text-[10px] font-bold text-cyan-500/70 uppercase tracking-[0.2em] mt-1 italic">
          Threat Index
        </span>
      </div>

      {/* Decorative scanner ring */}
      <motion.div
        className="absolute border border-cyan-500/10 rounded-full"
        style={{ width: size + 40, height: size + 40 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
      </motion.div>
    </div>
  );
};

export default ProbabilityGauge;
