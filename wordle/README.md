# 🔤 Wordle Adaptado – ¡Adivina la Palabra Oculta!

**Autor**: Jose Rodríguez & Cosmin Calin

## Redes sociales 🌐


**Portfolio**🔗 [Enlace:](https://portfolio.jose-rodriguez-blanco.es)   **Mi LinkedIn**🔗 [Enlace:](https://www.linkedin.com/in/joseperfil/)   **Mi GitHub**🔗 [Enlace:](https://github.com/jose-giithub) 
**LinkedIn Cosmin**🔗 [Enlace:](https://www.linkedin.com/in/cosmincaliin/)  

******
----
******

## 🤔 ¿Por qué un clon de Wordle en catalán?

¡Porque adivinar palabras es adictivo, y en pareja se codifica mejor! 🧠 Este proyecto es una versión personalizada del famoso puzzle, hecha a cuatro manos en clases de DAW del INS Baix Camp. Puro JS para eventos, validación y un toque local con diccionario catalán (incluyendo ñ y ç). Empieza con un formulario para tus datos, guarda stats en localStorage y te reta diario. ¿El twist? Popups para instrucciones, stats y reinicio – todo responsive para que juegues en cualquier pantalla.

📣 **Objetivo**: Adivina la palabra de 5 letras en 6 intentos. ¡Una nueva cada día!

---

---

## 👨‍🔬 ¿Como se juega?

Las reglas son simples: adivina la palabra oculta en 6 intentos. Cada intento debe ser una palabra válida (de nuestro diccionario catalán), y si no existe, te avisa. Usa teclado físico o virtual – ¡fácil!

**Si estás impaciente, aquí las reglas por escrito**

🧬 Instrucciones

- 📝 Empieza con formulario: Nombre, apellidos, correo, teléfono (guarda en localStorage para stats).
- 🔤 Escribe 5 letras: Verde si letra y posición correcta, Amarillo si letra correcta pero posición errónea, Gris si no está.
- ✅ Enter: Valida (si no es válida, alerta).
- ❌ Backspace/Borrar: Elimina última letra.
- 🏆 Ganas si aciertas; pierdes al 6º fallo. Nueva palabra aleatoria cada carga.
- 📊 Botones: Instrucciones (popup), Estadísticas (partidas ganadas/perdidas, intentos), Reiniciar (borra localStorage).

**Truco de experto**: Mira amarillos para reorganizar – ¡y no repitas grises! Prueba palabras como "abaca" o "zebra" del dic.

---

---

## ⚖️ ¿Tienes un reto mental?

- ¿Aburrido en clase?
- ¿Quieres vocabulario catalán?
- ¿O batir tu récord diario?

👉 ¡Intenta Wordle y que las letras decidan tu victoria!

1. 🌐 Entra en: 🔗[Enlace:](https://jose-rodriguez-blanco.es/wordle/index.html#) para jugar Wordle

2. 🚀 Adivina hasta acertar – ¡y revisa stats!

**El que acierta presume... el que falla, reinicia y vuelve a intentarlo.**

---

---

## 💡 ¿Por qué "Wordle Adaptado"?

Es un homenaje al original, pero con sabor local: catalán, colaborativo (gracias Cosmin!) y educativo para JS eventos. Hecho para demostrar onclick, keydown, localStorage y más – ¡sin complicaciones extras!

---

---

## 📦 Apartado técnico

---

**🚀 Tecnologías utilizadas**

- **HTML5 🖌️** – Grid 6x5 para intentos, teclado virtual y formulario inicial.
- **CSS3 🎨** – Estilos responsive, colores (verde/amarillo/gris), animaciones en botones.
- **JavaScript 🚀** – Eventos keydown/click, validación vs diccionario, colores por coincidencia, localStorage para stats/datos.
- **Bibliotecas 📚** – jQuery para animaciones y popups simples.

---

---

**🔁 Flujo de juego (simplificado)**

1. 📥 Carga: Formulario visible; valida inputs (nombre/apellidos sin números, correo/teléfono correctos).
2. ✅ Enviar: Oculta form, muestra grid/teclado, elige palabra aleatoria de dic (11033 opciones).
3. ⌨️ Tecla/Click: Añade letra a celda actual (máx 5), valida al Enter.
4. 🔍 Validar: Compara con aleatoria, pinta colores, avanza fila si falla.
5. 🏁 Gana/Pierde: Alerta, actualiza stats en localStorage. Popups para info.

---

---

| Componente | Tecnología / Herramienta | Función principal |
| --- | --- | --- |
| 💻 Frontend | HTML5 + CSS3 | Interfaz responsive, grid y teclado |
| 🧠 Lógica | JavaScript (3 archivos) | Eventos, validación, colores y storage |
| 📚 Diccionario | JS array | 11033 palabras catalanas para aleatorias |

---

---

## 🚀 ¿Quieres probarlo?

1. 📂 Opción 1: Clona el repo o abre el HTML en tu navegador.
2. 🎮 Opción 2: Juega online solo o reta a un amigo. 🔗[Enlace:](https://jose-rodriguez-blanco.es/wordle/index.html#)  
3. 🏆 Adivina y presume stats en LinkedIn.

¡Que las letras te guíen... o al menos no te dejen en gris! 👾 ¿Cuál fue tu intento más rápido?