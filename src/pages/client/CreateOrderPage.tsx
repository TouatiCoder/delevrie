import React, { useState } from 'react';
import { cities } from '../../data/client/dummyData';
import FormField from '../../components/ui/FormField';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const CreateOrderPage: React.FC = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    senderCity: '',
    recipientName: '',
    recipientPhone: '',
    recipientAddress: '',
    recipientCity: '',
    packageType: '',
    packageWeight: '',
    deliveryType: '',
    deliveryDate: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Sender validation
    if (!formData.senderName.trim()) {
      newErrors.senderName = 'Sender name is required';
    }
    
    if (!formData.senderPhone.trim()) {
      newErrors.senderPhone = 'Sender phone is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.senderPhone)) {
      newErrors.senderPhone = 'Please enter a valid phone number';
    }
    
    if (!formData.senderAddress.trim()) {
      newErrors.senderAddress = 'Sender address is required';
    }
    
    if (!formData.senderCity) {
      newErrors.senderCity = 'Please select a sender city';
    }
    
    // Recipient validation
    if (!formData.recipientName.trim()) {
      newErrors.recipientName = 'Recipient name is required';
    }
    
    if (!formData.recipientPhone.trim()) {
      newErrors.recipientPhone = 'Recipient phone is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.recipientPhone)) {
      newErrors.recipientPhone = 'Please enter a valid phone number';
    }
    
    if (!formData.recipientAddress.trim()) {
      newErrors.recipientAddress = 'Recipient address is required';
    }
    
    if (!formData.recipientCity) {
      newErrors.recipientCity = 'Please select a recipient city';
    }
    
    // Package validation
    if (!formData.packageType) {
      newErrors.packageType = 'Please select a package type';
    }
    
    if (!formData.packageWeight) {
      newErrors.packageWeight = 'Package weight is required';
    } else if (parseFloat(formData.packageWeight) <= 0) {
      newErrors.packageWeight = 'Weight must be greater than 0';
    }
    
    // Delivery validation
    if (!formData.deliveryType) {
      newErrors.deliveryType = 'Please select a delivery type';
    }
    
    if (!formData.deliveryDate) {
      newErrors.deliveryDate = 'Delivery date is required';
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          senderName: '',
          senderPhone: '',
          senderAddress: '',
          senderCity: '',
          recipientName: '',
          recipientPhone: '',
          recipientAddress: '',
          recipientCity: '',
          packageType: '',
          packageWeight: '',
          deliveryType: '',
          deliveryDate: '',
          specialInstructions: ''
        });
        setErrors({});
      }, 3000);
    }, 1500);
  };

  return (
    <div className="create-order-page fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
        <p className="text-gray-600 mt-1">Fill in the details below to create a new delivery order</p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
          <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Order created successfully! Your order ID is #ORD-NEW-001.
        </div>
      )}

      <div className="card p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sender Information</h2>
              
              <div className="space-y-4">
                <FormField label="Full Name" error={errors.senderName} required>
                  <Input
                    type="text"
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    error={errors.senderName}
                    success={!errors.senderName && formData.senderName.trim().length > 0}
                    placeholder="Enter sender's full name"
                  />
                </FormField>
                
                <FormField label="Phone Number" error={errors.senderPhone} required>
                  <Input
                    type="tel"
                    id="senderPhone"
                    name="senderPhone"
                    value={formData.senderPhone}
                    onChange={handleChange}
                    error={errors.senderPhone}
                    success={!errors.senderPhone && formData.senderPhone.trim().length > 0 && /^\+?[0-9]{10,15}$/.test(formData.senderPhone)}
                    placeholder="Enter sender's phone number"
                  />
                </FormField>
                
                <FormField label="Address" error={errors.senderAddress} required>
                  <Input
                    type="text"
                    id="senderAddress"
                    name="senderAddress"
                    value={formData.senderAddress}
                    onChange={handleChange}
                    error={errors.senderAddress}
                    success={!errors.senderAddress && formData.senderAddress.trim().length > 0}
                    placeholder="Enter sender's address"
                  />
                </FormField>
                
                <FormField label="City" error={errors.senderCity} required>
                  <select
                    id="senderCity"
                    name="senderCity"
                    value={formData.senderCity}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200 ${
                      errors.senderCity 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  >
                    <option value="">Select a city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.name}>
                        {city.name}, {city.country}
                      </option>
                    ))}
                  </select>
                  {errors.senderCity && (
                    <p className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.senderCity}
                    </p>
                  )}
                </FormField>
              </div>
            </div>
            
            {/* Recipient Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recipient Information</h2>
              
              <div className="space-y-4">
                <FormField label="Full Name" error={errors.recipientName} required>
                  <Input
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    error={errors.recipientName}
                    success={!errors.recipientName && formData.recipientName.trim().length > 0}
                    placeholder="Enter recipient's full name"
                  />
                </FormField>
                
                <FormField label="Phone Number" error={errors.recipientPhone} required>
                  <Input
                    type="tel"
                    id="recipientPhone"
                    name="recipientPhone"
                    value={formData.recipientPhone}
                    onChange={handleChange}
                    error={errors.recipientPhone}
                    success={!errors.recipientPhone && formData.recipientPhone.trim().length > 0 && /^\+?[0-9]{10,15}$/.test(formData.recipientPhone)}
                    placeholder="Enter recipient's phone number"
                  />
                </FormField>
                
                <FormField label="Address" error={errors.recipientAddress} required>
                  <Input
                    type="text"
                    id="recipientAddress"
                    name="recipientAddress"
                    value={formData.recipientAddress}
                    onChange={handleChange}
                    error={errors.recipientAddress}
                    success={!errors.recipientAddress && formData.recipientAddress.trim().length > 0}
                    placeholder="Enter recipient's address"
                  />
                </FormField>
                
                <FormField label="City" error={errors.recipientCity} required>
                  <select
                    id="recipientCity"
                    name="recipientCity"
                    value={formData.recipientCity}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200 ${
                      errors.recipientCity 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  >
                    <option value="">Select a city</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.name}>
                        {city.name}, {city.country}
                      </option>
                    ))}
                  </select>
                  {errors.recipientCity && (
                    <p className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.recipientCity}
                    </p>
                  )}
                </FormField>
              </div>
            </div>
            
            {/* Package Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Package Details</h2>
              
              <div className="space-y-4">
                <FormField label="Package Type" error={errors.packageType} required>
                  <select
                    id="packageType"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200 ${
                      errors.packageType 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  >
                    <option value="">Select package type</option>
                    <option value="document">Document</option>
                    <option value="parcel">Parcel</option>
                    <option value="fragile">Fragile Item</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                  </select>
                  {errors.packageType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.packageType}
                    </p>
                  )}
                </FormField>
                
                <FormField label="Weight (kg)" error={errors.packageWeight} required>
                  <Input
                    type="number"
                    id="packageWeight"
                    name="packageWeight"
                    value={formData.packageWeight}
                    onChange={handleChange}
                    error={errors.packageWeight}
                    success={!errors.packageWeight && parseFloat(formData.packageWeight) > 0}
                    min="0.1"
                    step="0.1"
                    placeholder="Enter package weight"
                  />
                </FormField>
              </div>
            </div>
            
            {/* Delivery Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Delivery Details</h2>
              
              <div className="space-y-4">
                <FormField label="Delivery Type" error={errors.deliveryType} required>
                  <select
                    id="deliveryType"
                    name="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200 ${
                      errors.deliveryType 
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  >
                    <option value="">Select delivery type</option>
                    <option value="standard">Standard Delivery</option>
                    <option value="express">Express Delivery</option>
                    <option value="same-day">Same Day Delivery</option>
                  </select>
                  {errors.deliveryType && (
                    <p className="mt-1 text-sm text-red-600 flex items-center" role="alert">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.deliveryType}
                    </p>
                  )}
                </FormField>
                
                <FormField label="Preferred Delivery Date" error={errors.deliveryDate} required>
                  <Input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    error={errors.deliveryDate}
                    success={!errors.deliveryDate && formData.deliveryDate !== ''}
                  />
                </FormField>
              </div>
            </div>
          </div>
          
          {/* Special Instructions */}
          <div className="mt-6">
            <FormField label="Special Instructions" helperText="Any special handling instructions or delivery notes...">
              <textarea
                id="specialInstructions"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Any special handling instructions or delivery notes..."
              ></textarea>
            </FormField>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              fullWidth
            >
              Create Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrderPage;