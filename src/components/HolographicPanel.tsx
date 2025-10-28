import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HolographicPanelProps {
  children: ReactNode;
  delay?: number;
}

export function HolographicPanel({ children, delay = 0 }: HolographicPanelProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, rotateY: 90, z: -100 }}
      animate={{ opacity: 1, rotateY: 0, z: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      {/* Holographic shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 30%, rgba(0, 208, 255, 0.1) 50%, transparent 70%)',
            'linear-gradient(225deg, transparent 30%, rgba(117, 255, 0, 0.1) 50%, transparent 70%)',
            'linear-gradient(45deg, transparent 30%, rgba(0, 208, 255, 0.1) 50%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00D0FF]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00D0FF]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#75FF00]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#75FF00]" />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #00D0FF, #75FF00, #00D0FF)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {children}
    </motion.div>
  );
}
