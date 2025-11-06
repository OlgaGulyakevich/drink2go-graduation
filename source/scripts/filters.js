// Инициализация range-slider цены
const initPriceSlider = () => {
  const priceSlider = document.getElementById('price-slider');
  const minPriceInput = document.getElementById('price-min');
  const maxPriceInput = document.getElementById('price-max');

  if (!priceSlider) return;

  // Создаем slider
  noUiSlider.create(priceSlider, {
    start: [0, 1000], // Начальные значения
    connect: true,    // Соединить handles
    range: {
      'min': 0,
      'max': 1000
    },
    step: 10,         // Шаг изменения
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value)
    }
  });

  // Обновление инпутов при изменении slider
  priceSlider.noUiSlider.on('update', (values) => {
    minPriceInput.value = values[0];
    maxPriceInput.value = values[1];
  });

  // Обновление slider при изменении инпутов
  minPriceInput.addEventListener('change', () => {
    priceSlider.noUiSlider.set([minPriceInput.value, null]);
  });

  maxPriceInput.addEventListener('change', () => {
    priceSlider.noUiSlider.set([null, maxPriceInput.value]);
  });
};

// Экспорт
export { initPriceSlider };
