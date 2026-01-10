import axios from "axios";

// Simple and reliable base URL resolution
const getBaseURL = () => {
  // Always use the environment variable if it exists
  return process.env.NEXT_PUBLIC_API_URL || "https://api.abio.site/api/v1";
};

// Create axios instance
export const apiInstance = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (for auth redirects, etc.)
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath !== "/auth/login") {
        sessionStorage.setItem("redirectAfterLogin", currentPath);
      }
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
