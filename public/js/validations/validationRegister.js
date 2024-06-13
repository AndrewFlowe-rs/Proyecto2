document.addEventListener("load", function () {
    const form = document.querySelector(".form-register");
    const nombre = document.getElementById("nombre");
    const campoEmail = document.getElementById("email");
    const password = document.getElementById("password");
    const number = document.getElementById("num");
    const state = document.getElementById("state");
    const avatar = document.querySelector("name");
    const imageError = document.getElementById("imageError");
    let existError = false;

    function showError(element, message) {
        const errorElement = element.nextElementSibling;
        errorElement.textContent = message;
        errorElement.classList.add("text-danger");
        existError = true;
    }

    function clearError(element) {
        const errorElement = element.nextElementSibling;
        errorElement.textContent = "";
        existError = false;
    }

    function validateForm(event) {
        existError = false;

        if (nombre.value.trim().length === 0 ||
            nombre.value.trim().length <= 3 || nombre.value.trim().length >= 16 ||
            !campoEmail.value.trim().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ||
            password.value.trim().length === 0 ||
            !password.value.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/) ||
            number.value.trim().length === 0 ||
            number.value.trim().length < 10 ||
            state.value === "" ||
            !isValidFileType(avatar.files[0])) { 
            existError = true;
        }

        if (existError) {
            event.preventDefault(); 
        }
    }

    function isValidFileType(file) {
        if (!file) {
            return false;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        const fileType = file.type.toLowerCase();
        return allowedTypes.includes(fileType);
    }

    nombre.addEventListener("blur", function () {
        const value = this.value.trim();

        if (value.length === 0) {
            showError(this, "El nombre es requerido");
        } else if (value.length <= 3 || value.length >= 16) {
            showError(this, "El nombre debe tener entre 3 y 16 caracteres");
        } else {
            clearError(this);
        }
    });

    campoEmail.addEventListener("blur", function () {
        const value = this.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailRegex.test(value)) {
            showError(this, "El correo electrónico no es válido");
        } else {
            clearError(this);
        }
    });

    password.addEventListener("blur", function () {
        const value = this.value.trim();
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (value.length === 0) {
            showError(this, "La contraseña es requerida");
        } else if (!regex.test(value)) {
            showError(this, "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número");
        } else {
            clearError(this);
        }
    });

    number.addEventListener("blur", function () {
        const value = this.value.trim();

        if (value.length === 0) {
            showError(this, "El número es requerido");
        } else if (value.length < 10) {
            showError(this, "El número debe tener al menos 10 dígitos");
        } else {
            clearError(this);
        }
    });

    state.addEventListener("change", function () {
        if (this.value === "") {
            showError(this, "Debes seleccionar una provincia");
        } else {
            clearError(this);
        }
    });

    function showError(message) {
        imageError.textContent = message;
        imageError.classList.add("text-danger");
    }

    function clearError() {
        imageError.textContent = "";
        imageError.classList.remove("text-danger");
    }

    function isValidFileType(file) {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        return allowedTypes.includes(file.type);
    }

    function isValidFileSize(file) {
        const maxSize = 5 * 1024 * 1024; 
        return file.size <= maxSize;
    }

    avatar.addEventListener("change", function () {
        const file = this.files[0];

        if (!file) {
            showError("Debes seleccionar una imagen");
            return;
        }

        if (!isValidFileType(file)) {
            showError("Solo se permiten archivos JPG, PNG, JPEG y WEBP");
            return;
        }

        if (!isValidFileSize(file)) {
            showError("La imagen es demasiado grande. El tamaño máximo es de 5MB");
            return;
        }

        clearError();
    });


    document.querySelector('.btn.btn-tomato-opacity-80').addEventListener('click', function() {
        history.back();
    });
    form.addEventListener("submit", validateForm);
});
