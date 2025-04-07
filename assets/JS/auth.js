import { validateForm, showToast } from './utils.js';

class Auth {
    constructor() {
        this.form = document.getElementById('loginForm');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.setupPasswordToggle();
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!validateForm(this.form)) {
            return;
        }
        
        try {
            const formData = new FormData(this.form);
            const response = await this.authenticate(formData);
            
            if (response.success) {
                window.location.href = 'dashboard.html';
            } else {
                showToast('Identifiants incorrects', 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            showToast('Erreur de connexion', 'error');
        }
    }
    
    async authenticate(data) {
        // Implementation with proper error handling
    }
    
    setupPasswordToggle() {
        // Password visibility toggle
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Auth();
});
