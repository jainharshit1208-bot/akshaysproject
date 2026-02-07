
import React, { useState } from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#121212] overflow-hidden">
      {/* Dynamic Spot Light Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none opacity-40 transition-opacity duration-1000" />
      
      {/* Central Piece - Silhouetted */}
      <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center">
        <div className="mb-12 opacity-90 text-center w-full">
          <h1 className="text-[14vw] md:text-[14rem] tracking-[0.1em] md:tracking-[0.15em] font-light serif text-white/95 leading-none select-none whitespace-nowrap overflow-hidden">
            ĀRKAË
          </h1>
          <div className="h-[1px] w-32 md:w-48 mx-auto bg-gradient-to-r from-transparent via-[#B87333] to-transparent mt-12 md:mt-16" />
        </div>

        <div 
          className="relative w-full aspect-[16/8] md:aspect-[21/9] max-w-5xl group interactive overflow-hidden shadow-2xl border border-white/5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={IMAGES.hero.main} 
            alt="ĀRKAË Interior Exhibit" 
            className={`w-full h-full object-cover grayscale contrast-110 transition-all duration-[3000ms] ease-out
              ${isHovered ? 'brightness-100 scale-105 grayscale-0' : 'brightness-50 scale-100'}`}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] md:shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
          
          <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-[#B87333]/15 to-transparent transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-[9px] tracking-[1.2em] uppercase font-light text-white/40">
            Explore
          </p>
          <h2 className="text-[10px] tracking-[0.8em] uppercase text-[#B87333] font-light">
            The Architectural Ethos
          </h2>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-10">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
