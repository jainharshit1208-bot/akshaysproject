
import React from 'react';
import { COLLABORATOR, IMAGES } from '../constants';

const ArtisanSection: React.FC = () => {
  return (
    <section className="py-40 px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
        <div className="flex-1 order-2 md:order-1">
          <div className="space-y-12">
            <header>
               <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-4">Couture Collaboration</h4>
               <h2 className="text-6xl md:text-8xl serif">{COLLABORATOR.name}</h2>
            </header>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl italic serif text-[#B87333] leading-snug">
                "{COLLABORATOR.heritage}"
              </p>
              <p className="text-white/50 leading-relaxed font-light text-lg">
                The Master Artisan is not a vendor; they are the architect of the realization. Rahmat Ullah brings centuries of hand-logic to the precision of modern ĀRKAË silhouettes. Every piece bears his specific geometric signature.
              </p>
            </div>

            <div className="pt-12">
               <span className="text-9xl opacity-10 font-serif select-none italic text-white">
                 {COLLABORATOR.signature}
               </span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative order-1 md:order-2">
           <div className="absolute inset-0 border border-white/5 -translate-x-8 translate-y-8" />
           <img 
            src={IMAGES.sections.artisan} 
            alt="The Artisan at work"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
           />
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
