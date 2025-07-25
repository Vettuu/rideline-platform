// src/lib/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api", // punto di accesso Laravel
  withCredentials: true, // necessario per i cookie di Sanctum
  headers: {
    Accept: "application/json",
  },
});

// Interceptor per gestire errori globali (es. 401)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Non autorizzato: effettua il login.");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
