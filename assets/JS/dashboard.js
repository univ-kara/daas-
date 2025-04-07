import { fetchData, renderTable } from './utils.js';

class Dashboard {
    constructor() {
        this.init();
    }
    
    async init() {
        await this.loadGrades();
        this.setupEventListeners();
    }
    
    async loadGrades() {
        try {
            const data = await fetchData('/api/grades');
            renderTable('#grades-table tbody', data, this.gradeRowTemplate);
        } catch (error) {
            console.error('Failed to load grades:', error);
        }
    }
    
    gradeRowTemplate(item) {
        return `
            <tr>
                <td>${item.subject}</td>
                <td>${item.semester}</td>
                <td>${item.credits}</td>
                <td class="${item.grade ? '' : 'text-muted'}">
                    ${item.grade || 'Non disponible'}
                </td>
            </tr>
        `;
    }
    
    setupEventListeners() {
        // Interactive elements
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});
