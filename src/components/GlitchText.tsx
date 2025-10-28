import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={glitchActive ? {
          x: [0, -2, 2, -2, 0],
          skew: [0, 2, -2, 0],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
      
      {/* Glitch layer 1 - Cyan */}
      {glitchActive && (
        <motion.span
          className="absolute top-0 left-0 text-[#00D0FF] opacity-70 z-0"
          style={{ mixBlendMode: 'screen' }}
          animate={{
            x: [-2, 2, -2],
            clipPath: [
              'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
              'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)',
              'polygon(0 15%, 100% 15%, 100% 65%, 0 65%)',
            ],
          }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      )}
      
      {/* Glitch layer 2 - Lime */}
      {glitchActive && (
        <motion.span
          className="absolute top-0 left-0 text-[#75FF00] opacity-70 z-0"
          style={{ mixBlendMode: 'screen' }}
          animate={{
            x: [2, -2, 2],
            clipPath: [
              'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)',
              'polygon(0 0, 100% 0, 100% 40%, 0 40%)',
              'polygon(0 65%, 100% 65%, 100% 85%, 0 85%)',
            ],
          }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      )}
    </div>
  );
}
