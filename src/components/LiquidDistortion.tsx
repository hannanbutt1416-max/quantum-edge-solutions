import { motion } from 'motion/react';

export function LiquidDistortion() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'url(#liquid)' }}>
        <defs>
          {/* Liquid Distortion Filter */}
          <filter id="liquid">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.003"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                from="0.01 0.003"
                to="0.015 0.005"
                dur="20s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30">
              <animate
                attributeName="scale"
                from="30"
                to="50"
                dur="10s"
                repeatCount="indefinite"
                direction="alternate"
              />
            </feDisplacementMap>
          </filter>
          
          {/* Gooey Effect */}
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
          </filter>
        </defs>
        
        {/* Animated Liquid Shapes */}
        <motion.path
          d="M 0 300 Q 250 200 500 300 T 1000 300 L 1000 0 L 0 0 Z"
          fill="url(#liquid-gradient)"
          opacity="0.1"
          filter="url(#gooey)"
          animate={{
            d: [
              "M 0 300 Q 250 200 500 300 T 1000 300 L 1000 0 L 0 0 Z",
              "M 0 250 Q 250 350 500 250 T 1000 250 L 1000 0 L 0 0 Z",
              "M 0 300 Q 250 200 500 300 T 1000 300 L 1000 0 L 0 0 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.path
          d="M 0 400 Q 300 300 600 400 T 1200 400 L 1200 0 L 0 0 Z"
          fill="url(#liquid-gradient-2)"
          opacity="0.08"
          filter="url(#gooey)"
          animate={{
            d: [
              "M 0 400 Q 300 300 600 400 T 1200 400 L 1200 0 L 0 0 Z",
              "M 0 350 Q 300 450 600 350 T 1200 350 L 1200 0 L 0 0 Z",
              "M 0 400 Q 300 300 600 400 T 1200 400 L 1200 0 L 0 0 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <defs>
          <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D0FF" />
            <stop offset="100%" stopColor="#00D0FF" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="liquid-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#75FF00" />
            <stop offset="100%" stopColor="#75FF00" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
