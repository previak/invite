import React from 'react';

type SVGProps = {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
};

export const HelloKittyFace: React.FC<SVGProps> = ({ className = '', size = 60, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} style={style}>
    <ellipse cx="50" cy="55" rx="38" ry="35" fill="white" stroke="#e8a0b4" strokeWidth="1.5"/>
    <polygon points="18,42 30,18 42,42" fill="white" stroke="#e8a0b4" strokeWidth="1.5"/>
    <polygon points="58,42 70,18 82,42" fill="white" stroke="#e8a0b4" strokeWidth="1.5"/>
    <ellipse cx="38" cy="48" rx="3.5" ry="4.5" fill="#333"/>
    <ellipse cx="62" cy="48" rx="3.5" ry="4.5" fill="#333"/>
    <ellipse cx="50" cy="60" rx="2" ry="1.5" fill="#f4a0b5"/>
    <line x1="34" y1="60" x2="22" y2="55" stroke="#e8a0b4" strokeWidth="1"/>
    <line x1="34" y1="63" x2="22" y2="65" stroke="#e8a0b4" strokeWidth="1"/>
    <line x1="34" y1="66" x2="24" y2="73" stroke="#e8a0b4" strokeWidth="1"/>
    <line x1="66" y1="60" x2="78" y2="55" stroke="#e8a0b4" strokeWidth="1"/>
    <line x1="66" y1="63" x2="78" y2="65" stroke="#e8a0b4" strokeWidth="1"/>
    <line x1="66" y1="66" x2="76" y2="73" stroke="#e8a0b4" strokeWidth="1"/>
    <ellipse cx="75" cy="20" rx="6" ry="4" fill="#f472a8" transform="rotate(-20 75 20)"/>
  </svg>
);

type HeartProps = SVGProps & { color?: string };

export const Heart: React.FC<HeartProps> = ({ className = '', size = 24, color = '#f472a8', style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={color} style={style}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

type SparkleProps = SVGProps & { color?: string; delay?: number };

export const Sparkle: React.FC<SparkleProps> = ({ className = '', size = 16, color = '#f4a0b5', delay = 0, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill={color} style={{ ...style, animationDelay: `${delay}s` }}>
    <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"/>
  </svg>
);

export const Flower: React.FC<SVGProps> = ({ className = '', size = 30, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} style={style}>
    <circle cx="50" cy="30" r="16" fill="#fbb6ce" opacity="0.8"/>
    <circle cx="30" cy="50" r="16" fill="#fbb6ce" opacity="0.8"/>
    <circle cx="70" cy="50" r="16" fill="#fbb6ce" opacity="0.8"/>
    <circle cx="38" cy="70" r="16" fill="#fbb6ce" opacity="0.8"/>
    <circle cx="62" cy="70" r="16" fill="#fbb6ce" opacity="0.8"/>
    <circle cx="50" cy="52" r="14" fill="#f9a8d4"/>
    <circle cx="46" cy="48" r="2" fill="#f472a8"/>
    <circle cx="54" cy="48" r="2" fill="#f472a8"/>
    <path d="M48 53 Q50 56 52 53" stroke="#f472a8" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const Bow: React.FC<SVGProps> = ({ className = '', size = 40, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 80" className={className} style={style}>
    <path d="M50 40 Q30 10 10 30 Q5 35 10 50 Q30 70 50 40Z" fill="#f472a8"/>
    <path d="M50 40 Q70 10 90 30 Q95 35 90 50 Q70 70 50 40Z" fill="#f472a8"/>
    <circle cx="50" cy="40" r="8" fill="#ec4899"/>
  </svg>
);

export { Sparkles } from './FloatingElements';
