/* Te dejo las notitas de hoy en javascript milicita hermosa piciosa! */

/* let titulo = document.getElementById("tituloParaInput");
let inputCiudad = document.getElementById("inputCiudad");
let inputProvincia = document.getElementById("inputProvincia");
let inputNumeroDeTelefono = document.getElementById("inputNumeroDeTelefono");
let inputEmail = document.getElementById("inputEmail");
let inputEstadoCivil = document.getElementById("inputEstadoCivil");
let inputTitulo = document.getElementById("inputTitulo"); */
let boton = document.getElementById("miButton");
/* //H3 A MOSTRAR
const ciudadElemento = document.getElementById("ciudadText");
const provinciaElemento = document.getElementById("provinciaText");
const telefonoElemento = document.getElementById("phoneText");
const emailElemento = document.getElementById("emailText");
const estadoCivilElemento = document.getElementById("estodoCivilText"); */
const miImg = document.getElementById('miImg');

/* let miObjeto = {
    nombre: 'Maria Sanchez',
    edad: 25
};
inputCiudad.placeholder = 'Ingresa el nombre tu ciudad';
inputProvincia.placeholder = 'Ingresa el nombre tu provincia';
inputNumeroDeTelefono.placeholder = 'Ingresa el nombre tu numero de telefono';
inputEmail.placeholder = 'Ingresa tu email';
inputEstadoCivil.placeholder = 'Ingresa tu estado civil';
 */

let counter = 0;
boton.addEventListener('click', () => {
    counter++
    if (counter === 1) {
        miImg.src = 'https://res.cloudinary.com/dge6pbj4l/image/upload/v1710793697/miliEcomerce/i0qchvea6hjseqrfrj4u.jpg';
        miImg.alt = 'Imagen del logo de la empresa'
        console.log(counter)
    } else if (counter === 2) {
        miImg.src = 'https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773715/miliEcomerce/m6shut8nkqvfrbrnj3ap.jpg';
        miImg.alt = 'Imagen de la pintura blanca'

    }
    else {
        counter = 0;
        miImg.src = 'https://res.cloudinary.com/dge6pbj4l/image/upload/v1710773715/miliEcomerce/njwbrtxqwpktgapnxj7p.jpg';
        miImg.alt = 'Imagen de pintura de unas blanca'
        console.log(counter)
    }
    /*     let tituloValue = inputTitulo.value;
        let ciudadInputValue = inputCiudad.value;
        let provinciaInputValue = inputProvincia.value;
        let numeroDeTelefonoInputValue = inputNumeroDeTelefono.value;
        let emailInputValue = inputEmail.value;
        let estadoCivilInputValue = inputEstadoCivil.value;
        titulo.textContent = tituloValue;
        ciudadElemento.textContent = ciudadInputValue;
        provinciaElemento.textContent = provinciaInputValue;
        telefonoElemento.textContent = numeroDeTelefonoInputValue;
        emailElemento.textContent = emailInputValue;
        estadoCivilElemento.textContent = estadoCivilInputValue; */
})

class Perona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let persona1 = new Perona('Alex', 'Quevedo')

console.log(persona1.nombre)

let persona = {
    name: 'Alejandro',
    lastName: 'Quevedo'
}
console.log(persona.name)