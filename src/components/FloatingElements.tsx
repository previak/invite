import React, { useEffect, useState } from 'react';
import { Heart, Sparkle, Flower } from './HelloKittyDecorations';

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      size: 14 + Math.random() * 16,
    }));
    setHearts(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-fall opacity-60"
          style={{
            left: `${h.x}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            animationIterationCount: 'infinite',
          }}
        >
          <Heart size={h.size} color="#f4a0b5" />
        </div>
      ))}
    </div>
  );
};

export const Sparkles: React.FC<{ count?: number }> = ({ count = 6 }) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      delay: Math.random() * 3,
      size: 10 + Math.random() * 14,
    }));
    setSparkles(items);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute animate-sparkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <Sparkle size={s.size} color="#f4a0b5" delay={s.delay} />
        </div>
      ))}
    </div>
  );
};

export const CornerFlowers: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-4 left-4 animate-float-slow opacity-70">
      <Flower size={36} />
    </div>
    <div className="absolute top-4 right-4 animate-float opacity-60" style={{ animationDelay: '1s' }}>
      <Flower size={28} />
    </div>
    <div className="absolute bottom-4 left-4 animate-float opacity-50" style={{ animationDelay: '2s' }}>
      <Flower size={24} />
    </div>
    <div className="absolute bottom-4 right-4 animate-float-slow opacity-60" style={{ animationDelay: '0.5s' }}>
      <Flower size={32} />
    </div>
  </div>
);
