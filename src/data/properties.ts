import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import house3 from "@/assets/house3.jpg";
import house4 from "@/assets/house4.jpg";
import house5 from "@/assets/house5.jpg";
import house6 from "@/assets/house6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  {
    id: "CASA-001",
    title: "Villa Moderna Blanca",
    location: "Marbella, Málaga",
    price: 485000,
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: house1,
    description: "Espectacular villa moderna con diseño minimalista, amplios ventanales y jardín tropical. Ubicada en una de las zonas más exclusivas de Marbella, esta propiedad ofrece luminosidad y confort en cada rincón.",
    features: ["Piscina privada", "Garaje doble", "Domótica", "Jardín tropical", "Terraza panorámica"],
  },
  {
    id: "CASA-002",
    title: "Villa Mediterránea con Piscina",
    location: "Alicante, Costa Blanca",
    price: 620000,
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    image: house2,
    description: "Encantadora villa de estilo mediterráneo con tejado de terracota, piscina infinita y vistas a las montañas. Un refugio de lujo rodeado de naturaleza con acabados artesanales.",
    features: ["Piscina infinity", "Bodega", "Chimenea", "Vistas montaña", "Huerto ecológico"],
  },
  {
    id: "CASA-003",
    title: "Casa Contemporánea de Diseño",
    location: "Pozuelo de Alarcón, Madrid",
    price: 890000,
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: house3,
    description: "Impresionante casa de arquitectura contemporánea con fachada de cristal y madera. Interiores de diseño con techos altos y espacios abiertos que conectan con el jardín.",
    features: ["Suelo radiante", "Cocina de diseño", "Gimnasio", "Cine en casa", "Jardín zen"],
  },
  {
    id: "CASA-004",
    title: "Casa Rural de Piedra",
    location: "Jaca, Huesca",
    price: 340000,
    bedrooms: 6,
    bathrooms: 4,
    area: 420,
    image: house4,
    description: "Majestuosa casa de piedra con encanto rústico y vistas a las colinas verdes del Pirineo. Porche amplio, techos de madera noble y chimenea en el salón principal.",
    features: ["Chimenea de leña", "Porche cubierto", "Establos", "Terreno 2 hectáreas", "Vistas al Pirineo"],
  },
  {
    id: "CASA-005",
    title: "Townhouse Urbano Moderno",
    location: "Sarrià, Barcelona",
    price: 520000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: house5,
    description: "Elegante townhouse de ladrillo visto con acabados contemporáneos en una de las mejores zonas de Barcelona. Espacios inteligentes, jardín privado y mucha luz natural.",
    features: ["Jardín privado", "Trastero", "Calefacción central", "Zona tranquila", "A 5 min del metro"],
  },
  {
    id: "CASA-006",
    title: "Ático de Lujo con Terraza",
    location: "Diagonal Mar, Barcelona",
    price: 1150000,
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    image: house6,
    description: "Exclusivo ático con terraza panorámica y vistas al skyline de la ciudad. Acabados premium, cocina gourmet y acceso directo a las mejores zonas comerciales.",
    features: ["Terraza 80m²", "Vistas 360°", "Portero 24h", "Spa comunitario", "3 plazas de garaje"],
  },
];
