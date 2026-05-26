import React, { useState } from 'react';
import { HelloKittyFace, Heart, Flower, Bow, Sparkles } from './HelloKittyDecorations';

const FinalPage: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      <Sparkles count={10} />

      <div className="animate-fade-in-up max-w-lg text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flower size={28} className="animate-float opacity-70" />
          <HelloKittyFace size={70} />
          <Flower size={28} className="animate-float opacity-70" style={{ animationDelay: '1s' }} />
        </div>

        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-200 mb-6">
          <p className="text-base sm:text-lg text-rose-500 leading-relaxed mb-3">
            С тебя - хорошее настроение несмотря на экзамены и месячные
          </p>
          <div className="flex items-center justify-center gap-2 my-3">
          </div>
          <p className="text-base sm:text-lg text-rose-500 leading-relaxed">
            С меня - все остальное
          </p>
        </div>

        <div className="animate-heartbeat my-6">
          <Heart size={56} color="#f472a8" className="mx-auto" />
        </div>

        <h2 className="handwritten text-3xl sm:text-4xl md:text-5xl text-rose-500 mb-4 font-bold">
          Люблю тебя
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Bow size={30} className="animate-float-slow opacity-60" />
          <p className="handwritten text-lg text-rose-400 italic">
            Этот месяц - только наше начало мухехехех
          </p>
          <Bow size={30} className="animate-float-slow opacity-60" style={{ animationDelay: '2s' }} />
        </div>

        <div className="mt-8">
          <button
            onClick={() => setShowSecret(true)}
            className="px-6 py-2.5 bg-white/60 hover:bg-white/90 text-rose-400 font-medium rounded-full shadow-sm border border-pink-200 transition-all duration-300 hover:scale-105 text-sm"
          >
            Есть еще кое-что...
          </button>
        </div>

        {showSecret && (
          <div className="animate-fade-in-scale mt-6 p-5 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl shadow-md border border-pink-200">
            <p className="handwritten text-xl sm:text-2xl text-rose-500 leading-relaxed">
              Каждый день рядом с тобой ощущается как маленький праздник. Ты правда сделала мой мир ярче и теплее, и я безумно благодарен тебе за это. Люблю тебя, моя принцесса
            </p>
            <div className="mt-3 flex items-center justify-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Heart key={i} size={18} color="#f472a8" className="animate-pulse-soft" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinalPage;
