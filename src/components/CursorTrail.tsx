import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const idCounterRef = useRef(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { id: idCounterRef.current, x: e.clientX, y: e.clientY };
      idCounterRef.current += 1;
      setTrail(prev => [...prev.slice(-20), newPoint]);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const size = 40 - (trail.length - index) * 1.5;
        const opacity = (index / trail.length) * 0.3;
        
        return (
          <motion.div
            key={point.id}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: point.x,
              top: point.y,
              width: size,
              height: size,
              background: `radial-gradient(circle, rgba(0, 208, 255, ${opacity}), rgba(117, 255, 0, ${opacity * 0.5}), transparent)`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </div>
  );
}
