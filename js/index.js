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


// *************Filtro de proyectos*****************

const botonFiltro = document.getElementById('botonFiltro');// capturo el boton de filtrar los proyectos

botonFiltro.addEventListener('click', function () {//evento click del boton
  console.log('click');
  let  checkboxes = document.querySelectorAll('input[name="language"]:checked');//capturo los checkbox seleccionados
  //creo un array con los valores de los checkbox seleccionados
  console.log(checkboxes);
  let  selectedLanguages = Array.from(checkboxes).map(function(checkbox) {
    return checkbox.value.replace('_', ','); 
  });
  filterProjects(selectedLanguages);
});



 /**
  * Al hacer click sobre el icono info de cada card, se muestra un modal con la información del proyecto
   * Cambiar el texto del modal por el texto obtenido
   * Caputra el texto que tiene como atributo data-info-texto en la etiqueta span incluye saltos de línea
   * Lo convierte en una etiqueta html y lo añade al modal
   */
$(".infoCard").click(function() {
    // Obtener el texto de data-info-texto y Reemplazar cada punto y aparte con un salto de línea en HTML
    const infoTexto = $(this).data("info-texto").replace(/\n/g, "<br>");
    $("#modalContainer .modal p").html(infoTexto);//añado el texto al modal
    $("#modalContainer").show(); // Mostrar el modal
});

/**
 * Al hacer click sobre el botón de cerrar del modal, se oculta el modal
 * Boton con id bootonClose
 */
$("#bootonClose").click(function() {
  $("#modalContainer").hide(); // Ocultar el modal
});

  });//fin del DOMContentLoaded


