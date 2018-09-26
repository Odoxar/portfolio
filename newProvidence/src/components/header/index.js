const menuBtn = document.querySelector('.mobile-menu__btn'),
      mobileMenu = document.querySelector('.mobile-menu__wrap'),
      overlay = document.querySelector('.overlay'),
      htmlBlocked = document.children[0],
      menu = document.querySelector('.wrapper'),
      header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  modalOverlay();
  
})

overlay.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  overlay.style.display = 'none';
  htmlBlocked.classList.remove('overflow');
})

function modalOverlay () {
  overlay.style.display = 'block';
  htmlBlocked.classList.add('overflow');
}

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  
  if (scroll > 20) { 
    menu.classList.add('menuFixed');
  } else if (scroll < 20) {
    menu.classList.remove('menuFixed');
  }
})



export { mobileMenu, overlay, htmlBlocked};