let formL = document.querySelector(".form-login");
let email = document.getElementById("login");
let password = document.getElementById("passwordL");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

window.addEventListener("load", () => {
  email.addEventListener("keyup", function () {
    let value = this.value.trim();
    let errEmail = document.querySelector(".alert-email");

    if (value.length === 0) {
      errEmail.innerHTML = "El email es requerido";
      this.classList.add("is-invalid");
      this.classList.remove("is-valid");
    } else if (!emailRegex.test(value)) {
      errEmail.innerHTML = "El email no es válido";
      this.classList.add("is-invalid");
      this.classList.remove("is-valid");
    } else {
      errEmail.innerHTML = null;
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
    }
  });

  email.addEventListener("focus", function () {
    let errEmail = document.querySelector(".alert-email");
    errEmail.innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });

  password.addEventListener("keyup", function () {
    let value = this.value.trim();
    let errPassword = document.querySelector(".alert-password");

    if (value.length === 0) {
      errPassword.innerHTML = "La contraseña es requerida";
      this.classList.add("is-invalid");
      this.classList.remove("is-valid");
    } else if (value.length < 6) {
      errPassword.innerHTML = "La contraseña debe tener al menos 6 caracteres";
      this.classList.add("is-invalid");
      this.classList.remove("is-valid");
    } else {
      errPassword.innerHTML = null;
      this.classList.remove("is-invalid");
      this.classList.add("is-valid");
    }
  });

  password.addEventListener("focus", function () {
    let errPassword = document.querySelector(".alert-password");
    errPassword.innerHTML = null;
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
  });
});
