var upperLvl = document.getElementsByClassName('item-color__toggle');
var elNodes = document.querySelectorAll(".item-color__toggle");

for(var i = 0; i < upperLvl.length; i++) {
  var elem = upperLvl[i];

  elem.addEventListener("click", function(){
    this.classList.toggle("active");
  });
};
