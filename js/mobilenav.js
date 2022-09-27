const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

burger.addEventListener('click', event => {
    sidebar.classList.toggle('show-sidebar');
});