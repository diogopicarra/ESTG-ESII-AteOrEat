// Adiciona a funcionalidade de mostrar/ocultar o menu
document.getElementById('toggle-menu').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  
  // Alterna o display do menu entre 'none' e 'block'
  if (menu.style.display === 'block') {
    menu.style.display = 'none'; // Oculta o menu
  } else {
    menu.style.display = 'block'; // Mostra o menu
  }
});
