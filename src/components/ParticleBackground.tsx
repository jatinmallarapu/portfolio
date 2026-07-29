import React, { useEffect, useRef } from 'react';
import './ParticleBackground.scss';

interface Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  opacity: number;
  speed: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create drifting abstract geometry node structure
    const nodeCount = 35;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        targetX: Math.random() * width,
        targetY: Math.random() * height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.002 + 0.0005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw modern drifting geometry
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        // Linear interpolation towards targets for extremely smooth movement
        n.x += (n.targetX - n.x) * n.speed;
        n.y += (n.targetY - n.y) * n.speed;

        // If close to target, pick another target
        const distToTarget = Math.hypot(n.targetX - n.x, n.targetY - n.y);
        if (distToTarget < 50) {
          n.targetX = Math.random() * width;
          n.targetY = Math.random() * height;
        }

        // Draw soft nodes
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${n.opacity})`;
        ctx.fill();

        // Draw light connecting webs to adjacent nodes with no duplicate lines
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            const lineAlpha = (1 - dist / 180) * 0.06;
            ctx.strokeStyle = `rgba(100, 255, 218, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;
