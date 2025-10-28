export function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line x1="0" y1="50" x2="200" y2="50" stroke="#00D0FF" strokeWidth="0.5" />
            <line x1="0" y1="150" x2="200" y2="150" stroke="#00D0FF" strokeWidth="0.5" />
            
            {/* Vertical lines */}
            <line x1="50" y1="0" x2="50" y2="200" stroke="#00D0FF" strokeWidth="0.5" />
            <line x1="150" y1="0" x2="150" y2="200" stroke="#00D0FF" strokeWidth="0.5" />
            
            {/* Connection points */}
            <circle cx="50" cy="50" r="2" fill="#75FF00" />
            <circle cx="150" cy="50" r="2" fill="#75FF00" />
            <circle cx="50" cy="150" r="2" fill="#75FF00" />
            <circle cx="150" cy="150" r="2" fill="#75FF00" />
            
            {/* Diagonal connectors */}
            <line x1="50" y1="50" x2="150" y2="150" stroke="#00D0FF" strokeWidth="0.3" opacity="0.5" />
            <line x1="150" y1="50" x2="50" y2="150" stroke="#00D0FF" strokeWidth="0.3" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
}
