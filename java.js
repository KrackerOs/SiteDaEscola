document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.course-info-section');
    const searchInput = document.querySelector('.search-bar input');

    // Funções de navegação e busca
    function showSection(targetId) {
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        const targetSection = document.getElementById(targetId);
        const targetLink = document.querySelector(`.sidebar-link[data-target="${targetId}"]`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        if (targetLink) {
            targetLink.classList.add('active');
        }
        const existingNoResults = document.getElementById('no-results-section');
        if (existingNoResults) {
            existingNoResults.remove();
        }
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    searchInput.addEventListener('keyup', function(event) {
        const searchText = event.target.value.toLowerCase();
        
        const existingNoResults = document.getElementById('no-results-section');
        if (existingNoResults) {
            existingNoResults.remove();
        }

        if (searchText.trim() === '') {
            showSection('home-section');
            return;
        }

        let found = false;
        
        contentSections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(searchText)) {
                section.classList.add('active');
                found = true;
            } else {
                section.classList.remove('active');
            }
        });

        if (!found) {
            const noResults = document.createElement('div');
            noResults.id = 'no-results-section';
            noResults.className = 'course-info-section active';
            noResults.innerHTML = '<h3>Nenhum Resultado Encontrado</h3><p>Sua pesquisa não retornou nenhum resultado nas seções do site.</p>';
            
            const mainContent = document.querySelector('main.content');
            mainContent.appendChild(noResults);
        }
    });

    // Funções para os modais (já estavam corretas)
    const loginBtn = document.querySelector('.login');
    const registerBtn = document.querySelector('.register');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Código da modal de configurações
    const settingsIcon = document.querySelector('.settings');
    const settingsModal = document.getElementById('settingsModal');
    
    settingsIcon.addEventListener('click', () => {
        settingsModal.classList.add('show');
    });

    // Funcionalidade de salvar configurações
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    saveSettingsBtn.addEventListener('click', () => {
        const theme = document.getElementById('theme-select').value;
        const fontSize = document.getElementById('font-size-select').value;
        
        document.body.className = '';
        if (theme !== 'default') {
            document.body.classList.add(theme);
        }
        if (fontSize !== 'normal') {
            document.body.classList.add(fontSize);
        }
        
        settingsModal.classList.remove('show');
    });

    // Funcionalidade para fechar modais
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal') + 'Modal';
            document.getElementById(modalId).classList.remove('show');
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.classList.remove('show');
        }
    });
    
    showSection('home-section');

    /* NOVO CÓDIGO PARA ESCONDER A BARRA LATERAL */
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const mainContainer = document.querySelector('.main-container');

    sidebarToggleBtn.addEventListener('click', () => {
        mainContainer.classList.toggle('sidebar-closed');
    });
});