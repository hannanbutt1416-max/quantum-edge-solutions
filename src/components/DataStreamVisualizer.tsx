import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { InfoTooltip } from './InfoTooltip';

interface DataPacket {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
}

export function DataStreamVisualizer() {
  const [packets, setPackets] = useState<DataPacket[]>([]);

  useEffect(() => {
    const createPacket = () => {
      const colors = ['#00D0FF', '#75FF00'];
      const newPacket: DataPacket = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: -10,
        targetX: 50 + (Math.random() - 0.5) * 20,
        targetY: 110,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      setPackets(prev => [...prev.slice(-15), newPacket]);
    };

    const interval = setInterval(createPacket, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Central processor node */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-[#00D0FF] bg-[#00D0FF]/10"
        animate={{
          boxShadow: [
            '0 0 20px rgba(0, 208, 255, 0.5)',
            '0 0 40px rgba(0, 208, 255, 0.8)',
            '0 0 20px rgba(0, 208, 255, 0.5)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[#00D0FF] font-mono font-bold text-sm">AI CORE</div>
        </div>
      </motion.div>

      {/* Data packets */}
      {packets.map(packet => (
        <motion.div
          key={packet.id}
          className="absolute w-3 h-3 rounded-full"
          style={{ 
            background: packet.color,
            boxShadow: `0 0 10px ${packet.color}`
          }}
          initial={{ 
            x: `${packet.x}%`, 
            y: `${packet.y}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: `${packet.targetX}%`, 
            y: `${packet.targetY}%`,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
          }}
          transition={{ 
            duration: 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <line x1="50%" y1="0%" x2="50%" y2="50%" stroke="#00D0FF" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="0%" y1="50%" x2="50%" y2="50%" stroke="#75FF00" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="100%" y1="50%" x2="50%" y2="50%" stroke="#75FF00" strokeWidth="1" strokeDasharray="5,5" />
        <line x1="50%" y1="100%" x2="50%" y2="50%" stroke="#00D0FF" strokeWidth="1" strokeDasharray="5,5" />
      </svg>

      {/* Input/Output nodes */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#75FF00]/20 border-2 border-[#75FF00]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#00D0FF]/20 border-2 border-[#00D0FF]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#75FF00]/20 border-2 border-[#75FF00]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#00D0FF]/20 border-2 border-[#00D0FF]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />

      {/* Processing indicators */}
      <div className="absolute bottom-4 left-4 bg-[#1A1A22] border border-[#00D0FF]/30 rounded px-3 py-2 flex items-center gap-2">
        <div className="text-[#75FF00] font-mono text-xs">
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ● PROCESSING
          </motion.span>
        </div>
        <InfoTooltip text="Real-time data processing simulation showing AI-powered automation in action" />
      </div>

      <div className="absolute bottom-4 right-4 bg-[#1A1A22] border border-[#00D0FF]/30 rounded px-3 py-2 flex items-center gap-2">
        <div className="text-[#00D0FF] font-mono text-xs">
          <Counter start={0} end={packets.length * 1000} duration={2} />
          <span className="text-[#C2C2CC]"> ops/s</span>
        </div>
        <InfoTooltip text="Operations per second - demonstrating our high-performance systems" />
      </div>
    </div>
  );
}

function Counter({ start, end, duration }: { start: number; end: number; duration: number }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(start + (end - start) * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [start, end, duration]);

  return <>{count.toLocaleString()}</>;
}
