import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean | string;
  minLength?: number | string;
  maxLength?: number | string;
  pattern?: RegExp | string;
  custom?: ((value: any) => boolean | string);
}

interface FieldConfig {
  value: any;
  rules?: ValidationRules;
}

interface ValidationError {
  field: string;
  message: string;
}

const useFormValidation = <T extends Record<string, FieldConfig>>(fields: T) => {
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);

  const validateField = useCallback((fieldName: keyof T, value: any) => {
    const field = fields[fieldName];
    const rules = field.rules || {};
    
    // Clear previous error for this field
    const newErrors = { ...errors };
    delete newErrors[fieldName];
    
    // Required validation
    if (rules.required) {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        const message = typeof rules.required === 'string' 
          ? rules.required 
          : `${String(fieldName)} is required`;
        newErrors[fieldName] = message;
        setErrors(newErrors);
        return message;
      }
    }
    
    // Min length validation
    if (rules.minLength && typeof value === 'string') {
      const minLength = typeof rules.minLength === 'number' ? rules.minLength : parseInt(rules.minLength as string);
      if (value.length < minLength) {
        const message = typeof rules.minLength === 'string' 
          ? rules.minLength 
          : `${String(fieldName)} must be at least ${minLength} characters`;
        newErrors[fieldName] = message;
        setErrors(newErrors);
        return message;
      }
    }
    
    // Max length validation
    if (rules.maxLength && typeof value === 'string') {
      const maxLength = typeof rules.maxLength === 'number' ? rules.maxLength : parseInt(rules.maxLength as string);
      if (value.length > maxLength) {
        const message = typeof rules.maxLength === 'string' 
          ? rules.maxLength 
          : `${String(fieldName)} must be no more than ${maxLength} characters`;
        newErrors[fieldName] = message;
        setErrors(newErrors);
        return message;
      }
    }
    
    // Pattern validation
    if (rules.pattern && typeof value === 'string') {
      const pattern = rules.pattern instanceof RegExp 
        ? rules.pattern 
        : new RegExp(rules.pattern as string);
      if (!pattern.test(value)) {
        const message = typeof rules.pattern === 'string' 
          ? rules.pattern 
          : `Invalid format for ${String(fieldName)}`;
        newErrors[fieldName] = message;
        setErrors(newErrors);
        return message;
      }
    }
    
    // Custom validation
    if (rules.custom) {
      const result = rules.custom(value);
      if (result !== true) {
        const message = typeof result === 'string' 
          ? result 
          : `Invalid ${String(fieldName)}`;
        newErrors[fieldName] = message;
        setErrors(newErrors);
        return message;
      }
    }
    
    setErrors(newErrors);
    return null;
  }, [fields, errors]);

  const validateAll = useCallback(() => {
    const newErrors: Record<keyof T, string> = {} as Record<keyof T, string>;
    let isValid = true;
    
    Object.keys(fields).forEach(fieldName => {
      const key = fieldName as keyof T;
      const field = fields[key];
      const errorMessage = validateField(key, field.value);
      
      if (errorMessage) {
        newErrors[key] = errorMessage;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  }, [fields, validateField]);

  const markAsTouched = useCallback((fieldName: keyof T) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  }, []);

  const resetValidation = useCallback(() => {
    setErrors({} as Record<keyof T, string>);
    setTouched({} as Record<keyof T, boolean>);
  }, []);

  return {
    errors,
    touched,
    validateField,
    validateAll,
    markAsTouched,
    resetValidation
  };
};

export default useFormValidation;