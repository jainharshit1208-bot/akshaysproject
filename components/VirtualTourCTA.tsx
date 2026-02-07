import React, { useState } from 'react'; // 1. Added useState
import { IMAGES } from '../constants';

const VirtualTourCTA: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false); // 2. State to toggle video

  return (
    <section id="virtual-tour" className="relative h-[80vh] w-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      {/* Background Image Logic */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.sections.virtualTour} 
          alt="Architectural space for virtual tour" 
          className="w-full h-full object-cover grayscale opacity-30 scale-105 hover:scale-100 transition-transform duration-[10s] ease-linear"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center space-y-12 px-8">
        <header className="space-y-4">
          <h4 className="text-[10px] tracking-[0.6em] uppercase text-[#B87333]">Digital Experience</h4>
          <h2 className="text-6xl md:text-8xl serif text-white leading-tight">The ĀRKAË Residence</h2>
          <p className="max-w-2xl mx-auto text-white/40 font-light text-lg italic">
            Walk through a curated private space where every joint and grain is rendered in hyper-physical detail.
          </p>
        </header>

        <div className="flex flex-col items-center">
          {/* 3. Added onClick to the button */}
          <button 
            onClick={() => setIsPlaying(true)}
            className="group relative px-16 py-8 interactive overflow-hidden"
          >
             <div className="absolute inset-0 border border-white/10 group-hover:border-[#B87333]/50 transition-colors duration-500" />
             <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             
             <span className="relative z-10 flex items-center gap-6 text-[11px] tracking-[0.8em] uppercase text-white">
                Enter Virtual Tour
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-4 transition-transform duration-500">
                  <path d="M12 1L17 6L12 11" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                  <path d="M0 6H16" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
                </svg>
             </span>
          </button>
        </div>
      </div>

      {/* 4. Fullscreen Video Player Overlay */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <button 
            onClick={() => setIsPlaying(false)}
            className="absolute top-10 right-10 z-[110] text-white/50 hover:text-white tracking-[0.4em] uppercase text-[10px]"
          >
            [ Close Player ]
          </button>
          <video 
            autoPlay 
            controls 
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="absolute bottom-12 right-12 flex items-center gap-4 opacity-20">
        <span className="text-[10px] tracking-widest uppercase text-white">Immersive Mode</span>
        <div className="w-12 h-[1px] bg-white" />
      </div>
    </section>
  );
};

export default VirtualTourCTA;
