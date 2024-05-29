let formL = document.querySelector(".form-login");
let email = document.getElementById("login");
let password = document.getElementById("passwordL");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
window.addEventListener("load", () => {
  email.addEventListener("blur", function () {
    let value = this.value.trim();
    let existerr = true;
    var errEmail = document.querySelector(".alert-email");
    let errPassword = document.querySelector(".alert-password");
    switch (existerr) {
      case value.length === 0:
        errEmail.innerHTML = "el email es requerido";
        this.classList.add("is-invalid");
        break;
        
      default:
        errEmail.innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        existerr = false;
        break;
    }
    email.addEventListener("focus", function () {
      errEmail.innerHTML = null;
      this.classList.remove("is-invalid");
      this.classList.remove("is-valid");
    });
  });
});
