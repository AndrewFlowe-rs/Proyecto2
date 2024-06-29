window.addEventListener("load", function () {
  let form = document.querySelector(".form-register");
  let nombre = document.querySelector("#nombre");
  let campoEmail = document.querySelector("#email");
  let password = document.querySelector("#password");
  let number = document.querySelector("#num");
  let state = document.querySelector("#state");
  let avatar = document.querySelector("#image");
  let errnombre = document.querySelector(".errname");
  let erremail = document.querySelector(".erremail");
  let errpassword = document.querySelector(".errpassword");
  let errnumber = document.querySelector(".errnum");
  let errstate = document.querySelector(".errstate");
  let erravatar = document.querySelector(".errimg");
  let existError = true;
//alert("hola");
//errnombre.innerHTML += "ola soy un err";
  nombre.addEventListener("blur", function () {
    if (nombre.value.trim().length === 0) {
      errnombre.innerHTML += "El nombre es requerido";
    } else if (nombre.value.length < 3 || nombre.value.length > 15) {
      errnombre.innerHTML += "El nombre solo debe tener entre 3 y 15 caracteres";
    }
    else {
      errnombre.innerHTML = null;

    }
  });

  nombre.addEventListener("focus", function () {
    errnombre.innerHTML = null;
  }); 

  email.addEventListener("blur", function () {
    let value = this.value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (value.length === 0) {
      erremail.innerHTML = "El email es requerido";
    } else if (!emailRegex.test(value)) {
      erremail.innerHTML = "El email no es válido";
    } else {
      erremail.innerHTML = null;
    }
  });

  email.addEventListener("focus", function () {
    erremail.innerHTML = null;
  });

  password.addEventListener("blur", function () {
    let value = this.value.trim();
    if (value.length === 0) {
      errpassword.innerHTML = "La contraseña es requerida";
    } else if (value.length < 8) {
      errpassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
    } else {
      errpassword.innerHTML = null;
    }
  });

  password.addEventListener("focus", function () {
    errpassword.innerHTML = null;
  });

  number.addEventListener("blur", function () {
    let value = this.value.trim();
    if (value.length === 0) {
      errnumber.innerHTML = "El numero es requerido";
    } else if (value.length < 8) {  
      errnumber.innerHTML += "El numero debe tener al menos 10 digitos";
    } else {
      errnumber.innerHTML = null;
    } 
  });

  number.addEventListener("focus", function () {
    errnumber.innerHTML = null;
  });
  
});
