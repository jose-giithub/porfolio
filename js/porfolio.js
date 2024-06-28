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

  

    
  });//fin del DOMContentLoaded


  function filterProjects(languages) {
    var cards = document.querySelectorAll('.card');
  
    if (languages.length === 0) {
      cards.forEach(function(card) {
        card.style.display = '';
      });
      return;
    }
  
    cards.forEach(function(card) {
      var cardLanguages = card.getAttribute('data-language').split(',');
      var isMatch = languages.some(function(lang) {
        return cardLanguages.includes(lang.trim()); // Comprueba si alguno de los lenguajes seleccionados coincide con los de la tarjeta
      });
      card.style.display = isMatch ? '' : 'none';
    });
  }