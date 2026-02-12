import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions
export const fetchPersonalInfo = async () => {
  const response = await apiClient.get('/personal-info');
  return response.data;
};

export const fetchProjects = async (featured = null) => {
  const params = featured !== null ? { featured } : {};
  const response = await apiClient.get('/projects', { params });
  return response.data;
};

export const fetchSkills = async () => {
  const response = await apiClient.get('/skills');
  return response.data;
};

export const fetchExperience = async () => {
  const response = await apiClient.get('/experience');
  return response.data;
};

export const fetchAchievements = async () => {
  const response = await apiClient.get('/achievements');
  return response.data;
};

export const submitContactForm = async (formData) => {
  const response = await apiClient.post('/contact', formData);
  return response.data;
};

export default {
  fetchPersonalInfo,
  fetchProjects,
  fetchSkills,
  fetchExperience,
  fetchAchievements,
  submitContactForm,
};
