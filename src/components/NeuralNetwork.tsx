import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  
  useEffect(() => {
    // Create random nodes
    const initialNodes: Node[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 600,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setNodes(initialNodes);
    
    // Animate nodes
    const interval = setInterval(() => {
      setNodes(prevNodes =>
        prevNodes.map(node => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;
          
          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx = -node.vx;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= 600) {
            newVy = -node.vy;
            newY = Math.max(0, Math.min(600, newY));
          }
          
          return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Calculate connections
  const connections = nodes.flatMap((node, i) =>
    nodes.slice(i + 1).map(otherNode => {
      const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
      return distance < 150 ? { node, otherNode, distance } : null;
    }).filter(Boolean)
  );
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => {
          if (!conn) return null;
          const opacity = 1 - conn.distance / 150;
          return (
            <motion.line
              key={i}
              x1={conn.node.x}
              y1={conn.node.y}
              x2={conn.otherNode.x}
              y2={conn.otherNode.y}
              stroke="url(#neural-gradient)"
              strokeWidth="1"
              opacity={opacity * 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D0FF" />
            <stop offset="100%" stopColor="#75FF00" />
          </linearGradient>
        </defs>
      </svg>
      
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: node.x,
            top: node.y,
            background: 'radial-gradient(circle, #00D0FF, #75FF00)',
            boxShadow: '0 0 10px rgba(0, 208, 255, 0.5)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: node.id * 0.1,
          }}
        />
      ))}
    </div>
  );
}
