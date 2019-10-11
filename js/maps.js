//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // в этой версии координаты просто элементы массива (и они поменяны местами)
  destinations = {
      'Офис продаж в Москве': [55.677445, 37.854857],
      'Центральный ФО': [59.938531, 30.313497],
      'Производство': [56.829748, 60.617435],
      'Северо-Кавказский и южный ФО': [46.466444, 30.7058]
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
