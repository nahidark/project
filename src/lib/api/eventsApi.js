import { API_CONFIG } from '../config';
import { handleResponse, getAuthHeader } from '../utils/apiUtils';

export const eventsApi = {
  async getAll() {
    const response = await fetch(`${API_CONFIG.BASE_URL}/events`);
    return handleResponse(response);
  },

  async getById(id) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/events/${id}`);
    return handleResponse(response);
  },

  async create(eventData) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/events`, {
      method: 'POST',
      headers: { ...API_CONFIG.HEADERS, ...getAuthHeader() },
      body: JSON.stringify(eventData),
    });
    return handleResponse(response);
  },

  async update(id, eventData) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: { ...API_CONFIG.HEADERS, ...getAuthHeader() },
      body: JSON.stringify(eventData),
    });
    return handleResponse(response);
  }
};