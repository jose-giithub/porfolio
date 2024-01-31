document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('filter-button').addEventListener('click', function() {
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
  