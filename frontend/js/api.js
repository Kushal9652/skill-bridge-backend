const API_BASE_URL = 'http://localhost:8000/api';

class APIClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  getHeaders(isMultipart = false) {
    const headers = {};
    
    if (!isMultipart) {
      headers['Content-Type'] = 'application/json';
    }
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: this.getHeaders(options.isMultipart),
    };

    if (options.isMultipart) {
      delete config.isMultipart;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // User endpoints
  async register(formData) {
    return this.request('/users/register', {
      method: 'POST',
      body: formData,
      isMultipart: true,
    });
  }

  async login(email, password) {
    return this.request('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async getUserProfile(userId) {
    return this.request(`/users/${userId}/profile`, {
      method: 'GET',
    });
  }

  async updateUserProfile(userId, formData) {
    return this.request(`/users/${userId}/profile`, {
      method: 'PUT',
      body: formData,
      isMultipart: true,
    });
  }

  async deleteUser(userId) {
    return this.request(`/users/${userId}`, {
      method: 'DELETE',
    });
  }

  // Project endpoints
  async createProject(projectData) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async getAllProjects(filters = {}) {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = queryParams ? `/projects?${queryParams}` : '/projects';
    return this.request(endpoint, {
      method: 'GET',
    });
  }

  async getProject(projectId) {
    return this.request(`/projects/${projectId}`, {
      method: 'GET',
    });
  }

  async updateProject(projectId, projectData) {
    return this.request(`/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(projectId) {
    return this.request(`/projects/${projectId}`, {
      method: 'DELETE',
    });
  }

  // Application endpoints
  async createApplication(formData) {
    return this.request('/applications', {
      method: 'POST',
      body: formData,
      isMultipart: true,
    });
  }

  async getStudentApplications() {
    return this.request('/applications/student', {
      method: 'GET',
    });
  }

  async getProjectApplications(projectId) {
    return this.request('/applications', {
      method: 'GET',
      body: JSON.stringify({ projectId }),
    });
  }

  async getApplication(applicationId) {
    return this.request(`/applications/${applicationId}`, {
      method: 'GET',
    });
  }

  async updateApplicationStatus(applicationId, status) {
    return this.request(`/applications/${applicationId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async deleteApplication(applicationId) {
    return this.request(`/applications/${applicationId}`, {
      method: 'DELETE',
    });
  }

  // Review endpoints
  async createReview(reviewData) {
    return this.request('/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  }

  async getReview(reviewId) {
    return this.request(`/reviews/${reviewId}`, {
      method: 'GET',
    });
  }

  async updateReview(reviewId, reviewData) {
    return this.request(`/reviews/${reviewId}`, {
      method: 'PUT',
      body: JSON.stringify(reviewData),
    });
  }

  async deleteReview(reviewId) {
    return this.request(`/reviews/${reviewId}`, {
      method: 'DELETE',
    });
  }
}

const api = new APIClient();
