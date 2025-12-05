import React, { createContext, useContext, useState, useEffect } from 'react';
import type { City } from '../data/cities/citiesData';
import { cities as initialCities } from '../data/cities/citiesData';

interface PricingContextType {
  cities: City[];
  addCity: (city: Omit<City, 'id'>) => void;
  updateCityPrice: (id: number, price: number) => void;
  deleteCity: (id: number) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cities, setCities] = useState<City[]>(() => {
    // Load cities from localStorage or use initial data
    const savedCities = localStorage.getItem('pricing_cities');
    if (savedCities) {
      try {
        return JSON.parse(savedCities);
      } catch (e) {
        return initialCities;
      }
    }
    return initialCities;
  });

  // Save cities to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pricing_cities', JSON.stringify(cities));
  }, [cities]);

  const addCity = (city: Omit<City, 'id'>) => {
    const newCity = {
      ...city,
      id: Math.max(0, ...cities.map(c => c.id)) + 1
    };
    setCities(prev => [...prev, newCity]);
  };

  const updateCityPrice = (id: number, price: number) => {
    setCities(prev => 
      prev.map(city => 
        city.id === id ? { ...city, price } : city
      )
    );
  };

  const deleteCity = (id: number) => {
    setCities(prev => prev.filter(city => city.id !== id));
  };

  return (
    <PricingContext.Provider value={{ cities, addCity, updateCityPrice, deleteCity }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};