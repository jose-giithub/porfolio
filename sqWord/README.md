# 🧩 Sqword – ¡Forma Palabras y Gana Puntos en la Cuadrícula!

**Autor**: Jose Rodríguez  

## Redes sociales 🌐

**Portfolio**🔗 [Enlace portfolio:](https://portfolio.jose-rodriguez-blanco.es)   **LinkedIn**🔗 [Enlace LinkedIn:](https://www.linkedin.com/in/joseperfil/)   **GitHub**🔗 [Enlace GitHub:](https://github.com/jose-giithub)

******
----
******

## 🤔 ¿Por qué un juego de palabras en una cuadrícula?

¡Porque el cerebro necesita gym, y las palabras son pesas perfectas! 🧠 Este no es un clon cualquiera: es Sqword, inspirado en los adictivos puzzles de letras, pero hecho a mano pura. Creado en clases de DAW del INS Baix Camp, te reta a llenar una 5x5 con letras random para formar palabras horizontales o verticales. ¿El twist? Hay un joker para salvarte el día, y guarda tus puntuaciones en localStorage – sin servidores, todo en tu navegador. Polémico como su inspiración, pero 100% tuyo.

📣 **Objetivo**: Maximiza palabras de 3-5 letras para llegar a 50 puntos. ¿Listo para el brain workout?

***
---

## 👨‍🔬 ¿Como se juega?

Coloca letras en la cuadrícula 5x5 para formar tantas palabras de 3, 4 y 5 letras como puedas. Las palabras van horizontal (izquierda a derecha) o vertical (arriba a abajo). Una vez colocada una letra, ¡no se mueve! Al llenar todo, evalúa y puntúa por longitud (ej: 4 letras = 4 puntos).

🎥 Si quieres un tutorial rápido, imagínalo como un crucigrama caótico con letras aleatorias – ¡o pruébalo directamente!

**Si estás impaciente, aquí las reglas por escrito**

🧬 Instrucciones

- 📥 Cada turno, una letra random aparece (o usa el joker para elegir la tuya).  
- 🖱️ Haz clic en un cuadrado vacío y coloca la letra.  
- 🤡 Joker: 4 veces max, escribe una letra (A-Z, ç incluida) y úsala como comodín.  
- 🔍 Forma palabras: Horizontales/verticales, mínimo 3 letras. Usa diccionario catalán (con palabras como "sal", "papa", "comer").  
- 🏁 Llena la cuadrícula: Auto-evalúa, suma puntos por palabras únicas, muestra fecha y guarda en localStorage.  
- 📱 Responsive: Juega en móvil sin dramas.  

**Truco de experto**: Apunta a palabras cruzadas para multiplicar puntos – ¡y no olvides el joker! 😏

***
---

## ⚖️ ¿Tienes un reto mental?

- ¿Aburrido en el bus?  
- ¿Quieres vocabulario catalán?  
- ¿O solo presumir puntuación?  

👉 ¡Llena la cuadrícula en Sqword y que las palabras decidan tu gloria!  

1. 🌐 Entra en: 🔗 [Link para jugar Sqword](https://jose-rodriguez-blanco.es/sqWord/index.html)  

2. 🚀 Coloca letras hasta llenar – ¡y comparte tu score!  

**El que más puntúa gana... el que falla, repite mañana con nuevo set.**

***
---

## 💡 ¿Por qué "Sqword"?

"Sq" por square (cuadrícula), "word" por palabras – simple, directo, y un guiño al juego que todos conocemos (pero sin copiar, eh). Hecho sin atajos, para aprender JS a fondo.  

***
---

## 📦 Apartado técnico

---

**🚀 Tecnologías utilizadas**

- **HTML5 🖌️** – Estructura de la cuadrícula dinámica (5x5 inputs).  
- **CSS3 🎨** – Estilos responsive, popups y visuales limpios.  
- **JavaScript 🚀** – Lógica de juego: eventos click/input, validación, búsqueda de palabras (horizontal/vertical), suma puntos y localStorage.  

***
---

**🔁 Flujo de juego (simplificado)**

1. 📥 Carga: Genera letra random, crea cuadrícula 5x5.  
2. 🖱️ Click en cuadrado: Inserta letra (o joker si activado).  
3. 🤡 Joker: Valida input (A-Z/ç), úsalo 4 veces max.  
4. 🔍 Lleno: Busca palabras en rows/cols vs diccionario, quita duplicados, suma longitudes.  
5. 🏆 Muestra puntos/fecha, guarda en localStorage. Popup instrucciones.  

***
---

| Componente        | Tecnología / Herramienta              | Función principal                                |
|-------------------|---------------------------------------|--------------------------------------------------|
| 💻 Frontend       | HTML5 + CSS3                          | Interfaz responsive y cuadrícula                 |
| 🧠 Lógica         | JavaScript (3 archivos)               | Eventos, validación, búsqueda palabras y storage |
| 📚 Diccionario    | JS array                              | Validación palabras catalanas                    |

***
---

## 🚀 ¿Quieres probarlo?

1. 📂 Opción 1: Clona el repo o abre el HTML en tu navegador.  
2. 🎮 Opción 2: Juega online solo o reta a un amigo. 🔗 [Enlace:](https://jose-rodriguez-blanco.es/sqWord/index.html)  
3. 🏆 Llena la cuadrícula y presume tu puntuación en LinkedIn.  

¡Que las palabras fluyan... o al menos no te atasques en "pa"! 👾 ¿Cuál fue tu puntuación máxima?