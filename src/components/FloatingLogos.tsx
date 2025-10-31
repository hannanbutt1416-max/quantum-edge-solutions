import { Logo } from './Logo';

export function FloatingLogos() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left floating logo */}
      <div className="absolute top-20 left-10 opacity-5 animate-float" style={{ animationDelay: '0s' }}>
        <Logo variant="icon" className="w-32 h-32" />
      </div>
      
      {/* Top right floating logo */}
      <div className="absolute top-40 right-20 opacity-5 animate-float-slow" style={{ animationDelay: '1s' }}>
        <Logo variant="icon" className="w-40 h-40" />
      </div>
      
      {/* Bottom left floating logo */}
      <div className="absolute bottom-32 left-32 opacity-5 animate-float" style={{ animationDelay: '2s' }}>
        <Logo variant="icon" className="w-36 h-36" />
      </div>
      
      {/* Bottom right floating logo */}
      <div className="absolute bottom-20 right-10 opacity-5 animate-float-slow" style={{ animationDelay: '0.5s' }}>
        <Logo variant="icon" className="w-28 h-28" />
      </div>
      
      {/* Center floating logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-3 animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <Logo variant="icon" className="w-64 h-64" />
      </div>
    </div>
  );
}

// Grid of small logos for background patterns
export function LogoGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="grid grid-cols-6 gap-20 p-10">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <Logo variant="icon" className="w-16 h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
