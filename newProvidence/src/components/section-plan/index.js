const el = document.querySelector('.toggle__btn-container'),
  priceContainer = document.querySelectorAll('.price-container');


el.addEventListener('click', function(e) {
  for (let i = 0, len = el.children.length; i < len; i++) {
    el.children[i].classList.remove('toggle__btn_active');    
    priceContainer[i].classList.remove('price__active');  
  }
  e.target.classList.add('toggle__btn_active');
  priceContainer[e.target.dataset.num].classList.add('price__active');
}, false)

