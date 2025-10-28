import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedGrid() {
  const [activeLines, setActiveLines] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLines = Array.from(
        { length: 3 },
        () => Math.floor(Math.random() * 10)
      );
      setActiveLines(randomLines);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Vertical lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#00D0FF] to-transparent"
          style={{ left: `${i * 10}%` }}
          animate={{
            opacity: activeLines.includes(i) ? [0.2, 1, 0.2] : 0.2,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Horizontal lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#00D0FF] to-transparent"
          style={{ top: `${i * 10}%` }}
          animate={{
            opacity: activeLines.includes(i) ? [0.2, 1, 0.2] : 0.2,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Animated intersection points */}
      {activeLines.map((lineIndex, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute w-2 h-2 rounded-full bg-[#00D0FF]"
          style={{
            left: `${lineIndex * 10}%`,
            top: `${activeLines[(idx + 1) % activeLines.length] * 10}%`,
            boxShadow: '0 0 10px rgba(0, 208, 255, 0.8)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5] }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
}
