export const coffeeData = [
  {
    id: 1,
    name: "Etíope Yirgacheffe",
    origin: "Provincia Sidamo, Etiopía",
    category: "single",
    process: "Lavado",
    notes: ["Floral", "Cítrico", "Tipo Té"],
    price: 28,
    roast: "Tueste Claro",
    altitude: "1,700-2,200m",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    featured: true
  },
  {
    id: 2,
    name: "Colombiano Huila",
    origin: "Departamento Huila, Colombia",
    category: "single",
    process: "Natural",
    notes: ["Chocolate", "Caramelo", "Naranja"],
    price: 26,
    roast: "Tueste Medio",
    altitude: "1,500-1,800m",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.8
  },
  {
    id: 3,
    name: "Mezcla Suprema de la Casa",
    origin: "Brasil + Guatemala",
    category: "blend",
    process: "Mixto",
    notes: ["Equilibrado", "Nuez", "Dulce"],
    price: 24,
    roast: "Tueste Medio-Oscuro",
    altitude: "Varios",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 4.7
  },
  {
    id: 4,
    name: "Montaña Azul Jamaiquino",
    origin: "Montañas Azules, Jamaica",
    category: "limited",
    process: "Lavado",
    notes: ["Suave", "Equilibrado", "Terso"],
    price: 65,
    roast: "Tueste Medio",
    altitude: "910-1,700m",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    rating: 5.0,
    featured: true
  }
];

export const categories = [
  { id: 'all', name: 'Todos los Orígenes', count: 12 },
  { id: 'single', name: 'Origen Único', count: 6 },
  { id: 'blend', name: 'Mezclas Exclusivas', count: 4 },
  { id: 'limited', name: 'Edición Limitada', count: 2 }
];
