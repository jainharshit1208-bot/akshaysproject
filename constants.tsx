
import { WoodMaterial, FurniturePiece, Artisan } from './types';

export const COLORS = {
  rosewood: '#2D1B14',
  teak: '#B87333',
  sheesham: '#4A3728',
  bone: '#F5F2ED',
  slate: '#2A2A2A',
  black: '#121212'
};

/**
 * CENTRALIZED IMAGE REPOSITORY
 * Replace these URLs with your high-resolution photography.
 * Recommended: Unsplash for architectural mood, or studio photography for products.
 */
export const IMAGES = {
  hero: {
    main: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop',
  },
  sections: {
    joineryDetail: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=2000&auto=format&fit=crop',
    virtualTour: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
    provenance: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000&auto=format&fit=crop',
    artisan: 'https://images.unsplash.com/photo-1610633058063-41f2ecad72ee?q=80&w=1200&auto=format&fit=crop', // Master Rahmat Ullah
    menuWood: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop', // Background texture for menu
  },
  materials: {
    rosewood: 'https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?q=80&w=1000&auto=format&fit=crop',
    teak: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop',
    sheesham: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1000&auto=format&fit=crop',
  },
  products: {
    monolith: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1200&auto=format&fit=crop',
    skeletonChair: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1200&auto=format&fit=crop',
  }
};

export const WOODS: WoodMaterial[] = [
  {
    id: 'rosewood',
    name: 'Indian Rosewood',
    scientificName: 'Dalbergia Sissoo',
    density: '850 kg/m³',
    characteristic: 'Depth & Resonance',
    color: COLORS.rosewood,
    description: 'A dense, dark heartwood known for its complex grain patterns and deep purple-brown hues. It represents the ultimate weight of the ĀRKAË collection.',
    image: IMAGES.materials.rosewood
  },
  {
    id: 'teak',
    name: 'Old-Growth Teak',
    scientificName: 'Tectona Grandis',
    density: '650 kg/m³',
    characteristic: 'Oiliness & Resilience',
    color: COLORS.teak,
    description: 'High silica and oil content allow for a natural luster that deepens over decades. The backbone of our architectural silhouettes.',
    image: IMAGES.materials.teak
  },
  {
    id: 'sheesham',
    name: 'Sheesham',
    scientificName: 'North Indian Rosewood',
    density: '750 kg/m³',
    characteristic: 'Structural Tenacity',
    color: COLORS.sheesham,
    description: 'Distinguished by its irregular grain structure, Sheesham offers a unique tension between lightness of form and physical hardness.',
    image: IMAGES.materials.sheesham
  }
];

export const PIECES: FurniturePiece[] = [
  {
    id: '01',
    title: 'The Monolith Console',
    material: 'Indian Rosewood',
    designer: 'ĀRKAË Studio',
    description: 'A singular expression of gravity. Zero hardware, interlocking dovetails.',
    dimensions: '180 x 45 x 75 cm',
    image: IMAGES.products.monolith
  },
  {
    id: '02',
    title: 'Skeleton Armchair',
    material: 'Old-Growth Teak',
    designer: 'ĀRKAË Studio',
    description: 'Exposing the Kashmiri ratha joinery as the primary visual element.',
    dimensions: '70 x 75 x 85 cm',
    image: IMAGES.products.skeletonChair
  }
];

export const COLLABORATOR: Artisan = {
  name: 'Master Rahmat Ullah',
  role: 'Lead Artificer',
  heritage: '7th Generation Kashmiri Woodworking - from the lineage that served from takhts of mughals to sinhasan of the marathas',
  signature: 'رحمت'
};
