import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface DepthParallaxProps {
  children: ReactNode;
  depth?: number;
  reverse?: boolean;
}

export function DepthParallax({ children, depth = 50, reverse = false }: DepthParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [depth, -depth] : [-depth, depth]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  
  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
