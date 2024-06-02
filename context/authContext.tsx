import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { apiClient } from '~/services/api';
export const AuthContext = createContext<{
  isLoggedIn: boolean;
  token: string | null;
  login: (name: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}>({
  isLoggedIn: false,
  token: null,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>('');

  useEffect(() => {
    const loadToken = async () => {
      try {
        const tokenString = await AsyncStorage.getItem('token');
        console.log('Aqui', tokenString);
        if (tokenString) {
          setToken(tokenString);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Erro ao carregar token:', error);
      }
    };
    loadToken();
  }, []);

  async function login(name: string, password: string) {
    try {
      const token = await apiClient.post('/auth', { name, password });
      setToken(token.data.token);
      console.log('casdawd', token.data.token);
      await AsyncStorage.setItem('token', token?.data?.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Erro ao salvar token:', error);
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
      router.push('/sign-in');
    } catch (error) {
      console.error('Erro ao limpar token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
