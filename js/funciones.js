//******************FUNCIONES COMUNES********************* */
/**
 * Función que muestra un icono de burger y despliega el menú en pantallas pequeñas en en nav
 */
function desplegarMenu() {
  console.log("click icono hamburger");
  const menu = document.querySelector(".menu"); //capturo el menu
  // Mostramos el menu modificando la clase
  menu.classList.toggle("show");
}

// *********** FUNCIONES PARA FILTRAR LAS CARDS***********
/**
 * Función que filtra los proyectos según los lenguajes seleccionados
 * Como parámetro recibe un array con los lenguajes seleccionados en forma ejemplo: ['php', 'html', 'javascript']
 * @param {*} selectedLanguages desde el index.html, estos valores se procesan previamente  desde index.js 
 * @returns  las cards que coinciden con los lenguajes seleccionados
 */
function filterProjects(selectedLanguages) {
  let cards = document.querySelectorAll('.card');//capturo todas las cards y creo un array con ellas
  // Si no se selecciona ningún lenguaje, muestro todas las cards
  if (selectedLanguages.length === 0) {
    cards.forEach(function(card) {
      card.style.display = '';
    });
    return;
  }
  // Recorro todas las cards
  cards.forEach(function(card) {
    // Obtengo los lenguajes de las cards y los convierto en un array. El separador sera una coma
    let cardLanguages = card.getAttribute('data-language').split(',');
    // Compruebo si alguno de los lenguajes seleccionados coincide con los de la tarjeta
    let isMatch = selectedLanguages.some(function(lang) {
      //retorna si hay coincidencia y uso trim() para eliminar espacios en blanco
      return cardLanguages.includes(lang.trim()); 
    });
    // Muestro o no la card según si hay coincidencia
    card.style.display = isMatch ? '' : 'none';
  });
}

// *********** FUNCIONES DE  info_personal.html***********
/**
 * Función que muestra el gif cuando el mouse está sobre la imagen en info_personal.html
 */
function mostrarGif(imgMasGif) {
  const gif = imgMasGif.getAttribute("data-gif"); // obtengo el gif de los atributos de img
  imgMasGif.src = gif;
}

/**
 * Función que muestra la imagen estática cuando el mouse sale de la imagen en info_personal.html
 */
function mostrarFoto(imgMasGif, imagenEstatica) {
  imgMasGif.src = imagenEstatica;
}


