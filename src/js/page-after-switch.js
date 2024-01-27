const currentPath = window.location.pathname;
const menuItems = document.querySelectorAll('.heder-nav-link');
const mobMenuItems = document.querySelectorAll('.mobile-menu-nav-list-item');

document.addEventListener('DOMContentLoaded', pageSwitch());

function pageSwitch() {
  menuItems.forEach(item => {
    item.classList.remove('heder-nav-link-active');
  });

  mobMenuItems.forEach(item => {
    item.classList.remove('active-menu-nav-list-item');
  });

  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('heder-nav-link-active');
    }
  });

  mobMenuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active-menu-nav-list-item');
    }
  });
}
