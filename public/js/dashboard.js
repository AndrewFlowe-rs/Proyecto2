document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.barraVertical');

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
