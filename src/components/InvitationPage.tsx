import React from 'react';
import { HelloKittyFace, Flower, Sparkles } from './HelloKittyDecorations';

interface InvitationPageProps {
  onNext: () => void;
}

const InvitationPage: React.FC<InvitationPageProps> = ({ onNext }) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-rose-50 via-pink-50 to-white overflow-hidden">
    <Sparkles count={6} />

    <div className="animate-fade-in-up max-w-lg text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Flower size={32} className="animate-float" />
        <HelloKittyFace size={60} />
        <Flower size={32} className="animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <p className="text-lg sm:text-xl md:text-2xl text-rose-500 leading-relaxed font-medium">
        Поэтому я приглашаю тебя на свидание
      </p>

      <div className="my-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-pink-100">
        <p className="text-base sm:text-lg text-rose-400 leading-relaxed">
          В хайповый ресторанчик, чтобы покушать ролчики, попить коктейли, поесть моти или еще какие-нибудь интересные блюда
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 my-4">
        <span className="text-2xl animate-pulse-soft">&#127843;</span>
        <span className="text-2xl animate-pulse-soft" style={{ animationDelay: '0.3s' }}>&#127865;</span>
        <span className="text-2xl animate-pulse-soft" style={{ animationDelay: '0.6s' }}>&#127846;</span>
      </div>
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

export default InvitationPage;
