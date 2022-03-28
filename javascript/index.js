import { students } from "./data.js";

swal("Presiona el logo", "para iniciar", "success");

let index = -1;

// console.log(index);
let personaje;

let form = document.getElementById("form");
form.addEventListener("click", cambio);

function cambio() {
  if (index >= 10) {
    index = 0
  } else {
    index++
  }
  personaje = students[index];
  card();
}

function card() {
  form.innerHTML = `
    <div class="cards">
        <img src="${personaje["logo"]}" alt="Logo" id="logo_img">
        <div id="datos">
            <img src="${personaje["image"]}" alt="" id="img_personaje">
            <p id="nombre">${personaje["name"]}</p>
            <p id="escuela">"${personaje["house"]}"</p>
        </div>
    </div>
    <img src="./img/flecha-izq.png" alt="Flecha Izquierda" id="flecha_izq" class="flecha" onclick="cambio()">
    <img src="./img/flecha-dercha.png" alt="Flecha Derecha" id="flecha_derecha" class="flecha" onclick="cambio()">
        `;
}