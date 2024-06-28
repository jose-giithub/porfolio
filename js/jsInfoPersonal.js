document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM cargado completamente');

      // *************boton desplegable navbar*****************
  // Capturo el boton y el menu
  const hamburger = document.querySelector('.hamburger');
  // Evento onclick del icono de hamburguesa
  hamburger.addEventListener('click', function () {
    desplegarMenu();
  // Accesibilidad. Esta parte es solo para teconologias de asistencia
  const expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
});
      // **********Gif animado en info_personal.html**********
  
    const  imgMasGif = document.getElementById('imgHabilidades');  // Capturo el contenedor de la imagen
    if (imgMasGif) {//si existe 
      const imagenEstatica = imgMasGif.src;  // Almaceno la imagen estática original
  
      imgMasGif.addEventListener('mouseover', function () {  // Evento mouseover
          mostrarGif(imgMasGif);
      });
      imgMasGif.addEventListener('mouseout', function () {  // Evento mouseout
          mostrarFoto(imgMasGif, imagenEstatica);
      });
  } else {
      console.error('Elemento con id imgHabilidades no encontrado');
  }
});//fin del DOMContentLoaded


   