let form = document.querySelector(".form-register");
let nombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("num");
let ciudad = document.getElementById("direction");

window.addEventListener("load", () => {
  nombre.addEventListener("blur", function () {
    let value = this.value.trim();
    let errName = document.querySelector(".msg-err");
    const expressAlfanumeric = /^([a-zA-Z0-9_-])$/;
    let existerr = true;
    switch (existerr ) {
      case value.length === 0:
        errName.innerHTML = "el nombre es requerido";
        this.classList.add("is-invalid");
        break;

      case value.length <= 3 || value.length >= 16:
        errName.innerHTML = "el nombre debe  tener entre 3 y 16 caracteres";
        this.classList.add("is-invalid");

        break;

      default:
        errName.innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        existerr = false;
        break;
    }
    nombre.addEventListener('focus', function () {
        errName.innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.remove("is-valid");
    })
  });

  campoEmail.addEventListener('blur', function() {
    let errNamer = document.querySelector(".msge-err");
     const email = campoEmail.value.trim();
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     if (!emailRegex.test(email)) {
         errNamer.innerHTML = 'El mail no es válido';
     } else {
        errNamer.innerHTML = '';
     } 
     campoEmail.addEventListener('focus', function(){
        errNamer.innerHTML = ''
        
     })
 });

    password.addEventListener('blur', function() {
        let value = this.value.trim
        let existerr=true
        let errpasword = document.querySelector('.err-p')
        switch (existerr) {
            case value.length === 0:
                errpasword.innerHTML = 'La contraseña es requerida'

                
                break;
        
            default:
                break;
        }
    })
   
  //formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault;
    if (!existerr) {
      this.submit;
    }
  });
});
