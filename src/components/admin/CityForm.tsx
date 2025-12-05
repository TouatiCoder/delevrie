import React, { useState } from 'react';
import type { City } from '../../data/cities/citiesData';
import { usePricing } from '../../context/PricingContext';
import FormField from '../ui/FormField';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface CityFormProps {
  city?: City;
  onCancel: () => void;
}

const CityForm: React.FC<CityFormProps> = ({ city, onCancel }) => {
  const { addCity, updateCityPrice } = usePricing();
  const [name, setName] = useState(city?.name || '');
  const [country, setCountry] = useState(city?.country || '');
  const [price, setPrice] = useState(city?.price.toString() || '');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!city) {
      if (!name.trim()) {
        newErrors.name = 'City name is required';
      }
      
      if (!country.trim()) {
        newErrors.country = 'Country is required';
      }
    }
    
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = 'Please enter a valid price greater than 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const priceValue = parseFloat(price);
      
      if (city) {
        // Update existing city
        updateCityPrice(city.id, priceValue);
      } else {
        // Add new city
        addCity({
          name,
          country,
          price: priceValue
        });
      }
      
      // Success feedback
      onCancel();
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 fade-in">
      {!city && (
        <>
          <FormField label="City Name" error={errors.name} required>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              success={!errors.name && name.trim().length > 0}
              placeholder="Enter city name"
            />
          </FormField>
          
          <FormField label="Country" error={errors.country} required>
            <Input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              error={errors.country}
              success={!errors.country && country.trim().length > 0}
              placeholder="Enter country"
            />
          </FormField>
        </>
      )}
      
      <FormField label="Price (€)" error={errors.price} required>
        <Input
          type="number"
          step="0.01"
          min="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          error={errors.price}
          success={!errors.price && parseFloat(price) > 0}
          placeholder="0.00"
        />
      </FormField>
      
      {errors.submit && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{errors.submit}</h3>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-end space-x-3 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {city ? 'Update Price' : 'Add City'}
        </Button>
      </div>
    </form>
  );
};

export default CityForm;