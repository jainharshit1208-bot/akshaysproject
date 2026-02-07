import { WoodMaterial, FurniturePiece, Artisan } from './types';

export const COLORS = {
  rosewood: '#2D1B14',
  teak: '#B87333',
  sheesham: '#4A3728',
  bone: '#F5F2ED',
  slate: '#2A2A2A',
  black: '#121212',
  accentGold: '#D4AF37' // Added for the hover effect
};

/**
 * CENTRALIZED IMAGE REPOSITORY
 */
export const IMAGES = {
  hero: {
    main: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop',
  },
  sections: {
    joineryDetail: 'https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk4N2FlOWJjYzUwODE5MWFjYTM4NzA0MDY4ZjI0OTc6ZmlsZV8wMDAwMDAwMDNkZjQ3MjBiOTBjYzc4Zjc4NWIzMWM2NyIsInRzIjoiMjA0OTEiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImVlNWJkM2U1MDBjNTYxMThlYWIwNzFhYzMyNmUyNjI4MjJiNmU0MzNhNjk2NzM1ZDUzYTQwZTA1MmEwZDQzYTIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY3AiOm51bGwsIm1hIjpudWxsfQ==',
    virtualTour: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
    provenance: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000&auto=format&fit=crop',
    artisan: 'https://lh3.googleusercontent.com/gg/AMW1TPo_PGc3Hqizd8zdZUrih-TsX84OIqB61GZLqccLdsLCqTdp4wi9p_1toLMt4MxhoCsSeuqz9xex0CRDhwTNJGXlKoyrgX38zD-CuErZeRWw4ACm7vUx9IC7je3vqBttp68EenBgvOz5M1IuuJyYfBvvbra1uRM8S5KX72vbUl-qsPgaiHlD=s1024-rj-mp2', 
    menuWood: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop', 
  },
  materials: {
    rosewood: 'https://1.bp.blogspot.com/-BY21bK9lgFc/T6qsTOf0CvI/AAAAAAAAB8s/lqp6L48Pr4g/s1600/rosewood.jpg',
    teak: 'https://www.wood-database.com/wp-content/uploads/teak-sealed1.jpg',
    sheesham: 'https://ucarecdn.com/4f588eff-9a38-487f-a76c-713c91012ca5/-/format/auto/-/preview/3000x3000/-/quality/lighter/Sheesham-Wood-Swatches-Images-02.jpg',
  },
  products: {
    monolith: 'https://lh3.googleusercontent.com/gg/AMW1TPoBJzPmVM9HHx8BbaXhTI2iXAJYn813oyVczBfV2hbMsLbCqBYLndXfEzVGrlFmyLXMzZH_W8yzCAv_kAx2FuVG8Urkfa1aFK-o8X8KRYc0ojPr1mvm_YLCxyxY2Z4BThBnWk4Pz4_RihMJS6-dwFxZrHue6AHlUx9vIZcmlwaXxgK-vaM=s1024-rj-mp2',
    skeletonChair: 'https://lh3.googleusercontent.com/gg/AMW1TPqQr04tvqVoClNLkVAFCHNptSQ7oq5rJtjTlC0BIDjaWNdiUTvEhyBDORpBZNWfnJWvPb1bl6xcIWt5DvPdx_9KYdsDQfKHcI5eJL4yPhgcNHHt2XDLZiQ-F_s0vYvBqnZCUCZu4XJ8ZbO3YtyODwuf-nvbJOfVQmfBiaeM2AP_4NEDRdM=s1024-rj-mp2',
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

// Added 'hoverColor' to make the artisan section "pop" with a royal gold tone
export const COLLABORATOR: Artisan & { hoverColor: string } = {
  name: 'Master Rahmat Ullah',
  role: 'Lead Artificer',
  heritage: '7th Generation Kashmiri Woodworking - from the lineage that served from takhts of mughals to sinhasan of the marathas',
  signature: 'رحمت',
  hoverColor: COLORS.accentGold 
};
