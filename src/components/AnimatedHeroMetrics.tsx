import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Zap, Target, Database } from 'lucide-react';

export function AnimatedHeroMetrics() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: '+342%', 
      label: 'ROI Increase',
      color: '#75FF00'
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      value: '85%', 
      label: 'Time Saved',
      color: '#00D0FF'
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      value: '99.9%', 
      label: 'Accuracy',
      color: '#75FF00'
    },
    { 
      icon: <Database className="w-8 h-8" />, 
      value: '10M+', 
      label: 'Data Points/Day',
      color: '#00D0FF'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`bg-[#1A1A22] border rounded-lg p-4 transition-all duration-500 ${
            currentMetric === index 
              ? 'border-[#75FF00] shadow-lg shadow-[#75FF00]/20' 
              : 'border-[#00D0FF]/20'
          }`}
        >
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ 
                scale: currentMetric === index ? [1, 1.2, 1] : 1,
                rotate: currentMetric === index ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.5 }}
              className="text-[#00D0FF]"
            >
              {metric.icon}
            </motion.div>
            <div>
              <motion.div 
                className="font-mono font-bold text-2xl"
                style={{ color: metric.color }}
                animate={{
                  textShadow: currentMetric === index 
                    ? `0 0 20px ${metric.color}80` 
                    : 'none'
                }}
              >
                {metric.value}
              </motion.div>
              <div className="text-[#C2C2CC] text-sm mt-1">{metric.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
