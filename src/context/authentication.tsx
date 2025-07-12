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
    const token = Cookies.get("token");
    console.log("Token from cookies:", token);
    // const requestInterceptor = api.interceptors.request.use(
    //   (config) => {
    //     if (accessToken) {
    //       config.headers.Authorization = `Bearer ${accessToken}`;
    //     }
    //     return config;
    //   },
    //   (error) => Promise.reject(error)
    // );

    // const responseInterceptor = api.interceptors.response.use(
    //   (response) => {
    //     // Verifica se a resposta contém um novo token
    //     const newToken = response.headers["x-new-token"];
    //     if (newToken) {
    //       setAccessToken(newToken);
    //       localStorage.setItem("accessToken", newToken);
    //     }
    //     return response;
    //   },
    //   async (error) => {
    //     const originalRequest = error.config;

    //     if (error.response?.status === 401 && !originalRequest._retry) {
    //       originalRequest._retry = true;

    //       try {
    //         // Tenta renovar o token usando o refresh token
    //         const { data } = await api.post(
    //           "/session/refresh",
    //           {},
    //           {
    //             withCredentials: true, // Para enviar o cookie httpOnly
    //           }
    //         );

    //         const newAccessToken = data.token;
    //         setAccessToken(newAccessToken);
    //         Cookies.set("token", newAccessToken);

    //         // Repete a requisição original com o novo token
    //         api.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
    //         return;
    //       } catch (refreshError) {
    //         // Se o refresh falhar, faz logout
    //         logout();
    //         return Promise.reject(refreshError);
    //       }
    //     }
    //     return Promise.reject(error);
    //   }
    // );

    // return () => {
    //   api.interceptors.request.eject(requestInterceptor);
    //   api.interceptors.response.eject(responseInterceptor);
    // };
  }, [accessToken]);

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
    console.log("Tentando fazer refresh automático ao carregar");
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
      value={{ isAuthenticated, isLoading, user, login, logout }}
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
