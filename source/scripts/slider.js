// ============================================
// SLIDER - Carousel Component
// ============================================

const initSlider = () => {
  const slider = document.querySelector('.slider');
  if (!slider) {
    return;
  }

  const slides = slider.querySelectorAll('.slider__slide');
  const prevButton = slider.querySelector('.slider__button-prev');
  const nextButton = slider.querySelector('.slider__button-next');
  const paginationButtons = slider.querySelectorAll('.slider-pagination__button');

  let currentSlide = 0;
  const totalSlides = slides.length;

  /**
   * Show the slide at the given index
   */
  const showSlide = (index) => {
    // Remove the active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove('slider__slide--active');
    });

    // Add the active class to the slide at the given index
    slides[index].classList.add('slider__slide--active');

    // Add the active class to the pagination button at the given index
    paginationButtons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('slider-pagination__button--active');
      } else {
        button.classList.remove('slider-pagination__button--active');
      }
    });

    // Update the current slide index
    currentSlide = index;

    updateNavigationButtons();
  };

  /**
   * Update the navigation buttons state
   */
  const updateNavigationButtons = () => {
    // Disable the previous button if the current slide is the first one
    if (currentSlide === 0) {
      prevButton.disabled = true;
      prevButton.setAttribute('aria-disabled', 'true');
    } else {
      prevButton.disabled = false;
      prevButton.setAttribute('aria-disabled', 'false');
    }

    // Disable the next button if the current slide is the last one
    if (currentSlide === totalSlides - 1) {
      nextButton.disabled = true;
      nextButton.setAttribute('aria-disabled', 'true');
    } else {
      nextButton.disabled = false;
      nextButton.setAttribute('aria-disabled', 'false');
    }
  };

  /**
   * Show the next slide
   */
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    }
  };

  /**
   * Show the previous slide
   */
  const prevSlide = () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  };

  /**
   * Add event listeners to the navigation buttons and pagination buttons
   */

  // Add event listener to the next button
  nextButton.addEventListener('click', nextSlide);

  // Add event listener to the previous button
  prevButton.addEventListener('click', prevSlide);

  // Add event listeners to the pagination buttons
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Add event listener to the document to handle keyboard navigation
  document.addEventListener('keydown', (evt) => {
    if (!slider.contains(document.activeElement)) {
      return;
    }

    if (evt.key === 'ArrowLeft') {
      prevSlide();
    } else if (evt.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Show the current slide
  showSlide(currentSlide);
};

export default initSlider;
