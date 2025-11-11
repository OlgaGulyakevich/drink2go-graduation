// Initialize price range slider
const initPriceSlider = () => {
  const priceSlider = document.getElementById('price-slider');
  const minPriceInput = document.getElementById('price-min');
  const maxPriceInput = document.getElementById('price-max');

  if (!priceSlider) return;

  // Create slider
  noUiSlider.create(priceSlider, {
    start: [0, 900], // Initial values
    connect: true,    // Connect handles
    range: {
      'min': 0,
      'max': 1000
    },
    step: 10,         // Step increment
    format: {
      to: (value) => Math.round(value),
      from: (value) => Number(value)
    }
  });

  // Update inputs when slider changes
  priceSlider.noUiSlider.on('update', (values) => {
    minPriceInput.value = values[0];
    maxPriceInput.value = values[1];
  });

  // Update slider when inputs change
  minPriceInput.addEventListener('change', () => {
    priceSlider.noUiSlider.set([minPriceInput.value, null]);
  });

  maxPriceInput.addEventListener('change', () => {
    priceSlider.noUiSlider.set([null, maxPriceInput.value]);
  });
};

// Export
export { initPriceSlider };
