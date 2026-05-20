import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { time: '14:00', traffic: 4000, anomalies: 240 },
  { time: '14:05', traffic: 3000, anomalies: 1398 },
  { time: '14:10', traffic: 2000, anomalies: 9800 },
  { time: '14:15', traffic: 2780, anomalies: 3908 },
  { time: '14:20', traffic: 1890, anomalies: 4800 },
  { time: '14:25', traffic: 2390, anomalies: 3800 },
  { time: '14:30', traffic: 3490, anomalies: 4300 },
];

const TrafficChart: React.FC = () => {
  return (
    <div className="glass-panel p-6 h-[400px] border-slate-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
          NETWORK TRAFFIC ANALYSIS
        </h3>
        <span className="text-[10px] font-mono text-slate-500 font-bold">PACKETS/SEC // NODE_08</span>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAnomalies" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d946ef" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
            <XAxis 
              dataKey="time" 
              stroke="#334155" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              fontFamily="JetBrains Mono"
              fontWeight="bold"
            />
            <YAxis 
              stroke="#334155" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              fontFamily="JetBrains Mono"
              fontWeight="bold"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#020617', 
                border: '1px solid #1e293b',
                borderRadius: '12px',
                fontSize: '11px',
                fontFamily: 'JetBrains Mono',
                fontWeight: 'bold'
              }}
            />
            <Area 
              type="stepAfter" 
              dataKey="traffic" 
              stroke="#06b6d4" 
              fillOpacity={1} 
              fill="url(#colorTraffic)" 
              strokeWidth={3}
            />
            <Area 
              type="stepAfter" 
              dataKey="anomalies" 
              stroke="#d946ef" 
              fillOpacity={1} 
              fill="url(#colorAnomalies)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 mt-4 pt-4 border-t border-slate-800 text-center">
        <div>
          <p className="text-[9px] text-slate-500 font-bold uppercase">Inbound</p>
          <p className="text-xs font-mono font-black text-slate-200">142.4 GB/s</p>
        </div>
        <div>
          <p className="text-[9px] text-slate-500 font-bold uppercase">Outbound</p>
          <p className="text-xs font-mono font-black text-slate-200">88.1 GB/s</p>
        </div>
        <div>
          <p className="text-[9px] text-slate-500 font-bold uppercase">Latency</p>
          <p className="text-xs font-mono font-black text-emerald-400">12ms</p>
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;
