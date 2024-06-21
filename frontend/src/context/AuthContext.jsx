import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const BASE_URL = 'http://localhost:8080';

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(false);

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const isToken = localStorage.getItem('token');
    if (isToken) setUser(true);
  }, []);

  return <AuthContext.Provider value={{ BASE_URL, user, setUser, handleLogout }}>{children}</AuthContext.Provider>;
}