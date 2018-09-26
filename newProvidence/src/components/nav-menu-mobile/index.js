import { mobileMenu, overlay, htmlBlocked} from "../header/index";

const mobileMenuClose = document.querySelector('.mobile-menu_btn__close');


mobileMenuClose.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  overlay.style.display = 'none';
  htmlBlocked.classList.remove('overflow');
})