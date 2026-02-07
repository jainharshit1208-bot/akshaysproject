
import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../constants';

const JoinerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max(0, -rect.top / rect.height), 1);
      setScale(1 + scrollProgress * 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-black overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <img 
            src={IMAGES.sections.joineryDetail} 
            alt="Structural Wood Detail" 
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#B87333]/20 rounded-full animate-ping opacity-30" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />

        <div className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-xl z-20 pointer-events-none">
          <h2 className="text-7xl md:text-9xl serif text-white/20 select-none leading-none">Structure</h2>
          <div className="mt-8 space-y-8">
            <h3 className="text-4xl md:text-5xl serif text-[#B87333]">The Kashmiri Ratha</h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-lg">
              In ĀRKAË pieces, there are no nails. No screws. No adhesive reliance. Only the mathematical tension of wood meeting wood. 
              <br/><br/>
              Our joinery is not hidden because it is ugly; it is hidden because it is the soul.
            </p>
          </div>
        </div>

        <div className="absolute right-12 bottom-12 text-right opacity-30 z-20">
           <span className="text-[10px] tracking-[0.6em] uppercase text-white">Architecture of the Void</span>
        </div>
      </div>
    </section>
  );
};

export default JoinerySection;
