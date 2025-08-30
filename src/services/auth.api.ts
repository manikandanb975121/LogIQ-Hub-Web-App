import axios from 'axios';

// Interfaces
import { Payload } from './types'

// Configurable backend URL
const BASE_URL = 'http://localhost:3000/api';

// Create Axios instance
const api = axios.create({
    baseURL: BASE_URL,
});

// Request interceptor to set access token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const login = async (payload: Payload.ILogin) => {
    const response = await api.post('/auth/login', payload);
    return response.data;
};

export default api;