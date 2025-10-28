import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, ReactNode } from 'react';

interface MouseFollowParallaxProps {
  children: ReactNode;
  strength?: number;
}

export function MouseFollowParallax({ children, strength = 20 }: MouseFollowParallaxProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPct = (clientX / innerWidth - 0.5) * strength;
      const yPct = (clientY / innerHeight - 0.5) * strength;
      
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, strength]);

  return (
    <motion.div
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
