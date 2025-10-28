import { useState } from 'react';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InfoTooltipProps {
  text: string;
  className?: string;
}

export function InfoTooltip({ text, className = "" }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        className="text-[#00D0FF] hover:text-[#75FF00] transition-colors"
      >
        <Info className="w-4 h-4" />
      </button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 z-50"
          >
            <div className="bg-[#1A1A22] border border-[#00D0FF]/50 rounded-lg p-3 shadow-lg shadow-[#00D0FF]/20">
              <p className="text-[#C2C2CC] text-xs leading-relaxed">{text}</p>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-px">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#00D0FF]/50"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
