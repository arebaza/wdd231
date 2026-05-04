const botonMenu = document.querySelector('#nav-button');
const barraNavegacion = document.querySelector('#nav-bar');

botonMenu.addEventListener('click', () => {
  botonMenu.classList.toggle('show');
  barraNavegacion.classList.toggle('show');
});