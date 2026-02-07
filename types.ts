
export interface WoodMaterial {
  id: string;
  name: string;
  scientificName: string;
  density: string;
  characteristic: string;
  color: string;
  description: string;
  image: string;
}

export interface FurniturePiece {
  id: string;
  title: string;
  material: string;
  designer: string;
  description: string;
  dimensions: string;
  image: string;
}

export interface Artisan {
  name: string;
  role: string;
  heritage: string;
  signature: string;
}
