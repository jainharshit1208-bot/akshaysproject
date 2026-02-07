
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WoodLexicon from './components/WoodLexicon';
import JoinerySection from './components/JoinerySection';
import ProductCard from './components/ProductCard';
import ArtisanSection from './components/ArtisanSection';
import VirtualTourCTA from './components/VirtualTourCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MenuOverlay from './components/MenuOverlay';
import { PIECES, IMAGES } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="relative selection:bg-[#B87333] selection:text-white">
      <CustomCursor />
      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={scrollToSection} 
      />
      
      <nav className={`fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100] transition-all duration-700 ${scrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`}>
        <div>
           <button 
             onClick={() => setIsMenuOpen(true)}
             className="interactive text-[10px] uppercase tracking-[0.5em] font-light hover:text-[#B87333] transition-colors"
           >
             Menu
           </button>
        </div>
        
        <div className={`transition-all duration-700 transform ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
           <h1 className="text-2xl serif tracking-[0.3em] font-light">ĀRKAË</h1>
        </div>

        <div>
           <button 
             onClick={() => scrollToSection('footer')}
             className="interactive text-[10px] uppercase tracking-[0.5em] font-light hover:text-[#B87333] transition-colors"
           >
             Enquiry
           </button>
        </div>
      </nav>

      <div id="home">
        <Hero />
      </div>

      <section className="py-40 bg-black flex justify-center px-8">
        <div className="max-w-3xl text-center space-y-12">
          <h3 className="text-4xl md:text-5xl leading-tight serif italic">
            "Indian craft reinterpreted as structure, not ornament. We utilize the tectonic logic of Rosewood, Teak, and Sheesham to build for the centuries."
          </h3>
          <div className="w-12 h-[1px] bg-[#B87333] mx-auto" />
        </div>
      </section>

      <div id="lexicon">
        <WoodLexicon />
      </div>

      <div id="joinery">
        <JoinerySection />
      </div>

      <div id="gallery" className="py-40 px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 flex flex-col items-center">
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-[#B87333] mb-6">Current Collection</h4>
            <h2 className="text-7xl serif text-center">Architectural Artifacts</h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {PIECES.map(piece => (
              <ProductCard key={piece.id} piece={piece} />
            ))}
          </div>
          
          <div className="mt-32 flex justify-center">
             <button className="group relative px-12 py-6 overflow-hidden interactive">
                <div className="absolute inset-0 border border-white/20 transition-all duration-500 group-hover:scale-105" />
                <span className="relative z-10 text-[10px] tracking-[0.6em] uppercase transition-all duration-500 group-hover:tracking-[0.8em]">View Full Catalog</span>
             </button>
          </div>
        </div>
      </div>

      <VirtualTourCTA />

      <div id="artisan">
        <ArtisanSection />
      </div>

      <section className="h-[80vh] w-full overflow-hidden relative">
         <img 
          src={IMAGES.sections.provenance} 
          alt="Luxury Indian Rosewood Sofa and Table"
          className="w-full h-full object-cover grayscale brightness-[0.35] contrast-110"
         />
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-8xl md:text-[12rem] serif opacity-10 text-white select-none">
              Provenance
            </h2>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </section>

      <div id="footer">
        <Footer />
      </div>
    </main>
  );
};

export default App;
