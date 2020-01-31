// 1 аргумент кнопка открывающая попап, текстовую часть класса вида: ".filter-options", вообщем так же как если бы ты передавал в - document.querySelector(".filter-options");
// 2 аргумент сам элемент попапа (ВАЖНО! попап должен содержать кнопку закрытия в себе!), текстовую часть класса вида: ".filter-options", вообщем так же как если бы ты передавал в - document.querySelector(".filter-options");

const createPopupControlButtons = (openPopupButtons, popup) => {
  // Теперь мы предполагаем, что кнопок может быть больше одной, но попап открываемый один и тот же.
  const openButtons = document.querySelectorAll(openPopupButtons);
  const popupElement = document.querySelector(popup);
  console.log(openButtons);
  // Вот тут внимание, сейчас я сделал с твоим классом, чтобы каждый раз не менять тут код, предлагаю для закрывающей кнопки сделать свой класс например: js-close-btn
  // Это нужно для того, чтобы не менять код функции, а пользоваться готовым. Сам хотел упрощения. Тем более, я ищу ее в элементе попапа, 
  // т.е. левой кнопки он не найдет, не волнуйся.

  const closeButton = popupElement.querySelector(`.filter-options__close-pic`); 

  if (!popupElement || !openButtons) {
    throw new Error(`Missing popup or opening button`);
  }

// Вспомогательная функция обрабатывающая нажатие на ESC, она должна иметь имя, для ее последующего удаления.
const onDocumentKeyPress = (evt) => {
  const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

  if (isEscKey) {
    onCloseButtonClick();
  }
};

// Вспомогательная функция открытия попапа. Она добавляет слушатель на ESC который является не анонимной функцией, надо для того,
// чтобы по закрытию попапа можно было удалить глобальный слушатель на ESC.
  const onOpenButtonClick = (evt) => {
  evt.preventDefault();
  popupElement.classList.add("active");

  // Я не понял, зачем ты добавляешь слушатель на ESC у мобильного устройства? :)
  document.addEventListener("keydown", onDocumentKeyPress);
};

const onCloseButtonClick = () => {
  popupElement.classList.remove("active");
  // Тут при закрытии попапа и удаляем ненужный более слушатель ESC.
  document.removeEventListener("keydown", onDocumentKeyPress);
};

  // Обычный перебор массивоподобного объекта openButtons и навешивание на каждый его элемент openButton обработчиков события
  // Гуглится как: цикл for of
  for (let openButton of openButtons) {
    openButton.addEventListener("click", onOpenButtonClick);
    closeButton.addEventListener("click", onCloseButtonClick);
  }
};

createPopupControlButtons(`.catalog-filter__btn`, `.filter-options`);
