import React, { useEffect, useRef } from 'react';

const particleImages = [
  'lebron1.png',
  // Add more images if desired, e.g. 'curry1.png', 'messi.png', etc.
];

const particleCount = 60;

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadedImages = useRef<HTMLImageElement[]>([]);
  const animationRef = useRef<number>();
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Preload images
  useEffect(() => {
    loadedImages.current = [];
    particleImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      loadedImages.current.push(img);
    });
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      image: HTMLImageElement;
      angle: number;
      rotationSpeed: number;
      constructor() {
        if (!canvas) {
          this.x = 0;
          this.y = 0;
        } else {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }
        this.size = Math.random() * 40 + 20;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        const randomImage = Math.floor(Math.random() * loadedImages.current.length);
        this.image = loadedImages.current[randomImage];
        this.angle = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
      }
      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.drawImage(this.image, -this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
        this.angle += this.rotationSpeed;
      }
      update() {
        let dx = mouse.current.x - this.x;
        let dy = mouse.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / (distance || 1);
        let forceDirectionY = dy / (distance || 1);
        let maxDistance = 280;
        let force = (maxDistance - distance) / maxDistance;
        if (distance < maxDistance) {
          this.x -= forceDirectionX * force * this.density;
          this.y -= forceDirectionY * force * this.density;
        } else {
          if (this.x !== this.baseX) {
            dx = this.baseX - this.x;
            this.x += dx/20;
          }
          if (this.y !== this.baseY) {
            dy = this.baseY - this.y;
            this.y += dy/20;
          }
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < particleCount; i++) {
        particles.current.push(new Particle());
      }
    };
    // Wait for images to load
    Promise.all(loadedImages.current.map(img => new Promise(res => { img.onload = () => res(undefined); }))).then(() => {
      initParticles();
      animate();
    });

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(p => {
        p.update();
        p.draw();
      });
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas id="backgroundCanvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, width: '100vw', height: '100vh', pointerEvents: 'none' }} />
  );
};

export default BackgroundCanvas; 