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
    switch (existerr) {
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
    nombre.addEventListener("focus", function () {
      errName.innerHTML = null;
      this.classList.remove("is-invalid");
      this.classList.remove("is-valid");
    });
  });

  campoEmail.addEventListener("blur", function () {
    let errNamer = document.querySelector(".msge-err");
    const email = campoEmail.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      errNamer.innerHTML = "El mail no es válido";
    } else {
      errNamer.innerHTML = "";
    }
    campoEmail.addEventListener("focus", function () {
      errNamer.innerHTML = "";
    });
  });

  password.addEventListener("blur", function () {
    let value = this.value.trim;
    let existerr = true;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let errpasword = document.querySelector(".err-p");
    switch (existerr) {
      
      case value.length === 0:
        errpasword.innerHTML = "La contraseña es requerida";

        break;

      case regex.test(value):
        errpasword.innerHTML =
          "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número";

      default:
        errpasword.innerHTML = null;
        existerr = false;
        break;
    }
    password.addEventListener("focus", function () {
      errpasword.innerHTML = "";
    });
  });

  number.addEventListener("blur", function () {
    let value = this.value.trim;
    let existerr = true;
    let errnumber = document.querySelector(".err-n");
    switch (existerr) {
      case value.length === 0:
        errnumber.innerHTML = "El número es requerido";
        break;
      case value.length < 10:
        errnumber.innerHTML = "El número debe tener al menos 10 dígitos";
        break;
      default:
        errnumber.innerHTML = null;
        existerr = false;
        break;
    }
    
    number.addEventListener("focus", function () {
      errnumber.innerHTML = "";
    });

  });

  ciudad.addEventListener("blur", function () {
    let value = this.value.trim;
    let existerr = true;
    let errciudad = document.querySelector(".err-c");
    switch (existerr) { 
      case value.length === 0:
        errciudad.innerHTML = "La ciudad es requerida";
        break;
        case value.length < 5 || value.length > 10:
          errciudad.innerHTML = "El texto debe tener entre 5 y 10 caracteres";
          break;
      default:
        errciudad.innerHTML = null;
        existerr = false;
        break;
    }

    ciudad.addEventListener("focus", function () {
      errciudad.innerHTML = "";
    });
  });

  //formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault;
    if (!existerr) {
      this.submit;
    }
  });
});
