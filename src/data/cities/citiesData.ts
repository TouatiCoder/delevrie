// Mock cities data with pricing
export interface City {
  id: number;
  name: string;
  country: string;
  price: number;
}

export const cities: City[] = [
  { id: 1, name: 'Paris', country: 'France', price: 12.99 },
  { id: 2, name: 'Lyon', country: 'France', price: 10.99 },
  { id: 3, name: 'Marseille', country: 'France', price: 11.99 },
];