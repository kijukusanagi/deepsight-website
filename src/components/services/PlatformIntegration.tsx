'use client';
import { useEffect, useRef, useState } from 'react';

interface Platform {
  id: string;
  name: string;
  x: number;
  y: number;
  active: boolean;
  status: 'normal' | 'warning' | 'optimized';
}

interface DataFlow {
  from: string;
  to: string;
  active: boolean;
  particles: number[];
}

export default function PlatformIntegration() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [activeFlow, setActiveFlow] = useState<string>('crm-erp');
  const [warningPlatform, setWarningPlatform] = useState<string | null>(null);
  const [reroutingFlow, setReroutingFlow] = useState<boolean>(false);

  const platforms: Platform[] = [
    { id: 'crm', name: 'CRM', x: 80, y: 80, active: true, status: 'normal' },
    { id: 'erp', name: 'ERP', x: 320, y: 80, active: true, status: 'optimized' },
    { id: 'bi', name: 'BI', x: 200, y: 40, active: true, status: 'normal' },
    { id: 'api', name: 'API', x: 200, y: 125, active: true, status: 'normal' },
    { id: 'db', name: 'DB', x: 80, y: 170, active: true, status: 'normal' },
    { id: 'cloud', name: 'Cloud', x: 320, y: 170, active: true, status: 'optimized' },
  ];

  useEffect(() => {
    if (!svgRef.current) return;
    
    let t = 0;
    let nextFlowSwitch = 3;
    let nextWarning = 5;
    
    const flows: DataFlow[] = [
      { from: 'crm', to: 'erp', active: true, particles: [0, 0.33, 0.66] },
      { from: 'erp', to: 'bi', active: false, particles: [0, 0.5] },
      { from: 'crm', to: 'api', active: false, particles: [0, 0.5] },
      { from: 'api', to: 'erp', active: false, particles: [0, 0.5] },
      { from: 'db', to: 'api', active: false, particles: [0, 0.5] },
      { from: 'api', to: 'cloud', active: false, particles: [0, 0.5] },
      { from: 'bi', to: 'cloud', active: false, particles: [0, 0.5] },
    ];
    
    const animate = () => {
      t += 0.02;
      
      // Switch active flows periodically
      if (t > nextFlowSwitch) {
        nextFlowSwitch = t + 3 + Math.random() * 2;
        
        // Deactivate all flows
        flows.forEach(f => f.active = false);
        
        // Activate random flows
        const flowPatterns = [
          ['crm-erp', 'erp-bi'],
          ['crm-api', 'api-erp', 'api-cloud'],
          ['db-api', 'api-cloud', 'bi-cloud'],
          ['crm-erp', 'db-api', 'api-erp'],
        ];
        
        const pattern = flowPatterns[Math.floor(Math.random() * flowPatterns.length)];
        pattern.forEach(flowId => {
          const flow = flows.find(f => `${f.from}-${f.to}` === flowId);
          if (flow) flow.active = true;
        });
        
        setActiveFlow(pattern[0]);
      }
      
      // Trigger warnings and rerouting
      if (t > nextWarning) {
        nextWarning = t + 4 + Math.random() * 3;
        
        const platformIds = ['crm', 'erp', 'db', 'cloud'];
        const warningId = platformIds[Math.floor(Math.random() * platformIds.length)];
        setWarningPlatform(warningId);
        setReroutingFlow(true);
        
        setTimeout(() => {
          setWarningPlatform(null);
          setReroutingFlow(false);
        }, 2000);
      }
      
      const svg = svgRef.current;
      if (!svg) return;
      
      // Update data flow particles
      flows.forEach(flow => {
        if (!flow.active) return;
        
        const fromPlatform = platforms.find(p => p.id === flow.from);
        const toPlatform = platforms.find(p => p.id === flow.to);
        if (!fromPlatform || !toPlatform) return;
        
        // Update particle positions
        flow.particles = flow.particles.map(p => (p + 0.02) % 1);
        
        // Draw particles
        flow.particles.forEach((progress, i) => {
          const particleId = `particle-${flow.from}-${flow.to}-${i}`;
          let particle = svg.querySelector(`#${particleId}`);
          
          if (!particle) {
            particle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            particle.setAttribute('id', particleId);
            particle.setAttribute('r', '2');
            particle.setAttribute('fill', '#00CCFF');
            svg.querySelector('.particles')?.appendChild(particle);
          }
          
          // Calculate position along path
          const x = fromPlatform.x + (toPlatform.x - fromPlatform.x) * progress;
          const y = fromPlatform.y + (toPlatform.y - fromPlatform.y) * progress;
          
          particle.setAttribute('cx', `${x}`);
          particle.setAttribute('cy', `${y}`);
          particle.setAttribute('opacity', `${0.8 * Math.sin(progress * Math.PI)}`);
        });
      });
      
      // Clean up inactive particles
      const particles = svg.querySelectorAll('.particles circle');
      particles.forEach(particle => {
        const id = particle.getAttribute('id');
        if (id) {
          const [, from, to] = id.split('-');
          const flow = flows.find(f => f.from === from && f.to === to);
          if (!flow || !flow.active) {
            particle.remove();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="relative w-full h-48">
      <svg ref={svgRef} viewBox="0 0 400 250" className="w-full h-full" fill="none">
        <defs>
          <filter id="platformGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="warningGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connection lines */}
        <g className="connections" opacity="0.3">
          <line x1="80" y1="80" x2="320" y2="80" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="80" y1="80" x2="200" y2="125" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="320" y1="80" x2="200" y2="40" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="200" y1="125" x2="320" y2="80" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="80" y1="170" x2="200" y2="125" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="200" y1="125" x2="320" y2="170" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
          <line x1="200" y1="40" x2="320" y2="170" stroke="#99CC00" strokeWidth="1" strokeDasharray="2,4"/>
        </g>
        
        {/* Active flow highlights */}
        {activeFlow === 'crm-erp' && (
          <line x1="80" y1="80" x2="320" y2="80" stroke="#99CC00" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
        )}
        {activeFlow === 'crm-api' && (
          <line x1="80" y1="80" x2="200" y2="125" stroke="#99CC00" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
        )}
        {activeFlow === 'db-api' && (
          <line x1="80" y1="170" x2="200" y2="125" stroke="#99CC00" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
        )}
        
        {/* Platform boxes */}
        {platforms.map(platform => (
          <g key={platform.id} transform={`translate(${platform.x}, ${platform.y})`}>
            <rect
              x="-25"
              y="-15"
              width="50"
              height="30"
              rx="5"
              fill={
                warningPlatform === platform.id ? '#FF4444' :
                platform.status === 'optimized' ? '#0E613C' : '#1a1a1a'
              }
              stroke={
                warningPlatform === platform.id ? '#FF4444' :
                platform.status === 'optimized' ? '#99CC00' : '#76B900'
              }
              strokeWidth="1.5"
              filter={warningPlatform === platform.id ? 'url(#warningGlow)' : 'url(#platformGlow)'}
              opacity="0.9"
              className={warningPlatform === platform.id ? 'animate-pulse' : ''}
            />
            <text
              x="0"
              y="0"
              textAnchor="middle"
              dominantBaseline="middle"
              fill={warningPlatform === platform.id ? '#FFFFFF' : '#99CC00'}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {platform.name}
            </text>
            {platform.status === 'optimized' && warningPlatform !== platform.id && (
              <circle cx="20" cy="-10" r="3" fill="#99CC00" className="animate-pulse"/>
            )}
          </g>
        ))}
        
        {/* Data flow particles */}
        <g className="particles"></g>
        
        {/* Central hub indicator */}
        <circle cx="200" cy="125" r="35" stroke="#99CC00" strokeWidth="0.5" strokeDasharray="5,10" fill="none" opacity="0.2">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 125"
            to="360 200 125"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Status messages */}
        {reroutingFlow && (
          <text x="200" y="20" textAnchor="middle" fill="#00CCFF" fontSize="10" fontFamily="monospace" className="animate-pulse">
            OPTIMIZING DATA FLOW
          </text>
        )}
        {warningPlatform && (
          <text x="200" y="230" textAnchor="middle" fill="#FF4444" fontSize="10" fontFamily="monospace" className="animate-pulse">
            REROUTING • SELF-HEALING
          </text>
        )}
        
        {/* Title */}
        <text x="20" y="15" fill="#99CC00" fontSize="11" fontFamily="monospace" opacity="0.8">
          PLATFORM MESH
        </text>
      </svg>
    </div>
  );
}