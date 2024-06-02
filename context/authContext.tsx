import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '~/services/api';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: (name: string, password: string) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<any>();

  useEffect(() => {
    const loadToken = async () => {
      try {
        const credentials = '';
        if (credentials) {
          setToken(credentials);
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
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Erro ao salvar token:', error);
    }
  }

  const logout = async () => {
    try {
      setToken('');
      setIsLoggedIn(false);
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
