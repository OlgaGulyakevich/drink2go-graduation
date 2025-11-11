// ============================================
// FILTERS - Price Range Slider
// ============================================

/**
 * Updates input text color based on value
 * Adds/removes active class to change text color from inactive (#bdbdbd) to active (#333333)
 * @param {HTMLInputElement} input - Input element to update
 */
const updateInputColor = (input) => {
  const value = parseFloat(input.value) || 0;
  if (value === 0 || input.value === '' || input.value === null) {
    input.classList.remove('range-slider__input--active');
  } else {
    input.classList.add('range-slider__input--active');
  }
};

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
    updateInputColor(minPriceInput);
    updateInputColor(maxPriceInput);
  });

  // Update slider when inputs change
  minPriceInput.addEventListener('input', () => {
    priceSlider.noUiSlider.set([minPriceInput.value, null]);
    updateInputColor(minPriceInput);
  });

  minPriceInput.addEventListener('change', () => {
    updateInputColor(minPriceInput);
  });

  maxPriceInput.addEventListener('input', () => {
    priceSlider.noUiSlider.set([null, maxPriceInput.value]);
    updateInputColor(maxPriceInput);
  });

  maxPriceInput.addEventListener('change', () => {
    updateInputColor(maxPriceInput);
  });

  // Initialize colors on load
  updateInputColor(minPriceInput);
  updateInputColor(maxPriceInput);
};

// Export
export { initPriceSlider };
