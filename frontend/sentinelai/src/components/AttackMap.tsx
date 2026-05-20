import React from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin } from 'lucide-react';

const AttackMap: React.FC = () => {
  // Mock attack points
  const points = [
    { id: 1, top: '30%', left: '20%', label: 'NA_EAST_01' },
    { id: 2, top: '45%', left: '50%', label: 'EU_WEST_12' },
    { id: 3, top: '60%', left: '80%', label: 'APAC_SOUTH_04' },
    { id: 4, top: '75%', left: '30%', label: 'SA_EAST_08' },
  ];

  return (
    <div className="glass-panel p-6 h-[400px] relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyber-blue" />
          Global Attack Surface
        </h3>
        <div className="text-[10px] font-mono text-cyber-blue uppercase">Scanning Nodes...</div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
          alt="World Map"
          className="w-full h-full object-contain filter invert opacity-30"
        />
      </div>

      <div className="relative h-full w-full">
        {points.map((point) => (
          <motion.div
            key={point.id}
            className="absolute cursor-pointer group"
            style={{ top: point.top, left: point.left }}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="relative">
              <MapPin className="w-6 h-6 text-cyber-magenta shadow-[0_0_10px_#ff00ff]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyber-magenta/20 animate-ping" />
              
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-cyber-black/90 border border-cyber-magenta/40 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                <p className="text-[10px] font-mono font-bold text-cyber-magenta tracking-tighter">NODE_ALERT: {point.label}</p>
                <p className="text-[8px] font-mono text-slate-400">LATENCY: 54MS | LOAD: HIGH</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating grid elements */}
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default AttackMap;
