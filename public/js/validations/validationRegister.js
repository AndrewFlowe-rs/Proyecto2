
alert('hola este es el registro')


let form = document.querySelector(".form-register");
let nombre = document.getElementById("nombre");
let campoEmail = document.getElementById('email')
let password = document.getElementById('password')
let number = document.getElementById('num')
let ciudad =document.getElementById('direction')

nombre.addEventListener('load' ,() => {


    nombre.addEventListener('blur' , function ()  {

    })
})

form.addEventListener("submit", (event) => {
    if (nombreInput.value.trim() === "") {
        alert("Por favor, escribe tu nombre.");
        event.preventDefault();
    }
})