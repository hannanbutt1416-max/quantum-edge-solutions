import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idCounterRef = useRef(0);
  
  const handleClick = (e: React.MouseEvent) => {
    const newRipple = { id: idCounterRef.current, x: e.clientX, y: e.clientY };
    idCounterRef.current += 1;
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1500);
  };
  
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onClick={handleClick}
    >
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              borderColor: '#00D0FF',
            }}
            initial={{ 
              width: 0, 
              height: 0,
              opacity: 1,
              x: '-50%',
              y: '-50%',
            }}
            animate={{ 
              width: 300, 
              height: 300,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        ))}
        
        {ripples.map(ripple => (
          <motion.div
            key={`inner-${ripple.id}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              background: 'radial-gradient(circle, rgba(117, 255, 0, 0.3), transparent)',
            }}
            initial={{ 
              width: 0, 
              height: 0,
              opacity: 1,
              x: '-50%',
              y: '-50%',
            }}
            animate={{ 
              width: 200, 
              height: 200,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
