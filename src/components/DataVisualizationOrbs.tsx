import { motion } from 'motion/react';

export function DataVisualizationOrbs() {
  const orbs = [
    { size: 120, x: '15%', y: '20%', delay: 0, color: '#00D0FF' },
    { size: 80, x: '80%', y: '15%', delay: 0.3, color: '#75FF00' },
    { size: 100, x: '70%', y: '70%', delay: 0.6, color: '#00D0FF' },
    { size: 60, x: '25%', y: '80%', delay: 0.9, color: '#75FF00' },
    { size: 90, x: '50%', y: '50%', delay: 1.2, color: '#00D0FF' },
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: orb.delay,
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${orb.color}`,
              opacity: 0.3,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${orb.color}`,
              opacity: 0.5,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: orb.delay,
            }}
          />
          
          {/* Core orb */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${orb.color}40, ${orb.color}10, transparent)`,
              boxShadow: `0 0 40px ${orb.color}80, inset 0 0 20px ${orb.color}40`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          >
            {/* Inner particle */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
              style={{
                background: orb.color,
                boxShadow: `0 0 10px ${orb.color}`,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          {/* Data streams */}
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="absolute w-1 rounded-full"
              style={{
                height: orb.size / 3,
                background: `linear-gradient(to bottom, ${orb.color}, transparent)`,
                left: '50%',
                top: '50%',
                transformOrigin: 'top center',
              }}
              animate={{
                rotate: [i * 120, i * 120 + 360],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
          ))}
        </motion.div>
      ))}
      
      {/* Connecting lines between orbs */}
      <svg className="absolute inset-0 w-full h-full">
        {orbs.slice(0, -1).map((orb, index) => {
          const nextOrb = orbs[index + 1];
          return (
            <motion.line
              key={index}
              x1={orb.x}
              y1={orb.y}
              x2={nextOrb.x}
              y2={nextOrb.y}
              stroke="#00D0FF"
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                delay: Math.max(orb.delay, nextOrb.delay) + 0.5,
                duration: 1.5,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
