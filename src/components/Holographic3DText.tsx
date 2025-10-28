import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Holographic3DTextProps {
  children: ReactNode;
  delay?: number;
}

export function Holographic3DText({ children, delay = 0 }: Holographic3DTextProps) {
  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      {/* Shadow layers for 3D depth */}
      <motion.div
        className="absolute inset-0 blur-sm opacity-50"
        style={{
          color: '#00D0FF',
          transform: 'translateZ(-20px) translateX(-2px) translateY(2px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: delay + 0.1 }}
      >
        {children}
      </motion.div>
      
      <motion.div
        className="absolute inset-0 blur-sm opacity-50"
        style={{
          color: '#75FF00',
          transform: 'translateZ(-40px) translateX(2px) translateY(-2px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: delay + 0.2 }}
      >
        {children}
      </motion.div>
      
      {/* Main text with holographic effect */}
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(0)',
        }}
        initial={{ opacity: 0, y: 20, z: -50 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          z: 0,
        }}
        transition={{ 
          delay,
          duration: 0.8,
          type: 'spring',
        }}
        whileHover={{
          z: 20,
          rotateX: 5,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          animate={{
            textShadow: [
              '0 0 20px rgba(0, 208, 255, 0.5), 0 0 40px rgba(117, 255, 0, 0.3)',
              '0 0 30px rgba(117, 255, 0, 0.5), 0 0 50px rgba(0, 208, 255, 0.3)',
              '0 0 20px rgba(0, 208, 255, 0.5), 0 0 40px rgba(117, 255, 0, 0.3)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      </motion.div>
      
      {/* Glowing edges */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #00D0FF 0%, transparent 30%, transparent 70%, #75FF00 100%)',
          opacity: 0.2,
          mixBlendMode: 'overlay',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
