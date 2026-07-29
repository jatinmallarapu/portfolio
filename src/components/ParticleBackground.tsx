import React, { useEffect, useRef } from 'react';
import './ParticleBackground.scss';

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  direction: number;
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

    // Create soft drifting stars/orbs
    const starCount = Math.min(Math.floor((width * height) / 18000), 50);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1, // larger soft orbs
        speedX: (Math.random() - 0.5) * 0.15, // very slow drift
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.4 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw soft drifting orbs
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        
        // Update position
        s.x += s.speedX;
        s.y += s.speedY;
        
        // Pulsate opacity slightly
        s.opacity += 0.003 * s.direction;
        if (s.opacity > 0.6) {
          s.direction = -1;
        } else if (s.opacity < 0.1) {
          s.direction = 1;
        }

        // Wrap around edges
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Draw orb with gradient shadow
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 2);
        gradient.addColorStop(0, `rgba(100, 255, 218, ${s.opacity})`);
        gradient.addColorStop(1, `rgba(100, 255, 218, 0)`);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
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
