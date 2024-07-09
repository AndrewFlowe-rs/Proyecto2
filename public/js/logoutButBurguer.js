document.addEventListener('DOMContentLoaded', function() {
    const logoutForm = document.getElementById('logoutForm');

    if (logoutForm) {
        logoutForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del formulario (enviar la solicitud)
            
            fetch('/logout', {
                method: 'POST', // Utiliza el método POST para coincidir con la ruta en Express
                credentials: 'include'
            }).then(response => {
                if (response.ok) {
                    window.location.href = '/aut/login'; // Redirige a la página de login si la sesión se cierra correctamente
                } else {
                    console.error('Error al cerrar sesión:', response.statusText);
                }
            }).catch(error => {
                console.error('Error al cerrar sesión:', error);
            });
        });
    }
});
