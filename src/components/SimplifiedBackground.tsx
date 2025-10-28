import { motion } from 'motion/react';

export function SimplifiedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple gradient orbs - lightweight for mobile */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #00D0FF 0%, transparent 70%)',
          left: '-10%',
          top: '10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #75FF00 0%, transparent 70%)',
          right: '-10%',
          bottom: '10%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Simple grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <pattern id="mobile-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D0FF" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mobile-grid)" />
      </svg>
    </div>
  );
}
