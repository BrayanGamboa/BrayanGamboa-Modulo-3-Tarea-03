import { students } from "./data.js";

let personajes = students;
let personaje1 = personajes[0]
console.log(personaje1["name"]);
let form = document.getElementById("form")

form.addEventListener("click", ()=>{
    alert("hola");
    form.innerHTML = `
    <img src="./img/aguila.png" alt="Logo" id="logo_img">
        <div id="datos">
            <img src="./img/nutria.png" alt="" id="img_personaje">
            <p id="nombre">Hola, esto es una prueba</p>
            <p id="escuela">Prueba 2</p>
        </div>
        `

})