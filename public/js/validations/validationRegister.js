let form = document.querySelector(".form-register");
let nombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("num");
let ciudad = document.getElementById("direction");
let avatar = document.getElementById("image");
let state = document.getElementById("state");
let btnBack = document.querySelector('.btn.btn-tomato-opacity-80');

window.addEventListener("load", () => {
    let existerr = false;

    nombre.addEventListener("blur", function () {
        let value = this.value.trim();
        let errName = document.querySelector(".msg-err");
        
        if (value.length === 0) {
            errName.innerHTML = "el nombre es requerido";
            this.classList.add("is-invalid");
            existerr = true;
        } else if (value.length <= 3 || value.length >= 16) {
            errName.innerHTML = "el nombre debe tener entre 3 y 16 caracteres";
            this.classList.add("is-invalid");
            existerr = true;
        } else {
            errName.innerHTML = "";
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            existerr = false;
        }

        nombre.addEventListener("focus", function () {
            errName.innerHTML = "";
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
            existerr = true;
        } else {
            errNamer.innerHTML = "";
            existerr = false;
        }

        campoEmail.addEventListener("focus", function () {
            errNamer.innerHTML = "";
        });
    });

    password.addEventListener("blur", function () {
        let value = this.value.trim();
        let errpasword = document.querySelector(".err-p");
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (value.length === 0) {
            errpasword.innerHTML = "La contraseña es requerida";
            existerr = true;
        } else if (!regex.test(value)) {
            errpasword.innerHTML = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número";
            existerr = true;
        } else {
            errpasword.innerHTML = "";
            existerr = false;
        }

        password.addEventListener("focus", function () {
            errpasword.innerHTML = "";
        });
    });

    number.addEventListener("blur", function () {
        let value = this.value.trim();
        let errnumber = document.querySelector(".err-n");

        if (value.length === 0) {
            errnumber.innerHTML = "El número es requerido";
            existerr = true;
        } else if (value.length < 10) {
            errnumber.innerHTML = "El número debe tener al menos 10 dígitos";
            existerr = true;
        } else {
            errnumber.innerHTML = "";
            existerr = false;
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
            existerr = true;
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
            errImage.innerHTML = "Solo se permiten archivos: JPG, PNG, WEBP y JPEG";
            existerr = true;
            return;
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            errImage.innerHTML = "La imagen es demasiado grande. El tamaño máximo es de 5MB";
            existerr = true;
            return;
        }

        errImage.innerHTML = "";
        existerr = false;
    });

    // Botón para volver atrás
    btnBack.addEventListener('click', function() {
        history.back();
    });

    // Formulario
    form.addEventListener("submit", function (event) {
        if (existerr) {
            event.preventDefault();
        } else {
            this.submit();
        }
    });
});
