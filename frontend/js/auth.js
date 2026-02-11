class Auth {
  constructor() {
    this.user = null;
    this.loadUser();
  }

  loadUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        this.user = JSON.parse(userStr);
      } catch (e) {
        console.error('Failed to parse user data:', e);
        this.logout();
      }
    }
  }

  saveUser(user) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    return !!this.user && !!localStorage.getItem('token');
  }

  isStudent() {
    return this.user && this.user.role === 'student';
  }

  isClient() {
    return this.user && this.user.role === 'client';
  }

  isAdmin() {
    return this.user && this.user.role === 'admin';
  }

  async login(email, password) {
    try {
      const response = await api.login(email, password);
      
      if (response.token && response.user) {
        api.setToken(response.token);
        this.saveUser(response.user);
        return { success: true, user: response.user };
      }
      
      throw new Error('Invalid response from server');
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    api.clearToken();
    window.location.href = '/index.html';
  }

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = '/login.html';
      return false;
    }
    return true;
  }

  requireRole(role) {
    if (!this.requireAuth()) {
      return false;
    }
    
    if (this.user.role !== role) {
      alert('You do not have permission to access this page');
      window.location.href = '/index.html';
      return false;
    }
    
    return true;
  }

  redirectToDashboard() {
    if (!this.isAuthenticated()) {
      window.location.href = '/login.html';
      return;
    }

    if (this.isStudent()) {
      window.location.href = '/dashboard-student.html';
    } else if (this.isClient()) {
      window.location.href = '/dashboard-client.html';
    } else {
      window.location.href = '/index.html';
    }
  }
}

const auth = new Auth();
