import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, autoPlay = true, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [errors, setErrors] = useState<Set<number>>(new Set());

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, images.length, goTo]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, images.length]);

  const handleError = (index: number) => {
    setErrors((prev) => new Set(prev).add(index));
  };

  const validImages = images.filter((_, i) => !errors.has(i));
  const validIndices = images.map((_, i) => i).filter((i) => !errors.has(i));

  if (validImages.length === 0) {
    return (
      <div className="carousel-container bg-pink-50 flex items-center justify-center" style={{ height: '280px' }}>
        <div className="text-center text-pink-300">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="text-sm">Добавь фото в папку public/photos/</p>
        </div>
      </div>
    );
  }

  const adjustedCurrent = validIndices.indexOf(current) === -1 ? 0 : validIndices.indexOf(current);

  return (
    <div className="carousel-container relative shadow-lg" style={{ height: '280px' }}>
      <div
        className="carousel-track h-full"
        style={{ transform: `translateX(-${adjustedCurrent * 100}%)` }}
      >
        {validImages.map((src, i) => (
          <div key={validIndices[i]} className="carousel-slide h-full">
            <img
              src={src}
              alt={`Фото ${validIndices[i] + 1}`}
              className="w-full h-full object-cover"
              onError={() => handleError(validIndices[i])}
            />
          </div>
        ))}
      </div>

      {validImages.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f472a8" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f472a8" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {validImages.map((_, i) => (
              <div
                key={i}
                className={`carousel-dot ${i === adjustedCurrent ? 'active' : ''}`}
                onClick={() => setCurrent(validIndices[i])}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
