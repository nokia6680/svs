/*Variables for callback popup*/
const TableList = document.querySelector('.itemcard__files-sizes');
const TableListBtn = document.querySelector('.itemcard__files-item--1');

document.querySelector('.itemcard__files-item--1').onclick = function () {
  TableList.classList.toggle('active');
};
