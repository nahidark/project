const API_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

// Auth API
export const authApi = {
  async login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse(response);
  },

  async register(userData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  },

  async logout() {
    const response = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return handleResponse(response);
  }
};

// Events API
export const eventsApi = {
  async getAll() {
    const response = await fetch(`${API_URL}/events`);
    return handleResponse(response);
  },

  async getById(id) {
    const response = await fetch(`${API_URL}/events/${id}`);
    return handleResponse(response);
  },

  async create(eventData) {
    const response = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(eventData),
    });
    return handleResponse(response);
  },

  async update(id, eventData) {
    const response = await fetch(`${API_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(eventData),
    });
    return handleResponse(response);
  }
};