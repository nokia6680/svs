arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

/*Menu*/
const SearchDeskOpen = document.querySelector('.nav-service__search');
const SearchDeskField = document.querySelector('.nav-menu__search');
const SearchDeskClose = document.querySelector('.nav-menu__search-close');
const SiteMenu = document.querySelector('.nav-menu__links');
const NavMenu = document.querySelector('.nav-menu');
const SearchRes = document.querySelector('.search-result');

const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-menu');
const MenuWrap = document.querySelector('.header');
const SearchBtn = document.querySelector('.header-nav__search');
const Contacts = document.querySelector('.nav-contacts');
/*Variables for grid catalog view*/
const CatView = document.querySelector('.catalog-filter__toggle');
const CatList = document.querySelector('.catalog-list');
/*Variables for callback popup*/
const SeoList = document.querySelector('.about__container');
const SeoListBtn = document.querySelector('.about__expand');

document.querySelector('.nav-service__search').onclick = function () {
  SearchDeskField.classList.add('active');
	SiteMenu.classList.add('active');
	NavMenu.classList.add('active');
	SearchRes.classList.add('active');
};

document.querySelector('.nav-menu__search-close').onclick = function () {
  SearchDeskField.classList.remove('active');
	SiteMenu.classList.remove('active');
	NavMenu.classList.remove('active');
	SearchRes.classList.remove('active');
};

document.querySelector('.header-nav__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
	MenuWrap.classList.toggle('active');
	SearchBtn.classList.toggle('active');
  NavMenu.classList.toggle('active');
	Contacts.classList.toggle('active');
};

document.querySelector('.header-nav__search').onclick = function(){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
	MenuWrap.classList.toggle('active');
	SearchBtn.classList.toggle('active');
	Contacts.classList.toggle('active');
	document.getElementById("search-1").focus();
};

document.querySelector('.about__expand').onclick = function () {
  SeoList.classList.toggle('active');
};

document.querySelector('.catalog-filter__toggle').onclick = function(){
	CatView.classList.toggle('active');
	CatList.classList.toggle('grid');
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
