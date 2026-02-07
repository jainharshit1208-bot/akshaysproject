
import React from 'react';
import { IMAGES } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { label: 'The Gallery', id: 'gallery' },
    { label: 'Virtual Tour', id: 'virtual-tour' },
    { label: 'Wood Lexicon', id: 'lexicon' },
    { label: 'Structural Joinery', id: 'joinery' },
    { label: 'Master Artisan', id: 'artisan' },
    { label: 'Private Enquiry', id: 'footer' },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-[#121212] transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute top-8 right-8 z-[210]">
        <button 
          onClick={onClose}
          className="interactive text-[10px] uppercase tracking-[0.5em] text-white/40 hover:text-[#B87333] transition-colors p-4"
        >
          Close
        </button>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/3 bg-[#1a1a1a] items-center justify-center p-24 overflow-hidden relative border-r border-white/5">
          <div className="absolute inset-0 opacity-20 grayscale scale-110">
            <img src={IMAGES.sections.menuWood} alt="Wood texture" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-7xl serif text-white/5 select-none leading-none">ĀRKAË</h2>
            <p className="text-[10px] tracking-[0.8em] uppercase text-[#B87333] mt-8">Digital Gallery</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar pt-24 pb-12 px-8 md:p-24">
          <div className="flex-1 flex flex-col justify-center min-h-max space-y-16 md:space-y-24">
            <nav className="space-y-6 md:space-y-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group flex items-baseline gap-6 md:gap-12 interactive block w-full text-left"
                >
                  <span className="text-[10px] md:text-xs font-mono text-white/20 group-hover:text-[#B87333] transition-colors">0{index + 1}</span>
                  <span className="text-4xl md:text-7xl serif text-white/80 group-hover:text-white group-hover:italic transition-all duration-500">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>

            <div className="pt-12 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h5 className="text-[10px] uppercase tracking-[0.5em] text-[#B87333]">Contact Studio</h5>
                  <p className="text-sm text-white/40 font-light hover:text-white transition-colors cursor-pointer">contact@arkae.design</p>
                  <p className="text-sm text-white/40 font-light">+91 11 2345 6789</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-[10px] uppercase tracking-[0.5em] text-[#B87333]">Socials</h5>
                  <div className="flex gap-6 text-sm text-white/40 font-light">
                    <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Journal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
