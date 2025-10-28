import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CodeParticle {
  id: number;
  x: number;
  y: number;
  symbol: string;
  speed: number;
  color: string;
}

export function CodeFlowAnimation() {
  const [particles, setParticles] = useState<CodeParticle[]>([]);
  
  const codeSymbols = [
    '</>',
    '{}',
    '( )',
    '[ ]',
    'div',
    'API',
    'DB',
    'UI',
    'JS',
    'CSS',
    'HTML',
    'React',
    'Node',
    'App',
  ];
  
  const colors = ['#00D0FF', '#75FF00', '#C2C2CC'];
  
  useEffect(() => {
    // Create initial particles
    const initialParticles: CodeParticle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
      speed: 0.3 + Math.random() * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(initialParticles);
    
    // Animate particles flowing upward
    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newY = particle.y - particle.speed;
          
          // Reset particle when it goes off screen
          if (newY < -20) {
            return {
              ...particle,
              y: 620,
              x: Math.random() * window.innerWidth,
              symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
              color: colors[Math.floor(Math.random() * colors.length)],
            };
          }
          
          return { ...particle, y: newY };
        })
      );
    }, 30);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute font-mono text-xs"
          style={{
            left: particle.x,
            top: particle.y,
            color: particle.color,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: particle.id * 0.1,
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
      
      {/* Flowing lines representing data flow */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="code-flow-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00D0FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00D0FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00D0FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${100 + i * 150} 600 Q ${120 + i * 150} 400 ${100 + i * 150} 0`}
            stroke="url(#code-flow-gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
            animate={{
              strokeDashoffset: [0, -100],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
