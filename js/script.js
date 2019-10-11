const TabItemSelector = '.contact-list__item';
const ContentItemSelector = '.address__item';

class TabsManager {
  constructor(navNode){
    this.tabs = [];
    this.activeTab = null;

    this.initFromHtml(navNode);

    this.activateTab(this.tabs[0]);
  }

  initFromHtml (navNode) {
    const headers  = navNode.querySelectorAll(TabItemSelector);
    const contents = navNode.querySelectorAll(ContentItemSelector);

    for (var i = 0; i < headers.length; i++) {
        this.registerTab(headers[i], contents[i]);
    }
  }

  registerTab (header, content) {
    const tab = new TabItem(header, content);
    tab.onActivate(() => this.activateTab(tab));
    this.tabs.push(tab);
  }

  activateTab (tabItem) {
    if (this.activeTab) {
        this.activeTab.setActive(false);
    }

    this.activeTab = tabItem;
    this.activeTab.setActive(true);
  }

}

const ActiveTabHeaderClass = 'contact-list__item--active';
const ActiveTabContentClass = 'address__item--active';

class TabItem {
    constructor (header, content) {
        this.header  = header;
        this.content = content;
    }
    onActivate (action) {
        this.header.addEventListener('click', () => action(this));
    }
    setActive(value) {
        this.header.classList.toggle(ActiveTabHeaderClass, value);
        this.content.classList.toggle(ActiveTabContentClass, value);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
  let tabs = new TabsManager(document.querySelector('.contacts'));
});

/*Menu*/
const MenuButton = document.querySelector('.header-nav__toggle');
const MobileMenu = document.querySelector('.nav-menu');
const MenuWrap = document.querySelector('.header');
const SearchBtn = document.querySelector('.header-nav__search');
const Contacts = document.querySelector('.nav-contacts');
/*Variables for grid catalog view*/
const CatView = document.querySelector('.catalog-filter__toggle');
const CatList = document.querySelector('.catalog-list');
/*Variables for callback popup*/

document.querySelector('.header-nav__toggle').onclick = function(){
	MenuButton.classList.toggle('open');
	MobileMenu.classList.toggle('active');
	MenuWrap.classList.toggle('active');
	SearchBtn.classList.toggle('active');
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
