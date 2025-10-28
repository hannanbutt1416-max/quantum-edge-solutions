import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface BinaryColumn {
  id: number;
  x: number;
  delay: number;
  duration: number;
  chars: string[];
}

export function BinaryRain() {
  const [columns, setColumns] = useState<BinaryColumn[]>([]);

  useEffect(() => {
    const newColumns: BinaryColumn[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: i * (100 / 15),
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      chars: Array.from({ length: 20 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      ),
    }));
    setColumns(newColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0"
          style={{
            left: `${column.x}%`,
          }}
          animate={{
            y: ['-100%', '100vh'],
          }}
          transition={{
            duration: column.duration,
            delay: column.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex flex-col gap-1">
            {column.chars.map((char, idx) => (
              <motion.span
                key={idx}
                className="text-[#00D0FF] font-mono text-xs"
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: idx * 0.1,
                  repeat: Infinity,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
