import React from 'react';
import { HelloKittyFace, Sparkles } from './HelloKittyDecorations';

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNext }) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-pink-50 via-white to-rose-50 overflow-hidden">
    <Sparkles count={8} />

    <div className="animate-float-slow mb-6">
      <HelloKittyFace size={80} />
    </div>

    <div className="animate-fade-in-up max-w-lg text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-400 leading-relaxed mb-3">
        Ого! Уже почти прошел месяц
      </h1>
      <p className="text-lg sm:text-xl text-rose-300 mb-2">
        с начала наших отношений
      </p>
      <div className="animate-heartbeat inline-block my-4">
        <span className="text-4xl sm:text-5xl">&#128558;</span>
      </div>
    </div>

    <div className="animate-fade-in-up mt-10" style={{ animationDelay: '0.4s', opacity: 0 }}>
      <button
        onClick={onNext}
        className="relative px-10 py-3.5 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden group"
      >
        <span className="relative z-10">ДАЛЕЕ</span>
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  </div>
);

export default WelcomePage;
