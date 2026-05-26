import React from 'react';
import { HelloKittyFace, Flower, Sparkles } from './HelloKittyDecorations';

interface DressCodePageProps {
  onNext: () => void;
}

const DressCodePage: React.FC<DressCodePageProps> = ({ onNext }) => (
  <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-rose-50 via-pink-50 to-white overflow-hidden">
    <Sparkles count={5} />

    <div className="animate-fade-in-up max-w-lg text-center">
      <div className="mb-6">
        <HelloKittyFace size={55} className="animate-float-slow mx-auto" />
      </div>

      <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-md border border-pink-100 mb-6">
        <p className="text-base sm:text-lg text-rose-500 leading-relaxed">
          Я бы конечно хотел, чтобы ты надела то прекрасное платье с блесточками
        </p>
        <div className="my-3 text-2xl">&#10024;&#128133;&#10024;</div>
        <p className="text-base sm:text-lg text-rose-400 leading-relaxed">
          Но погода видимо этого хочет (максимум 21 градус), поэтому если у тебя нет курточки под нее, то надевай что хочешь
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="text-3xl">&#127777;&#65039;</span>
        <div className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl px-5 py-2.5 shadow-sm">
          <p className="text-sm text-rose-400">до <span className="font-bold text-rose-500">21&deg;C</span></p>
        </div>
        <span className="text-3xl">&#128087;</span>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Flower size={24} className="animate-float opacity-60" />
        <p className="handwritten text-xl sm:text-2xl text-rose-400">
          Главное - чтобы тебе было тепло и уютно
        </p>
        <Flower size={24} className="animate-float opacity-60" style={{ animationDelay: '1s' }} />
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

export default DressCodePage;
