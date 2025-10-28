import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function MorphingBlob() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Morphing Blob 1 - Cyan */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #00D0FF 0%, transparent 70%)',
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Morphing Blob 2 - Lime */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #75FF00 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.3, 1],
          rotate: [360, 270, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Interactive Blob - Follows Mouse */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #00D0FF 0%, transparent 70%)',
        }}
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: 'spring', stiffness: 50, damping: 30 },
          y: { type: 'spring', stiffness: 50, damping: 30 },
          scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </div>
  );
}
