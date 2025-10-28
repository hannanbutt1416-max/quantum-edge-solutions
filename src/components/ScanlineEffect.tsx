import { motion } from 'motion/react';

export function ScanlineEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical scanline */}
      <motion.div
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00D0FF] to-transparent opacity-30"
        style={{
          boxShadow: '0 0 20px rgba(0, 208, 255, 0.6)',
        }}
        animate={{
          top: ['-5%', '105%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Horizontal scanline */}
      <motion.div
        className="absolute h-full w-1 bg-gradient-to-b from-transparent via-[#75FF00] to-transparent opacity-20"
        style={{
          boxShadow: '0 0 20px rgba(117, 255, 0, 0.4)',
        }}
        animate={{
          left: ['-5%', '105%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      />
      
      {/* CRT scanlines overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 208, 255, 0.3) 2px, rgba(0, 208, 255, 0.3) 4px)',
        }}
      />
    </div>
  );
}
