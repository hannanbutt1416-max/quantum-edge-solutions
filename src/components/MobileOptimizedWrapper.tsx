import { ReactNode, useEffect, useState } from 'react';

interface MobileOptimizedWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
}

export function MobileOptimizedWrapper({ 
  children, 
  fallback = null, 
  threshold = 768 
}: MobileOptimizedWrapperProps) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < threshold);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [threshold]);
  
  return <>{isMobile ? fallback : children}</>;
}
