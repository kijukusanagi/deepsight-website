'use client';
import { useEffect, useState, useRef } from 'react';

export default function DataFlowSVG() {
  const [mounted, setMounted] = useState(false);
  const [binaryString, setBinaryString] = useState('1010101010101010101010101010101010101010');
  const [leftBinaryStrings, setLeftBinaryStrings] = useState([
    '110100100110100100001101001100',  // Top
    '001110100110100100001101101000',
    '110010110110010100110000001',
    '001101101010010100001010010',
    '101010100110100100001101000',
    '0011001101101001000010100010',
    '010101100110100100001101001010'   // Bottom
  ]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (mounted) {
      // Update binary strings every 100ms with a scrolling effect (moving rightward)
      intervalRef.current = setInterval(() => {
        // Update right side binary string
        setBinaryString(prev => {
          const newBit = Math.random() > 0.5 ? '1' : '0';
          return newBit + prev.substring(0, prev.length - 1);
        });
        
        // Update left side binary strings
        setLeftBinaryStrings(prev => prev.map(str => {
          const newBit = Math.random() > 0.5 ? '1' : '0';
          return newBit + str.substring(0, str.length - 1);
        }));
      }, 100);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [mounted]);
  
  return (
    <svg
      viewBox="0 0 1200 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define gradients and animations */}
      <defs>
        <linearGradient id="dataGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#16A34A" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="1" />
        </linearGradient>
        
        {/* Define dot animation paths */}
        <circle id="movingDot" r="3" fill="#22C55E">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
        </circle>
      </defs>

      {/* Left side - chaotic binary data streams with animation */}
      <g className="opacity-80">
        {/* Binary data patterns */}
        <text x="50" y="150" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.4">
          {leftBinaryStrings[0]}
        </text>
        <text x="50" y="200" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.6">
          {leftBinaryStrings[1]}
        </text>
        <text x="50" y="250" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.5">
          {leftBinaryStrings[2]}
        </text>
        <text x="50" y="300" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.7">
          {leftBinaryStrings[3]}
        </text>
        <text x="50" y="350" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.6">
          {leftBinaryStrings[4]}
        </text>
        <text x="50" y="400" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.5">
          {leftBinaryStrings[5]}
        </text>
        <text x="50" y="450" fill="#22C55E" fontSize="12" fontFamily="monospace" opacity="0.4">
          {leftBinaryStrings[6]}
        </text>
      </g>

      {/* Converging lines from left to center with animated dots */}
      <g className="opacity-90">
        {[...Array(30)].map((_, i) => {
          const startY = 100 + (i * 400) / 30;
          const startX = 250;
          const midX = 500;
          const midY = 300;
          const endX = 600;
          const endY = 250 + (i * 100) / 30;
          const opacity = 0.4 + (i % 5) * 0.1;
          const pathId = `path-${i}`;
          const animationDelay = (i % 10) * 0.3;
          const animationDuration = 3 + (i % 3);
          
          return (
            <g key={i}>
              <path
                id={pathId}
                d={`M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`}
                stroke="url(#lineGradient)"
                strokeWidth={0.8 + (i % 4) * 0.2}
                fill="none"
                opacity={opacity}
              />
              {/* Animated dot following the path */}
              <circle r="2" fill="#22C55E" opacity="0.8">
                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${animationDelay}s`}
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.8;0.8;0"
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  begin={`${animationDelay}s`}
                />
              </circle>
            </g>
          );
        })}
      </g>

      {/* Central convergence point - the intelligent hub */}
      <g>
        {/* Dotted vertical barrier */}
        <line
          x1="600"
          y1="100"
          x2="600"
          y2="500"
          stroke="#22C55E"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.7"
        />
        <line
          x1="610"
          y1="100"
          x2="610"
          y2="500"
          stroke="#16A34A"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
        />
        <line
          x1="620"
          y1="100"
          x2="620"
          y2="500"
          stroke="#22C55E"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.3"
        />
      </g>

      {/* Right side - organized data flowing into platforms */}
      <g className="opacity-90">
        {/* Mask for fade effect */}
        <defs>
          <linearGradient id="textFade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="textMask">
            <rect x="620" y="280" width="400" height="40" fill="url(#textFade)" />
          </mask>
        </defs>
        
        {/* Central organized binary stream scrolling from left to right */}
        <text
          x={650}
          y={300}
          fill="#22C55E"
          fontSize="11"
          fontFamily="monospace"
          opacity="0.7"
          mask="url(#textMask)"
        >
          {binaryString}
        </text>
      </g>

      {/* Output streams diverging to platform boxes with animated dots */}
      <g className="opacity-80">
        {[
          { label: 'CRM', y: 150 },
          { label: 'Finance', y: 250 },
          { label: 'Analytics', y: 350 },
          { label: 'Operations', y: 450 }
        ].map((platform, i) => {
          const startX = 700;
          const startY = 300;
          const endX = 950;
          const endY = platform.y;
          const outputPathId = `output-path-${i}`;
          const animationDelay = i * 0.5;
          
          return (
            <g key={i}>
              {/* Connection line */}
              <path
                id={outputPathId}
                d={`M ${startX} ${startY} Q ${(startX + endX) / 2} ${startY} ${endX} ${endY}`}
                stroke="#22C55E"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              
              {/* Animated dot on output line */}
              <circle r="2.5" fill="#16A34A" opacity="0.9">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${animationDelay}s`}
                >
                  <mpath href={`#${outputPathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0.9;0"
                  dur="4s"
                  repeatCount="indefinite"
                  begin={`${animationDelay}s`}
                />
              </circle>
              
              {/* Platform box */}
              <rect
                x={endX}
                y={endY - 20}
                width="120"
                height="40"
                fill="none"
                stroke="#22C55E"
                strokeWidth="1"
                opacity="0.8"
              />
              
              {/* Platform label */}
              <text
                x={endX + 60}
                y={endY + 5}
                fill="#22C55E"
                fontSize="14"
                fontFamily="sans-serif"
                textAnchor="middle"
                opacity="0.9"
              >
                {platform.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}