// UI Utilities
const UI = {
  showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('.container') || document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(() => {
      alertDiv.style.animation = 'slideOutRight 0.5s ease-out';
      setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
  },

  showLoading() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.id = 'loading-spinner';
    document.body.appendChild(spinner);
  },

  hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.remove();
  },

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  },

  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  },

  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  },

  getStatusBadgeClass(status) {
    const statusMap = {
      'open': 'badge-primary',
      'in-progress': 'badge-warning',
      'completed': 'badge-success',
      'cancelled': 'badge-error',
      'pending': 'badge-warning',
      'approved': 'badge-success',
      'rejected': 'badge-error'
    };
    return statusMap[status] || 'badge-primary';
  },

  createModal(title, content, onConfirm = null) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
      <div class="modal-content">
        <h2 class="mb-1">${title}</h2>
        <div class="mb-2">${content}</div>
        <div class="flex gap-1">
          ${onConfirm ? '<button class="btn btn-primary" id="modal-confirm">Confirm</button>' : ''}
          <button class="btn btn-outline" id="modal-close">Close</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('#modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    
    if (onConfirm) {
      const confirmBtn = modal.querySelector('#modal-confirm');
      confirmBtn.addEventListener('click', () => {
        onConfirm();
        modal.remove();
      });
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  },

  updateNavigation() {
    const nav = document.querySelector('nav .nav-links');
    if (!nav) return;

    if (auth.isAuthenticated()) {
      const user = auth.getUser();
      const dashboardLink = auth.isStudent() 
        ? '/dashboard-student.html' 
        : '/dashboard-client.html';
      
      nav.innerHTML = `
        <li><a href="${dashboardLink}">Dashboard</a></li>
        <li><a href="/projects.html">Projects</a></li>
        <li><a href="/profile.html">Profile</a></li>
        <li><a href="#" id="logout-btn">Logout</a></li>
      `;
      
      document.getElementById('logout-btn').addEventListener('click', (e) => {
        e.preventDefault();
        auth.logout();
      });
    } else {
      nav.innerHTML = `
        <li><a href="/index.html">Home</a></li>
        <li><a href="/projects.html">Projects</a></li>
        <li><a href="/login.html">Login</a></li>
        <li><a href="/register.html">Register</a></li>
      `;
    }
  },

  renderSkillTags(skills) {
    return skills.map(skill => 
      `<span class="badge badge-primary">${skill}</span>`
    ).join(' ');
  }
};

// Add slideOutRight animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(style);

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
  UI.updateNavigation();
});
