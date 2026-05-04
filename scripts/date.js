const anioActual = document.querySelector('#current-year');
const fechaModificacion = document.querySelector('#lastModified');

anioActual.textContent = new Date().getFullYear();
fechaModificacion.textContent = `Last Modification: ${document.lastModified}`;