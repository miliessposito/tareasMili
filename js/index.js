let titulo = document.getElementById("tituloParaInput");
let inputCiudad = document.getElementById("inputCiudad");
let inputProvincia = document.getElementById("inputProvincia");
let inputNumeroDeTelefono = document.getElementById("inputNumeroDeTelefono");
let inputEmail = document.getElementById("inputEmail");
let inputEstadoCivil = document.getElementById("inputEstadoCivil");
let boton = document.getElementById("miButton");

let miObjeto={
    nombre: 'Maria Sanchez',
    edad: 25
};

miButton.addEventListener('click', ()=>{
    let tituloValue = titulo.value;
    let ciudadInputValue = inputCiudad.value;
    let provinciaInputValue = inputProvincia.value;
    let numeroDeTelefonoInputValue = inputNumeroDeTelefono.value;
    let emailInputValue = inputEmail.value;
    let estadoCivilInputValue = inputEstadoCivil.value;
    titulo.textContent=miInputValue;
    titulo.textContent += miObjeto;


})