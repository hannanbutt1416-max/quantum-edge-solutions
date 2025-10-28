import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
    >
      <span className="text-[#C2C2CC] text-sm font-mono">Scroll to explore</span>
      <motion.div
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-[#00D0FF]" />
      </motion.div>
    </motion.div>
  );
}
