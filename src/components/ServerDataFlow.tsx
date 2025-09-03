'use client';
import { useEffect, useRef } from 'react';

export default function ServerDataFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Hub position (center transformation point)
    const hubX = canvas.width * 0.5;
    const hubY = canvas.height * 0.6; // Lower position to accommodate text above
    const hubSize = 120;

    // Data stream configuration
    interface Particle {
      progress: number;
      size: number;
      opacity: number;
      stuck?: boolean;
    }
    
    interface Stream {
      particles: Particle[];
      color: string;
      path: Array<{x: number; y: number}>;
      [key: string]: any;
    }
    
    const chaosStreams: Stream[] = [];
    const orderedStreams: Stream[] = [];

    // Initialize 15-20 chaos streams (left side)
    const initChaosStreams = () => {
      const chaosColors = [
        '#ff4444', '#ff6600', '#ffaa00', '#dd0000', '#cc3366', 
        '#9944ff', '#6644ff', '#0066cc', '#ff0099', '#ff6633',
        '#ff9900', '#cc0066', '#9900cc', '#6600ff', '#0099cc',
        '#ff3300', '#ff6699', '#cc9900', '#9966cc', '#3366ff'
      ];
      
      for (let i = 0; i < 18; i++) {
        const startX = 50 + Math.random() * 100;
        const startY = (canvas.height * 0.2) + (i / 17) * (canvas.height * 0.6);
        
        const stream: Stream = {
          particles: [] as Particle[],
          color: chaosColors[i % chaosColors.length],
          path: generateComplexTangledPath(startX, startY, hubX - hubSize/2, hubY),
          isDead: Math.random() < 0.2, // 20% chance of dead-end streams
          isLoop: Math.random() < 0.15, // 15% chance of looping streams
          isDuplicate: Math.random() < 0.25 // 25% chance of duplicate paths
        };
        
        // Add particles
        const particleCount = stream.isDead ? 8 : 12;
        for (let j = 0; j < particleCount; j++) {
          stream.particles.push({
            progress: j * 0.08,
            size: 1.5 + Math.random() * 2,
            opacity: 0.6 + Math.random() * 0.3,
            stuck: false
          });
        }
        
        chaosStreams.push(stream);
      }
    };

    // Initialize 3-5 ordered streams (right side)
    const initOrderedStreams = () => {
      const orderedColors = ['#10b981', '#0ea5e9', '#14b8a6', '#06b6d4', '#e6fffa'];
      const outcomes = ['Cross-System Intelligence', 'Real-Time Sync', 'Single Source Truth', 'Pattern Recognition'];
      
      for (let i = 0; i < 4; i++) {
        const startX = hubX + hubSize/2;
        const startY = hubY + (i - 1.5) * 60;
        const endX = canvas.width - 200;
        const endY = (canvas.height * 0.4) + (i / 3) * (canvas.height * 0.4); // Moved down from 0.3 to 0.4
        
        const stream: Stream = {
          particles: [] as Particle[],
          color: orderedColors[i % orderedColors.length],
          path: generateCleanPath(startX, startY, endX, endY),
          outcome: outcomes[i % outcomes.length],
          thickness: 3 + i, // Progressively thicker lines
          speed: 0.012 // 3x faster than chaos
        };
        
        // More particles for consolidated streams
        for (let j = 0; j < 25; j++) {
          stream.particles.push({
            progress: j * 0.04,
            size: 2.5 + Math.random() * 2,
            opacity: 0.8 + Math.random() * 0.2
          });
        }
        
        orderedStreams.push(stream);
      }
    };

    // Generate highly complex tangled paths for chaos
    function generateComplexTangledPath(startX: number, startY: number, endX: number, endY: number) {
      const points = [{ x: startX, y: startY }];
      const segments = 8 + Math.floor(Math.random() * 6); // 8-14 segments
      
      for (let i = 1; i < segments; i++) {
        const baseProgress = i / segments;
        const x = startX + (endX - startX) * baseProgress + (Math.random() - 0.5) * 300;
        const y = startY + (endY - startY) * baseProgress + (Math.random() - 0.5) * 250;
        
        // Add crossing and looping
        if (Math.random() < 0.3) {
          points.push({ x: x + 100, y: y - 50 });
          points.push({ x: x - 50, y: y + 100 });
        }
        
        points.push({ x, y });
      }
      
      points.push({ x: endX, y: endY });
      return points;
    }

    // Generate clean, straight paths for ordered streams
    function generateCleanPath(startX: number, startY: number, endX: number, endY: number) {
      const points = [];
      const segments = 30;
      
      for (let i = 0; i <= segments; i++) {
        const progress = i / segments;
        // Perfectly straight with slight easing curve
        const easedProgress = progress * progress * (3.0 - 2.0 * progress);
        const x = startX + (endX - startX) * easedProgress;
        const y = startY + (endY - startY) * easedProgress;
        points.push({ x, y });
      }
      
      return points;
    }

    // Draw dominant intelligent hub (hexagonal)
    function drawIntelligentHub() {
      if (!ctx) return;
      const time = Date.now() * 0.001;
      const breathingScale = 1 + Math.sin(time * 1.5) * 0.1;
      const pulseIntensity = 0.3 + Math.sin(time * 2) * 0.2; // Pulsing glow animation
      
      // Massive outer glow with pulsing
      const outerGlow = ctx.createRadialGradient(hubX, hubY, 0, hubX, hubY, hubSize * 3);
      outerGlow.addColorStop(0, `rgba(16, 185, 129, ${0.4 * pulseIntensity})`);
      outerGlow.addColorStop(0.3, `rgba(14, 165, 233, ${0.3 * pulseIntensity})`);
      outerGlow.addColorStop(0.7, `rgba(16, 185, 129, ${0.1 * pulseIntensity})`);
      outerGlow.addColorStop(1, 'rgba(16, 185, 129, 0)');
      
      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubSize * 3 * breathingScale, 0, Math.PI * 2);
      ctx.fill();
      
      // Hexagonal shape
      ctx.save();
      ctx.translate(hubX, hubY);
      ctx.scale(breathingScale, breathingScale);
      
      // Draw hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = Math.cos(angle) * hubSize;
        const y = Math.sin(angle) * hubSize;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      
      // Hub fill with gradient
      const hubGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, hubSize);
      hubGradient.addColorStop(0, 'rgba(16, 185, 129, 0.9)');
      hubGradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.7)');
      hubGradient.addColorStop(1, 'rgba(16, 185, 129, 0.3)');
      
      ctx.fillStyle = hubGradient;
      ctx.fill();
      
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Enhanced neural network pattern inside
      ctx.globalAlpha = 0.7;
      
      // Draw neural nodes
      const nodeCount = 8;
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * Math.PI * 2) / nodeCount + time * 0.3;
        const radius = 25 + Math.sin(time * 2 + i) * 8;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        nodes.push({ x, y });
        
        // Draw node
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(time * 4 + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.sin(time * 3 + i) * 1, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Connect nodes with synapses
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (Math.random() > 0.4) { // 60% connection probability
            const intensity = Math.sin(time * 2 + i + j) * 0.5 + 0.5;
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * intensity})`;
            ctx.lineWidth = 0.5 + intensity * 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Add central processing core
      ctx.fillStyle = `rgba(16, 185, 129, ${0.8 + Math.sin(time * 4) * 0.2})`;
      ctx.beginPath();
      ctx.arc(0, 0, 4 + Math.sin(time * 3) * 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    // Get position along path
    function getPathPosition(path: Array<{x: number; y: number}>, progress: number) {
      if (progress >= 1) progress = 0.99;
      const segmentCount = path.length - 1;
      const segment = Math.floor(progress * segmentCount);
      const localProgress = (progress * segmentCount) % 1;
      
      const start = path[segment] || path[0];
      const end = path[segment + 1] || path[path.length - 1];
      
      return {
        x: start.x + (end.x - start.x) * localProgress,
        y: start.y + (end.y - start.y) * localProgress
      };
    }

    // Draw chaos streams with complex behavior
    function drawChaosStreams() {
      if (!ctx) return;
      chaosStreams.forEach((stream, index) => {
        // Draw path
        ctx.strokeStyle = stream.color;
        ctx.lineWidth = stream.isDuplicate ? 3 : 1.5;
        ctx.globalAlpha = 0.3; // Reduced from 0.4 to 0.3 (25% reduction)
        
        ctx.beginPath();
        ctx.moveTo(stream.path[0].x, stream.path[0].y);
        for (let i = 1; i < stream.path.length; i++) {
          ctx.lineTo(stream.path[i].x, stream.path[i].y);
        }
        
        if (stream.isDead) {
          ctx.setLineDash([5, 5]);
        } else if (stream.isLoop) {
          ctx.setLineDash([10, 2, 2, 2]);
        } else {
          ctx.setLineDash([]);
        }
        
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Draw particles
        stream.particles.forEach((particle: Particle) => {
          if (stream.isDead && particle.progress > 0.7) {
            particle.stuck = true;
            return; // Dead end
          }
          
          const pos = getPathPosition(stream.path, particle.progress);
          
          ctx.globalAlpha = particle.opacity * 0.85; // Reduce chaos particle opacity
          ctx.fillStyle = stream.color;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Slow, erratic movement
          particle.progress += 0.002 + Math.random() * 0.003;
          if (particle.progress > 1 && !stream.isDead) {
            particle.progress = 0;
          }
        });
      });
      
      ctx.globalAlpha = 1;
    }

    // Draw ordered streams with business outcomes
    function drawOrderedStreams() {
      if (!ctx) return;
      orderedStreams.forEach((stream, index) => {
        // Thick, confident lines
        ctx.strokeStyle = stream.color;
        ctx.lineWidth = stream.thickness;
        ctx.globalAlpha = 0.8;
        
        ctx.beginPath();
        ctx.moveTo(stream.path[0].x, stream.path[0].y);
        for (let i = 1; i < stream.path.length; i++) {
          ctx.lineTo(stream.path[i].x, stream.path[i].y);
        }
        ctx.stroke();
        
        // Draw outcome labels with backdrop
        const endPos = stream.path[stream.path.length - 1];
        const textWidth = ctx.measureText(stream.outcome).width;
        
        // Dark backdrop for better readability
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(endPos.x + 5, endPos.y - 12, textWidth + 10, 20);
        
        // Label text with increased contrast
        ctx.fillStyle = stream.color;
        ctx.font = 'bold 13px Poppins';
        ctx.globalAlpha = 1;
        ctx.fillText(stream.outcome, endPos.x + 10, endPos.y + 5);
        
        // High-speed particles
        stream.particles.forEach((particle: Particle) => {
          const pos = getPathPosition(stream.path, particle.progress);
          
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = stream.color;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Fast, smooth movement
          particle.progress += stream.speed;
          if (particle.progress > 1) {
            particle.progress = 0;
          }
        });
      });
      
      ctx.globalAlpha = 1;
    }

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw in order: chaos → hub → ordered
      drawChaosStreams();
      drawIntelligentHub();
      drawOrderedStreams();
      
      animationId = requestAnimationFrame(animate);
    };

    // Initialize and start
    initChaosStreams();
    initOrderedStreams();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.9 }}
    />
  );
}