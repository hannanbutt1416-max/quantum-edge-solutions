import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Cpu, Database, Zap } from 'lucide-react';

export function LiveStatsBar() {
  const [stats, setStats] = useState({
    requests: 1247,
    cpu: 42,
    dataProcessed: 8.7,
    activeThreads: 16
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        requests: prev.requests + Math.floor(Math.random() * 10),
        cpu: Math.min(Math.max(prev.cpu + (Math.random() - 0.5) * 5, 20), 80),
        dataProcessed: prev.dataProcessed + Math.random() * 0.5,
        activeThreads: Math.floor(Math.random() * 8) + 12
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="bg-[#1A1A22]/80 backdrop-blur-sm border border-[#00D0FF]/20 rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatItem
          icon={<Activity className="w-4 h-4" />}
          label="Requests/min"
          value={stats.requests.toLocaleString()}
          color="#75FF00"
        />
        <StatItem
          icon={<Cpu className="w-4 h-4" />}
          label="CPU Usage"
          value={`${Math.floor(stats.cpu)}%`}
          color="#00D0FF"
        />
        <StatItem
          icon={<Database className="w-4 h-4" />}
          label="Data (GB)"
          value={stats.dataProcessed.toFixed(1)}
          color="#75FF00"
        />
        <StatItem
          icon={<Zap className="w-4 h-4" />}
          label="Threads"
          value={stats.activeThreads.toString()}
          color="#00D0FF"
        />
      </div>
    </motion.div>
  );
}

function StatItem({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div style={{ color }}>{icon}</div>
      <div>
        <div className="text-[#C2C2CC] text-xs opacity-70">{label}</div>
        <motion.div 
          className="font-mono font-bold"
          style={{ color }}
          key={value}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value}
        </motion.div>
      </div>
    </div>
  );
}
