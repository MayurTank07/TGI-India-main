const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to get auth token
const getToken = () => {
  return localStorage.getItem('tgi_admin_token');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  try {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid response from server');
    }
    throw error;
  }
};

// Helper function to add timeout to fetch requests
const fetchWithTimeout = (url, options = {}, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
};

// Auth API
export const authAPI = {
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return handleResponse(response);
  },

  verify: async () => {
    const token = getToken();
    if (!token) throw new Error('No token found');
    
    const response = await fetch(`${API_URL}/auth/verify`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  getMe: async () => {
    const token = getToken();
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  changePassword: async (currentPassword, newPassword) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    return handleResponse(response);
  }
};

// Content API
export const contentAPI = {
  getAll: async () => {
    const response = await fetch(`${API_URL}/content`);
    return handleResponse(response);
  },

  getBySection: async (section) => {
    const response = await fetch(`${API_URL}/content/${section}`);
    return handleResponse(response);
  },

  update: async (section, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/content/${section}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ data })
    });
    return handleResponse(response);
  },

  reset: async () => {
    const token = getToken();
    const response = await fetch(`${API_URL}/content/reset`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  bulkUpdate: async (updates) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/content/bulk-update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ updates })
    });
    return handleResponse(response);
  }
};

// Submission API
export const submissionAPI = {
  create: async (submissionData) => {
    const response = await fetch(`${API_URL}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissionData)
    });
    return handleResponse(response);
  },

  getAll: async (filters = {}) => {
    const token = getToken();
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/submissions?${queryParams}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  getById: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/submissions/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  update: async (id, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/submissions/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/submissions/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  deleteAll: async () => {
    const token = getToken();
    const response = await fetch(`${API_URL}/submissions`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Client API
export const clientAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/clients?${queryParams}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/clients/${id}`);
    return handleResponse(response);
  },

  create: async (data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  update: async (id, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Team API
export const teamAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/team?${queryParams}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/team/${id}`);
    return handleResponse(response);
  },

  create: async (data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  update: async (id, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/team/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/team/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Testimonial API
export const testimonialAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/testimonials?${queryParams}`);
    return handleResponse(response);
  },

  getById: async (id) => {
    const response = await fetch(`${API_URL}/testimonials/${id}`);
    return handleResponse(response);
  },

  create: async (data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  update: async (id, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/testimonials/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};

// Media API
export const mediaAPI = {
  uploadFile: async (file, usedIn = '') => {
    const token = getToken();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('usedIn', usedIn);

    const response = await fetch(`${API_URL}/media/upload`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    return handleResponse(response);
  },

  uploadUrl: async (url, usedIn = '') => {
    const token = getToken();
    const response = await fetch(`${API_URL}/media/upload-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url, usedIn })
    });
    return handleResponse(response);
  },

  getAll: async (filters = {}) => {
    const token = getToken();
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/media?${queryParams}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  getById: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/media/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  },

  update: async (id, data) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/media/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    return handleResponse(response);
  },

  delete: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_URL}/media/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return handleResponse(response);
  }
};
