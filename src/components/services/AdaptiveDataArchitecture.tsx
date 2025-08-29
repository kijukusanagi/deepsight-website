'use client';
import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'core' | 'branch' | 'growing';
  connections: string[];
  health: number;
  age: number;
  pulse: number;
}

export default function AdaptiveDataArchitecture() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [growingConnection, setGrowingConnection] = useState<{from: string, to: string, progress: number} | null>(null);
  const [healingConnection, setHealingConnection] = useState<{from: string, to: string} | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>('LEARNING PATTERNS');

  useEffect(() => {
    if (!svgRef.current) return;
    
    let t = 0;
    let nextGrowthTime = 2;
    let nextHealTime = 4;
    let nextStatusChange = 3;
    let nodeIdCounter = 7;
    
    // Initialize with dynamic starting nodes
    const activeNodes: Node[] = [
      { id: 'core', x: 200, y: 125, vx: 0, vy: 0, type: 'core', connections: ['n1', 'n2', 'n3'], health: 1, age: 0, pulse: 0 },
      { id: 'n1', x: 120, y: 80, vx: 0, vy: 0, type: 'branch', connections: ['core', 'n4'], health: 1, age: 0, pulse: 0.3 },
      { id: 'n2', x: 280, y: 80, vx: 0, vy: 0, type: 'branch', connections: ['core', 'n5'], health: 1, age: 0, pulse: 0.6 },
      { id: 'n3', x: 120, y: 170, vx: 0, vy: 0, type: 'branch', connections: ['core', 'n6'], health: 1, age: 0, pulse: 0.9 },
      { id: 'n4', x: 60, y: 60, vx: 0, vy: 0, type: 'branch', connections: ['n1'], health: 1, age: 0, pulse: 0.2 },
      { id: 'n5', x: 340, y: 60, vx: 0, vy: 0, type: 'branch', connections: ['n2'], health: 1, age: 0, pulse: 0.8 },
      { id: 'n6', x: 60, y: 190, vx: 0, vy: 0, type: 'branch', connections: ['n3'], health: 1, age: 0, pulse: 0.1 },
    ];
    
    const statusMessages = [
      'LEARNING PATTERNS',
      'ADAPTING STRUCTURE',
      'EXPANDING CONNECTIONS',
      'OPTIMIZING PATHWAYS',
      'INTEGRATING NEW DATA',
      'HEALING BROKEN LINKS'
    ];
    
    const animate = () => {
      t += 0.010;
      
      // Cycle status messages
      if (t > nextStatusChange) {
        nextStatusChange = t + 2 + Math.random() * 3;
        const newStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
        setStatusMessage(newStatus);
      }
      
      // Enhanced organic movement with visible morphing
      activeNodes.forEach((node) => {
        node.age += 0.01;
        node.pulse = Math.sin(t * 2 + node.age * 3) * 0.5 + 0.5;
        
        if (node.type !== 'core') {
          // More pronounced organic movement
          const breathe = Math.sin(t + node.age) * 1.5;
          const drift = Math.sin(t * 0.5 + node.age * 2) * 0.8;
          
          node.vx += (Math.random() - 0.5) * 0.3 + breathe * 0.1;
          node.vy += (Math.random() - 0.5) * 0.3 + drift * 0.1;
          
          // Damping
          node.vx *= 0.92;
          node.vy *= 0.92;
          
          // Update position with morphing effect
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounds with elastic effect
          if (node.x < 40) { node.vx += 1; node.x = 40; }
          if (node.x > 360) { node.vx -= 1; node.x = 360; }
          if (node.y < 40) { node.vy += 1; node.y = 40; }
          if (node.y > 210) { node.vy -= 1; node.y = 210; }
        } else {
          // Core node subtle breathing
          const breathe = Math.sin(t * 1.5) * 2;
          node.x = 200 + breathe;
          node.y = 125 + Math.sin(t * 1.2) * 1.5;
        }
        
        // Dynamic health with more variation
        node.health = 0.6 + 0.4 * Math.sin(t * 1.5 + node.age * 2);
      });
      
      // More frequent growth with visible animation
      if (t > nextGrowthTime && activeNodes.length < 15) {
        nextGrowthTime = t + 1.5 + Math.random();
        
        const eligibleNodes = activeNodes.filter(n => n.connections.length < 4);
        if (eligibleNodes.length > 0) {
          const parentNode = eligibleNodes[Math.floor(Math.random() * eligibleNodes.length)];
          const newNodeId = `n${nodeIdCounter++}`;
          
          // Start growing connection animation
          setGrowingConnection({ from: parentNode.id, to: newNodeId, progress: 0 });
          
          setTimeout(() => {
            // Create new node after growth animation
            const angle = Math.random() * Math.PI * 2;
            const distance = 70 + Math.random() * 50;
            const newNode: Node = {
              id: newNodeId,
              x: parentNode.x + Math.cos(angle) * distance,
              y: parentNode.y + Math.sin(angle) * distance,
              vx: Math.cos(angle) * 3,
              vy: Math.sin(angle) * 3,
              type: 'growing',
              connections: [parentNode.id],
              health: 0,
              age: 0,
              pulse: Math.random()
            };
            
            parentNode.connections.push(newNodeId);
            activeNodes.push(newNode);
            
            // Fade in new node
            setTimeout(() => {
              newNode.type = 'branch';
              newNode.health = 1;
              setGrowingConnection(null);
            }, 800);
          }, 1000);
        }
      }
      
      // Enhanced healing with dramatic effect
      if (t > nextHealTime) {
        nextHealTime = t + 3 + Math.random() * 2;
        
        const branchNodes = activeNodes.filter(n => n.type === 'branch' && n.connections.length > 1);
        if (branchNodes.length > 0) {
          const node = branchNodes[Math.floor(Math.random() * branchNodes.length)];
          const targetId = node.connections[Math.floor(Math.random() * node.connections.length)];
          
          // Dramatic healing effect
          setHealingConnection({ from: node.id, to: targetId });
          setStatusMessage('HEALING BROKEN LINKS');
          
          setTimeout(() => {
            setHealingConnection(null);
          }, 2500);
        }
      }
      
      // Update growing connection progress
      if (growingConnection) {
        setGrowingConnection(prev => 
          prev ? { ...prev, progress: Math.min(1, prev.progress + 0.03) } : null
        );
      }
      
      // Update visual elements
      const svg = svgRef.current;
      if (!svg) return;
      
      // Draw connections with enhanced visuals
      const connections = svg.querySelector('.connections');
      if (connections) {
        connections.innerHTML = '';
        
        activeNodes.forEach((node) => {
          node.connections.forEach(targetId => {
            const target = activeNodes.find(n => n.id === targetId);
            if (!target) return;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            
            const isHealing = healingConnection && 
              ((healingConnection.from === node.id && healingConnection.to === targetId) || 
               (healingConnection.from === targetId && healingConnection.to === node.id));
            
            line.setAttribute('x1', `${node.x}`);
            line.setAttribute('y1', `${node.y}`);
            line.setAttribute('x2', `${target.x}`);
            line.setAttribute('y2', `${target.y}`);
            
            if (isHealing) {
              line.setAttribute('stroke', '#00FF88');
              line.setAttribute('stroke-width', '4');
              line.setAttribute('stroke-dasharray', '8,4');
              line.setAttribute('opacity', `${0.8 + 0.2 * Math.sin(t * 8)}`);
              line.setAttribute('filter', 'url(#healGlow)');
            } else {
              line.setAttribute('stroke', '#99CC00');
              line.setAttribute('stroke-width', '1.5');
              line.setAttribute('stroke-opacity', `${0.3 + node.health * 0.4}`);
            }
            
            connections.appendChild(line);
          });
        });
        
        // Draw growing connection
        if (growingConnection) {
          const fromNode = activeNodes.find(n => n.id === growingConnection.from);
          if (fromNode) {
            const angle = Math.random() * Math.PI * 2;
            const distance = (70 + Math.random() * 50) * growingConnection.progress;
            const endX = fromNode.x + Math.cos(angle) * distance;
            const endY = fromNode.y + Math.sin(angle) * distance;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', `${fromNode.x}`);
            line.setAttribute('y1', `${fromNode.y}`);
            line.setAttribute('x2', `${endX}`);
            line.setAttribute('y2', `${endY}`);
            line.setAttribute('stroke', '#00CCFF');
            line.setAttribute('stroke-width', '3');
            line.setAttribute('stroke-dasharray', '6,3');
            line.setAttribute('opacity', `${growingConnection.progress * 0.8}`);
            line.setAttribute('filter', 'url(#growGlow)');
            
            connections.appendChild(line);
          }
        }
      }
      
      // Update nodes with enhanced morphing visuals
      const nodeElements = svg.querySelector('.nodes');
      if (nodeElements) {
        nodeElements.innerHTML = '';
        
        activeNodes.forEach((node) => {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          
          const baseRadius = node.type === 'core' ? 14 : 7;
          const morphRadius = baseRadius + node.pulse * 4 + Math.sin(t * 3 + node.age) * 2;
          
          circle.setAttribute('cx', `${node.x}`);
          circle.setAttribute('cy', `${node.y}`);
          circle.setAttribute('r', `${morphRadius}`);
          
          if (node.type === 'growing') {
            circle.setAttribute('fill', '#00CCFF');
            circle.setAttribute('opacity', `${node.health}`);
          } else if (node.type === 'core') {
            circle.setAttribute('fill', '#0E613C');
            circle.setAttribute('opacity', `${0.9 + node.pulse * 0.1}`);
          } else {
            circle.setAttribute('fill', '#76B900');
            circle.setAttribute('opacity', `${0.7 + node.health * 0.3}`);
          }
          
          circle.setAttribute('filter', 'url(#schemaGlow)');
          
          // Add pulsing ring for active nodes
          if (node.pulse > 0.7) {
            const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            ring.setAttribute('cx', `${node.x}`);
            ring.setAttribute('cy', `${node.y}`);
            ring.setAttribute('r', `${morphRadius + 8}`);
            ring.setAttribute('stroke', '#99CC00');
            ring.setAttribute('stroke-width', '1');
            ring.setAttribute('fill', 'none');
            ring.setAttribute('opacity', `${(node.pulse - 0.7) * 0.8}`);
            nodeElements.appendChild(ring);
          }
          
          nodeElements.appendChild(circle);
        });
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="relative w-full h-48">
      <svg ref={svgRef} viewBox="0 0 400 250" className="w-full h-full" fill="none">
        <defs>
          <filter id="schemaGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="healGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="growGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Subtle background energy field */}
        <g opacity="0.03">
          {[...Array(12)].map((_, i) => (
            <circle key={i} cx="200" cy="125" r={20 * (i + 1)} stroke="#99CC00" strokeWidth="0.5" fill="none">
              <animate attributeName="opacity" values="0.03;0.08;0.03" dur={`${3 + i * 0.5}s`} repeatCount="indefinite"/>
            </circle>
          ))}
        </g>
        
        {/* Connections layer */}
        <g className="connections"></g>
        
        {/* Nodes layer */}
        <g className="nodes"></g>
        
        {/* Growing node indicator */}
        {growingConnection && (
          <text x="200" y="25" textAnchor="middle" fill="#00CCFF" fontSize="10" fontFamily="monospace" className="animate-pulse">
            GROWING NEW BRANCH
          </text>
        )}
        
        {/* New data source approaching with dramatic effect */}
        <g className="animate-pulse">
          <circle cx="375" cy="125" r="8" fill="#00CCFF" opacity="0.4">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M 360 125 Q 370 125 375 125" stroke="#00CCFF" strokeWidth="2" strokeDasharray="4,2" opacity="0.6">
            <animate attributeName="stroke-dashoffset" values="0;6" dur="1s" repeatCount="indefinite"/>
          </path>
          <text x="350" y="145" fill="#00CCFF" fontSize="8" fontFamily="monospace" opacity="0.7">
            NEW SOURCE
          </text>
        </g>
        
        {/* Dynamic status text */}
        <text x="20" y="15" fill="#99CC00" fontSize="11" fontFamily="monospace" opacity="0.8">
          {statusMessage}
        </text>
        
        {healingConnection && (
          <text x="200" y="235" textAnchor="middle" fill="#00FF88" fontSize="10" fontFamily="monospace" className="animate-pulse">
            ✨ SELF-HEALING ACTIVE ✨
          </text>
        )}
      </svg>
    </div>
  );
}