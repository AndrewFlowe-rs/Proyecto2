let form = document.querySelector(".form-register");
let nombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("num");
let ciudad = document.getElementById("direction");
let avatar = document.getElementById("image");
let state = document.getElementById("state");

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
  state.addEventListener("blur", function () {
    let errState = document.querySelector(".err-c");
    if (this.value === "") {
      errState.innerHTML = "Debes seleccionar una provincia";
      this.classList.add("is-invalid");
      existerr = true;
    } else {
      errState.innerHTML = "";
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
      existerr = false;
    }

    this.addEventListener("focus", function () {
      errState.innerHTML = "";
      this.classList.remove("is-invalid");
      this.classList.remove("is-valid");
    });
  });
  avatar.addEventListener("change", function () {
    let errImage = document.getElementById("imageError");
    const file = this.files[0];
    
    if (!file) {
        errImage.innerHTML = "Debes seleccionar una imagen";
        return;
    }
    
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
        errImage.innerHTML = "Solo se permiten archivos: JPG, PNG, WEBP y JPEG";
        return;
    }
    
    const maxSize = 5 * 1024 * 1024; 
    if (file.size > maxSize) {
        errImage.innerHTML = "La imagen es demasiado grande. El tamaño máximo es de 5MB";
        return;
    }
    
    errImage.innerHTML = null;
});

  //formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault;
    if (!existerr) {
      this.submit;
    }
  });
});
