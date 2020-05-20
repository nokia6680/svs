arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

/*Menu*/
const NavMenu = document.querySelector('.header-nav');
const Search = document.querySelector('.nav-search');
const SRes = document.querySelector('.search-result');
const QLinks = document.querySelector('.quicklinks');
const SInput = document.querySelector('.nav-search__input');

const MenuButton = document.querySelector('.nav-controls__toggle');
const MenuWrap = document.querySelector('.header');
const SearchBtn = document.querySelector('.header-menu__search');
const SearchClose = document.querySelector('.nav-search__close');
/*Variables for grid catalog view*/
const CatView = document.querySelector('.catalog-filter__toggle');
const CatList = document.querySelector('.catalog-list');
/*Variables for callback popup*/
const SeoList = document.querySelector('.about__container');
const SeoListBtn = document.querySelector('.about__expand');

document.querySelector('.nav-controls__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
  NavMenu.classList.toggle('active');
};

document.querySelector('.header-menu__search').onclick = function(){
	Search.classList.add('active');
  SRes.classList.add('active');
};

document.querySelector('.nav-search__close').onclick = function(){
  Search.classList.remove('active');
};

document.querySelector('.nav-search__input').onclick = function(){
  Search.classList.add('asked');
};

/*Открытие попапа перезвонить*/
function openbox(id) {
  var div = document.getElementById('popup-callback');
	var tt_div = document.getElementById('popup-callback-close');

  if(div.style.display == 'flex') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'flex';
  }
};

function openfilter(id) {
  var div = document.getElementById('popup-filter');
	var tt_div = document.getElementById('popup-filter-close');

  if(div.style.display == 'flex') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'flex';
  }
};
/*Открытие попапа предзаказа*/
function openorder(id) {
  var div = document.getElementById('popup-preorder');
	var tt_div = document.getElementById('popup-preorder-close');

  if(div.style.display == 'flex') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'flex';
  }
};

// Смена текста кнопки развернуть-свернуть
function toggleText(button_id)  {
   var text = document.getElementById('btn-expand').firstChild;
   text.data = text.data == "Развернуть все" ? "Свернуть все" : "Развернуть все";
};

var expSizeBtn = document.querySelector('.catalog-sizes__expand');
var sizeList = document.querySelector('.catalog-sizes__list');

document.querySelector('.catalog-sizes__expand').onclick = function(){
	sizeList.classList.toggle('active');
  expSizeBtn.classList.toggle('active');
};
