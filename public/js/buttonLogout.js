document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.querySelector('.btn.btn-warning');

  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      fetch('/perfil/cerrar', {
        method: 'GET',
        credentials: 'include' 
      }).then(response => {
        if (response.redirected) {
          window.location.href = response.url;
        }
      }).catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
    });
  }
});
