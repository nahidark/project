import { API_CONFIG } from '../config';
import { handleResponse } from '../utils/apiUtils';
import { setAuthData, clearAuthData } from '../utils/storageUtils';

export const authApi = {
  async login(email, password) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/login`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(response);
    setAuthData(data.user, data.token);
    return data;
  },

  async register(userData) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/register`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(userData),
    });
    const data = await handleResponse(response);
    setAuthData(data.user, data.token);
    return data;
  },

  async logout() {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: { ...API_CONFIG.HEADERS, ...getAuthHeader() },
    });
    clearAuthData();
    return handleResponse(response);
  }
};