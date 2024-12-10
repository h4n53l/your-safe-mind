'use client'

import { useState, useRef, useEffect, MouseEvent } from 'react';

interface ImageComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    height?: string;
    initialPosition?: number;
  }
  
  const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({
    beforeImage,
    afterImage,
    height = "500px",
    initialPosition = 50
  }) => {
    const [sliderPosition, setSliderPosition] = useState<number>(initialPosition);
    const [isResizing, setIsResizing] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (): void => {
    setIsResizing(true);
  };


  const updateSliderPosition = (clientX: number): void => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent<Element> | globalThis.MouseEvent): void => {
    if (!isResizing) return;
    updateSliderPosition(e.clientX);
  };

  // Handle touch events
  const handleTouchMove = (e: TouchEvent): void => {
    if (!isResizing) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = (): void => {
      setIsResizing(false);
    };

    const handleGlobalMouseMove = (e: globalThis.MouseEvent): void => {
      handleMouseMove(e);
    };

    const handleGlobalTouchMove = (e: TouchEvent): void => {
      handleTouchMove(e);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isResizing]);

  return (
    <div 
    ref={containerRef}
    className="relative w-full overflow-hidden cursor-col-resize select-none"
    style={{ height }}
  >
    {/* Bottom Image (After) */}
    <div className="absolute inset-0 select-none">
      <img 
        src={afterImage} 
        alt="After"
        className="w-full h-full object-cover select-none"
        draggable="false"
      />
      {/* After Text with Blur Background */}
      <div className="absolute inset-0 flex items-center justify-center select-none">
        <div className="m-12 p-6 rounded-lg bg-black/30 backdrop-blur-xs select-none">
          <span className="text-white text-xl font-semibold select-none">
          <div className="text-primary-content text-center grid place-content-center">
          <h1 className="text-3xl font-extrabold text-white">
          Find Your Inner Strength
          </h1>
          <div className="text-center max-w-3xl">
          <p className="py-6 text-lg text-white">
            At Your Safe Mind, we provide compassionate therapy. <br/>Our
            experienced therapists create a supportive, <br/>judgment-free space for
            healing and personal growth. <br/>Take the first step towards a
            healthier, happier you.
          </p>
          </div>
          <div>
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
Book a Session Today</button>
        </div>
        </div>
          </span>
        </div>
      </div>
    </div>

    {/* Top Image (Before) */}
    <div 
      className="absolute inset-0 select-none bg-gradient-to-r from-emerald-50 to-emerald-50"
      style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}
    >
      <img 
        src={beforeImage} 
        alt="Before"
        className="w-full h-full object-cover select-none"
        draggable="false"
      />
      {/* Before Text with Blur Background */}
      <div className="absolute inset-0 flex items-center justify-center select-none">
        <div className="px-6 py-3 rounded-lg bg-black/30 backdrop-blur-sm select-none">
          <span className="text-white text-xl font-semibold select-none">
          <div className="text-primary-content text-center grid place-content-center">
          <h1 className="text-3xl font-extrabold text-white">
          Feeling Overwhelmed <br/>By Life's Challenges?
          </h1>
          <div className="text-center max-w-3xl text-body p-6">
      <p className="text-lg pt-3 text-white ">Seeking professional guidance </p>
      <p className="text-lg text-white ">during difficult times?</p>
      <p className="text-lg pt-3 text-white ">Looking to build </p>
      <p className="text-lg text-white ">a more fulfilling life?</p>
<p className="text-lg pt-3 text-white ">Is anxiety or depression </p>
<p className="text-lg text-white ">affecting your daily life?</p>
      </div>
      <div className='p-3'>
          <button 
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
            type="button" 
            onClick={()=>setSliderPosition(15)}
            >
Take Action</button>
        </div>
        </div>
          </span>
        </div>
      </div>
    </div>

    {/* Slider Handle */}
    <div 
      className="absolute top-0 bottom-0 w-1 bg-green-200 cursor-col-resize select-none"
      style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-200 rounded-full shadow-lg flex items-center justify-center select-none">
        <svg 
          className="w-4 h-4 text-gray-600 select-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 9l4-4 4 4m0 6l-4 4-4-4" 
          />
        </svg>
      </div>
    </div>
  </div>
  );
};

export default ImageComparisonSlider;