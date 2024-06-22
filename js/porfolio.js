document.addEventListener("DOMContentLoaded", function () {
  // boton desplegable navbar
  // Capturo el boton y el menu
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  // Evento onclick del icono de hamburguesa
  hamburger.addEventListener('click', function () {
    console.log('click');
    // Mostramos el menu modificando la clase
    menu.classList.toggle('show');
    console.log(menu.classList);
    // Accesibilidad. Esta parte es solo para teconologias de asistencia
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
});
  document.getElementById('botonFiltro').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('input[name="language"]:checked');
    var selectedLanguages = Array.from(checkboxes).map(function(checkbox) {
      return checkbox.value.replace('_', ','); 
    });
    filterProjects(selectedLanguages);
  });
  
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
  
  
    
  });
  