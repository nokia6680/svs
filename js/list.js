var tableList = document.querySelector(".itemcard__files-sizes");
var tableOpenButton = document.querySelector(".itemcard__files-item--1");
var tableCloseButton = document.querySelector(".itemcard__sizes-close");

if (tableList) {
  tableOpenButton.addEventListener("click", function(event) {
    event.preventDefault();
    tableList.classList.add("active");
  });

  tableList.addEventListener("click", function() {
    tableList.classList.remove("active");
  });

  tableList.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  tableCloseButton.addEventListener("click", function() {
    tableList.classList.remove("active");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      tableList.classList.remove("active");
    }
  });
}
