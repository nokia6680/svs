//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // в этой версии координаты просто элементы массива (и они поменяны местами)
  destinations = {
    'Офис продаж в Москве': [55.677763, 37.854629],
    'Производство': [55.550099, 39.061530],
    'Центральный ФО': [55.743993, 38.020404],
    'Северо-Кавказский и южный ФО': [44.036931, 43.125445]
    },
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: destinations['Офис продаж в Москве'], // Москва
    zoom: 13
  });

  // куда скакать
  function clickGoto() {
    // город
    var pos = this.getAttribute('data-goto'); // или this.getAttribute('title')
    // переходим по координатам
    myMap.panTo(destinations[pos], {
      flying: 1
    });

    return false;
  }

  // навешиваем обработчики
  var col = document.getElementsByClassName('goto');
  for (var i = 0, n = col.length; i < n; ++i) {
    col[i].onclick = clickGoto;
  }
}
