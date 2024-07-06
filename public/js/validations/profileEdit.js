document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form-profile');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var stateInput = document.getElementById('state');
    var numberInput = document.getElementById('number');
    var avatarInput = document.getElementById('avatar');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrors();

        var errors = [];

        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'El campo Nombre no puede estar vacío');
            errors.push('El campo Nombre no puede estar vacío');
        }

        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'El campo Email no puede estar vacío');
            errors.push('El campo Email no puede estar vacío');
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailInput, 'El formato del Email no es válido');
            errors.push('El formato del Email no es válido');
        }

        if (stateInput.value.trim() === '') {
            displayError(stateInput, 'El campo Provincia no puede estar vacío');
            errors.push('El campo Provincia no puede estar vacío');
        }


        if (errors.length > 0) {
            return;
        }

        this.submit();
    });

    function displayError(input, message) {
        var errorElement = input.nextElementSibling; 
        errorElement.innerText = message;
    }

    function clearErrors() {
        var errorMessages = form.querySelectorAll('.text-danger');
        errorMessages.forEach(function(error) {
            error.innerText = ''; 
        });
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
