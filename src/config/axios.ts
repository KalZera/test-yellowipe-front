import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 1000,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  console.log("Token from cookies in request interceptor:", token);
  if (token && config.headers && !config.url?.includes("/login")) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // config.withCredentials = true; // Ensure cookies are sent with requests
  return config;
});

api.interceptors.response.use(
  (response) => {
    const newToken = response.headers["x-new-token"];
    if (newToken) {
      Cookies.set("token", newToken);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove("token");
      Cookies.remove("refreshToken");
      Cookies.remove("user");
      window.location.href = "/login";
      // Aqui você pode, por exemplo, redirecionar para login
    }

    return Promise.reject(error); // importante manter isso!
  }
);

export default api;
