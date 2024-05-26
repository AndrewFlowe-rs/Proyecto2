
alert('hola este es el registro')


let form = document.querySelector(".form-register");
let nombre = document.getElementById("nombre");
let campoEmail = document.getElementById('email')
let password = document.getElementById('password')
let number = document.getElementById('num')
let ciudad =document.getElementById('direction')

window.addEventListener('load' ,() => {


    nombre.addEventListener('blur' , function ()  {
const value = this.value.trim();
const errName = document.querySelector('.msg-err')
const expressAlfanumeric = /^([a-zA-Z0-9_-])$/
const longitudMinima = 3;
const longitudMaxima = 16;

switch (true) {
    case value.length === 0:
        errName.innerHTML = 'el nombre es requerido'
        this.classList.add ('is-invalid')

        case !expressAlfanumeric.test(value):
            errName.innerHTML = 'el nombre debe ser alfanumerico'
            this.classList.add ('is-invalid')

            case value.length  < longitudMinima || value.length > longitudMaxima :

            errName.innerHTML = 'el nombre debe  tener entre 3 y 16 caracteres'
        break;

    default:
        break;
}
    })
})

