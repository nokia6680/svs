var sizesBtn = document.getElementsByClassName('item-color__toggle');
var elNodes = document.querySelectorAll(".item-color__toggle");
var sizeList = document.getElementsByClassName('item-color__list');

for(var i = 0; i < sizesBtn.length; i++) {
  var elem = sizesBtn[i];

  elem.addEventListener("click", function(){
    sizeList.classList.toggle("active");
  });
};
