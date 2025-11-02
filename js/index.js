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

/////////// CAPTURAR ELEMENTOS////////////////////

// *************Filtro de proyectos*****************

const botonFiltro = document.getElementById('botonFiltro');// capturo el boton de filtrar los proyectos

// *************Mostrar pop-up de cada card*****************
// capturo todo el elemento que envuelve al modal de filtrar los proyectos
// para mostrarlo y ocultarlo, al hacer click fuera del modal. En este modal se muestra la info de las cards en un un pop-up
const modalContainer = document.getElementById('modalContainer');
modalContainer.style.display = 'none';//Oculto el modal con la info de las cardas defecto

/**
 * Evento click del boton de filtrar proyectos
 * Capturo los checkbox seleccionados y filtro las cards que se muestran
 * Crea un array con los valores de los checkbox seleccionados
 * Llama a la función filterProjects pasandole el array de lenguajes seleccionados
 * Los valores de los checkbox tienen un guion bajo en lugar de coma para evitar problemas al obtener el valor
 * Ejemplo: php_html en lugar de php,html
 */
botonFiltro.addEventListener('click', function () {//evento click del boton 'Filtrar'
  //console.log('click');
  let  checkboxes = document.querySelectorAll('input[name="language"]:checked');//capturo los checkbox seleccionados
  //creo un array con los valores de los checkbox seleccionados
  //console.log(checkboxes);
  //Convierte la colación de checkboxes del array 'checkboxes' en un array, y luego usa map para crear un nuevo array con los valores modificados
  let  selectedLanguages = Array.from(checkboxes).map(function(checkbox) {//
    //Reemplaza el guion '_' por una coma y retorna el array modificado con los valores seleccionados desde
    // los checkbox en forma de array con comas, ejemplo: ['php', 'html', 'javascript']
    return checkbox.value.replace('_', ','); 
  });
  //llama a la función que filtra las cards pasandole el array de lenguajes seleccionados en los checkbox.
  //Como parametro le paso el array con los lenguajes seleccionados
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
 * Modifica el bolean boleanModalShow a false para cerrado saber que esta abierto el modal /pop-up con la info
 */
$("#bootonClose").click(function() {
  $("#modalContainer").hide(); // Ocultar el modal
});


/**
 * Función que cierra el modal de info de las cards al hacer click fuera del modal/ pop-up 
 * Si se hace click fuera del modal (la clase 'modalContainer' ocupa toda la pantalla incluido el modal)
 * se cierra el pop-up con la info de la card
 */
$("#modalContainer").click(function(e) { // 'e' un objeto que contiene información sobre el clic, como dónde se hizo exactamente
 // 'e.target' es el elemento HTML específico donde el usuario hizo clic.
 //Verificamos que se toco exactamente el contenedor general del modal y no un hijo como podría ser el modal.
  if ($(e.target).is("#modalContainer")) { //Si se hizo click en modalContainer no en ninguno de sus hijos.
    $(this).hide();//Oculto el modal
  }
});


  });//fin del DOMContentLoaded


