import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const apiService = {
  // Profile endpoints
  profile: {
    get: () => apiClient.get('/profile'),
    update: (data) => apiClient.put('/profile', data),
  },

  // Skills endpoints
  skills: {
    getAll: () => apiClient.get('/skills'),
    create: (data) => apiClient.post('/skills', data),
    update: (id, data) => apiClient.put(`/skills/${id}`, data),
    delete: (id) => apiClient.delete(`/skills/${id}`),
  },

  // Experience endpoints
  experience: {
    getAll: () => apiClient.get('/experience'),
    create: (data) => apiClient.post('/experience', data),
    update: (id, data) => apiClient.put(`/experience/${id}`, data),
    delete: (id) => apiClient.delete(`/experience/${id}`),
  },

  // Projects endpoints
  projects: {
    getAll: (category) => apiClient.get('/projects', { params: { category } }),
    getById: (id) => apiClient.get(`/projects/${id}`),
    create: (data) => apiClient.post('/projects', data),
    update: (id, data) => apiClient.put(`/projects/${id}`, data),
    delete: (id) => apiClient.delete(`/projects/${id}`),
  },

  // Testimonials endpoints
  testimonials: {
    getAll: () => apiClient.get('/testimonials'),
    create: (data) => apiClient.post('/testimonials', data),
    update: (id, data) => apiClient.put(`/testimonials/${id}`, data),
    delete: (id) => apiClient.delete(`/testimonials/${id}`),
  },

  // Contact endpoint
  contact: {
    submit: (data) => apiClient.post('/contact', data),
    getAll: () => apiClient.get('/contact'), // Admin only
    markAsRead: (id) => apiClient.put(`/contact/${id}/read`),
  },

  // Stats endpoint
  stats: {
    get: () => apiClient.get('/stats'),
    trackVisit: (data) => apiClient.post('/stats/analytics/visit', data),
  },

  // Resume endpoints
  resume: {
    download: () => apiClient.get('/resume/download'),
    getInfo: () => apiClient.get('/resume/info'),
  },
};

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiService;