// попап фильтр
var filterList = document.querySelector(".filter-options");
var filterOpenButton = document.querySelector(".catalog-filter__btn");
var filterCloseButton = document.querySelector(".filter-options__close-pic");

if (filterList) {
  filterOpenButton.addEventListener("click", function(event) {
    event.preventDefault();
    filterList.classList.add("active");
  });
  
  filterCloseButton.addEventListener("click", function() {
    filterList.classList.remove("active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      filterList.classList.remove("active");
    }
  });
}
