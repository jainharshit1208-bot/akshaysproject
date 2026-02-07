
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-8 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl serif tracking-widest uppercase">ĀRKAË</h2>
          <p className="text-xs text-white/30 uppercase tracking-[0.3em]">Built in India. Sent to the World.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          <div className="space-y-4">
             <h5 className="text-[10px] uppercase tracking-widest text-[#B87333]">Explore</h5>
             <ul className="space-y-2 text-sm text-white/60 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Collections</li>
                <li className="hover:text-white transition-colors cursor-pointer">Virtual Tour</li>
                <li className="hover:text-white transition-colors cursor-pointer">The Lexicon</li>
                <li className="hover:text-white transition-colors cursor-pointer">Heritage</li>
             </ul>
          </div>
          <div className="space-y-4">
             <h5 className="text-[10px] uppercase tracking-widest text-[#B87333]">Connect</h5>
             <ul className="space-y-2 text-sm text-white/60 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Studio Visit</li>
                <li className="hover:text-white transition-colors cursor-pointer">Private List</li>
                <li className="hover:text-white transition-colors cursor-pointer">Press</li>
             </ul>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
             <h5 className="text-[10px] uppercase tracking-widest text-[#B87333]">Manifesto</h5>
             <p className="text-xs leading-relaxed text-white/30 font-light italic">
               "Structure is the highest form of ornament. We do not build furniture; we curate tectonic silence."
             </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] tracking-widest text-white/20 uppercase">
        <span>&copy; 2025 ĀRKAË Studio</span>
        <div className="flex gap-8">
           <span>Terms</span>
           <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
