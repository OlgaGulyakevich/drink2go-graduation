// ============================================================
// Drink2Go - Header Mobile Menu Toggle
// ============================================================
// Управление открытием/закрытием мобильного меню
// ============================================================


/**
 * Инициализирует функциональность мобильного меню в header
 * Переключает видимость меню и меняет иконку бургера на крестик
 * @returns {void}
 */
const initMobileMenu = () => {
  const header = document.querySelector('.header');
  const toggleButton = document.querySelector('.js-toggle-button');
  const nav = document.querySelector('.header__nav');

  if (!toggleButton || !nav) {
    return; // Если элементы не найдены, выходим
  }

  // Создаем контейнер для мобильного меню
  const createMobileMenu = () => {
    // Проверяем, не создан ли уже контейнер
    let mobileMenu = document.querySelector('.header__mobile-menu');

    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.classList.add('header__mobile-menu');

      // Клонируем навигацию для мобильного меню
      const mobileNav = nav.cloneNode(true);
      mobileNav.classList.add('header__mobile-nav');

      mobileMenu.appendChild(mobileNav);
      header.appendChild(mobileMenu);
    }

    return mobileMenu;
  };

  const mobileMenu = createMobileMenu();

  /**
   * Переключает состояние мобильного меню (открыто/закрыто)
   * Меняет иконку бургера на крестик и обратно
   * @returns {void}
   */
  const toggleMenu = () => {
    const isOpen = toggleButton.classList.contains('header__toggle--open');
    const toggleIcon = toggleButton.querySelector('.header__toggle-icon use');

    if (isOpen) {
      // Закрываем меню
      toggleButton.classList.remove('header__toggle--open');
      mobileMenu.classList.remove('header__mobile-menu--open');
      toggleButton.setAttribute('aria-label', 'Открыть меню');
      toggleIcon.setAttribute('href', 'icons/stack.svg#menu');
      document.body.style.overflow = ''; // Разрешаем скролл
    } else {
      // Открываем меню
      toggleButton.classList.add('header__toggle--open');
      mobileMenu.classList.add('header__mobile-menu--open');
      toggleButton.setAttribute('aria-label', 'Закрыть меню');
      toggleIcon.setAttribute('href', 'icons/stack.svg#close');
      document.body.style.overflow = 'hidden'; // Блокируем скролл
    }
  };

  /**
   * Закрывает мобильное меню при клике на ссылку
   * @returns {void}
   */
  const handleLinkClick = () => {
    if (toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  };

  /**
   * Закрывает меню при изменении размера окна (переход на desktop)
   * @returns {void}
   */
  const handleResize = () => {
    if (window.innerWidth >= 768 && toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  };

  // Event listeners
  toggleButton.addEventListener('click', toggleMenu);

  // Закрываем меню при клике на любую ссылку внутри
  const menuLinks = mobileMenu.querySelectorAll('.nav__link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
  });

  // Закрываем меню при изменении размера окна
  window.addEventListener('resize', handleResize);

  // Accessibility: закрываем меню по Escape
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && toggleButton.classList.contains('header__toggle--open')) {
      toggleMenu();
    }
  });
};


// ============================================================
// 🚀 INITIALIZATION
// ============================================================

export { initMobileMenu };
