import axios from 'axios';
import { createContext, useState, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
// Tipos para usuario
interface User {
  id: number;
  name: string;
  email: string;
  token?: string; // JWT
  role?: string; // 'administrador' o 'cliente'
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;

  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  // Login real contra el backend NestJS
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        correo: email,
        contrasena: password,
      });
      const { access_token, user } = response.data;
      const userData: User = {
        id: user.id,
        name: user.nombre,
        email: user.correo,
        token: access_token,
        role: user.tipo, // 'administrador' o 'cliente'
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      axios.defaults.headers.common['Authorization'] = access_token;
    } catch (err: any) {
      // Propaga el error para mostrarlo en el login
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;

  const contextValue = useMemo(() => ({ user, login, logout, isAuthenticated }), [user, isAuthenticated, login, logout]);
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
