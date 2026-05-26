import React from 'react';
import { HelloKittyFace, Bow, Sparkles } from './HelloKittyDecorations';
import Carousel from './Carousel';

const RESTAURANT_IMAGES = [
  './photos/1.svg',
  './photos/2.svg',
  './photos/3.svg',
];

interface RestaurantPageProps {
  onNext: () => void;
}

const RestaurantPage: React.FC<RestaurantPageProps> = ({ onNext }) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-pink-50 via-white to-rose-50 overflow-hidden">
    <Sparkles count={5} />

    <div className="animate-fade-in-up max-w-lg w-full text-center">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Bow size={36} className="animate-float-slow" />
        <HelloKittyFace size={50} />
        <Bow size={36} className="animate-float-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="mb-6 p-5 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-pink-100">
        <h2 className="text-xl sm:text-2xl font-bold text-rose-500 mb-1">
          Tsunami Sushi & Cocktails
        </h2>
        <div className="flex items-center justify-center gap-2 text-rose-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-lg sm:text-xl font-semibold">02.06 &nbsp; 18:00</span>
        </div>
      </div>

      <div className="mb-6">
        <Carousel images={RESTAURANT_IMAGES} autoPlay interval={3500} />
      </div>

      <p className="text-sm text-pink-300 italic">
        Место, где будет вкусно и красиво
      </p>
    </div>

    <div className="animate-fade-in-up mt-8" style={{ animationDelay: '0.5s', opacity: 0 }}>
      <button
        onClick={onNext}
        className="px-10 py-3.5 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        ДАЛЕЕ
      </button>
    </div>
  </div>
);

export default RestaurantPage;
