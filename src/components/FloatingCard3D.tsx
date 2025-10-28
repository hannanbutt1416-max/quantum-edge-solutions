import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface FloatingCard3DProps {
  children: ReactNode;
  delay?: number;
}

export function FloatingCard3D({ children, delay = 0 }: FloatingCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: 0,
      }}
      transition={{ 
        delay,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.05,
        z: 50,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        style={{
          transform: 'translateZ(50px)',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
