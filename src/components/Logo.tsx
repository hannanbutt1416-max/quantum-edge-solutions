interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
}

export function Logo({ className = "w-10 h-10", variant = 'icon' }: LogoProps) {
  if (variant === 'text') {
    return (
      <div className="flex flex-col items-start">
        <span className="text-white font-bold text-lg leading-tight tracking-tight">
          QUANTOM
        </span>
        <span className="text-[#75FF00] font-bold text-lg leading-tight tracking-tight">
          EDGE
        </span>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className="flex items-center gap-3">
        <LogoIcon className={className} />
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-lg leading-tight tracking-tight">
            QUANTOM
          </span>
          <span className="text-[#75FF00] font-bold text-lg leading-tight tracking-tight">
            EDGE
          </span>
        </div>
      </div>
    );
  }

  return <LogoIcon className={className} />;
}

function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon layer */}
      <path
        d="M60 10 L95 32.5 L95 77.5 L60 100 L25 77.5 L25 32.5 Z"
        stroke="#00D0FF"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />
      
      {/* Middle hexagon layer */}
      <path
        d="M60 20 L87.5 37 L87.5 73 L60 90 L32.5 73 L32.5 37 Z"
        stroke="#00D0FF"
        strokeWidth="2"
        fill="none"
        className="hex-pulse"
      />
      
      {/* Inner hexagon glow */}
      <path
        d="M60 30 L80 42 L80 68 L60 80 L40 68 L40 42 Z"
        stroke="#00D0FF"
        strokeWidth="1.5"
        fill="rgba(0, 208, 255, 0.05)"
        opacity="0.8"
      />
      
      {/* Q letter integrated into hexagon */}
      <g className="letter-q">
        <path
          d="M 50 45 Q 45 45 45 50 L 45 60 Q 45 65 50 65 L 55 65 Q 60 65 60 60 L 60 50 Q 60 45 55 45 Z"
          stroke="#00D0FF"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <line 
          x1="57" 
          y1="62" 
          x2="63" 
          y2="68" 
          stroke="#00D0FF" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
      </g>
      
      {/* E letter - circuit style bars */}
      <g className="letter-e" opacity="0.9">
        <line x1="70" y1="48" x2="82" y2="48" stroke="#75FF00" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="70" y1="55" x2="78" y2="55" stroke="#75FF00" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="70" y1="62" x2="82" y2="62" stroke="#75FF00" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* E connection dots */}
        <circle cx="68" cy="48" r="2" fill="#75FF00" />
        <circle cx="68" cy="55" r="2" fill="#75FF00" />
        <circle cx="68" cy="62" r="2" fill="#75FF00" />
      </g>
      
      {/* Circuit lines connecting to center */}
      <g opacity="0.4" className="circuit-line">
        <line x1="60" y1="60" x2="60" y2="20" stroke="#00D0FF" strokeWidth="1" />
        <line x1="60" y1="60" x2="87.5" y2="37" stroke="#00D0FF" strokeWidth="1" />
        <line x1="60" y1="60" x2="87.5" y2="73" stroke="#00D0FF" strokeWidth="1" />
        <line x1="60" y1="60" x2="60" y2="90" stroke="#00D0FF" strokeWidth="1" />
        <line x1="60" y1="60" x2="32.5" y2="73" stroke="#00D0FF" strokeWidth="1" />
        <line x1="60" y1="60" x2="32.5" y2="37" stroke="#00D0FF" strokeWidth="1" />
      </g>
      
      {/* Connection nodes at hexagon corners */}
      <circle cx="60" cy="20" r="2.5" fill="#00D0FF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="87.5" cy="37" r="2.5" fill="#00D0FF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="87.5" cy="73" r="2.5" fill="#75FF00" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="90" r="2.5" fill="#75FF00" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          begin="0.9s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="32.5" cy="73" r="2.5" fill="#75FF00" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          begin="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="32.5" cy="37" r="2.5" fill="#00D0FF" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          begin="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Center glow effect */}
      <circle cx="60" cy="60" r="8" fill="#00D0FF" opacity="0.2">
        <animate
          attributeName="r"
          values="6;10;6"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.1;0.3;0.1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      {/* Outer connection points */}
      <g opacity="0.6">
        <circle cx="60" cy="10" r="2" fill="#75FF00" />
        <circle cx="95" cy="32.5" r="2" fill="#00D0FF" />
        <circle cx="95" cy="77.5" r="2" fill="#75FF00" />
        <circle cx="60" cy="100" r="2" fill="#75FF00" />
        <circle cx="25" cy="77.5" r="2" fill="#00D0FF" />
        <circle cx="25" cy="32.5" r="2" fill="#00D0FF" />
      </g>
    </svg>
  );
}

// Watermark version for background decoration
export function LogoWatermark({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <div className={`${className} opacity-5`}>
      <LogoIcon className="w-full h-full" />
    </div>
  );
}

// Floating decorative logo
export function LogoDecorative({ className = "w-32 h-32", position = "top-right" }: { className?: string; position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  const positionClasses = {
    'top-right': 'top-20 right-10',
    'top-left': 'top-20 left-10',
    'bottom-right': 'bottom-20 right-10',
    'bottom-left': 'bottom-20 left-10',
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className} opacity-10 pointer-events-none`}>
      <LogoIcon className="w-full h-full" />
    </div>
  );
}
