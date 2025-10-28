import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HexagonalRevealProps {
  children: ReactNode;
  delay?: number;
}

export function HexagonalReveal({ children, delay = 0 }: HexagonalRevealProps) {
  return (
    <motion.div
      initial={{ 
        clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%, 50% 100%, 50% 0%)',
        opacity: 0,
      }}
      animate={{ 
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
