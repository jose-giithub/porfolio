function desplegarMenu() {
    console.log('click icono hamburger');
    const menu = document.querySelector('.menu');//capturo el menu
    // Mostramos el menu modificando la clase
    menu.classList.toggle('show');
  }
// *********** FUNCIONES DE  info_personal.html***********
/**
 * Función que muestra el gif cuando el mouse está sobre la imagen en info_personal.html
 */
function mostrarGif(imgMasGif) {
    const gif = imgMasGif.getAttribute('data-gif');  // obtengo el gif de los atributos de img
    imgMasGif.src = gif;
  }
  
  /**
  * Función que muestra la imagen estática cuando el mouse sale de la imagen en info_personal.html
  */
  function mostrarFoto(imgMasGif, imagenEstatica) {
    imgMasGif.src = imagenEstatica;
  }