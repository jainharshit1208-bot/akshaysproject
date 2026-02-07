
import React, { useState, useRef } from 'react';
import { WOODS } from '../constants';

const WoodLexicon: React.FC = () => {
  const [activeWood, setActiveWood] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-32 px-8 bg-[#121212] relative transition-colors duration-1000 overflow-hidden"
      style={{ 
        backgroundColor: activeWood 
          ? WOODS.find(w => w.id === activeWood)?.color + '1A' 
          : '#121212' 
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32">
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-[#B87333]">Material Intelligence</h4>
            <h2 className="text-7xl md:text-8xl serif">The Wood Lexicon</h2>
          </div>
          <p className="max-w-md text-white/40 leading-relaxed font-light mt-8 md:mt-0 italic">
            "We select wood for both its evocative appearance and its structural strength. Rooted in a legacy of luxury heritage, these timbers define the tectonic soul and permanence of every ĀRKAË creation."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/5">
          {WOODS.map((wood) => (
            <div 
              key={wood.id} 
              onMouseEnter={() => setActiveWood(wood.id)}
              onMouseLeave={() => setActiveWood(null)}
              className="group relative bg-[#121212] p-12 hover:bg-transparent transition-all duration-700 interactive overflow-hidden"
            >
              {/* Material Visualization Layer */}
              <div className="relative aspect-[4/5] mb-12 overflow-hidden bg-black border border-white/5">
                <img 
                  src={wood.image} 
                  alt={wood.name}
                  className={`w-full h-full object-cover grayscale transition-all duration-1000 
                    ${activeWood === wood.id ? 'scale-110 grayscale-0 brightness-75' : 'scale-100 opacity-40'}`}
                />
                
                {/* TEAK: Luster Simulation Overlay */}
                {wood.id === 'teak' && activeWood === 'teak' && (
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light"
                    style={{
                      background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #B87333 0%, transparent 50%)`
                    }}
                  />
                )}

                {/* SHEESHAM: Density Map Overlay */}
                {wood.id === 'sheesham' && activeWood === 'sheesham' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-150 animate-pulse" />
                  </div>
                )}

                {/* Spec Sheet Glassmorphism (Visible on active) */}
                <div className={`absolute inset-x-4 bottom-4 glass-card p-6 transition-all duration-700 transform 
                  ${activeWood === wood.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-white/40 mb-1">Janka Hardness</span>
                      <span className="text-xs font-mono">{wood.id === 'rosewood' ? '1,780 lbf' : wood.id === 'teak' ? '1,155 lbf' : '1,660 lbf'}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-white/40 mb-1">Specific Gravity</span>
                      <span className="text-xs font-mono">0.82</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-3xl serif group-hover:text-[#B87333] transition-colors">{wood.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono italic">
                    {wood.scientificName}
                  </p>
                </div>
                
                <p className="text-sm text-white/50 leading-relaxed font-light h-20 overflow-hidden">
                  {wood.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#B87333]">{wood.characteristic}</span>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: wood.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden h-64 w-full">
         <span className="text-[20rem] font-serif italic text-white/[0.02] whitespace-nowrap -mb-20 block translate-x-1/4">
           {activeWood ? WOODS.find(w => w.id === activeWood)?.name : 'Materiality'}
         </span>
      </div>
    </section>
  );
};

export default WoodLexicon;
