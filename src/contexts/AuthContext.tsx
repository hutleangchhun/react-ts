import React, { useState, useEffect, type ReactNode } from 'react';
import { authAPI } from '../api/auth';
import { AuthContext } from './AuthContextProvider';
import type { User, AuthContextType } from '../types/auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      console.log('Fetching user profile...');
      const response = await authAPI.getProfile();
      console.log('Profile API response:', response);
      
      if (response && response.user) {
        console.log('Setting user data:', response.user);
        setUser(response.user);
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
        console.error('Invalid profile response format:', response);
        throw new Error('Invalid profile response format');
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      // If profile fetch fails, clear auth data
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const cachedUser = localStorage.getItem('user');
    
    if (token) {
      // Try to fetch fresh profile data
      fetchUserProfile();
    } else if (cachedUser) {
      // Use cached user data if no token but data exists
      try {
        setUser(JSON.parse(cachedUser));
      } catch {
        localStorage.removeItem('user');
      }
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    try {
      console.log('Attempting login with:', { email, password });
      const response = await authAPI.login(email, password);

      console.log('Login successful:', response);
      localStorage.setItem('access_token', response.access_token);
      
      // Fetch complete profile after login
      await fetchUserProfile();
    } catch (error) {
      console.error('Login error details:', error);
      setIsLoading(false);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};