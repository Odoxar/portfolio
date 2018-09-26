'use strict'

const tabs = document.getElementsByClassName("tabs-bar")[0],
  tab = document.getElementsByClassName("tabs-bar__item"),
  tabContent = document.getElementsByClassName("tabs__item"),
  arrows = document.getElementsByClassName('tabs__arrow')[0],
  activeTab = "tabs-bar__item_active",
  activeTabContent = "tabs__item_active";
let count = 0;

tabs.addEventListener("click", function (e) {
  const elem = e.target.offsetParent,
        elemArrow = e.target;
  if (elem.className === 'tabs-bar__item') {
    removeActiveClass(tab, activeTab)
    elem.classList.add(activeTab);
    if (tabContent[elem.dataset.index]) {
      removeActiveClass(tabContent, activeTabContent);
      tabContent[elem.dataset.index].classList.add(activeTabContent);
    }
  }
}, false);

arrows.addEventListener('click', changeElemArrows, false);

function removeActiveClass(el, removebleClass) {
  for (let i = 0, len = el.length; i < len; i++) {
    if (el[i].className != 'tabs-bar__item' || el[i].className != 'tabs__item') {
      el[i].classList.remove(removebleClass);
    } 
  }
}

function changeElemArrows(e) {
  for (let i = 0, len = tab.length; i < len; i++) {
    if (tab[i].className !== 'tabs-bar__item') {
      count = i;
    }
  }
  tab[count].classList.remove(activeTab);
  tabContent[count].classList.remove(activeTabContent);

  if (e.target.className === 'arrow arrow__right') {
    count++;
    count %= tab.length;
  } else if (e.target.className === 'arrow arrow__left') {
    count--;
    if (count < 0) {
      count = tab.length - 1;
    }
  }

  tab[count].classList.add(activeTab);
  tabContent[count].classList.add(activeTabContent);
  //console.dir(e.target)
}
