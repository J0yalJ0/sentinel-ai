import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, Activity, PieChart as PieIcon, BarChart3 } from 'lucide-react';

const radarData = [
  { subject: 'Persistence', A: 120, B: 110, fullMark: 150 },
  { subject: 'Stealth', A: 98, B: 130, fullMark: 150 },
  { subject: 'Evasion', A: 86, B: 130, fullMark: 150 },
  { subject: 'Impact', A: 99, B: 100, fullMark: 150 },
  { subject: 'Lateral', A: 85, B: 90, fullMark: 150 },
  { subject: 'Discovery', A: 65, B: 85, fullMark: 150 },
];

const barData = [
  { name: 'Mon', count: 40 },
  { name: 'Tue', count: 30 },
  { name: 'Wed', count: 65 },
  { name: 'Thu', count: 45 },
  { name: 'Fri', count: 90 },
  { name: 'Sat', count: 25 },
  { name: 'Sun', count: 18 },
];

const pieData = [
  { name: 'External', value: 400 },
  { name: 'Internal', value: 300 },
  { name: 'Botnet', value: 300 },
  { name: 'Cloud', value: 200 },
];

const COLORS = ['#00f2ff', '#ff00ff', '#39ff14', '#f3e600'];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <header>
        <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
          Threat <span className="text-cyber-magenta">Analytics</span>
        </h2>
        <p className="text-slate-500 font-mono text-xs mt-1">DEEP_PATTERN_RECOGNITION_SUITE // LEVEL_5_CLEARANCE</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 min-h-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-5 h-5 text-cyber-magenta" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Threat Vector Signature</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Current_Scan"
                  dataKey="A"
                  stroke="#00f2ff"
                  fill="#00f2ff"
                  fillOpacity={0.2}
                />
                <Radar
                  name="Baseline_24H"
                  dataKey="B"
                  stroke="#ff00ff"
                  fill="#ff00ff"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 min-h-[400px]">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-5 h-5 text-cyber-blue" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Weekly Incident Volume</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} fontFamily="JetBrains Mono" />
                <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} fontFamily="JetBrains Mono" />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#0a0a0f', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#ff00ff' : '#00f2ff'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 glass-panel p-6">
          <div className="flex items-center gap-3 mb-8">
            <PieIcon className="w-5 h-5 text-cyber-neon" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Source Breakdown</h3>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0f', border: '1px solid rgba(255,255,255,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {pieData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-[10px] font-mono text-slate-400 capitalize">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 glass-panel p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-5 h-5 text-cyber-blue" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Security Posture Trend</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-white/5 text-slate-500 uppercase">
                <tr>
                  <th className="py-3 px-4">Metric</th>
                  <th className="py-3 px-4">Last 7D</th>
                  <th className="py-3 px-4">Last 30D</th>
                  <th className="py-3 px-4">Performance</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { name: 'MTTR', d1: '14m', d2: '18m', p: '+22%', up: true },
                  { name: 'False_Positives', d1: '4%', d2: '6%', p: '-33%', up: false },
                  { name: 'Uptime', d1: '99.98%', d2: '99.95%', p: '+0.03%', up: true },
                  { name: 'Dwell_Time', d1: '2.4s', d2: '3.1s', p: '+22%', up: true },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.name}</td>
                    <td className="py-4 px-4">{row.d1}</td>
                    <td className="py-4 px-4">{row.d2}</td>
                    <td className={`py-4 px-4 ${row.up ? 'text-cyber-neon' : 'text-cyber-red'}`}>{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
