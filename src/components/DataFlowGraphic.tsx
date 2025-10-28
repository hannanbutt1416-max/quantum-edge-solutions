export function DataFlowGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central hexagon hub */}
        <g className="hex-pulse">
          <path
            d="M300 150 L350 180 L350 240 L300 270 L250 240 L250 180 Z"
            stroke="#00D0FF"
            strokeWidth="3"
            fill="rgba(0, 208, 255, 0.1)"
          />
          <circle cx="300" cy="210" r="15" fill="#00D0FF" opacity="0.8">
            <animate
              attributeName="r"
              values="15;20;15"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Data flow lines - Left side */}
        <g>
          <line x1="50" y1="100" x2="250" y2="180" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="100" r="8" fill="#75FF00" />
          
          {/* Animated data packet */}
          <circle cx="50" cy="100" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="50;150;250"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="100;140;180"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        <g>
          <line x1="50" y1="210" x2="250" y2="210" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="210" r="8" fill="#75FF00" />
          
          <circle cx="50" cy="210" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="50;150;250"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        <g>
          <line x1="50" y1="320" x2="250" y2="240" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="320" r="8" fill="#75FF00" />
          
          <circle cx="50" cy="320" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="50;150;250"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="320;280;240"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Data flow lines - Right side */}
        <g>
          <line x1="350" y1="180" x2="550" y2="100" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="550" cy="100" r="8" fill="#75FF00" />
          
          <circle cx="550" cy="100" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="350;450;550"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="180;140;100"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        <g>
          <line x1="350" y1="210" x2="550" y2="210" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="550" cy="210" r="8" fill="#75FF00" />
          
          <circle cx="550" cy="210" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="350;450;550"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        <g>
          <line x1="350" y1="240" x2="550" y2="320" stroke="#00D0FF" strokeWidth="2" opacity="0.6" />
          <circle cx="550" cy="320" r="8" fill="#75FF00" />
          
          <circle cx="550" cy="320" r="3" fill="#75FF00">
            <animate
              attributeName="cx"
              values="350;450;550"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values="240;280;320"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        
        {/* Labels */}
        <text x="30" y="90" fill="#C2C2CC" fontSize="12" fontFamily="Space Mono">INPUT</text>
        <text x="530" y="90" fill="#C2C2CC" fontSize="12" fontFamily="Space Mono">OUTPUT</text>
        <text x="265" y="300" fill="#C2C2CC" fontSize="14" fontFamily="Space Mono">PROCESSING</text>
      </svg>
    </div>
  );
}
