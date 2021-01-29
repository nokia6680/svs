var tableList = document.querySelector(".itemcard__files-sizes");
var tableOpenButton = document.querySelector(".size-open");
var tableCloseButton = document.querySelector(".itemcard__sizes-close");
var tableHead = document.querySelector('.itemcard__sizes-head');
var tableDescr = document.querySelector('.itemcard__sizes-description');
var tableItems = document.querySelector('.itemcard__sizes-list');

if (tableList) {
  tableOpenButton.addEventListener("click", function(e) {
      event.preventDefault();
    tableList.classList.add("active");
    tableItems.classList.remove('active');
    tableDescr.classList.remove('active');
    tableHead.classList.remove('active');
    tableHead.classList.remove('hidden');
    tableDescr.classList.remove('hidden');
    tableItems.classList.remove('hidden');
    tableOpenButton.classList.add('opened');

    setTimeout(() =>
      tableHead.classList.add('active'), 250);

    setTimeout(() =>
      tableDescr.classList.add('active'), 500);

    setTimeout(() =>
      tableItems.classList.add('active'), 750);
  });


  tableList.addEventListener("click", function(e) {
      event.preventDefault();
    setTimeout(() =>
      tableItems.classList.remove('active'), 250);

    setTimeout(() =>
      tableDescr.classList.remove('active'), 500);

    setTimeout(() =>
      tableHead.classList.remove('active'), 750);

    setTimeout(() => {
      tableItems.classList.add('hidden');
      tableDescr.classList.add('hidden');
      tableHead.classList.add('hidden');
       tableOpenButton.classList.remove('opened');
   }, 1000);

    setTimeout(() =>
      tableList.classList.remove('active'), 1000);
  });

  tableCloseButton.addEventListener("click", function(e) {
      event.preventDefault();
    setTimeout(() =>
      tableItems.classList.remove('active'), 250);

    setTimeout(() =>
      tableDescr.classList.remove('active'), 500);

    setTimeout(() =>
      tableHead.classList.remove('active'), 750);

    setTimeout(() => {
      tableItems.classList.add('hidden');
      tableDescr.classList.add('hidden');
      tableHead.classList.add('hidden');
  }, 1000);


    setTimeout(() => {
        tableList.classList.remove('active');
        tableOpenButton.classList.remove('opened');
    }, 1000);
  });

  window.addEventListener("keydown", function(e) {
      event.preventDefault();
    if (event.keyCode === 27) {
      setTimeout(() =>
        tableItems.classList.remove('active'), 250);

      setTimeout(() =>
        tableDescr.classList.remove('active'), 500);

      setTimeout(() =>
        tableHead.classList.remove('active'), 7500);

      setTimeout(() => {
        tableItems.classList.add('hidden');
        tableDescr.classList.add('hidden');
        tableHead.classList.add('hidden');
    }, 1000);

      setTimeout(() =>
        tableList.classList.remove('active'), 1000);

      setTimeout(() => {
        tableItems.classList.remove('active');
        tableDescr.classList.remove('active');
        tableHead.classList.remove('active');
        tableOpenButton.classList.remove('opened');
    }, 1000);
    }
  });
}
