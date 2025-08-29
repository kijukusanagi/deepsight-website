'use client';
import { useEffect, useRef, useState } from 'react';

interface Insight {
  id: number;
  x: number;
  y: number;
  message: string;
  type: 'anomaly' | 'trend' | 'prediction';
  opacity: number;
}

export default function AutomatedIntelligence() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [primaryMetric, setPrimaryMetric] = useState(0);

  useEffect(() => {
    if (!svgRef.current) return;
    
    let t = 0;
    let nextInsightTime = 0;
    let insightId = 0;
    const activeInsights: Insight[] = [];
    
    const animate = () => {
      t += 0.02;
      
      // Generate random insights periodically
      if (t > nextInsightTime) {
        nextInsightTime = t + 2 + Math.random() * 3;
        const messages = [
          { text: 'Anomaly: 47% spike', type: 'anomaly' as const },
          { text: 'Pattern emerging', type: 'trend' as const },
          { text: 'Predictive alert', type: 'prediction' as const },
          { text: 'Optimization found', type: 'trend' as const },
          { text: 'Unusual activity', type: 'anomaly' as const },
        ];
        const msg = messages[Math.floor(Math.random() * messages.length)];
        
        activeInsights.push({
          id: insightId++,
          x: 50 + Math.random() * 300,
          y: 40 + Math.random() * 120,
          message: msg.text,
          type: msg.type,
          opacity: 1
        });
        
        // Keep only recent insights
        if (activeInsights.length > 3) {
          activeInsights.shift();
        }
        
        setInsights([...activeInsights]);
      }
      
      // Fade out old insights
      activeInsights.forEach(insight => {
        insight.opacity = Math.max(0, insight.opacity - 0.005);
      });
      
      // Update bar chart data with live changes
      const svg = svgRef.current;
      if (!svg) return;
      
      const bars = svg.querySelectorAll<SVGRectElement>('.data-bar');
      bars.forEach((bar, i) => {
        const baseHeight = 30 + Math.sin(t * 0.5 + i) * 20;
        const spike = Math.random() < 0.01 ? 40 : 0;
        const height = baseHeight + spike;
        
        bar.setAttribute('height', `${height}`);
        bar.setAttribute('y', `${180 - height}`);
        
        // Highlight anomalies
        if (spike > 0) {
          bar.style.fill = '#FF4444';
          bar.style.filter = 'drop-shadow(0 0 10px #FF4444)';
        } else {
          bar.style.fill = i % 2 === 0 ? '#22C55E' : '#22C55E';
          bar.style.filter = 'drop-shadow(0 0 3px currentColor)';
        }
        
        // Reorganizing importance - make important bars wider
        const importance = Math.abs(Math.sin(t * 0.3 + i * 0.5));
        const width = 25 + importance * 15;
        bar.setAttribute('width', `${width}`);
      });
      
      // Animated trend line with prediction
      const trendLine = svg.querySelector<SVGPathElement>('.trend-line');
      if (trendLine) {
        const points = [];
        for (let x = 0; x <= 350; x += 10) {
          const historical = x < 250;
          const y = 120 - Math.sin((x + t * 20) * 0.02) * 40 - (x * 0.1);
          points.push(`${x},${historical ? y : y - 10}`);
        }
        trendLine.setAttribute('points', points.join(' '));
      }
      
      // Prediction extension
      const predictionLine = svg.querySelector<SVGPathElement>('.prediction-line');
      if (predictionLine) {
        const points = [];
        for (let x = 250; x <= 380; x += 10) {
          const y = 95 - Math.sin((x + t * 20) * 0.02) * 40 - (x * 0.1) + Math.sin(t * 2) * 5;
          points.push(`${x},${y}`);
        }
        predictionLine.setAttribute('points', points.join(' '));
      }
      
      // Pulse the main metric
      const metric = 42 + Math.sin(t) * 5;
      setPrimaryMetric(Math.round(metric));
      
      // Floating data points
      const dataPoints = svg.querySelectorAll<SVGCircleElement>('.data-point');
      dataPoints.forEach((point, i) => {
        const x = (t * 30 + i * 60) % 400;
        const y = 100 + Math.sin(t + i) * 30;
        point.setAttribute('cx', `${x}`);
        point.setAttribute('cy', `${y}`);
        point.style.opacity = `${0.3 + 0.7 * Math.abs(Math.sin(t + i))}`;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="relative w-full h-48">
      <svg ref={svgRef} viewBox="0 0 400 250" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22C55E" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#16A34A" stopOpacity="0.3"/>
          </linearGradient>
          <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00CCFF" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#00CCFF" stopOpacity="0.1"/>
          </linearGradient>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
          </filter>
        </defs>
        
        {/* Grid background */}
        <g opacity="0.1">
          {[...Array(8)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 30 + 20} x2="400" y2={i * 30 + 20} stroke="#22C55E" strokeWidth="0.5"/>
          ))}
          {[...Array(10)].map((_, i) => (
            <line key={`v${i}`} x1={i * 40 + 20} y1="0" x2={i * 40 + 20} y2="250" stroke="#22C55E" strokeWidth="0.5"/>
          ))}
        </g>
        
        {/* Dynamic bar chart */}
        <g>
          <rect className="data-bar" x="40" y="150" width="30" height="30" fill="#22C55E"/>
          <rect className="data-bar" x="90" y="140" width="30" height="40" fill="#22C55E"/>
          <rect className="data-bar" x="140" y="145" width="30" height="35" fill="#22C55E"/>
          <rect className="data-bar" x="190" y="130" width="30" height="50" fill="#22C55E"/>
          <rect className="data-bar" x="240" y="135" width="30" height="45" fill="#22C55E"/>
          <rect className="data-bar" x="290" y="125" width="30" height="55" fill="#22C55E"/>
        </g>
        
        {/* Trend line */}
        <polyline className="trend-line" points="" fill="none" stroke="url(#trendGradient)" strokeWidth="2" filter="url(#blur)"/>
        
        {/* Prediction line (dashed) */}
        <polyline className="prediction-line" points="" fill="none" stroke="url(#predictionGradient)" strokeWidth="2" strokeDasharray="5,5"/>
        
        {/* Floating data points */}
        <circle className="data-point" r="2" fill="#00CCFF"/>
        <circle className="data-point" r="2" fill="#22C55E"/>
        <circle className="data-point" r="2" fill="#00CCFF"/>
        <circle className="data-point" r="2" fill="#22C55E"/>
        
        {/* Primary metric display */}
        <g transform="translate(350, 40)">
          <rect x="-35" y="-20" width="70" height="35" rx="5" fill="#16A34A" opacity="0.8"/>
          <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#22C55E" fontSize="16" fontFamily="monospace" fontWeight="bold">
            {primaryMetric}%
          </text>
        </g>
        
        {/* Insight callouts */}
        {insights.map(insight => (
          <g key={insight.id} transform={`translate(${insight.x}, ${insight.y})`} opacity={insight.opacity}>
            <rect 
              x="-40" 
              y="-12" 
              width="80" 
              height="24" 
              rx="12" 
              fill={insight.type === 'anomaly' ? '#FF4444' : insight.type === 'prediction' ? '#00CCFF' : '#22C55E'}
              opacity="0.2"
            />
            <text 
              x="0" 
              y="0" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fill={insight.type === 'anomaly' ? '#FF4444' : insight.type === 'prediction' ? '#00CCFF' : '#22C55E'}
              fontSize="10" 
              fontFamily="monospace"
              fontWeight="bold"
            >
              {insight.message}
            </text>
          </g>
        ))}
        
        {/* Title */}
        <text x="20" y="15" fill="#22C55E" fontSize="11" fontFamily="monospace" opacity="0.8">
          LIVE INTELLIGENCE FEED
        </text>
      </svg>
    </div>
  );
}