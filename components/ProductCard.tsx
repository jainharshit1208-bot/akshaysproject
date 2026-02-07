
import React from 'react';
import { FurniturePiece } from '../types';

interface Props {
  piece: FurniturePiece;
}

const ProductCard: React.FC<Props> = ({ piece }) => {
  return (
    <div className="glass-card p-1 group interactive relative">
      {/* Brutalist Border Accent */}
      <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#B87333] z-10" />
      
      <div className="relative overflow-hidden bg-black/40">
        <img 
          src={piece.image} 
          alt={piece.title}
          className="w-full aspect-square object-cover transition-all duration-1000 group-hover:scale-110 grayscale brightness-75 hover:grayscale-0 hover:brightness-100"
        />
        
        {/* Floating Technical Tag */}
        <div className="absolute top-6 right-6 px-4 py-2 bg-black/80 border border-white/10 backdrop-blur-md">
           <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Ref. {piece.id}</span>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-3xl serif leading-none">{piece.title}</h3>
          <span className="text-xs uppercase tracking-widest text-[#B87333] font-semibold">{piece.material}</span>
        </div>

        <p className="text-sm text-white/50 leading-relaxed font-light line-clamp-2 italic">
          "{piece.description}"
        </p>

        <div className="pt-6 border-t border-white/5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Architect</span>
            <span className="text-xs">{piece.designer}</span>
          </div>
          <button className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors duration-500 text-[10px] uppercase tracking-widest">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
