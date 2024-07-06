document.addEventListener('DOMContentLoaded', function() {
  const logoutButton = document.querySelector('.logout-but');

  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      fetch('/logout', {
        method: 'POST', 
        credentials: 'include'
      }).then(response => {
        if (response.ok) {
          window.location.href = '/aut/login'; 
        } else {
          console.error('Error al cerrar sesión:', response.statusText);
        }
      }).catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
    });
  }
});
