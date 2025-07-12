import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  accessToken: string | null;
  login: (token: string, user: User, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = !!Cookies.get("token");

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoading(false);
      const userCookie = Cookies.get("user");
      const user = userCookie ? JSON.parse(userCookie) : null;
      setUser(user ?? null);
      setAccessToken(Cookies.get("token") ?? null);
    }
    setIsLoading(false);
  }, [isAuthenticated]);

  // Tenta fazer refresh automático ao carregar
  useEffect(() => {
    const token = Cookies.get("token");
    // const user = Cookies.get("user");
    const userCookie = Cookies.get("user");
    const user = userCookie ? JSON.parse(userCookie) : null;

    if (token && user) {
      setAccessToken(token);
      setUser(user);
    }
  }, []);

  const login = (token: string, user: User, refreshToken: string) => {
    if (!token) return;

    Cookies.set("token", token);
    Cookies.set("refreshToken", refreshToken);
    Cookies.set("user", JSON.stringify(user));
    setAccessToken(token);
    setUser(user);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("refreshToken");
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, accessToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
