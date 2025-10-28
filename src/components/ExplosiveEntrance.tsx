import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ExplosiveEntranceProps {
  children: ReactNode;
  delay?: number;
}

export function ExplosiveEntrance({ children, delay = 0 }: ExplosiveEntranceProps) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: (360 / 20) * i,
    distance: 50 + Math.random() * 50,
    size: 3 + Math.random() * 5,
  }));
  
  return (
    <div className="relative">
      {/* Explosion particles */}
      {particles.map(particle => {
        const radians = (particle.angle * Math.PI) / 180;
        const x = Math.cos(radians) * particle.distance;
        const y = Math.sin(radians) * particle.distance;
        
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              left: '50%',
              top: '50%',
              background: particle.id % 2 === 0 ? '#00D0FF' : '#75FF00',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.id % 2 === 0 ? '#00D0FF' : '#75FF00'}`,
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: x,
              y: y,
              opacity: 0,
              scale: 1,
            }}
            transition={{
              delay: delay,
              duration: 0.8,
              ease: 'easeOut',
            }}
          />
        );
      })}
      
      {/* Shockwave ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#00D0FF] pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
        }}
        initial={{
          width: 0,
          height: 0,
          x: '-50%',
          y: '-50%',
          opacity: 1,
        }}
        animate={{
          width: 300,
          height: 300,
          opacity: 0,
        }}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: 'easeOut',
        }}
      />
      
      {/* Content with bounce */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: delay + 0.2,
          type: 'spring',
          stiffness: 200,
          damping: 15,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
