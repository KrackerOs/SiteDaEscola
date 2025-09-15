<script>
    // Captura os elementos da nova modal de configurações e do ícone
    const settingsIcon = document.querySelector('.settings');
    const settingsModal = document.getElementById('settingsModal');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Funções para controlar as modais
    function showModal(modalId) {
        document.getElementById(modalId).classList.add('show');
    }

    function hideModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
    }

    // Adiciona evento de clique para abrir a modal de configurações
    settingsIcon.addEventListener('click', () => {
        showModal('settingsModal');
    });
    
    // Adiciona evento de clique para fechar a modal quando o botão 'x' é clicado
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal') + 'Modal';
            hideModal(modalId);
        });
    });

    // Adiciona evento de clique para fechar a modal quando o usuário clica fora dela
    window.addEventListener('click', (event) => {
        if (event.target === settingsModal) {
            hideModal('settingsModal');
        }
    });

    // Funcionalidade de salvamento (apenas um exemplo simples)
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    saveSettingsBtn.addEventListener('click', () => {
        const theme = document.getElementById('theme-select').value;
        const fontSize = document.getElementById('font-size-select').value;
        
        // Aplica as mudanças no corpo do documento
        document.body.className = ''; // Remove classes anteriores
        document.body.classList.add(theme);
        document.body.classList.add(fontSize);

        console.log(`Configurações salvas: Tema = ${theme}, Fonte = ${fontSize}`);
        hideModal('settingsModal');
    });
</script>