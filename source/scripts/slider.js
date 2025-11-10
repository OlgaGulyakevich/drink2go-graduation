/**
 * Slider Component
 * #?@02;5=85 A;0945@>< A =02830F859 8 ?038=0F859
 */

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
   * >:070BL A;094 ?> 8=45:AC
   */
  const showSlide = (index) => {
    // #18@05< 0:B82=K9 :;0AA A> 2A5E A;094>2
    slides.forEach((slide) => {
      slide.classList.remove('slider__slide--active');
    });

    // >102;O5< 0:B82=K9 :;0AA B5:CI5<C A;094C
    slides[index].classList.add('slider__slide--active');

    // 1=>2;O5< ?038=0F8N
    paginationButtons.forEach((button, i) => {
      if (i === index) {
        button.classList.add('slider-pagination__button--active');
      } else {
        button.classList.remove('slider-pagination__button--active');
      }
    });

    // 1=>2;O5< A>AB>O=85 :=>?>: =02830F88
    currentSlide = index;

    updateNavigationButtons();
  };

  /**
   * 1=>28BL A>AB>O=85 :=>?>: =02830F88 (disabled 4;O :@09=8E ?>78F89)
   */
  const updateNavigationButtons = () => {
    // 5@2K9 A;094 - >B:;NG05< :=>?:C "=0704"
    if (currentSlide === 0) {
      prevButton.disabled = true;
      prevButton.setAttribute('aria-disabled', 'true');
    } else {
      prevButton.disabled = false;
      prevButton.setAttribute('aria-disabled', 'false');
    }

    // >A;54=89 A;094 - >B:;NG05< :=>?:C "2?5@54"
    if (currentSlide === totalSlides - 1) {
      nextButton.disabled = true;
      nextButton.setAttribute('aria-disabled', 'true');
    } else {
      nextButton.disabled = false;
      nextButton.setAttribute('aria-disabled', 'false');
    }
  };

  /**
   * 5@5:;NG8BL =0 A;54CNI89 A;094
   */
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    }
  };

  /**
   * 5@5:;NG8BL =0 ?@54K4CI89 A;094
   */
  const prevSlide = () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  };

  /**
   * 1@01>BG8:8 A>1KB89
   */

  // =>?:0 "!;54CNI89"
  nextButton.addEventListener('click', nextSlide);

  // =>?:0 "@54K4CI89"
  prevButton.addEventListener('click', prevSlide);

  // 038=0F8O
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // ;0280BC@=0O =02830F8O (>?F8>=0;L=>)
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

  // =8F80;870F8O: ?>:07K205< ?5@2K9 A;094 8 >1=>2;O5< :=>?:8
  showSlide(currentSlide);
};

export default initSlider;
