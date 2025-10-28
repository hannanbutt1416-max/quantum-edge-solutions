import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MobileCardProps {
  children: ReactNode;
  delay?: number;
}

export function MobileCard({ children, delay = 0 }: MobileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay,
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
