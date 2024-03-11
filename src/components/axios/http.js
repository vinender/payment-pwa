// axiosInstance.js

import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    // Additional headers as needed
  },
});

// Add request interceptor for authentication, logging, etc.
http.interceptors.request.use((config) => {
  // Modify the request config before sending it
  return config;
});

// Add response interceptor for error handling, logging, etc.
http.interceptors.response.use(
  (response) => {
    // Modify the response data before resolving
    return response;
  },
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default http;
