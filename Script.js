let lastScrollY = window.scrollY; // Guarda a posição anterior do scroll
const header = document.querySelector('header'); // Seleciona o header
let inactivityTimer; // Timer de inatividade

// Função para esconder o header
function hideHeader() {
    header.classList.add('hidden'); // Adiciona a classe 'hidden' ao header
}

// Função para mostrar o header
function showHeader() {
    header.classList.remove('hidden'); // Remove a classe 'hidden' do header
}

// Detecta o movimento do mouse
document.addEventListener('mousemove', (e) => {
    clearTimeout(inactivityTimer); // Limpa o timer de inatividade quando o mouse se move

    // Mostrar o header quando o mouse estiver perto do topo (dentro de 50px)
    if (e.clientY <= 50) {
        showHeader(); // Mostra o header
    }

    // Inicia o timer de inatividade para esconder o header após 1 segundos
    inactivityTimer = setTimeout(hideHeader, 1000); // 1000ms = 1 segundos
});

// Detecta o movimento de rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Se rolou para baixo, esconde o header
        hideHeader();
    } else {
        // Se rolou para cima, mostra o header
        showHeader();
    }
    lastScrollY = window.scrollY; // Atualiza a posição do scroll
});
