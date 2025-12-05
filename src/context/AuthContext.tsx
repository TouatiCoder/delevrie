import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Valid credentials
const VALID_CREDENTIALS = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'client', password: 'client123', role: 'client' },
  { username: 'livreur', password: 'livreur123', role: 'livreur' }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for existing user in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        // If parsing fails, remove the invalid data
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    // Find matching credentials
    const credentials = VALID_CREDENTIALS.find(
      cred => cred.username === username && cred.password === password
    );

    if (credentials) {
      const userData = {
        username: credentials.username,
        role: credentials.role
      };
      
      // Store user data in state and localStorage
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};