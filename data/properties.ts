export type PropertyType = "House" | "Apartment";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  location: string;
  beds: number;
  baths: number;
  areaSqFt: number;
  heroImage: string;
  gallery: string[];
  description: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "palm-villa-01",
    title: "Palm View Signature Villa",
    type: "House",
    price: 1250000,
    location: "Colombo 07",
    beds: 5,
    baths: 4,
    areaSqFt: 4200,
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "An elegant villa with tropical landscaping, refined interiors, and private outdoor lounge space designed for modern luxury living.",
    featured: true,
  },
  {
    id: "harbor-heights-02",
    title: "Harbor Heights Penthouse",
    type: "Apartment",
    price: 980000,
    location: "Colombo 03",
    beds: 4,
    baths: 3,
    areaSqFt: 2800,
    heroImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Skyline views, generous natural light, and curated finishes define this luxurious penthouse in a prime city address.",
    featured: true,
  },
  {
    id: "garden-residence-03",
    title: "Garden Court Residence",
    type: "House",
    price: 760000,
    location: "Nugegoda",
    beds: 4,
    baths: 3,
    areaSqFt: 3000,
    heroImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A peaceful family home with landscaped gardens, bright open-plan living areas, and premium construction details.",
    featured: true,
  },
  {
    id: "marina-lofts-04",
    title: "Marina Lofts Apartment",
    type: "Apartment",
    price: 520000,
    location: "Negombo",
    beds: 3,
    baths: 2,
    areaSqFt: 1850,
    heroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Contemporary apartment near the marina with expansive windows and a calm, premium aesthetic throughout.",
  },
  {
    id: "cedar-lane-05",
    title: "Cedar Lane Family Estate",
    type: "House",
    price: 690000,
    location: "Kandy",
    beds: 4,
    baths: 3,
    areaSqFt: 2600,
    heroImage:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Balanced between heritage charm and modern comfort, this estate offers a warm and polished living experience.",
  },
  {
    id: "azure-terrace-06",
    title: "Azure Terrace Suite",
    type: "Apartment",
    price: 610000,
    location: "Mount Lavinia",
    beds: 3,
    baths: 2,
    areaSqFt: 2100,
    heroImage:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687645-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A stylish suite with sea-breeze ambiance, thoughtful layout, and understated luxury details across every room.",
  },
];

export const featuredProperties = properties.filter((property) => property.featured);
