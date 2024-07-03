
/**
 * Función que suma la longitud de todas las palabra acertadas y retorna un int 
 * @param {*} arrayPalabrasUnicas 
 */
function sumarPuntos(arrayPalabrasUnicas) {
  let contador = 0;
  for (let i = 0; i < arrayPalabrasUnicas.length; i++) {
    contador += arrayPalabrasUnicas[i].length;
  }

  //Función para la fecha:
  function obtenerFechaActual() {
    // Crea un nuevo objeto Date
    const fechaActual = new Date();

    // Obtiene el día del mes (1-31)
    const dia = fechaActual.getDate();

    // Obtiene el mes (0-11, donde 0 es enero y 11 es diciembre)
    const mes = fechaActual.getMonth() + 1; // Sumamos 1 porque los meses comienzan desde 0

    // Obtiene el año con cuatro dígitos
    const anio = fechaActual.getFullYear();

    // Devuelve la fecha en formato "dia/mes/año"
    return [dia, mes, anio].join('/');
  }
  // Llama la función para mostrar la fecha actual
  const fechaActualElement = document.getElementById("Fecha");
  const fechaActual = obtenerFechaActual();
  // Concatena el contenido actual del elemento con la fecha actual
  fechaActualElement.textContent = `Fecha : ${fechaActual}`;

  // Ocultamos tanto la tabla de en medio como la de siguiente letra 
  let ocultarTodo = document.getElementById("ocultar");
  ocultarTodo.style.display = "none";


  //Mostramos los puntos que ha hecho
  let divPuntuacion = document.getElementById("divPuntuacion");
  divPuntuacion.style.display = "block";
  let texto = document.getElementById("textoPuntos");
  texto.innerHTML = 'Tus puntos son: ' + contador;

}

/**
 * Función para mostrar o ocultar el Pop Up con las instrucciones
 */
function mostrarInstrucciones() {
  let divMostrarInstruc = document.getElementById('instructionsPopup');
  // Alterno el estilo de display entre 'block' y 'none'
  divMostrarInstruc.style.display = divMostrarInstruc.style.display === 'block' ? 'none' : 'block';

}
/**
 * Función que si el num random es 5 o 10 o 15 o 20 el contador sumara uno he ira al siguiente if, si el contador es entre 1 y 4 retorna true si
 * no pasa lo contrario, el numero no es uno valido o el contador es mas grande de 4 retornara false
 * @returns 4 eventos joker
 */
function eventoJoker() {
  let numRandom = Math.floor(Math.random() * 20 + 1); //creo un numero aleatorio entre 1 y 21
  //si num random es 5 o 10 o 15 o 20 entra
  if (numRandom == 5 || numRandom == 10 || numRandom == 15 || numRandom == 20) {
    CONTADOR2++;
    //solo 4 veces
    if (CONTADOR2 <= 4) {
      //si contador es máximo 4 entra si
      //console.log("si entro", CONTADOR2);
      return true;
    } else {
      //console.log("no entro", CONTADOR2);
      return false;
    }
  }
}

/**
 * Función que muestra o oculta el joker y la letra random según toque
 */
function mostrarJoker() {
  if (DIV_LETRAS_RANDOM.style.display === "none") {
    //si esta oculta muestro
    DIV_LETRAS_RANDOM.style.display = "flex"; // Muestra letra random
    contenedorJoker.style.display = "none"; // Oculta Joker
    ESTADOJOKER = false; // Joker no está activo y no se puede añadir letras en la cuadricula
  } else {
    //si esta visible oculto
    DIV_LETRAS_RANDOM.style.display = "none"; // Oculta letra random
    contenedorJoker.style.display = "block"; // Muestra Joker
    ESTADOJOKER = true; // Joker está activo y se puede añadir letras a la cuadricula
  }
}

/**
 * Función que solo permite introducir letras de la a a la z con la ç incluida y excluyendo la ñ.
 * la ll me da problemas y de momento lo dejo así
 */
function validateInputJoker(input) {
  input.value = input.value.toLowerCase().replace(/[^a-zç]|ñ/g, "");
}

/**
 * Función que añade las letras random en el input seleccionado
 * @param {*} input //le pasamos como parámetro el input sobre el que se hizo click
 */
function insertarLetraRandom(input) {
  if (ESTADOJOKER) {
    //si la letra aleatoria esta visible se puede añadir letras en la cuadricula
    if (LETRA_JOKER && !input.target.value && CONTADOR < 25) {
      input.target.value = LETRA_JOKER; //añado en la cuadricula la letra del joker
      input.target.readOnly = true; //que no se pueda borrar en la cuadricula
      LETRA_JOKER = ""; //Quito el valor de la letra en el joker
      mostrarJoker(); // Actualiza el estado del Joker
      CONTADOR++;
    }
  } else if (!input.target.value && CONTADOR < 25) {
    input.target.value = LETRA_RANDOM; //añado la letra random a la cuadricula
    input.target.readOnly = true; //que no se pueda borrar
    LETRA_RANDOM = letraRandom(); // actualizo la letra random
    DIV_LETRAS_RANDOM.innerHTML = LETRA_RANDOM; //la añado en el div donde se muestra
    CONTADOR++;
    if (eventoJoker() && CONTADOR < 25) {
      //si se dispara el evento joker llamo a la función que muestra el joker
      mostrarJoker(); // Actualiza el estado del Joker
    }
  }
  if (inputsTodosLlenos()) {
    //si esta todos llenos llamo a la función que verifica cuantas palabras hay guardadas
    palabrasAcertadas();
  }
}

/**
 * Función que crea una variable str con todas la letras del str
 * @returns una cadena de set con todas las letras de la cuadricula
 */
function guardarListaInputs() {
  //capturo el listado de input
  const listaInputs = document.querySelectorAll(".cuadrado");
  let listaLetras = ""; //donde guardaremos todas las letras de la cuadricula en una lista de str

  listaInputs.forEach(function (input) {
    //recorro el listado de inputs
    listaLetras += input.value;
  });
  return listaLetras;
}

function palabrasAcertadas() {
  //LLAMO A LA FUNCIÓN QUE GUARDA TODOS LOS INPUTS DE LA CUADRICULA.
  let listaLetras = guardarListaInputs(); //guardaremos todas las letras de la cuadricula en una str

  //LLAMO A LA FUNCIÓN QUE AÑADIRÁ UN SEPARADOR CADA 5 LETRAS PARA LUEGO APLICAR SPLIT
  let listaletrasSeparadas = separarStr(listaLetras);

  //RECORRO CADA SECCIÓN HORIZONTAL DEL ARRAY DE DE IZQUIERDA A DERECHA PARA VERIFICAR SI HAY PALABRAS DE 3 O 4 O 5 LETRAS
  let arrayListaLetras = listaletrasSeparadas.split("-"); //creo un array con 5 palabras por parte

  //verificamos cada segmento del array para ver si hya palabras que coinciden si lo hay le atizo un - entre cada palabra
  let palabrasAcertadas = "";
  let esPrimeraPalabra = true; //para impedir que se ponga un - al inicio
  //recorro el array con un forEch
  arrayListaLetras.forEach((segmentoArray) => {
    //recorro array de letras
    DICCIIONARIO.forEach((palabraDiccionario) => {
      //recorro el array de diccionario
      if (segmentoArray.includes(palabraDiccionario)) {
        //si en el segmento hay alguna coincidencia
        if (!esPrimeraPalabra) {
          //solo se cumplirá en la primer vuelta
          palabrasAcertadas += "-"; //le meto un - para luego hacer un split
        } else {
          esPrimeraPalabra = false; //la primera vez que entre lo modifico y a partir de la siguiente siempre entrara
        }
        palabrasAcertadas += palabraDiccionario; //guardo las palabras que coinciden
      }
    });
  });
  //console.log(palabrasAcertadas);

  //RECORRO EL ARRAY DE MANERA VERTICAL DE ARRIBA A BAJO PARA VERIFICAR SI HAY PALABRAS DE 3 O 4 O 5 LETRAS

  //llamar a la función crear array letras verticales
  let arrayLetrasVertical = guardarLetrasVertical(arrayListaLetras);

  //recorro  el array letras en vertical y verifico si hay coincidencias
  arrayLetrasVertical.forEach((segmentoArray) => {
    //recorro array de letras
    DICCIIONARIO.forEach((palabraDiccionario) => {
      //recorro el array de diccionario
      if (segmentoArray.includes(palabraDiccionario)) {
        //si en el segmento hay alguna coincidencia
        if (!esPrimeraPalabra) {
          palabrasAcertadas += "-"; //le meto un - para luego hacer un split
        } else {
          esPrimeraPalabra = false;
        }
        palabrasAcertadas += palabraDiccionario; //guardo las palabras que coinciden
      }
    });
  });
  //VERIFICAR SI HAY PALABRAS REPETIDAS Y LAS QUITO
  //llamar a la función que verificar si hay palabras repetidas y las quitara
  let arrayPalabrasUnicas = quitarPalabrasRepetidas(palabrasAcertadas);

  console.log("final función guardar inputs ");
  //console.log(arrayPalabrasUnicas);
  sumarPuntos(arrayPalabrasUnicas);
  return arrayPalabrasUnicas;
}



/**
 * Función que verifica cuando esta llena la cuadricula
 */
function inputsTodosLlenos() {
  //capturo el listado de inputs
  const listaInputs = document.querySelectorAll(".cuadrado");
  //recorro cada input y si esta todo lleno retornara true
  return Array.from(listaInputs).every((input) => input.value !== "");
}

/**
 * Transforma un array de strings, reorganizando los caracteres de horizontal a vertical.
 * Por ejemplo, convierte ['abc', 'abc', 'abc'] en ['aaa', 'bbb', 'ccc'].
 * Cada índice del nuevo array contiene los caracteres de una columna específica del array original.
 * @param {string[]} arrayListaLetras - Array de strings con letras organizadas horizontalmente.
 * @returns {string[]} - Array de strings con letras organizadas verticalmente.
 */
function guardarLetrasVertical(arrayListaLetras) {
  let arrayLetrasVertical = [];
  // Inicializa arrayLetrasVertical con un string vacío para cada columna
  for (let i = 0; i < arrayListaLetras[0].length; i++) {
    arrayLetrasVertical[i] = "";
  }
  // Recorre cada columna
  for (let col = 0; col < arrayListaLetras[0].length; col++) {
    // Recorre cada fila
    for (let row = 0; row < arrayListaLetras.length; row++) {
      //guardo en el nuevo array las letras de la cuadricula de forma vertical de arriba a bajo
      arrayLetrasVertical[col] += arrayListaLetras[row][col];
    }
  }
  return arrayLetrasVertical;
}

function quitarPalabrasRepetidas(palabrasAcertadas) {
  let arrayAciertos = palabrasAcertadas.split("-"); //paso a un array las palabras encontradas con repeticiones
  let arrayPalabrasUnicas = []; //donde guardar las palabras sin duplicidad

  for (let i = 0; i < arrayAciertos.length; i++) {
    let palabra = arrayAciertos[i];
    if (!arrayPalabrasUnicas.includes(palabra)) {
      //si no existe la guardo
      arrayPalabrasUnicas.push(palabra);
    }
  }
  return arrayPalabrasUnicas;
}

/**
 * Función que pasa un str de papamamaprimo --> papa-mama-primo
 * @param {*} listaLetras cadena de str con todas las letras de la cuadricula
 * @returns lista de str con un - cada 5 letras
 */
function separarStr(listaLetras) {
  let listaletrasSeparadas = ""; //guardo un listado de str pero cada 5 letras añado un -
  let separador = "";
  for (let i = 0; i < listaLetras.length; i++) {
    separador = "";
    if (i > 0 && i % 5 === 0) {
      //si es la posición 5 o 10 o 15... le atizo un -
      separador = "-";
    }
    listaletrasSeparadas += separador;
    listaletrasSeparadas += listaLetras[i];
  }
  return listaletrasSeparadas;
}

/**
 * Calcula eu numero random del 0 al 27 para calcular la letra a mostrar
 * @returns letra random del abecedario catalán con la ç incluida y la ñ excluida
 */
function letraRandom() {
  const arrayAbecedario = [
    "a",
    "b",
    "c",
    "ç",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let numRandom = Math.floor(Math.random() * arrayAbecedario.length);
  return arrayAbecedario[numRandom];
}
