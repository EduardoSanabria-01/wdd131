// ====== MENÚ HAMBURGUESA ======
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  menuButton.classList.toggle('show');
});

// ====== PIE DE PÁGINA (DINÁMICO) ======
// Colocar año actual
const currentYearSpan = document.querySelector('#currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Colocar fecha de última modificación
const lastModifiedParagraph = document.querySelector('#lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;